namespace KEK_API.Services
{
    public class MessageService
    {
        private SQL _sql;

        public MessageService(SQL sql)
        {
            _sql = sql;
        }

        public async Task AddMessage(Messages message)
        {

        }
    }
}
