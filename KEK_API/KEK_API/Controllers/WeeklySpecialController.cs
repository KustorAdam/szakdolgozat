using Microsoft.AspNetCore.Mvc;
using RouteAttribute = Microsoft.AspNetCore.Mvc.RouteAttribute;

namespace KEK_API.Controllers
{
    [Route("/WeeklySpecial")]
    [ApiController]
    public class WeeklySpecialController : Controller
    {
        private readonly SQL _sql;
        private WeeklySpecial _weeklySpecial;

        public WeeklySpecialController(SQL sql, WeeklySpecial weeklySpecial)
        {
            _sql = sql;
            _weeklySpecial = weeklySpecial;
        }

        [HttpGet("/GetWeeklySpecial/{id:int}")]
        public IActionResult GetWeeklySpecial(int id)
        {
            try
            {
                var res = new GenericResponse<WeeklySpecial>
                {
                    Data = _weeklySpecial.GetWeeklySpecial(id),
                    QueryIsSuccess = true
                };
                return Ok(res);
            }
            catch (ItemNotFoundException e)
            {
                return StatusCode(404);
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        [HttpGet("/WeeklySpecial")]
        public IActionResult GetAllFood()
        {
            try
            {
                var res = new GenericResponse<Array>
                {
                    Data = _sql.WeeklySpecials.ToArray(),
                    QueryIsSuccess = true
                };
                return Ok(res);
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        [HttpPost("AddFood")]
        public async Task<IActionResult> AddFood([FromBody]WeeklySpecial weeklySpecial)
        {
            try
            {
                await _foodService.AddFood(weeklySpecial);
                return StatusCode(201);
            }
            catch (ItemAlreadyExistsException e)
            {
                return StatusCode(409);
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        [HttpPost("UpdateFood")]
        public async Task<IActionResult> UpdateFood([FromBody]WeeklySpecial weeklyspecial)
        {
            try
            {
                await _foodService.UpdateFood(weeklyspecial);
                return Ok();
            }
            catch (ItemNotFoundException e)
            {
                return StatusCode(404);
            }
        }

        [HttpPost("RemoveFood")]
        public async Task<IActionResult> RemoveFood([FromBody]int id)
        {
            try
            {
                await _foodService.RemoveFood(id);
                return Ok();
            }
            catch (ItemNotFoundException e)
            {
                return Ok();
            }
        }
    }
}
