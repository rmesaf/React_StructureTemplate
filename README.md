# Using React with Babel, Webpack and Sass
We will going to create a template for React projects using Babel, Webpack, Sass and, of course, React. If you don´t want to know how it works and get this over with, just go to [Installing](#Installing) section.

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

```
**NOTE:** You probably will need to install older modules of babel because the new ones needs to resolve some dependencies. Type ```npm i babel-core babel-loader babel-preset-react --save-dev```
```


#### Configure Babel
Create a config file for Babel named ```.babelrc``` in the root of your project. In the file type:

```
{ 
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ],
    "plugins": ["react-hot-loader/babel"]
}
```
### Install Path
You will need to resolve some file paths. Use ```npm install --save path```.

### Create the Project structure
Define your project structure. This structure follow the principles of unique responsibility and granularity. Note that you allready have some of those files.

```
.
├── build                           # Compiled files (alternatively `dist`).
├── src                             # Source files (alternatively `lib` or `app`).
    ├── components                  # React Components grouped as features or routes.
    ├── styles                      # Global styles.
        ├── partials
            ├── _base.scss
            ├── _mixins.scss
            ├── _variables.scss   
        ├── main.scss
    ├── app.js                      # Outer React Component        
├── .babelrc                        # Babel configuration file.
├── .gitignore                      # If you use git as VCS.
├── index.html
├── index.js
├── LICENSE 
└── README.md                   

```

Here is a zoom-in on some files of those files:

#### index.js
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/app';

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```
#### index.html
```
<html>
    <head>
        <title>React App</title>
    </head>
    <body>
        <div id="app"></div>
    </body>
</html>
```
#### app.js
```
import React from 'react';

class App extends React.Component {
    render(){
        return (
            <div>
                <h2>Hello World !!!!!</h2>
            </div>
        );
    }
}

export default App;
```
#### main.scss
```
@import "partials/variables",
        "partials/base",
        "partials/mixins";
```

### Install Webpack
Glue all together using Webpack. To install Webpack type  ```npm i webpack webpack-cli webpack-dev-server html-webpack-plugin html-loader --save-dev```.

#### Configure Webpack
Create a config file for Webpack named ```webpack.config.js``` in the root of your project. That file

In the file type:

```
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: 'index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            plugins: ['react-hot-loader/babel'],
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins: [HTMLWebpackPluginConfig]
}
```

Now,it will be a good idea to learn what is a "loader". Think about "loader" as a code transformers, with that in mind let's understand webpack´s configuration object the previous file:

* entry: Property that specifies where webpack will begin the transformation.
* output:
    * filename: Property that specifies the name of the new transformed js file.
    * path: Property that specifies the route of the new transformed js file.
* module:
    * test: Property that specifies which files will be transform the loader. Uses a regular expression that represents all strings that end with that specific pattern i.e /\.js$/, /\.html$/, /\.scss$/.
    * exclude: Property that specifies which files will not be transformed.
    * use:
        * loader: Property that specifies which type of transformation will be applied.


### Install SASS
Run ```npm install --save-dev node-sass style-loader css-loader sass-loader```

### Setting up npm´s scripts
Open the file named *package.json* and edit the property "scripts"

```
"scripts": {
    "build": "webpack",
    "start": "webpack-dev-server --watch --hot"
}
```

### Optimize Components reload
Run ```npm install --save-dev react-hot-loader```

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

