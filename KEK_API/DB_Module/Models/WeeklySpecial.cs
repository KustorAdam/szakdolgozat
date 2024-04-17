using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DB_Module.Models
{
    [Table("WeaklySpecial")]
    public class WeeklySpecial
    {
        [Required][Key] public int Id { get; set; }
        [Required] public string Breakfast { get; set; }
        [Required] public string Lunch { get; set; }
        [Required] public string Dinner { get; set; }
    }
}
