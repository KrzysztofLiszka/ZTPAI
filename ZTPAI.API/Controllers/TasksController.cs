using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ZTPAI.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        [HttpGet(Name = "GetAllTasks")]
        public IActionResult GetAllTasks()
        {
            return Ok("GetAllTasks - NOT IMPLEMENTED");
        }
    }
}
