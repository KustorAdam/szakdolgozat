namespace KEK_API.Interfaces
{
    public interface IMessageService
    {
        public Task AddMessage(Messages message);

        public Messages GetMessage(int id);

        public Array GetAllMessages();

        public Task UpdateMessage(Messages message);

        public Task RemoveMessage(int id);
    }
}
