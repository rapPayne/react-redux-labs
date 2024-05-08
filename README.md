# Dinner-and-a-movie

These are the labs for the React, Redux, and React Native classes. 

- [Dinner-and-a-movie](#dinner-and-a-movie)
  - [Overview](#overview)
  - [Setup requirements](#setup-requirements)
  - [How to run](#how-to-run)
  - [Instructor notes](#instructor-notes)
    - [How the projects relate](#how-the-projects-relate)
  - [JavaScript Cheatsheet](cheatsheet.md)

## Overview
We're creating a web app that could be used for a movie theater that also serves food and drinks. The customer is able to pick a movie they want to see, select a showtime, and reserve seats in the theater on a seat map.

You've been provided a Node server using Express to serve data from a simple database through a RESTful API. The server is a [git submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules) found under the "server" folder. Its README.md file has more info about that API.

In the labs, you'll create the client portion from scratch.

## Setup requirements
For the React labs, As long as you have a version of node that is under support, you should be good. For React Native labs, you'll also need a bunch of other stuff. But as far as we're concerned, if you match the requirements to run a React Native app, you can run these labs.

## How to run
1. [Start the RESTful API server](/server)
2. Run a client solution
```bash
cd <solution folder>
npm install
npm run start
```

## Instructor notes
Instructors, this section is for you! 

### How the projects relate
This site supports three courses:
* a five-day React with Redux, 
* a three-day React (without Redux),
* a four-day React Native

As you know there's a lot of overlap between these topics so there is some instructions and solutions that are common between them.

Setup is common for all three. The server is common for all three.

The 5-day React/Redux class starts with React intro and setup then does a deep-dive into Redux with labs and everything.

The 3-day React and 4-day React Native classes have a 45-minute Redux In a Nutshell lecture. The lab for that topic is simply installing Redux through npm and apply our pre-written Redux code.

The main difference between 3-day React and 5-day React/Redux is that we do a 45-minute "nutshell" overview with one and a 2-day deep dive with the other.
