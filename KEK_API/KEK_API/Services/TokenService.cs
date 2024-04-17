using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace KEK_API.Services
{
    public class TokenService : ITokenService
    {
        public string CreateToken(User user)
        {
            var identity = new ClaimsIdentity(new[] {
                new Claim("ID", user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.Name),
            });
            foreach (int rId in user.Roles)
            {
                identity.AddClaim(new Claim(ClaimTypes.Role, rId.ToString()));
            }
            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = identity,
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Program.TokenEncryptionKey), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
