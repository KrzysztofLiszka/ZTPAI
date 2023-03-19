using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ZTPAI.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HoursController : ControllerBase
    {
        [HttpGet(Name = "GetAllHours")]
        public IActionResult GetAllHours()
        {
            return Ok("GetAllHours - NOT IMPLEMENTED");
        }
    }
}
