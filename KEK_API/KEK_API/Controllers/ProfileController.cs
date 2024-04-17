using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace KEK_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize("User")]
    public class ProfileController : ControllerBase
    {
    }
}
