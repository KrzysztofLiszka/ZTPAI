using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ZTPAI.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkersController : ControllerBase
    {
        [HttpGet(Name = "GetAllWorkers")]
        public IActionResult GetAllWorkers()
        {
            return Ok("GetAllWorkers - NOT IMPLEMENTED");
        }
    }
}
