# Indeed-Scraper
  > SEI - Software Engineering Project 4
  > 
  > Created By: Alex Carr

### Indeed-Scraper
  The concept behind this is to create a smarter solution for job searching through indeed job opportunities based on some information entered by a user. 
  
  
### MVP
    - Home Page
      - Welcoming and showing login/signup button while start searching jobs button.
    - Search Page
      - Shows all searches saved, and allows you to filter them.


### Stretch Goals
    - Users can log in using various methods offered. (OAuth)
    - Users can see best match counts on previous searches
    - Creating visually relaxing front-end
    - Pagination

### Tech Stack

##### Front-End
    - React
    - Axios
    - HTML
    - CSS
    - JavaScript
    
##### Back-End
    - Express
    - Morgan
    - MongoDB
    - Puppeteer


### List of Mongoose models and their properties
```js
//  Primary Model
User = {
  first_name: String,
  last_name: String,
  email: String,
  search: [{
    search: String.
    location: String,
    postDate: String,
    primaryFilter: String,
    url: String
  }],
  search_history: [{
    search: String.
    location: String,
    postDate: String,
    primaryFilter: String,
    url: String
  }],
  saved: [{
    search: String.
    location: String,
    postDate: String,
    primaryFilter: String,
    url: String
  }],
}
```


### User Stories
    - As an unlogged-in user, I would like to be able to browse all the jobs.
    - As an unlogged-in user, I would like to be able to set the search parameters.
    - As an unlogged-in user, I would like to have the option to login/signup on any page.
    - As a logged-in user, I would like to be able to save jobs.
    - As a logged-in user, I would like to have a user page that displays all saves.
    - As a logged-in user, I would like to have the option to see my previous searches.


### Wireframe

#### Home View
![Screen Shot 2022-09-17 at 6 40 16 AM](https://user-images.githubusercontent.com/102195632/190859927-20d79f92-896e-4681-812d-27d2feff605a.png)


#### Search View
![Screen Shot 2022-09-17 at 6 39 57 AM](https://user-images.githubusercontent.com/102195632/190859930-aa63ee31-3704-43aa-a89c-9f09c3203c8c.png)


  
