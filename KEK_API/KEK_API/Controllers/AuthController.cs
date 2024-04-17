using Microsoft.AspNetCore.Mvc;

namespace KEK_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        SQL _sql;
        IAuthService _authService;

        public AuthController(SQL sql, IAuthService authService)
        {
            this._sql = sql;
            _authService = authService;
        }


        [HttpPut("Registration")]
        public async Task<IActionResult> CreateUser([FromBody] RegistrationRequest reg)
        {
            GenericResponse<RegistrationResponse> response = new GenericResponse<RegistrationResponse>();
            try
            {
                _authService.Registration(reg);
                return Ok(response);
            }
            catch (Exception ex)
            {

            }
            return BadRequest(response);
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest login)
        {
            GenericResponse<LoginResponse> response = new GenericResponse<LoginResponse>();
            try
            {
                response.Data = await this._authService.Logon(login);
                return Ok(response);
            }
            catch (BadUsernameOrPasswordException)
            {
                response.QueryIsSuccess = false;
                response.Message = "Hibás felhasználónév vagy jelszó!";
            }
            catch (Exception ex)
            {
                response.QueryIsSuccess = false;
                response.Message = ex.Message;
            }
            return BadRequest(response);
        }

    }
}
