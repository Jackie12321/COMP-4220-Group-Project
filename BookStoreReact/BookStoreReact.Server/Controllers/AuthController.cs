using Microsoft.AspNetCore.Mvc;
using BookStoreLIB;

namespace BookStoreReact.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest req)
        {
            if (req == null) return BadRequest("Missing body.");

            var dal = new DALUserInfo();
            int userId;
            try
            {
                userId = dal.LogIn(req.UserName, req.Password);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = ex.Message });
            }

            if (userId <= 0)
                return Unauthorized(new { message = "Invalid username or password." });

            var (isManager, type) = dal.GetManagerAndType(userId);

            return Ok(new
            {
                userId,
                userName = req.UserName,
                isManager,
                type
            });
        }

        [HttpPost("register")]
        public IActionResult Register([FromBody] RegisterRequest req)
        {
            if (req == null) return BadRequest("Missing body.");
            if (string.IsNullOrWhiteSpace(req.UserName)) return BadRequest("Username required.");
            if (string.IsNullOrWhiteSpace(req.Password)) return BadRequest("Password required.");

            var dal = new DALUserInfo();
            bool ok;
            try
            {
                ok = string.IsNullOrWhiteSpace(req.Email)
                    ? dal.RegisterUser(req.FullName, req.UserName, req.Password)
                    : dal.RegisterUser(req.FullName, req.UserName, req.Password, req.Email);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = ex.Message });
            }

            if (!ok)
                return Conflict(new { message = "Username already exists." });

            return Ok(new { success = true });
        }

        [HttpGet("{userId}/role")]
        public IActionResult GetRole(int userId)
        {
            var dal = new DALUserInfo();
            try
            {
                var (isManager, type) = dal.GetManagerAndType(userId);
                return Ok(new { userId, isManager, type });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = ex.Message });
            }
        }
    }

    public class LoginRequest
    {
        public string UserName { get; set; } = "";
        public string Password { get; set; } = "";
    }

    public class RegisterRequest
    {
        public string FullName { get; set; } = "";
        public string UserName { get; set; } = "";
        public string Password { get; set; } = "";
        public string? Email { get; set; }
    }
}
