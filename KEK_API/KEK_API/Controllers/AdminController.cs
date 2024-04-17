using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace KEK_API.Controllers
{
    public class AdminController
    {
        [Route("api/[controller]")]
        [ApiController]
        [Authorize("Admin")]
        [Authorize("TableOperator")]
        public class AdminControllers : ControllerBase
        {
        }
    }
}
