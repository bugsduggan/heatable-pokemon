# Pokemon API for Heatable (by Tom Lakesman)

This adds the basic CRUD operations on Pokémon with very minimal error checking and absolutely no authentication.
To describe this as not production ready would be an understatement.

If I were given this task as part of my sprint, I would:

- Make the data model a little more full-featured. Pokémon should store their types, weaknesses, special attacks and (links to) their evolutions.
- Write some tests. I had a quick look at this, intending to mock the DataModel. That looks non-trivial without creating a service/repository/some other class to mock. Also, I'm much less familiar with sinon than I thought I was.
- Create a database seed file with some of the coolest Pokémon in.
