using KEK_API.Interfaces;
using Microsoft.IdentityModel.Tokens;

namespace KEK_API.Services
{
    public class AuthService : IAuthService
    {
        public bool IsAuthenticated { get; private set; }

        public User CurrentUser { get; private set; }
        SQL _sql;
        IEncryptionService _encryptionService;
        ITokenService _tokenService;

        public AuthService(SQL sql, IEncryptionService encryptionService, ITokenService tokenService)
        {
            _sql = sql;
            _encryptionService = encryptionService;
            _tokenService = tokenService;
        }

        public async Task<LoginResponse> Logon(LoginRequest login)
        {
            if (this._sql.Users.Any(a => a.Email == login.Email))
            {
                var user = this._sql.Users.Single(u => u.Email == login.Email);
                if (_encryptionService.ValidatePassword(user.Password, login.Password))
                {
                    user.Roles = this._sql.UserRoles.Where(a => a.UserId == user.Id).Select(a => a.RoleId).ToList();
                    return new LoginResponse()
                    {
                        Email = login.Email,
                        OM = user.OM,
                        Roles = user.Roles,
                        Token = _tokenService.CreateToken(user)
                    };
                }
            }
            throw new BadUsernameOrPasswordException();
        }

        public async Task<RegistrationResponse> Registration(RegistrationRequest reg)
        {
            if (string.IsNullOrEmpty(reg.Email))
            {
                throw new MandatoryPropertyEmptyException("Email");
            }
            if (string.IsNullOrEmpty(reg.Name))
            {
                throw new MandatoryPropertyEmptyException("Name");
            }
            if (string.IsNullOrEmpty(reg.Password))
            {
                throw new MandatoryPropertyEmptyException("Password");
            }
            if (string.IsNullOrEmpty(reg.ParentName)) 
            {
                throw new MandatoryPropertyEmptyException("Parent Name");
            }
            if (string.IsNullOrEmpty(reg.ParentPhone))
            {
                throw new MandatoryPropertyEmptyException("Parent Phone");
            }    

            string OM_num = reg.OM.ToString();

            if (string.IsNullOrEmpty(OM_num))
            {
                throw new MandatoryPropertyEmptyException("OM");
            }

            if (string.IsNullOrEmpty(reg.Email))
            this._sql.Users.Add(new User()
            {
                Email = reg.Email,
                Name = reg.Name,
                Password = _encryptionService.GenerateHash(reg.Password)
            });
            await this._sql.SaveChangesAsync();
            return new RegistrationResponse()
            {
                IsRegSuccess = true
            };
        }
    }
}
