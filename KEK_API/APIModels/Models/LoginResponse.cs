using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace APIModels.Models
{
    public class LoginResponse
    {
        public string Token { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }

        public IEnumerable<int> Roles { get; set; }
    }
}
