using KEK_API.Controllers;
using KEK_API.Interfaces;

namespace KEK_API.Services
{
    public class WeeklySpecialService : IWeeklySpecialService
    {
        private SQL _sql;

        public WeeklySpecialService(SQL sql)
        {
            _sql = sql;
        }

        public async Task AddWeeklySpecial(WeeklySpecial weeklySpecial)
        {
            _sql.WeeklySpecials.Add(weeklySpecial);
            await _sql.SaveChangesAsync();
        }

        public WeeklySpecial GetWeeklySpecial(int id)
        {
            if (!_sql.WeeklySpecials.Any(x => x.Id == id)) throw new ItemNotFoundException();
            var weeklySpecial = _sql.WeeklySpecials.Single(x => x.Id == id);
            return weeklySpecial;
        }

        public Array GetAllWeeklySpecial()
        {
            return _sql.WeeklySpecials.ToArray();
        }

        public async Task UpdateWeeklySpecial(WeeklySpecial special)
        {
            if (_sql.WeeklySpecials.Any(x => x.Id == special.Id)) throw new ItemNotFoundException();
            _sql.WeeklySpecials.Update(special);
            await _sql.SaveChangesAsync();
        }

        public async Task DeleteWeeklySpecial(int id)
        {
            if (!_sql.WeeklySpecials.Any(x => x.Id == id)) throw new ItemNotFoundException();
            _sql.WeeklySpecials.Remove(_sql.WeeklySpecials.Single(x => x.Id == id));
            await _sql.SaveChangesAsync();  
        }
    }
}
