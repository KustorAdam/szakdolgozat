namespace KEK_API.Interfaces
{
    public interface IEncryptionService
    {
        string GenerateHash(string password);
        bool ValidatePassword(string hash, string password);
    }
}
