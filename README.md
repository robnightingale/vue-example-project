
# ![Important](/src/assets/images/logo.svg "The Vue Project")

# *The Vue Project*
### An example Vue project. A clean, scalable, optimized starter PWA, tutorial, and set of examples.

## Why?

1. All the other starter kits out there feel bloated and not very transparent.  
2. All the other examples out there focus on a specific problem domain (ie. My Shopping Cart). I wanted 
to provide a project that provided various examples you could pick and choose from instead of trying to learn the 
buisiness of the demo you downloaded.
3. You love Vue, but you need some opinionated app structure to get you going and a Tutorial that fully breaks down the project.   
4. You want explanations on key configuration and optimization. 
5. You aren't interested in Server Rendered (ie. Nuxt) for several reasons but mainly because your app is going to be private, 
accessable via a login (no catering to crawlers) and served from affordable, high-traffic static servers.

## Live Demo and Tutorial

The live demo is the same as the project you will install. It contains the tutorial and examples. Visit it here: https://www.prograhammer.com/the-vue-project#intro.

Almost all pages are turned on as public but you will most likely want them private. See the installation
 instructions on how to easily make them private. You can get a glimpse of what that is like by seeing the login here: 
https://www.prograhammer.com/the-vue-project.

## Featuring

- The project started with **Vue.js 2.4+, Webpack 3.5+, and the official PWA template** and was adjusted and built up from there. 
- **Tutorial**. This project is strongly focused on teaching (and learning, because aren't we all in
[the Javascript world](https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f), instead of just 
giving you the magic.  
- **Client-side**, static Single-Page App so you can take advantage of the more affordable high-traffic 
static servers. How affordable? Well, this live demo is being served to you free-of-charge
 from GitHub. That's possible because GitHub pages serves static content (the server isn't rendering anything). 
 You'll also find many free CDN's who will serve your static content. This project is also focused on the needs  
 of a private app (accessible via login), where your SPA/PWA makes async API calls to your backend server 
 (Java, Node, PHP, whatever). 
- **Scalable and optimized** (discusses and incorporates approaches like Webpack chunking, named route chunking,
 structuring styles, proxying to your backend API server, reducing complexity, working in a production environment, and more).
- **Clean** (organized structure, well documented in tutorial, latest tooling such as Pug/Stylus, and more).
- **Security**: OAuth2, Cookies and CSRF protection.  
- **Community opinionated**. Open to PR's, suggestions, questions. 
- Ships with a helpful set of UI components to get you started thanks to **Buefy/Bulma** (but we've included
 a few notes on Twitter Bootstrap setup and jQuery, if you must!).

----------

