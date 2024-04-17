using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace APIModels.Models
{
    public class RegistrationRequest
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Phone {  get; set; }
        public int OM { get; set; }
        public string ParentName { get; set; }
        public string ParentPhone { get; set; }
    }
}
