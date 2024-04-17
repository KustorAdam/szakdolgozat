using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DB_Module.Models
{
    [Table("UserRoles")]
    public class UserRole
    {
        [Required] public Guid UserId { get; set; }
        [Required] public int RoleId { get; set; }
    }
}
