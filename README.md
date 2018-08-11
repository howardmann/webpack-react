# Summary
Simple example of how to integrate a react app component into an existing express app

## Existing sample application
Server-side express app
- handlebars view templating engine
- webpack for compiling modular shared JS files

## React app

### Objective
Integrate a react counter widget into an existing page of sample application. Page is `/widget`

### Steps
- Setup webpack and babel loaders to compile react and advanced ES6 class syntax
  - npm install the following dev dependencies `npm i --save-dev babel-core babel-loader babel-preset-env babel-preset-react-app`
  - Note: `babel-preset-react-app` is used by create-react-app and includes advanced syntax like spread operators and advances class properties with bind syntax e.g. `classProp = () =>` 
  - Create a `.babelrc` file and include the following presets `{"presets": ["env", "react-app"]}`
- Update webpack config file as follows
  ```javascript
  module.exports = {
    entry: {
      shared: './src/components/shared/index.js',
      reactCounter: './src/components/reactCounter/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'js/[name].js'
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      }]
    }
  };
  ```
  - The entry has multiple properties which enables us to bundle different entry points into different output files. The output filename includes `js/[name].js` which will bundle the entry point files and output them into the `public/js` directory and dynamically include the name given in the entry prop
  - The module is where we configure babel to transpile our ES6 code into older browser compatible code. The babel-loader will look up the .babelrc file. Our .babelrc file includes the basic env preset and the babel-react-app present which includes the latest flavours that create-react-app uses
- Write our react code
  - We write our react code in the entry point folder specified in the webpack.config file above. In our example it is in `src/components/reactCounter/index.js`
  - This example illustrates how we can use different JS styles in one application. E.g. the shared folder could represent global JS client-side tracking we use or older modular jQuery scripts being used 
- To access the relevant react component we simply include the relevant `div id` tag in the server side rendered tag we want to display the component and then reference the script tag that was bundled. Example below
  ```html
  <!-- views/widget.hbs -->
    <h2>Widget page</h2>
    <h2>
      Server side rendered movies
    </h2>
    <ul>
      {{#each movies as |movie|}}
        <li>Title: {{movie.title}} | {{movie.year}}</li>
      {{/each}}
    </ul>

    <hr>

    <h2>
      React counter
    </h2>

    <div id="react-counter"></div>

    <script src="js/reactCounter.js"></script>
  ```

- Refer to the package.json for basic webpack bundling scripts. Note that the babel-react-app preset requires the development environment to be set when running webpack compilation
- And that's how we can easily add react widget components into parts of our app where it makes sense to include React Components. Always pick the right tool for the right job. No need to build a SPA if your app doesn't need it everywhere. 


## TODO
- [ ] CSS and SASS webpack loaders

