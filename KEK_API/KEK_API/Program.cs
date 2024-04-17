using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

namespace KEK_API
{
    public class Program
    {
        public static byte[] TokenEncryptionKey { get; private set; }
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            TokenEncryptionKey = Encoding.UTF8.GetBytes(builder.Configuration.GetValue<string>("TokenEncryptionKey"));
            SQL.connectionString = builder.Configuration.GetConnectionString("SQL");   
            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddSqlServer<SQL>(SQL.connectionString);
            builder.Services.AddScoped<IAuthService, AuthService>();
            builder.Services.AddSingleton<IEncryptionService, EncryptionService>();
            builder.Services.AddSingleton<ITokenService, TokenService>();

            builder.Services.AddAuthentication(a =>
            {
                a.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(a =>
            {
                a.SaveToken = true;
                a.RequireHttpsMetadata = true;
                a.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
                {
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    IssuerSigningKey = new SymmetricSecurityKey(TokenEncryptionKey),
                    ValidateIssuerSigningKey = true
                };
            });

            using (SQL sql = new SQL())
            {
                foreach (Role r in sql.Roles)
                {
                    builder.Services.AddAuthorization(a =>
                    {
                        a.AddPolicy(r.Name, o =>
                        {
                            o.RequireRole(r.Id.ToString());
                        });
                    });
                }
            }

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}