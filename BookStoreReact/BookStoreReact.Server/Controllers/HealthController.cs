using Microsoft.AspNetCore.Mvc;

namespace BookStoreReact.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]   
    public class HealthController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(new
            {
                status = "ok",
                time = DateTime.UtcNow
            });
        }
    }
}
