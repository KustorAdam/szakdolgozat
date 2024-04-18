using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DB_Module.Models
{
    [Table("Students")]
    public class User
    {
        [Required][Key] public Guid Id { get; set; } = Guid.NewGuid();
        [Required] public string Name { get; set; }
        [Required] public string Email { get; set; }
        [Required] public string Password { get; set; }
        [Required] public string Phone {  get; set; }
        [Required] public int OM {  get; set; }
        [Required] public string P_Name { get; set; }
        [Required] public string P_Phone { get; set; }
        public int RoleId { get; set; }
    }
}
