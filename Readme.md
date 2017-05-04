[![Build Status](https://travis-ci.org/andela-hngerebara/NewsFeed.svg?branch=master)](https://travis-ci.org/andela-hngerebara/NewsFeed)
[![Code Climate](https://codeclimate.com/github/codeclimate/codeclimate/badges/gpa.svg)](https://codeclimate.com/github/codeclimate/codeclimate)
[![Coverage Status](https://coveralls.io/repos/github/andela-hngerebara/NewsFeed/badge.svg?branch=master)](https://coveralls.io/github/andela-hngerebara/NewsFeed?branch=master)

# Hopeaz NewsFeed Application 

A front-end application that displays a list of recent worldwide news and is Powered by: https://newsapi.org/  displays a list of recent worldwide news.

Created using React JS and Flux Architecture

# Development

Hopeaz NewsFeed was developed using the following :
* [Firebase] 
* [React] 
* [Flux] 

# Documentation related to specific technology
-------------------------------------------------------------------------------------------------------------------------
* Firebase 
https://firebase.google.com/

* React
https://facebook.github.io/react/

* Flux
https://facebook.github.io/flux/


# Application Features
---------------------------------------------------------------------------------------------------------------------------
#### User Authentication

Users are authenticated and validated using firebase 

#### View News from over 60 Sources

# Getting Started
---------------------------------------------------------------------------------------------------------------------------
Follow the steps below to run this project on your computer:
## Setup
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

## Launching
```sh
$ npm start
```

# Structure
---------------------------------------------------------------------------------------------------------------------------
```sh
├── __tests__                # Unit tests
├── app                      # Application source code
|   ├── actions          
│   │   ├── newsActions      # news actions      
│   ├── components           # All Components
│   │   ├── header           # Contains the Navigation and Title
│   │   ├── sources          # Mounts news sources and associated articles
│   │   ├── footer           # displays the footer
│   │   ├── articles         # mounts articles here to be transfered to the sources component
│   ├── constants            # 
│   │   ├── EventConstants   # Defines the Change and click event constants
│   │   ├── NewsConstants    # Defines the get articles and get sources constants
│   ├── dispatcher           # 
│   │   ├── AppDispatcher    # App dispatcher
│   ├── stores               # Application Stores
│   │   ├── newsStore        # News articles store
│   │   ├── SourceStore      # News source store
│   ├── stylesheets          # Application-wide styles 
│   ├── Utils                # 
│   │   ├── config           # Api key
│   │   ├── newsAPI          # API request
│   │   ├── share            # social media sharing
│   ├── index.html           # App Html file
│   ├── login                # Google login Page
│   └── index                # Application rendering
└── assets                   # images used
├── pages                    # Application route definitions
    ├── main                 # Apps Main page
    ├── setUp                # Explain the setUp steps in detail

```



# Screenshot
---------------------------------------------------------------------------------------------------------------------------


