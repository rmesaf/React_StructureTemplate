# Using React with Babel, Webpack and Sass
We will going to create a template for React projects using Babel, Webpack, sass and, of course, React. If you don´t want to know how it works and get this over with, just go to [Installing](#Installing) section.

## Prerequisites

You need to have installed:

* [Git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/en/download/) (with NPM).

## React Setup

### Initialize your package Manager
Select the location where you want your project and type ```npm init``` on the terminal. This instruction will get you a lot of prompts but is ok (for now) if you just tap "intro" all over the process. This instruction will create a file called package.json, that contains metadata about you project, including info about the modules that you did install in your project.

### Install React & ReactDOM
The first pair of modules that you need are React and ReactDOM. To install those modules you need type ```npm install --save react``` and ```npm install --save react-dom``` in the terminal. If you want You could condensate those instructions in one: ```npm install --save react react-dom```.  Note the flag ```--save```. That tells your package manager that your aplication will going to need that module in both enviroments: *Development* and *Production*.

### Install Babel
Since almost every React Component is written in ES6 you need to translate those components to ES5 in order to make your browser understand your code. Thats the reason why you need Babel. To install Babel, type ```npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev``` on your terminal. Note the flag ```--save-dev```. That tells your package manager that your aplication will going to need that module in a *development* enviroment.

### Configure Babel
Create a config file for Babel named ```.babelrc``` in the root of your project. In the file type:

```
{ 
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ],

}
```
### Install Webpack


## Installing
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Clone this project using this command on a terminal:

```
git clone <url>
```

Install all needed dependencies usign this command on a terminal:

```
cd <folder>
npm install
```

Run the project with

```
npm run start
```

If you want to create your build version (Production Version) use

```
npm run build
```


## Built With

* [npm](https://www.npmjs.com/) - Package Manager.
* [React](https://www.npmjs.com/) - JavaScript library for building user interfaces.
* [Webpack](https://webpack.js.org/) - Module Bundler.
* [Babel](https://babeljs.io/) - JavaScript Compiler.
* [Sass](https://babeljs.io/) - JavaScript Compiler.


## Authors

* **Ricardo Mesa** - *Initial work* 

## Acknowledgments

* Hat tip to anyone who's code was used.

