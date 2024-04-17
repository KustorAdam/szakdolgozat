using DB_Module.Models;
using Microsoft.EntityFrameworkCore;

namespace DB_Module
{
    public class SQL : DbContext
    {
        public static string connectionString {  get; set; }

        public SQL() : base(new DbContextOptionsBuilder().UseSqlServer(connectionString).Options) 
        {
        }
            
        public SQL(DbContextOptions options) : base(options) 
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserRole>().HasKey(x => new { x.UserId, x.RoleId });
            modelBuilder.Entity<Messages>().HasNoKey();
            base.OnModelCreating(modelBuilder);
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }
        public DbSet<WeeklySpecial> WeeklySpecials { get; set; }
        public DbSet<Cancelation> Cancelations { get; set; }
        public DbSet<Messages> Messages { get; set; }

    }
}