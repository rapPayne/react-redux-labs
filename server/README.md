# Dinner-and-a-movie Server

## To create the database
1. Make sure mongo is running
1. npm run setup

## API Endpoints
### Films
- GET /api/films - All films
- GET /api/films/:film_id - The one film with that id.
### Theaters, tables, and seats
- GET /api/theaters - All theaters
- GET /api/theaters/:theater_id - The one theater with that id.
- GET /api/theaters/:theater_id/tables - All tables in that theater
- GET /api/theaters/:theater_id/tables/:table_id - The one table with that table_id.
- GET /api/theaters/:theater_id/tables/:table_id/seats - All seats at that table.
(Note that table_id is unique in the collection so we really didn't need to provide the theater_id, but this is more of a RESTful design)
### Showings and reservations
- GET /api/showings - All showings for all dates. The whole collection
- GET /api/showings/:showing_id - The one showing with that  id
- GET /api/showings/:showing_id/reservations - All reservations for that showing
- GET /api/showings/:film_id/:date - All showings for a film on the given date
### Reservations
- GET /api/reservations/:reservation_id - The one reservation for that id

## Database structure notes
Each collection (table) has a mongoDB "_id" property. It is an ugly ObjectId string for internal mongo uses. We've also added an "id" property which is an integer purely for human convenience. It can be ignored until we need to do manual queries.

To relate one table to another, a 'parent' table will have a collection (array) of 'child' _ids. For example a table has a property called 'seats' which is an array of _ids for each seat record.