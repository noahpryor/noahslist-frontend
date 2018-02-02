const routes = module.exports = require('next-routes')()

routes
.add('index','/','index')
.add('calendar')
.add('shows')
.add('comedians')
.add('venues')
.add('calendar-day', '/calendar/day/:year-:month-:day', 'day')
.add('show', '/shows/:id', 'show')
.add('comedian', '/comedians/:id', 'comedian')
.add('venue', '/venues/:id', 'venue')


