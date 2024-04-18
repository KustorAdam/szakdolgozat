using Microsoft.AspNetCore.Mvc;
using RouteAttribute = Microsoft.AspNetCore.Mvc.RouteAttribute;

namespace KEK_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WeeklySpecialController : Controller
    {
        private readonly SQL _sql;
        private WeeklySpecialService _weeklySpecialService;

        public WeeklySpecialController(SQL sql, WeeklySpecialService weeklySpecial)
        {
            _sql = sql;
            _weeklySpecialService = weeklySpecial;
        }

        [HttpGet("/GetWeeklySpecial/{id:int}")]
        public IActionResult GetWeeklySpecial(int id)
        {
            try
            {
                var res = new GenericResponse<WeeklySpecial>
                {
                    Data = _weeklySpecialService.GetWeeklySpecial(id),
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

        [HttpGet("/GetAllWeeklySpecial")]
        public IActionResult GetAllWeeklySpecial()
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

        [HttpPost("AddWeeklySpecial")]
        public async Task<IActionResult> AddWeeklySpecial([FromBody]WeeklySpecial weeklySpecial)
        {
            try
            {
                await _weeklySpecialService.AddWeeklySpecial(weeklySpecial);
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
                await _weeklySpecialService.UpdateWeeklySpecial(weeklyspecial);
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
                await _weeklySpecialService.DeleteWeeklySpecial(id);
                return Ok();
            }
            catch (ItemNotFoundException e)
            {
                return Ok();
            }
        }
    }
}
