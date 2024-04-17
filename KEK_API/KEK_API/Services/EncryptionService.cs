using System.Security.Cryptography;

namespace KEK_API.Services
{
    public class EncryptionService : IEncryptionService
    {
        public string GenerateHash(string password)
        {
            SHA256 sha256 = SHA256.Create();
            return Convert.ToBase64String(sha256.ComputeHash(Encoding.UTF8.GetBytes(password)));
        }

        public bool ValidatePassword(string hash, string password)
        {
            return hash == GenerateHash(password);
        }
    }
}
