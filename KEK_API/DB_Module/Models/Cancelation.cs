﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DB_Module.Models
{
    [Table("Cancelations")]
    public class Cancelation
    {
        [Required][Key] public int Id { get; set; }
        [Required] public int UserId { get; set; }
        [Required] public int WeeklySpecialId { get; set; }
    }
}