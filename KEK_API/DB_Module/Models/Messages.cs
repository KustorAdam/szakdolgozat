using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DB_Module.Models
{
    [Table("messages")]
    public class Messages
    {
        [Required]int Id { get; set; }
        [Required] string Message { get; set; }
        [Required] DateTime DateTime { get; set; }
    }
}