![Important](/src/assets/images/info.svg "Logo Title Text 1") This project is built off of a combination of the [upcoming official Vue Webpack 3 template](https://github.com/vuejs-templates/webpack/pull/891) and the [official Vue PWA template](https://github.com/vuejs-templates/pwa). Clone the repo, do `npm install`, and then `npm run dev` to see it. Read through the tutorial below to get an idea of how you can build the project from scratch. Details on how to set things up for your production domain are also included.

----------

# Tutorial

## Table of Contents  

- [Diff This Tutorial](#diff-this-tutorial)
- [Todo](#todo)
- [Install Node](#install-node)
    + [Why not Node 8?](#why-not-node-8-)
    + [Install Node and NPM (Using PPA to get latest version)](#install-node-and-npm--using-ppa-to-get-latest-version-)
- [Vue-CLI](#vue-cli)
    + [Webpack 3](#webpack-3)
    + [Install Vue Cli and Init a New PWA Project](#install-vue-cli-and-init-a-new-pwa-project)
- [Editors](#editors)
    + [Some Advantages of VS Code Over Other Editors](#some-advantages-of-vs-code-over-other-editors)
    + [Setting Up VS Code](#setting-up-vs-code)
    + [Setting Up Sublime Text 3](#setting-up-sublime-text-3)
- [ESLint](#eslint)
    + [Configure ESLint](#configure-eslint)
    + [ESLint Ignore File](#eslint-ignore-file)
- [Styling](#styling)
    + [Install Sass and Stylus](#install-sass-and-stylus)
    + [Load Variables and Functions to All Components](#load-variables-and-functions-to-all-components)
    + [Overriding Styles in Vendor Components](#overriding-styles-in-vendor-components)
    + [Sass Folder Structure](#sass-folder-structure)
    + [Stylus Folder Structure](#stylus-folder-structure)
    + [BEM Methodology](#bem-methodology)
    + [Use BEM Instead of Scoped in .Vue Files](#use-bem-instead-of-scoped-in-vue-files)
- [Pug](#pug)
    + [Install Pug](#install-pug)
    + [Comparison with HTML](#comparison-with-html)
- [Understanding Global](#understanding-global)
    + [Webpack Evaluates Modules Only Once](#webpack-evaluates-modules-only-once)
    + [ProvidePlugin](#provideplugin)
    + [DefinePlugin](#defineplugin)
    + [The Global Window Object](#the-global-window-object)
    + [Dotenv Package](#dotenv-package)
- [UI Frameworks](#ui-frameworks)
    + [Buefy and Bulma](#buefy-and-bulma)
    + [Twitter Bootstrap 4 and jQuery](#twitter-bootstrap-4-and-jquery)
    + [Some Other Great Choices](#some-other-great-choices)
- [App Entry](#app-entry)
    + [Main](#main)
- [Vue Resource HTTP Client](#vue-resource-http-client)
    + [Install Dependencies](#install-dependencies)
- [Routes](#routes)
    + [Configure Routes](#configure-routes)
    + [Lazy Loading From Chunks](#lazy-loading-from-chunks)
    + [Guarding Routes](#guarding-routes)
- [Vuex](#vuex)
    + [Install Dependencies](#install-dependencies-1)
    + [Vuex State](#vuex-state)
    + [Mutations, Getters, and Actions](#mutations--getters--and-actions)
    + [Plugins](#plugins)
  * [index.js](#indexjs)
- [Authentication](#authentication)
- [Proxy Api Calls in the Dev Server](#proxy-api-calls-in-the-dev-server)
- [Components](#components)
    + [Directory Structure](#directory-structure)
- [Fonts and Font-Awesome](#fonts-and-font-awesome)
    + [src/assets/style/_fonts.scss](#src-assets-style--fontsscss)
- [Images and Other Assets](#images-and-other-assets)
- [Unit Testing and End-to-End Testing](#unit-testing-and-end-to-end-testing)
    + [End-to-End Testing with Nightwatch and Selenium server](#end-to-end-testing-with-nightwatch-and-selenium-server)
    + [Running the Tests](#running-the-tests)
- [Dev Server](#dev-server)
- [Vue Dev Tools](#vue-dev-tools)
    + [Vuex Tab](#vuex-tab)
- [Create and Publish a Library for Other Developers to Use](#create-and-publish-a-library-for-other-developers-to-use)
- [Quick Learning Webpack Resources](#quick-learning-webpack-resources)
*Table of contents generated with [markdown-toc](http://ecotrust-canada.github.io/markdown-toc/).*  

## Todo  
  
Here's a simple Road Map for a few things I'd like to cover in upcoming releases:

- Discuss Yarn.  
- Chrome debugging ("msjsdiag.debugger-for-chrome").  
- Discuss cssnano and postcss.  
- Add a section in this tutorial about working in a production environment.
- More optimizations and explanations.

## Install Node

#### Why not Node 8?  

With Node 8 LTS start date coming up in [October 2017](https://github.com/nodejs/LTS#lts-schedule1), why not update to it now? Well, in short, the reason is it's paired with NPM 5, which is [very buggy at the moment](https://github.com/npm/npm/issues/16991). Better to wait for NPM to mature a little more first.

#### Install Node and NPM (Using PPA to get latest version)  

Get the setup script:

```shell
$ cd ~
$ curl -sL https://deb.nodesource.com/setup_6.x -o nodesource_setup.sh
```

Inspect that you have the script, then run with `sudo`:

```shell
$ vim nodesource_setup.sh
$ sudo bash nodesource_setup.sh
```

Now install Nodejs:

```shell
$ sudo apt-get install nodejs
```

The nodejs package contains the nodejs binary as well as npm, so you don't need to install npm separately. However, in order for some npm packages to work (such as those that require compiling code from source), you will need to install the build-essential package:

```shell
$ sudo apt-get install build-essential
```

## Vue-CLI

#### Webpack 3

You might consider just cloning or forking this example repo instead of using Vue Cli and the PWA template. I've manually updated the PWA template to Webpack 3 (based off the Webpack 3 branch of the [official Vue Webpack template](https://github.com/vuejs-templates/webpack/pull/891)) until Vue releases an updated PWA template. 

#### Install Vue Cli and Init a New PWA Project

```shell
$ sudo npm install -g vue-cli  # Install vue-cli globally.
$ vue init pwa example-vue-project # Init a project based on PWA template.
```

*(Note: If you've already installed the cli before and when you init a new project you get the message: `A newer version of vue-cli is available`, then ctrl+c at the prompt and then: `sudo npm install vue-cli -g` to update (re-install) vue-cli to the latest version.)*

Now you'll get some output like this:

```
? Project name: vue-example-project
? Project short name: fewer than 12 characters to not be truncated on homescreens (default: same as name) : example
? Project description: A Vue.js project
? Author: Your Name <your-name@email.com>
? Vue build: Runtime-only  # saves you 6kb
? Install vue-router? Y
? Use ESLint to lint your code? Y
? Pick an ESLint preset: none # we'll use a vue specific preset based on Standard
? Setup unit tests with Karma + Mocha? Y
? Setup e2e tests with Nightwatch? Y

vue-cli Generated "vue-example-project"
```

Install dependencies in `package.json`:

```shell
$ cd vue-example-project 
$ npm install  # do this first before you add more dependencies (to avoid peer warns)
```

## Editors

#### Some Advantages of VS Code Over Other Editors

After using [Sublime Text 3](https://www.sublimetext.com/3) extensively and dabbling in [Atom](https://code.visualstudio.com/), I've made  [VS Code](https://github.com/Microsoft/vscode) my choice editor.

1. It's open source. Sublime Text 3 is not (and that's not a bad thing for software, but it's nice to have an open source editor).  
2. It can [handle large files](https://github.com/Microsoft/vscode/issues/30180).  
3. File explorer is built in and extensions are super easy to manage.  
4. Built-in Markdown support.  
5. Built-in TypeScript support (Microsoft are the makers of TypeScript).  
6. Actively maintained (Sublime Text 3 is not regularly maintained).  
7. Easier to setup ESLint.  

#### Setting Up VS Code

If you navigate to `File > Preferences > Settings`, VS Code will open up a tab into your `settings.json` (User level). You'll notice the left pane lists all the defaults settings for the editor and also for any extensions you've installed. You can override these values in your `settings.json` file. You can read more about this [here](https://code.visualstudio.com/docs/getstarted/settings), but we are more focused on providing a workspace settings file in this project.

VS Code provides two different scopes for settings:  

- **User**: These settings apply globally to any instance of VS Code you open.  
- **Workspace**: These settings are stored inside your workspace in a .vscode folder and only apply when the workspace is opened. Settings defined on this scope override the user scope.  

I've added a `.vscode` folder to the project to hold the workspace settings. There are 2 files located there. The `settings.json` file to hold the settings for the project and the `extensions.json` file to hold the [recommended extensions for a project](https://code.visualstudio.com/docs/editor/extension-gallery#_workspace-recommended-extensions).

**.vscode/settings.json**  

```json
// Place your settings in this file to override the default and user settings
{
    "[javascript]": {
        "editor.tabSize": 2,
        "editor.insertSpaces": true
    },
    "[vue]": {
        "editor.tabSize": 2,
        "editor.insertSpaces": true
    },
    "eslint.options": {
        "extensions": [".html", ".js", ".vue", ".jsx"]
    },
    "eslint.validate": [
        {
            "language": "html",
            "autoFix": true
        },
        {
            "language": "vue",
            "autoFix": true
        },
        {
            "language": "javascript",
            "autoFix": true
        },
        {
            "language": "javascriptreact",
            "autoFix": true
        }
    ],
    "[stylus]": {
        "editor.tabSize": 2,
        "editor.insertSpaces": true
    }
}
```  

**.vscode/extensions.json**
```json
{
	// See http://go.microsoft.com/fwlink/?LinkId=827846
	// for the documentation about the extensions.json format
	"recommendations": [
		// Extension identifier format: ${publisher}.${name}. Example: vscode.csharp
		"dbaeumer.vscode-eslint",
		"sysoev.language-stylus",
		"octref.vetur"				
	]
}
```

**Some Helpful Key Bindings**

todo

**Remove node_modules from search** (ctrl + e)

----------

*NOTE: Restart the editor and you'll see syntax highlighting, linting, and all things working nicely!*  

----------


#### Setting Up Sublime Text 3

**Install Package Control**  
https://packagecontrol.io/installation

**Install Babel syntax definitions for ES6 JavaScript**  

 * Go to `Preferences > Package Control > Install Package` or press `ctrl+shift+p` (Win, Linux) or `cmd+shift+p` (OS X) and  search for "Package Control: Install Package".
 * Search for the package "Babel" and install it.
 * Open any .js file in Sublime. Then go to `View > Syntax > Open all with current extension as... > Babel > Javascript (Babel)`.

**Install a theme that works well with Babel.**  
For example, here's how you can install the **Oceanic Next** theme:

 * Try the Oceanic Next theme: `Open Package Control -> Install Package` and search for Oceanic Next color theme.
 * Go to `Preferences > Oceanic Next Color theme > Oceanic next`.

**Setup soft tabs and 2 space indention**  

 * Open any .js file. Go to `Preferences > Settings - More > Syntax Specific - User`.
 * It should open a file like `JavaScript (Babel).sublime-settings`
 * Add these parameters to the file:  

```
{
  "extensions":
  [
    "js"
  ],
  "tab_size": 2,
    "translate_tabs_to_spaces": true
}

```
 * Open any .vue file and repeat this process.

**Install Stylus package for Sublime**  

 * Open `Package Control: Install Package` and search for `Stylus` and install it (should be billymoon/Stylus package).
 * Restart Sublime.

**Install Sublime-linter and ESLinter**  

 * Open `Package Control: Install Package` and search for `SublimeLinter` and install it.
 * Search for `SublimeLinter-contrib-eslint` and install it as well.
 * Restart Sublime.

 *Note: In the next section you'll configure eslint. If you install eslint into the same directory you are modifying Sublime files from (and same machine), then Sublimelinter will have no problem using it. Or you can also install eslint (and all the other eslint-* packages) globally on the same machine as Sublime. But if you are using a server or a virtual machine (Vagrant/Virtualbox) configuration, then you need to tell sublimelinter where eslint is. You can change the path with `Sublime Text -> Prefences -> Package Settings -> SublimeLinter -> Settings-User`.*


## ESLint

#### Configure ESLint

Most projects I've seen prefer the [Standard](https://standardjs.com/) preset (aka "The one without semicolons") so I've selected that for this example project. Vue also has some recommended rules that you can add via the beta `eslint-plugin-vue`, but I did not use this plugin yet because unfortunately Pug templates are not working at the moment (see [issue #165](https://github.com/vuejs/eslint-plugin-vue/issues/165)).  

Now open up your **eslintrc.js** file and you'll see what Vue cli generated for this project:

**eslintrc.js**  

```js
// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}

```

- The parser is Babel's ESLint plugin (we'll talk about Babel and its configuration later in this tutorial).
- We're using the `Standard` preset.
- `env.browser` to true so we can use browser globals (such as `window` or `localStorage`) and the linter will not complain that it is undefined. 
-  Some small customizations added.


#### ESLint Ignore File

You can tell ESLint to [ignore specific files and directories](http://eslint.org/docs/user-guide/configuring.html#ignoring-files-and-directories) by using an `.eslintignore` file in your project’s root directory: 

**.eslintignore**

    build/*.js
    config/*.js

The ignore patterns behave according to the `.gitignore` specification.  Don't forget to restart your editor after changes.

## PWA Configuration

There's a few things you need to adjust for a PWA:

#### Manifest.json

 

## Styling  

#### Install Sass and Stylus

Let's install Sass *(for working with Vendors)* and Stylus *(for cleaner syntax in our own styles)* and their respective loaders for Webpack:  

	npm install sass-loader node-sass stylus stylus-loader --save-dev 	

*Note:  For Sublime Text 3 (not needed for VS Code), you'll need to also install Stylus globally for the editor to work with the syntax:*  

	$ npm install stylus -g  #Install stylus globally for Sublime.
	$ stylus -V  #This confirms that stylus has been added to your path, if not, you need to do so for it to work correctly with Sublime.

#### Load Variables and Functions to All Components  

It's [not well documented](https://github.com/shama/stylus-loader#using-nib-with-stylus), but you can load all your Stylus variables/functions/mixins to all your Vue components easily. (Because we aren't loading any actual styles here, we won't have any files unnecessarily exported in our final CSS multiple times). Update the following `stylus` and `styl` properties in the `return` statement here:  

**build/utils.js**
```js
exports.cssLoaders = function (options) {  
  // ...  

  return {
    // ...
    stylus: generateLoaders('stylus', { import: ['~src/styles/stylus/utils/utils.styl'] }),
    styl: generateLoaders('stylus', { import: ['~src/styles/stylus/utils/utils.styl'] })
  }
}
```

#### Overriding Styles in Vendor Components

Whenever you need to override some vendor styles (even if the vendor has them scoped in a component), you can just increase the [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) of your CSS by adding a document-level `#app` to your styles.  This is easily done with Stylus.  You just need to add `#app` to the top of the file.  

#### Sass Folder Structure
Since we're using Stylus, we'll just have a few Sass files to handle vendor variables and imports. Sass (particularly SCSS) is very popular, so it's good to have a folder specifically for loading vendor packages who use this language. You can load them and override any variables here.   

Here's a breakdown of the Sass directory structure found in `src/styles/scss`:

| File   | Description  |
|--------|--------------|
|  **_variables.scss**  |  Add overrides for vendor variables here.  For new variables, use the Stylus folder instead.  I've added some Buefy/Bulma variables already here.  The underscore denotes that this file is a sub-module and would not be loaded directly at the project's entry point.  |
| **_vendor.scss** | Load up your vendor SCSS files here, in the order you want them.  Here's where we load up Buefy/Bulma styles. |

 **main.scss**   
Collects all your Sass files and arranges them in the correct loading order you want. (For example, variables would be loaded first):

```scss
	@import '_variables';
	@import '_vendor';
```  

#### Stylus Folder Structure
Stylus is the syntax of the future.  Even though this project depends on packages still using SCSS, we can go forward in our own work by using Stylus. Typically I will take the variables in `_variables.scss` that are important to me and create equivalents in Stylus. This is a bit redundant but it does create a nice bounded context for you. If vendor Sass variables change, your Stylus files don't need immediate updating since they don't directly depend on the Sass variables.  Whenever you cross a bridge to newer/improved technology there's usually extra crossover code involved.  

Here's a breakdown of the Stylus directory structure found in `src/styles/stylus`:

|Folder      | File   | Description  |
|------------|--------|--------------|
|**utils/** |  utils.styl  |  Entry point for the folder. Contains all files we need to load before any other styles are loaded (preprocessor utilities and variables).  We'll also import this into every Vue component. |
| |  variables.styl  |  Variables (ie. theming). |
| |  functions.styl  |  Functions. |
| |  mixins.styl  |  Mixins. | 
|**base/** |  base.styl | Entry point for the folder. Contains all the files for normalizing across browsers, generic HTML tag styling, resets, etc. |
| | generic.styl | Any rules you want to set for generic HTML tags. Since we're using Bulma in this project, this is mostly taken care of [here](https://github.com/jgthms/bulma/blob/master/sass/base/generic.sass). |
| | helpers | Put helper classes here. Add anything you want to add that [Bulma doesn't offer](https://github.com/jgthms/bulma/blob/master/sass/base/helpers.sass). Remember to prefix our own helpers so we can know which is which throughout our app.
| | reset.styl |  Browser normalization here. Add anything you want to build on top of [Bulma's reset](https://github.com/jgthms/bulma/blob/master/sass/base/minireset.sass). |
| | transitions.styl | Just a place you can put all your transitions.
| **components/** | components.styl | Entry point for the folder. Contains all files we need for CSS-only components (Vue component styles are placed directly into the `.vue` files). A card or panel might be an example of a component. |
| **elements/** | elements.styl | Entry point for the folder. Contains all the files we need for CSS-only elements. A link or a button might be an example of an element.|   
| **vendor/** | vendor.styl | Entry point file that contains all the style imports from vendor packages.  

 **main.styl**   
Collects all your Stylus files and arranges them in the correct loading order you want. (For example, variables would be loaded first):  

```stylus
	@import 'utils'
	@import 'vendor'
	@import 'base'
	@import 'elements'
	@import 'components'
```

Finally, bring these files into your main project entry point:  

**src/main.js**  

```javascript
require('./styles/scss/main.scss')
require('./styles/stylus/main.styl')
```

#### BEM Methodology  

Read up on BEM. Or just read [this](https://css-tricks.com/bem-101/) and [this](https://www.smashingmagazine.com/2016/06/battling-bem-extended-edition-common-problems-and-how-to-avoid-them/).

**TL;DR**   

This is BEM:  
```css
	/* Block component */
	.btn {}
	
	/* Element that depends upon the block */ 
	.btn__price {}
	
	/* Modifier that changes the style of the block */
	.btn--orange {} 
	.btn--big {}
```
```html
	<a class="btn btn--big btn--orange" href="http://css-tricks.com">
	  <span class="btn__price">$9.99</span>
	  <span class="btn__text">Subscribe</span>
	</a>
```
Something a little more complicated (and let's use Stylus and Pug):  

```stylus
    // The component (with project namespace "my-").
	.my-list
	    padding: 40px 0
		background-color: white
		color: black
		
	  // A list variation. A dark list.	
	  &--dark
	    background-color: black
		color: white
		
      // A list element.
	  &__item
        text-align: center
        height: 50px
        
        // A list item variation.
        &--nav
          cursor: pointer

        // A list item variation, but one that is from a general set
        // typically used by Javascript (ie. active, disabled, etc.).
        // Demonstrates that BEM is a guide, not law.  
	    .my-active
	      cursor: auto
	      background-color: grey
	    
      // Another list element (even though it's underneath .my-list__item)
      &--avatar
        border-radius: 50%
```

```pug
    // Pug template
	#app
	  .my-list.my-list--dark
	    .my-list__item.my-list--nav.my-active Home
	    .my-list__item.my-list--nav About
	    .my-list__item.my-list--nav Contact Us
	      img.my-list__avatar(src='/images/phone.png')
```

Don't do this:  

```css
	.nav .nav__list-item .btn--orange {
	  background-color: green;
	}
```
Who needs HTML elements? Let's go all classes...  

Take Bulma as an example, where nothing depends on the HTML element tag.  This doesn't mean you can't or shouldn't use HTML elements, but frees you from that restriction.  It's perfectly fine to use elements in your template or even for selectors underneath scoping BEM classes (and sometimes you have to do to access vendor components) :  

```stylus
	.navbar
	  
      &__hamburger
	    float: right
	    
	    i
	      font-size: 32px
```	  

#### Use BEM Instead of Scoped in .Vue Files

To avoid collisions/confusion from vendor styles, your own global styles, or parent/children styles in your Vue components, use BEM naming instead of Vue-loader's scoped attribute:  `<style scoped>`.  If you use BEM in both Vue components and also CSS-only components/elements, then you have full project consistency!  


> *WIthout a naming methodology like BEM, you're more likely to name stuff in your Vue file that could collide with vendor CSS rules (or even your own global rules). Imagine a `.btn` in your Vue file's template. Who owns it? Maybe you prefix it, so you have `.my-btn` so you know it's yours. But is that one of your global generic button styles, or one specific to this component? So you rename it `.my-foo-btn`. Hmmm. Look familiar (cough...BEM...cough)?*

## Pug

#### Install Pug

```js
npm install pug@2.0.0-rc.4 pug-loader --save-dev
```

#### Comparison with HTML

this is html

this is pug

## Understanding Global

Before we advance on in this tutorial, it's important you understand the different ways we can make code global in Webpack 2/3.  

#### Webpack Evaluates Modules Only Once  

Webpack evaluates modules only once, so your instance remains global and carries changes through from module to module. So if you create something like a `globals.js` and export an object of all your globals then you can `import './globals'` and read/write to these globals. You can import into one module, make changes to the object from a function and import into another module and read those changes in a function. Also remember the order things happen. Webpack will first take all the imports and load them up in order starting in your entry point `main.js`. Then it will execute `main.js`. So where you read/write to globals is important. Is it from the root scope of a module or in a function called later?

#### ProvidePlugin

Here's how you can do it using Webpack's [ProvidePlugin](https://webpack.github.io/docs/shimming-modules.html#plugin-provideplugin) (which makes a module available as a variable in every module and only those modules where you actually use it). This is useful when you don't want to keep typing `import Bar from 'foo'` again and again. Or you can bring in a package like jQuery or lodash as global here. 

Create any module (for example, a global set of utilities would be handy):

**utils.js**

    module.exports = {

      sayHello () {
        alert("hello")
      }
    }

Then alias the module and add to ProvidePlugin:

**webpack.config.js**

    var webpack = require("webpack");
    var path = require("path");

    // ...

    module.exports = {

      // ...

      resolve: {
        extensions: ['', '.js'],
        alias: {
          'utils': path.resolve(__dirname, './utils')  // <-- When you build or restart dev-server, you'll get an error if path is incorrect.
        }
      },

      plugins: [

        // ...

        new webpack.ProvidePlugin({
          'utils': 'utils'
        })
      ]  

    }

Now just call `utils.sayHello()` in any js file and it should work. Make sure you restart your dev-server if you are using that with Webpack.  

*Note: Don't forget to tell your linter about the global, so it won't complain. For example, see my [answer for ESLint here][3].*

#### DefinePlugin

If you just want to use const with string values for your globals, then you can use Webpack's [DefinePlugin](https://webpack.js.org/plugins/define-plugin/). Add this plugin to your list of Webpack plugins:

    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
      VERSION: JSON.stringify("5fa3b9"),
      BROWSER_SUPPORTS_HTML5: true,
      TWO: "1+1",
      "typeof window": JSON.stringify("object")
    })

Use it like:

    console.log("Running App version " + VERSION);
    if(!BROWSER_SUPPORTS_HTML5) require("html5shiv");

#### The Global Window Object

    window.foo = 'bar'

#### Dotenv Package

The [dotenv package](https://github.com/motdotla/dotenv) will take a local configuration file (which you could add to your .gitignore if there are any keys/credentials) and adds your configuration variables to Node's [process.env](https://nodejs.org/api/process.html#process_process_env) object.  

    // As early as possible in your application, require and configure dotenv.    
    require('dotenv').config()

Create a `.env` file in the root directory of your project. Add environment-specific variables on new lines in the form of `NAME=VALUE`. For example:

    DB_HOST=localhost
    DB_USER=root
    DB_PASS=s1mpl3

That's it.

`process.env` now has the keys and values you defined in your `.env` file.

    var db = require('db')
    db.connect({
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASS
    })


## UI Frameworks  

#### Buefy and Bulma 
https://buefy.github.io  
http://bulma.io

I went with Buefy for this project's repo. Buefy is a lightweight set of Vue 2.x components built on the Bulma CSS-only framework. Here's some benefits:  

- Buefy ships with Bulma, which is great because you have a CSS-only framework for you to customize and easily style more of your own components with.  
- Buefy/Bulma has a more complete set of elements and components to get your UI kickstarted as opposed to Twitter's Bootstrap 4 (currently still in beta).  
- **No jQuery** and the CSS is nicely seperated from the JS concerns.  
- Icons. With Buefy, you can easily choose between icons from Material Design (default) or Font-Awesome ([Bootstrap has removed icons](https://getbootstrap.com/docs/4.0/extend/icons/)). With Bulma, you also have a good CSS framework to fallback to and use with whatever icons you want. You can use Buefy's icon component when desired and switch to your own icons with Bulma CSS (or copy/decorate Buefy's icon component and update with more props to cover additional icon needs).
- The Vue components in Buefy are easy to understand and not over-engineered.  
- There's a Datepicker included.  

Let's install it:  

	npm install buefy --save-dev	


----------

*NOTE:  if you look in your `/src/node_modules` folder you'll notice Buefy installed Bulma for you.*  

----------


#### Twitter Bootstrap 4 and jQuery
https://getbootstrap.com

I've talked to recruiters in the web-dev world and more and more are saying "jQuery" is kind of a bad word on a resume now. If you want to use Bootstrap, there are ways to use it without jQuery (see further down).  But if you must...

Let's install it and its peers:  

```shell
npm install bootstrap@4.0.0-beta jquery-slim popper.js 

```


----------

*Update:  Bootstrap has actually updated their documentation to give clear instruction on [setting it up with Webpack](https://getbootstrap.com/docs/4.0/getting-started/webpack/#importing-javascript).*

----------

You'll need to use Webpack's [ProvidePlugin](https://webpack.js.org/plugins/provide-plugin/) to make Bootstraps peer dependencies available as a global variable (whenever referenced). In other words, you don't need to explicitly `import jquery` anywhere.  Just use the identifier (`$`) set in the ProvidePlugin and Webpack will automatically load the export of the module.  Add the plugin to the plugins section in both your dev and prod build config files:

**build/webpack.dev.conf.js**
**build/webpack.prod.conf.js**

```javascript
  plugins: [
    // ...
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default'],
        // ...
      })
    // ...
  ]
```

You'll need to let your Linter know about this global or it will complain. Add the `globals` field:  

**eslintrc.js**  

```js
 module.exports = {

  // ...
  
  globals: {
    '$': true,
    'jQuery': true,
    'Popper': true
  },
  
  // ... 
}
```
  
Now just import Bootstrap into your main entry:  

**src/main.js**  

```js
import 'bootstrap'
```

Then import the styles (note: `~` is shorthand for the `node_modules` directory):  
```scss
@import "~bootstrap/scss/bootstrap";
```
  
#### Some Other Great Choices  

**Vuetify**  
https://vuetifyjs.com
If you want something built closest to Material Design spec, then look no other place. I can confirm the author is super talented (I had the honor of doing a few commits in the past). He's been hard at work with each iteration, keeping it lean, fast, and up-to-spec.  

**Boostrap Vue**
https://bootstrap-vue.js.org/
Bootstrap 4 with Vue instead of the jQuery. Has some cool bonus stuff too, like the filterable/etc. table/data-grid component.  

## App Entry

The main entry point for the application:

**src/main.js**  

```js
/* Vue */
import Vue from 'vue'
Vue.config.productionTip = false

/* Router */
import router from './router'

/* Central store */
import store from './vuex'

/* HTTP client */
import VueResource from 'vue-resource'
Vue.use(VueResource)

/* Buefy/Bulma UI Framework */
import Buefy from 'buefy'
Vue.use(Buefy)

/* Styles */
require('./styles/scss/main.scss')
require('./styles/stylus/main.styl')

/* Auth plugin */
import Auth from './auth'
Vue.use(Auth)

import App from './components/app/app'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

```

Update in config.build:
```
    assetsPublicPath: '/example',
```

## Vue Resource HTTP Client

#### Install Dependencies

```shell
npm install vue-resource --save-dev
```

## Routes  

#### Configure Routes


Talk about hash and history mode. hash for github

**src/router/index.js**

```js
import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

/**
 * Guard the route from unauthorized users.
 *
 * @param  {Route}    to   The route we want to access.
 * @param  {Route}    from The route from which we are coming from.
 * @param  {Function} next Callback for passing a route to be called next.
 * @return {void}
 */
function guardRoute (to, from, next) {
  // work-around to get to the Vuex store (as of Vue 2.0)
  const auth = router.app.$options.store.state.auth

  if (!auth.isLoggedIn) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

/**
 * The Router instance containing all the routes for the application.
 */
const router = new Router({
  mode: 'history',
  routes: routes.map(route => ({
    name: route.name,
    path: route.path,
    component: require(`@/components/${route.component}.vue`),
    beforeEnter: route.isPublic ? null : guardRoute
  }))
})

export default router

```
**src/router/routes.js**

```js
/**
 * Every route becomes a chunk, loaded only when used.
 * Reduces size of initial App load.
 */

export default [
  {
    name: 'login',
    path: '/login',
    component: import(/* webpackChunkName: "login" */ '@/components/login/login-page.vue'),
    isPublic: true
  },
  {
    name: 'dashboard',
    path: '/dashboard',
    component: import(/* webpackChunkName: "dashboard" */ '@/components/dashboard/dashboard-page.vue'),
    isPublic: true
  }
]

```

#### Lazy Loading From Chunks
todo


**webpack.prod.conf.js**
change chunkFilename to have `[name]` instead of `[id]`.

```js
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[name].[chunkhash].js')
  },
```

#### Guarding Routes
todo

## Vuex

#### Install Dependencies

```shell
npm install vuex vuex-router-sync --save-dev
```

#### Vuex State

Let's setup the state of our central data storage. We'll want some state to be available accross browser tabs (and when the app is closed/reopened) so let's sync this state with LocalStorage. When the app bootstraps, we want to first check in the browser's localStorage and retrieve all of our previously stored data. We'll also have other state we can use for to make component-to-component communication easier (for situations where you don't have a simple parent-child communication, but more complex sibling-to-sibling or other component relationships). Let's just add a property for storing the search text and button press on the navbar for demonstration purposes. 

**src/vuex/state.js**

```js
/**
 * Key for local storage.
 *
 * Set the key to use in local storage to hold persistant data. If logged in,
 * you can see this key by going to Chrome > dev tools > application tab,
 * then choosing "Local Storage" and "http://localhost:8080".
 *
 * @type {string}
 */
export const STORAGE_KEY = 'vue-example-project'

/**
 * Initialize all the shared app state in Vuex.
 *
 * @return {Object}
 */
function initializeState () {
  let syncedState = {
    auth: {
      isLoggedIn: false,
      accessToken: null,
      refreshToken: null
    },
    user: {
      name: null
    }
  }

  const notSyncedState = {
    sidebar: false,
    currentView: null
  }

  // Sync with local storage.
  if (localStorage.getItem(STORAGE_KEY)) {
    syncedState = JSON.parse(localStorage.getItem(STORAGE_KEY))
  }

  return Object.assign(syncedState, notSyncedState)
}

/**
 * The shared app state in Vuex.
 *
 * @type {Object}
 */
export const state = initializeState()


```

#### Mutations, Getters, and Actions

Now create a file to hold all the methods that will change the state in our Vuex store:

**src/vuex/mutations.js**

```js
/**
 * Update auth data in Vuex.
 *
 * @param  {state} state  The full existing data we have stored in Vuex.
 * @param  {auth}  auth   The new auth data.
 * @return {void}
 */
export const UPDATE_AUTH = (state, auth) => {
  state.auth = auth
}

/**
 * Update user data in Vuex.
 *
 * @param  {state} state The full existing data we have stored in Vuex.
 * @param  {user}  user  The new user data.
 * @return {void}
 */
export const UPDATE_USER = (state, user) => {
  state.user = user
}

/**
 * Open/Close the app sidebar.
 *
 * @param  {state}    state The full existing data we have stored in Vuex.
 * @param  {Boolean}  open  The open/close status.
 * @return {void}
 */
export const UPDATE_SIDEBAR = (state, open) => {
  state.sidebar = open
}

/**
 * Update the current view (used to navigate back/forth to child pages).
 *
 * @param  {state}    state The full existing data we have stored in Vuex.
 * @param  {Boolean}  open  The open/close status.
 * @return {void}
 */
export const UPDATE_CURRENT_VIEW = (state, view) => {
  state.currentView = view
}

/**
 * Clear each property, one by one, so reactivity still works.
 *
 * @param  {state} state  The full existing data we have stored in Vuex.
 * @return {void}
 */
export const CLEAR_ALL_DATA = (state) => {
  // Auth
  state.auth.isLoggedIn = false
  state.auth.accessToken = null
  state.auth.refreshToken = null

  // User
  state.user.name = ''
}

```

And some getters (although you can accesss the Vuex state directly as we'll see shortly):

**src/vuex/getters.js**  

```js
export const user = state => state.user
```

We'll also go ahead and add an actions file (but leave it empty for this project since we don't need it):

**src/vuex/actions.js**

```js
// Here is where you can put async operations.
// See the Vuex official docs for more information.

// ...

```

#### Plugins
Plugins offer a nice approach to hook into mutations and do things like logging or syncing with another store such as `localStorage` or `websockets`:

**src/vuex/plugins.js**

```js
import { STORAGE_KEY } from './state'

/**
 * @param  {Vuex}
 * @return {Function}
 */
const localStoragePlugin = store => {
  store.subscribe((mutation, state) => {
    const syncedData = { auth: state.auth, user: state.user }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(syncedData))

    if (mutation.type === 'CLEAR_ALL_DATA') {
      localStorage.removeItem(STORAGE_KEY)
    }
  })
}

/**
 * Export an array of all the plugins.
 *
 * @type {array}
 */
export default [localStoragePlugin]

```

### index.js

And bring it all together in the index.js file:

**src/vuex/index.js**

```js
import Vue from 'vue'
import Vuex from 'vuex'
import { state } from './state'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
import plugins from './plugins'

Vue.use(Vuex)

/**
 * All the parts we need to implement shared state across our app with Vuex.
 *
 * @type {Vuex}
 */
const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins
})

/**
 * Export the store object.
 *
 * @type {Vuex}
 */
export default store

```
## Authentication

Now let's add our auth script. Here we handle getting **OAuth2** access_tokens and automatically refreshing them.

**src/utils/auth.js**

```js
import Vue from 'vue'
import router from './router'
import store from './store'

/**
 * @var{string} LOGIN_URL The endpoint for logging in. This endpoint should be proxied by Webpack dev server
 *    and maybe nginx in production (cleaner calls and avoids CORS issues).
 */
const LOGIN_URL = '/auth'

/**
 * @var{string} REFRESH_TOKEN_URL The endpoint for refreshing an access_token. This endpoint should be proxied
 *    by Webpack dev server and maybe nginx in production (cleaner calls and avoids CORS issues).
 */
const REFRESH_TOKEN_URL = '/auth'

/**
 * TODO: This is here to demonstrate what an OAuth server will want. Ultimately you don't want to
 * expose a client_secret here. You want your real project backend to take a username/password
 * request and add the client secret on the server-side and forward that request
 * onto an OAuth server. Your backend acts as a middle-man in the process, which is better, for
 * example in situations like DDoS attacks.
 *
 * @var{Object} AUTH_BASIC_HEADERS The options to pass into a Vue-resource http call. Includes
 *    the headers used for login and token refresh and emulateJSON flag since we are hitting an
 *    OAuth server directly that can't handle application/json.
 */
const AUTH_BASIC_HEADERS = {
  headers: {
    'Authorization': 'Basic ZGVtb2FwcDpkZW1vcGFzcw==' // Base64(client_id:client_secret) "demoapp:demopass"
  },
  emulateJSON: true
}

/**
* Auth Plugin
*
* (see https://vuejs.org/v2/guide/plugins.html for more info on Vue.js plugins)
*
* Handles login and token authentication using OAuth2.
*/
export default {

  /**
   * Install the Auth class.
   *
   * Creates a Vue-resource http interceptor to handle automatically adding auth headers
   * and refreshing tokens. Then attaches this object to the global Vue (as Vue.auth).
   *
   * @param {Object} Vue The global Vue.
   * @param {Object} options Any options we want to have in our plugin.
   * @return {void}
   */
  install (Vue, options) {
    Vue.http.interceptors.push((request, next) => {
      const token = store.state.auth.accessToken
      const hasAuthHeader = request.headers.has('Authorization')

      if (token && !hasAuthHeader) {
        this.setAuthHeader(request)
      }

      next((response) => {
        if (this._isInvalidToken(response)) {
          return this._refreshToken(request)
        }
      })
    })

    Vue.prototype.$auth = Vue.auth = this
  },

  /**
   * Login
   *
   * @param {Object.<string>} creds The username and password for logging in.
   * @param {string|null} redirect The name of the Route to redirect to.
   * @return {Promise}
   */
  login (creds, redirect) {
    const params = { 'grant_type': 'password', 'username': creds.username, 'password': creds.password }

    return Vue.http.post(LOGIN_URL, params, AUTH_BASIC_HEADERS)
      .then((response) => {
        this._storeToken(response)

        if (redirect) {
          router.push({ name: redirect })
        }

        return response
      })
      .catch((errorResponse) => {
        return errorResponse
      })
  },

  /**
   * Logout
   *
   * Clear all data in our Vuex store (which resets logged-in status) and redirect back
   * to login form.
   *
   * @return {void}
   */
  logout () {
    store.commit('CLEAR_ALL_DATA')
    router.push({ name: 'login' })
  },

  /**
   * Set the Authorization header on a Vue-resource Request.
   *
   * @param {Request} request The Vue-Resource Request instance to set the header on.
   * @return {void}
   */
  setAuthHeader (request) {
    request.headers.set('Authorization', 'Bearer ' + store.state.auth.accessToken)
    // The demo Oauth2 server we are using requires this param, but normally you only set the header.
    /* eslint-disable camelcase */
    request.params.access_token = store.state.auth.accessToken
  },

  /**
   * Retry the original request.
   *
   * Let's retry the user's original target request that had recieved a invalid token response
   * (which we fixed with a token refresh).
   *
   * @param {Request} request The Vue-resource Request instance to use to repeat an http call.
   * @return {Promise}
   */
  _retry (request) {
    this.setAuthHeader(request)

    return Vue.http(request)
      .then((response) => {
        return response
      })
      .catch((response) => {
        return response
      })
  },

  /**
   * Refresh the access token
   *
   * Make an ajax call to the OAuth2 server to refresh the access token (using our refresh token).
   *
   * @private
   * @param {Request} request Vue-resource Request instance, the original request that we'll retry.
   * @return {Promise}
   */
  _refreshToken (request) {
    const params = { 'grant_type': 'refresh_token', 'refresh_token': store.state.auth.refreshToken }

    return Vue.http.post(REFRESH_TOKEN_URL, params, AUTH_BASIC_HEADERS)
      .then((result) => {
        this._storeToken(result)
        return this._retry(request)
      })
      .catch((errorResponse) => {
        if (this._isInvalidToken(errorResponse)) {
          this.logout()
        }
        return errorResponse
      })
  },

  /**
   * Store tokens
   *
   * Update the Vuex store with the access/refresh tokens received from the response from
   * the Oauth2 server.
   *
   * @private
   * @param {Response} response Vue-resource Response instance from an OAuth2 server.
   *      that contains our tokens.
   * @return {void}
   */
  _storeToken (response) {
    const auth = store.state.auth
    const user = store.state.user

    auth.isLoggedIn = true
    auth.accessToken = response.body.access_token
    auth.refreshToken = response.body.refresh_token
    // TODO: get user's name from response from Oauth server.
    user.name = 'John Smith'

    store.commit('UPDATE_AUTH', auth)
    store.commit('UPDATE_USER', user)
  },

  /**
   * Check if the Vue-resource Response is an invalid token response.
   *
   * @private
   * @param {Response} response The Vue-resource Response instance received from an http call.
   * @return {boolean}
   */
  _isInvalidToken (response) {
    const status = response.status
    const error = response.data.error

    return (status === 401 && (error === 'invalid_token' || error === 'expired_token'))
  }
}

```

Checkout out `Login.vue` component to see how we use `Auth`. Also take a look at `Dashboard.vue` component, you can see the Vue-resource http interceptors let us not worry about including authorization headers in our AJAX calls. The interceptors also take care of refreshing tokens behind the scenes. See the comments marked "TODO" for some caveats with this demo and your own project. I hope to update this demo using a Node Express OAuth2 server for better demonstration of Auth flow. 

## Proxy Api Calls in the Dev Server

When using Webpack for Hot Reloading, we'll need to tell the webpack dev server that `/api` calls need to be reverse proxied to another server (ie. running on node express, nginx, or some embedded server in your IDE). For production you would just use nginx to do the proxying. The big advantage is we don't have to worry about CORS and also we don't expose the true API endpoints to the client (better protection from DDoS attacks).

Notice in `build/dev-server.js` this line:

```js
// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})
```
  
In this setup we are using: https://github.com/chimurai/http-proxy-middleware (you can see examples there). So let's add options to our config to make this work:

In `config/index.js`, update the *proxyTable* object to look like this:

```js
dev:  {

    // ...
    
    proxyTable: {
      '/auth': {
        // @TODO: You need to replace this with your own backend API.
        // Demo OAuth2 server https://github.com/bshaffer/oauth2-demo-php.
        target: 'http://brentertainment.com/oauth2/lockdin/token',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/auth': ''
        },
        router: {
        }
      },
      '/api': {
        target: 'http://brentertainment.com/oauth2',  // <-- Api server.
        changeOrigin: true,                           // <-- For virtual hosted sites.
        ws: true,                                     // <-- Proxy websockets.
        pathRewrite: {
         // Rewrite path localhost:8080/api to http://brentertainment.com/oauth2/lockdin.
          '^/api': '/lockdin'
        },
        router: {
          // when request.headers.host == 'dev.localhost:3000',
          // override target 'http://www.example.org' to 'http://localhost:8000'
          // 'dev.localhost:3000': 'http://localhost:8000'
        }
      }
    },
    
    // ...
}
```
      
## Components

#### Directory Structure

Delete the `App.vue` file located in /src folder:

```shell
$ rm App.vue
```
  
In the `/src/components` folder create the following folders and files (just refer to this repo for the contents of these files):

```
/src
  /components
    /app
       app.vue
       footer.vue
       nav.vue
    /common
       countries.data.js
    /dashboard
       dashboard-page.vue
    /login
       login-page.vue
    /signup
       signup-page.vue
```

Here we use a folder for each "page" in our SPA. This allows us to represent "pages" with more than a single Vue component file. We can add other supporting files like other Vue components, .js files, or data/json files. To differentiate a page component from other components, we suffix it with `-page`. There's also a `common` folder to put any components we feel don't necessarily belong to a page. . If over time you feel there are too many folders, you can group pages into folders and use nested folders.

----------

*Note: The reason for the **snake-case** file naming is because some operating systems are not case-sensitive.*  

----------


## Fonts and Font-Awesome

Add to index.html:
```html
<link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">
```

Install packages (if you haven't already from earlier section ):

```
npm install roboto-fontface --save-dev
```

Then add `_fonts.scss` stylesheet. We'll setup your fonts and also `font-awesome` here:

#### src/assets/style/_fonts.scss

```scss
/* Font Awesome */
$fa-font-path: '../../../node_modules/font-awesome/fonts';
@import '../../../node_modules/font-awesome/scss/font-awesome';

/* Roboto */
@import '../../../node_modules/roboto-fontface/css/roboto/sass/roboto-fontface';

```

## Images and Other Assets

Create an images folder at `src/assets/images` then cut an paste the Vue `logo.png` file that resides in the assets folder by default. The Navbar component uses a relative link to this image, which Webpack will resolve for us automatically.

You can read more about static assets here: https://vuejs-templates.github.io/webpack/static.html

## Chunking  

todo

## Unit Testing and End-to-End Testing

Make sure you installed `babel-polyfill` earlier in this tutorial or es6 promises won't work in PhantomJS. If you didn't, you can install it with:  

```shell
npm install babel-polyfill --save-dev 
```

Then update your `test/unit/karma.conf.js` file to include the polyfill:


**test/unit/karma.conf.js**

```js

    //...

    files: [
      '../../node_modules/babel-polyfill/dist/polyfill.js',
      './index.js'
    ],
```

A unit test is included from the Webpack template already. It's a simple example that tests the content outputted from the Hello vue component:

**test/unit/specs/Hello.spec.js**

```js
import Vue from 'vue'
import Hello from 'src/components/Hello'

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Hello)
    })
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})

```

#### End-to-End Testing with Nightwatch and Selenium server

I find End-to-End testing and Integration testing even more beneficial. Vue-cli has put together a nice setup that includes Nightwatch.js (which uses Selenium and a Chrome driver) for e2e testing right out of the box. Let's remove the existing test located at `test/e2e/specs/test.js` since it will no longer work with the changes we have made. Let's add a new test that tests that our login form works and that we can reach the dashboard:

**test/e2e/specs/loginTest.js**

```js
// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

/**
 * Test that user can login and see dashboard.
 */
module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)

      // Assert that user can see login.
      .assert.elementPresent('.login')
      .setValue('.js-login__username', 'demouser')
      .setValue('.js-login__password', 'testpass')
      .click('.js-login__submit')
      .pause(1000)

      // Assert that user can see dashboard.
      .assert.containsText('.ev-dashboard__heading h1', 'This is the dashboard')
      .pause(2000)
      .end()
  }
}

```

*Note: You may wish to add another `assert` that asserts the dashboard is unreachable when a user is logged out.*

#### Running the Tests

Now let's run both the unit test and the e2e test. Make sure you are in your project directory, then:

```shell
npm run test
```

You should see some output initially showing the results of each unit test ran:

> Hello.vue  
    ✓ should render correct contents  
    ...  
    PhantomJS 2.1.1 (Linux 0.0.0): Executed 1 of 1 SUCCESS (0.018 secs / 0.004 secs)
TOTAL: 1 SUCCESS     
    
Then the Selenium server will fire up Chrome browser and run the e2e tests to see if those pass:

>  ✔ Element <#app> was visible after 65 milliseconds.  
 ✔ Testing if element <.ev-login> is present.  
 ✔ Testing if element <.ev-dashboard__heading> contains text: "This is the dashboard".  
 ...  
OK. 3 assertions passed. (18.522s)  

You can of course run unit tests and e2e tests seperately with: `npm run unit` and `npm run e2e`.

## Dev Server

Run the dev server:

```shell
$ cd ~/example-vue-project 
$ npm run dev
```

Open your browser and visit http://localhost:8080 . You should see something like this:
    
          
<img src="docs/images/home-page.png" width=1200 />

## Vue Dev Tools

Visit the Chrome Web Store to get the [Vue Dev Tools extension](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)  for helping debug Vue.js applications.

Once installed, Open Chrome dev tools and go to the "Vue" tab.

#### Vuex Tab
If you click on the "Vuex" tab, you can see all data from the store in the right pane. Click the `export button` to copy the data to the clipboard. Click the `import button` and paste the clipboard data there. 

For example, you can alter the *accessToken* to something invalid (to simulate an expired *oauth access_token* without waiting on actual expiration) in the pasted data. Then click the `import button` again and the Vuex store will live update. Now you can confirm that the automatic refreshToken interceptor works.

## Create and Publish a Library for Other Developers to Use

So now you want to go further and develop a component that others can `npm install` and import into their own project?  
Here you go: https://github.com/prograhammer/vue-library-template  

## Quick Learning Webpack Resources

- SurviveJs: https://survivejs.com/webpack/introduction/  
- Official Webpack Tutorial: https://webpack.js.org/guides/get-started/  

