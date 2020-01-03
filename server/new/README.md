To load the data, go `npm run reload-daam`


Data structure

Films
Theaters
- tables (id, table_number, x, y (location in the theater))
- seats (id, seat_number)
Showings
Reservations (seat_id, showing_id, user_id)
Users
- name
- cell phone
- email
- credit card??


# Specialized Routes
- /api/showings/:film_id/:showing_date - Returns all showings for that film on that date
- /api/showings/:showing_id/reservations - All reservations for that showing

# Data

## Films
Details about a film like its name and description

## Theaters, tables, and seats
The big rooms where a film will be shown. Our company has six theaters so we can show up to six different films simultaneously.

Theaters have tables. No, not HTML <table>s! We mean tables where people 
can sit and enjoy a meal while they watch the film. These are arranged in its theater in rows and columns with each table's location expressed in an "x" and a "y" value.

Tables have one to six seats. Each seat can be reserved.

Table numbers and seat numbers are friendly numbers for the customers. The ids are for the system.

## Showings
A film at a particular time in a particular theater. We may have four or five showings of a film per day.

## Reservations
On our site, customers will find a showing they're interested in. Then they'll look at the seats and pick where they want to watch the film. They will add one or more seats to their shopping cart. When they check out and pay for their seats, we create a *reservation*.

Carts are only local. They're never sent back to the server so other users on other client machines cannot see those holds. Reservations are sent to the database and are permanent. Other users will see those reservations if they refresh their browser.

Yes, this might be a problem if two unrelated people are considering the same seat. They might possibly both put it in their local carts but the first to pay for the seat gets to keep it. The other should get an error message.

# Security
I know, I know.
- "You should promote requests to http*s*."
- "You should hash passwords."
- "Your /api/users route is completely insecure!"
- "You're not asking for the credit card CSC."
- "Storing credit card PANs in clear text is not PCI compliant."
- "The sessions are vulnerable to CSRF attack."

I get it. Really. I know better. This is not by any means a truly secure environment. We're doing it this way for ease of use for a training course and not for a production ecommerce web application. Please make sure that you correct the above problems if you ever want to use this for a production app. Throw me a bone here.