[![Build Status](https://travis-ci.org/andela-hngerebara/NewsFeed.svg?branch=develop)](https://travis-ci.org/andela-hngerebara/NewsFeed)
[![Code Climate](https://codeclimate.com/github/codeclimate/codeclimate/badges/gpa.svg)](https://codeclimate.com/github/codeclimate/codeclimate)
[![Coverage Status](https://coveralls.io/repos/github/andela-hngerebara/NewsFeed/badge.svg?branch=develop)](https://coveralls.io/github/andela-hngerebara/NewsFeed?branch=develop)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)


# Hopeaz NewsFeed Application 

A front-end application that displays a list of recent worldwide news and is Powered by: https://newsapi.org/  displays a list of recent worldwide news.

Created using React JS and Flux Architecture

## Table of Contents
------------------------------------------------------------------------------
* Application features
* Development and documentation to specific technology
* Getting Started
* Structure



### Application Features
---------------------------------------------------------------------------------------------------------------------------
* User Authentication - Users are authenticated and validated using firebase 
* View News from over 60 Sources

### Development and Documentation related to specific technology
-------------------------------------------------------------------------------------------------------------------------
Hopeaz NewsFeed was developed using the following :

* Firebase 
https://firebase.google.com/

* React 
React is front end library developed by Facebook. It's used for handling view layer for web and mobile apps. ReactJS allows us to create reusable UI components. It is currently one of the most popular JavaScript libraries and it has strong foundation and large community behind it. 
Read more https://facebook.github.io/react/

* Flux
Flux is the application architecture that Facebook uses for building client-side web applications. It complements React's composable view components by utilizing a unidirectional data flow. It's more of a pattern rather than a formal framework.
Webpack is a tool to build JavaScript modules in your application
Read more https://facebook.github.io/flux/


### Getting Started
---------------------------------------------------------------------------------------------------------------------------
Follow the steps below to run this project on your computer:
#### Setup
* Clone the repo 

```sh
$ git clone https://github.com/andela-hngerebara/NewsFeed.git
```

* Install NodeJS:  <a href:"https://nodejs.org/en/download/">Click here</a>


* Open a terminal/command prompt on your computer and cd into your preferred path/location.

* run the command below to install
```sh
$ npm install
```

#### Launching
```sh
$ npm start
```

### Structure
---------------------------------------------------------------------------------------------------------------------------
```sh
├── __tests__                # Unit tests
├── app                      # Application source code
|   ├── actions          
│   │   ├── newsActions      # news actions      
│   ├── components           # All Components
|   |   ├── Main             # Apps Main page
│   │   ├── Header           # Contains the Navigation and Title
│   │   ├── ArticleItems     
│   │   ├── Article          # mounts articles here to be transfered to the sources component 
│   │   ├── Footer           # displays the footer
│   │   ├── Login            # Has the login component
│   │   ├── Sources          # Mounts news sources and associated articles
│   │   ├── SourceItem         
│   ├── constants            
│   │   ├── EventConstants   # Defines the Change and click event constants
│   │   ├── NewsConstants    # Defines the get articles and get sources constants
│   ├── dispatcher           # 
│   │   ├── AppDispatcher    # App dispatcher
│   ├── stores               # Application Stores
│   │   ├── newsStore        # News articles store
│   │   ├── SourceStore      # News source store
│   ├── stylesheets          # Application-wide styles 
│   ├── Utils                # 
│   │   ├── share            # social media sharing
│   ├── index.html           # App Html file
│   ├── login                # Google login Page
│   └── index                # Application rendering
└── assets                   # images used
```

### Deployment
------------------------------------------------------------------------------------
This application is deployed on heroku with this link https://newsfeedapp.herokuapp.com/

### Limitations
------------------------------------------------------------------------------------
1. The user needs to redirect to the main news source website to view the article.
2. Limited test coverage
3. Users need to have a google account to login in


### Contribute
---------------------------------------------------------------------------------------------------------------------------

If you are interested in contributing to development of Newsify, that's really great!

Follow the instructions below to contribute.

* Fork the repository

* Make your change

* Commit your change to your forked repository

* Provide a detailed commit description

* Create a pull request

### FAQ
----------------------------------------------------------------------------------------------------------------------

1. What if I want to use another port?
That's easy. In the root of the project. create a file named .env and add the following line to it:

PORT=<your_desired_port>
where <your_desired_port> is the port you want to use. So, if you want to use port 8080, you will write:

PORT=8080

2. Where can i get an API Key to run the application on my local 
Ans: Request an API key from (https://newsapi.org/)

### Lisence
----------------------------------------------------------------------------------------------------------------------

This project is authored by Hope Ngerebara and is licensed for your use, modification and distribution under the MIT license. 



