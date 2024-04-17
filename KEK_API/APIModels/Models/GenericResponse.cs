﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.InteropServices;

namespace APIModels.Models
{
    public class GenericResponse<T>
    {
        public T Data { get; set; }
        public string? Message { get; set; }
        public bool QueryIsSuccess { get; set; } = true;
    }
}
