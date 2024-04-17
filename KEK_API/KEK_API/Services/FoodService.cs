using KEK_API.Controllers;
using KEK_API.Interfaces;

namespace KEK_API.Services
{
    public class FoodService : IFoodService
    {
        private SQL _sql;

        public FoodService(SQL sql)
        {
            _sql = sql;
        }

        public async Task AddFood(WeeklySpecial special)
        {
            _sql.WeeklySpecials.Add(special);
            await _sql.SaveChangesAsync();
        }

        public WeeklySpecial GetFood(int id)
        {
            if (!_sql.WeeklySpecials.Any(x => x.Id == id)) throw new ItemNotFoundException();
            var bevarage = _sql.WeeklySpecials.Single(x => x.Id == id);
            return bevarage;
        }

        public Array GetAllFood()
        {
            return _sql.WeeklySpecials.ToArray();
        }

        public async Task UpdateFood(WeeklySpecial special)
        {
            if (_sql.WeeklySpecials.Any(x => x.Id == special.Id)) throw new ItemNotFoundException();
            _sql.WeeklySpecials.Update(special);
            await _sql.SaveChangesAsync();
        }

        public async Task RemoveFood(int id)
        {
            if (!_sql.WeeklySpecials.Any(x => x.Id == id)) throw new ItemNotFoundException();
            _sql.WeeklySpecials.Remove(_sql.WeeklySpecials.Single(x => x.Id == id));
            await _sql.SaveChangesAsync();  
        }

        public Task DeleteFood(int id)
        {
            throw new NotImplementedException();
        }
    }
}
