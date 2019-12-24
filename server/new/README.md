To load the data, go `npm run reload-daam`


Data structure

Films
Theaters
- tables
- seats
Showings
- reservations (seatId, userId)
Users
- name
- cell phone
- email
- credit card??

Table numbers and seat numbers are friendly for the customers. The ids for them are for the system.

# Middlewares
Middleware runs before each request. We're using middleware to intercept the RESTful requests and provide specialized GET endpoints
- /api/showings/:film_id/:showing_date - Returns all showings for that film on that date
- Others here