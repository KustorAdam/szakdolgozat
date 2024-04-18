using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace APIModels.Models
{
    public class CancelationModel
    {
        public int Id { get; set; }
        public Guid StudentId { get; set; }
        public int WeeklySpecialId { get; set; }
    }
}
