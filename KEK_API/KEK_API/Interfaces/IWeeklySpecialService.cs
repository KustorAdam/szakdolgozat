namespace KEK_API.Interfaces
{
    public interface IFoodService
    {
        public Task AddWeeklySpecial(WeeklySpecial special);
        public WeeklySpecial GetWeeklySpecial(int id);
        public Array GetAllWeeklySpecial();
        public Task UpdateWeeklySpecial(WeeklySpecial special);
        public Task DeleteWeeklySpecial(int id);

    }
}
