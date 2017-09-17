
exports.seed = function(knex, Promise) {
  return knex('teams').del()
    .then(function () {
      return Promise.all([
        knex('teams').insert({id: 1, name: 'Atlanta Hawks'}),
        knex('teams').insert({id: 2, name: 'Boston Celtics'}),
        knex('teams').insert({id: 3, name: 'Brooklyn Nets'}),
        knex('teams').insert({id: 4, name: 'Charlotte Hornets'}),
        knex('teams').insert({id: 5, name: 'Chicago Bulls'}),
        knex('teams').insert({id: 6, name: 'Cleveland Cavaliers'}),
        knex('teams').insert({id: 7, name: 'Dallas Mavericks'}),
        knex('teams').insert({id: 8, name: 'Denver Nuggets'}),
        knex('teams').insert({id: 9, name: 'Detroit Pistons'}),
        knex('teams').insert({id: 10, name: 'Golden State Warriors'}),
        knex('teams').insert({id: 11, name: 'Houston Rockets'}),
        knex('teams').insert({id: 12, name: 'Indiana Pacers'}),
        knex('teams').insert({id: 13, name: 'Los Angeles Clippers'}),
        knex('teams').insert({id: 14, name: 'Los Angeles Lakers'}),
        knex('teams').insert({id: 15, name: 'Memphis Grizzlies'}),
        knex('teams').insert({id: 16, name: 'Miami Heat'}),
        knex('teams').insert({id: 17, name: 'Milwaukee Bucks'}),
        knex('teams').insert({id: 18, name: 'Minnesota Timberwolves'}),
        knex('teams').insert({id: 19, name: 'New Orleans Pelicans'}),
        knex('teams').insert({id: 20, name: 'New York Knicks'}),
        knex('teams').insert({id: 21, name: 'Oklahoma City Thunder'}),
        knex('teams').insert({id: 22, name: 'Orlando Magic'}),
        knex('teams').insert({id: 23, name: 'Philadelphia 76ers'}),
        knex('teams').insert({id: 24, name: 'Phoenix Suns'}),
        knex('teams').insert({id: 25, name: 'Portland Trail Blazers'}),
        knex('teams').insert({id: 26, name: 'Sacremento Kings'}),
        knex('teams').insert({id: 27, name: 'San Antonio Spurs'}),
        knex('teams').insert({id: 28, name: 'Toronto Raptors'}),
        knex('teams').insert({id: 29, name: 'Utah Jazz'}),
        knex('teams').insert({id: 30, name: 'Washington Wizards'}),
      ]);
    });
};
