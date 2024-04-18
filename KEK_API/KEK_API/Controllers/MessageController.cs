using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;
using RouteAttribute = Microsoft.AspNetCore.Mvc.RouteAttribute;

namespace KEK_API.Controllers
{
    [Route("/message")]
    [ApiController]
    public class MessageController : Controller
    {
        private readonly SQL _sql;
        private MessageService _messageService;

        public MessageController(SQL sql, MessageService messageService)
        {
            _sql = sql;
            _messageService = messageService;
        }

        
    }
}
