﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace APIModels.Models
{
    public class MessageModel
    {
        public int Id { get; set; }
        public string Message { get; set; }
        public DateTime Time { get; set; }
    }
}