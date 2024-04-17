using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;
using RouteAttribute = Microsoft.AspNetCore.Mvc.RouteAttribute;

namespace KEK_API.Controllers
{
    [Route("/menu")]
    [ApiController]
    public class FoodController : Controller
    {
        private readonly SQL _sql;

    }
}
