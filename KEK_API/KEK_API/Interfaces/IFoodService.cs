namespace KEK_API.Interfaces
{
    public interface IFoodService
    {
        public Task AddFood(WeeklySpecial special);
        public WeeklySpecial GetFood(int id);
        public Array GetAllFood();
        public Task UpdateFood(WeeklySpecial special);
        public Task DeleteFood(int id);

    }
}
