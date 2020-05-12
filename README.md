# Workout Tracker

[<img src="https://img.shields.io/badge/License-MIT-blue.svg">](https://opensource.org/licenses/MIT) 

## Description

Having been given some starter code for the front-end (html, css, js) along with seeds to create a database, our task is to develop the back-end consisting of a Mongo database with a Mongoose schema, and to create routes with Express.

## Table of Contents

  * [Technology](#Technology)

  * [Summary](#Summary)

  * [Learning-Points](#Learning-Points)
  
  * [License](#License)
  
  * [Contributing](#Contributing)
  
  * [Installation](#Installation)
  
  * [Tests](#Tests)
  
  * [Questions](#Questions)

## Technologies Used
- HTML - used to create elements on the DOM
- CSS - used to add style to the deployed page
- JavaScript - used to create the logic controlling the client-side application
- jQuery - library supplement to JavaScript controlling application logic
- Node.js - runtime environment which executes the JS code
- Express - framework for Node.js to create a server
- MongoDB - a document oriented, NoSQL database
- Mongoose - an object data modeling library for MongoDB and Node.js
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages
- Heroku - host for deployed application

## Summary

While there were some relatively straightforward aspects of this project, such as creating the models and forming the routes, there were some unforseen, and unexpected complexities along the way.  Not to wax poetic, but such is life.  I'll dispense with highlighting the model data in workout.js with the expection of the calculation of totalDuration.  totalDuration is an element that appears in the /public/js/workout.js file, and is the accumulation of the minutes spent performing all exercises of a workout.  The code snipped below was introduced by Juliet George to some members of our cohort after the day's session on 5/11/2020.  She indicated that key elements were the virtual(s) and reduce methods, and that further research would be necessaary to understand how they function to calculate the total duration for the missing index page field.  In order to incorporate this information, it would need to be added to the WorkoutSchema in that model: `{ toJSON: { virtuals: true}}`

../models/workout.js
```
WorkoutSchema.virtual("totalDuration").get(function(){
   return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;},0) 
})
```

Most of the remaining code is relatively straightforward with regards to the creation of the routes required to get, post, and put routes specified elsewhere in the code provided.  Any roadblocks were a result of assorted typos. Because of course there are always typos that block a code from working.

<img src="https://github.com/davisbradleyj/workout-tracker/blob/master/workout_tracker.gif">

## Learning-Points

This project provided a chance to refine my ability to develop routes linking server-side data with client-side activity.  It also allowed for a chance to explore more of what is possible with MongoDB and Mongoose, and work with a Non-relational database, where my previous professional experience (and class experience) included exposure to SQL/relational databases.

## Contributing

Jerome Chenette, Kerwin Hy, Mahi Gunasekaran, Nadine Bundschuh, Ana Medrano, Sam Poppe, Juliet George

## Installation

To install necessary dependencies for this application, the following commands are required:

`npm init` - To create the package.json file.

`npm i express mongoose morgan` - Adds node modules and populates the package-lock.json file.

For those who wish to clone or fork this repo, the following steps should be followed:

Clone:
1) On GitHub, navigate to the main page of the repository.
2) Under the repository name, click Clone or download.
3) To clone the repository using HTTPS, under "Clone with HTTPS", click the clipboard icon. To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click Use SSH, then click the clipboard icon.
4) Open your local Terminal
5) Move into the directory location where you would like the cloned repo to sit.
6) Type `git clone` then paste the URL copied from earlier so that your would see the following - `$ git clone https://github.com/davisbradleyj/workout-tracker.git`
7) Press enter

Fork:
1) On GitHub, navigate to the main page of the repository.
2) In the top-right corner of the page, click Fork.

For more detailed instructions, you can visit GitHub directly to <a herf="https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository">Clone</a> or <a herf="https://help.github.com/en/github/getting-started-with-github/fork-a-repo">Fork</a>

## Tests

No tests were required for this application

## Questions

If you have any questions about the repository, open an issue or contact:

<img src="https://avatars3.githubusercontent.com/u/61176147?v=4" alt="avatar" style="border-radius: 16px" width="30">

[Brad Davis](https://github.com/davisbradleyj) directly at davis.bradleyj@gmail.com

 

 

 

 
