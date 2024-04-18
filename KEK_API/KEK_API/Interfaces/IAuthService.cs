using APIModels.Models;
using DB_Module.Models;
using Microsoft.AspNetCore.Mvc;

namespace KEK_API.Interfaces
{
    public interface IAuthService
    {
        bool IsAuthenticated { get; }
        User CurrentUser { get; }
        Task<LoginResponse> Logon(LoginRequest login);
        Task<RegistrationResponse> Registration(RegistrationRequest reg);
    }
}
    