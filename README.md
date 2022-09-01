# Indeed-Scraper
  > SEI - Software Engineering Project 3 
  > Created By: Alex Carr, Damian Fletcher, Eric Pettaway, Jeremy Currier

### Marvel Wiki
  Our team is planning on creating a Wikipedia of the Marvel Universe. We plan to utilize the Marvel API found on [a link](https://www.marvel.com/)


### MVP
    - [ ] Utilize marvel.com API
    - [ ] Google OAuth User Login
    - [ ] Use MongoDB for User storage
    - [ ] 
    - [ ] 


### Stretch Goals
    - [ ] 
    - [ ] 
    - [ ] 
    - [ ] 
    - [ ] 


### Front-End
    - React
    -
    -


### Back-End
    - Express
    -
    -


### List of Mongoose models and their properties
```js
//  Primary Model
User = {
  username: String,
  password: String,
  favorites: [Recipe],
  available_recipe: [Recipe],
  available_booze: [Booze]
}

//  Secondary Model
Recipe = {
  name: String,
  recipe: String,
  description: String,
  favorite: Boolean,
  required: [Booze]
}

// Tertiary Model
Booze = {
  name: String,
  image: String,
  available: Boolean
}
```


### List of Routes
| Action | Method | Path                    | Action                                                               |
| ------ | ------ | ----------------------- | -------------------------------------------------------------------- |
| INDEX  | GET    | `/drinks`               | Read information about all recipes                                   |
| NEW    | GET    | `/drinks/new`           | Show form to make new or copied recipe                               |
| CREATE | POST   | `/drinks`               | Create a new recipe                                                  |
| SHOW   | GET    | `/drinks/:drinkId`      | Read information about the recipe                                    |
| EDIT   | GET    | `/drinks/:drinkId/edit` | Show existing form for existing recipe                               |
| UPDATE | PUT    | `/drinks/:drinkId`      | Update the existing recipe with new content                          |
| DESTROY| DELETE | `/drinks/:drinkId`      | Delete the existing recipe, then redirect                            |


### User Stories
    -
    -
    -
    -
    - 


### Wireframe




