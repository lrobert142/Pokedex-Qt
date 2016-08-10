# Qt TypeScript Boilerplate 
## An opinionated starting point

I've always enjoyed developing applications within the Qt environment. However, it can be have a significant learning curve for new comers
(especially those heading down the C++ route). With the release of QtQuick and QML, Javascript became a 'first class' citizen. Unfortunately,
the ideal support and environment did not.

The Qt TypeScript Boilerplate was created as a way to provide support for:
  - seperating UI from logic
  - full coverage unit testing
  - lower the barrier for Javascript developers

> Note: If you're after a high performance application implementation, consider investigating the native or C++ avenues. 

### Setup

> The setup typically only needs to be followed once. If the source code is already installed there is no need to run
> the setup procedure again.

  1. Install gulp `npm install -g gulp`
  2. Install tsd `npm install -g tsd`
  3. Install mocha `npm install -g mocha`
  
#### Install packages
  
  1. Install node modules `npm install .`
  2. Install typing definitions `tsd install .`
  
### Getting started

With the primary setup tools installed and the necessary packages, execute `gulp test` within the project to initiate a build.
Every change in the `src` folder will trigger gulp to rebuild the TypeScript and unit tests.

A typical development procedure is:
  * Enter `gulp help` to see available gulp tasks
  * Enter `gulp build` to transpile the TypeScript and run the unit tests once.
  * Enter `gulp test` to start a unit test watcher. Watches the `test` and `src` folders for changes. A recompile and all tests will be executed immeadietly.
  * Enter `gulp dist` to execute a build, unit test and version increment wizard.

### Adding 3rd party libraries

To get 3rd party libraries to work, a few oddities are required.

- Install the Node.js version of the library if available. `npm install --save <x>`
- Install the typings for the library. `tsd install --save <x>`
- Install the vanilla (or often browser) variant of the library into the app directory. Prefix the file the `.pragma library` 
  and assign a variable (if the library is self executing). Lodash has been provided as an example.
  > Note: Line 11 changed from the vanilla Javascript to be `;var _ = (function() {`
- Adjust `src/footer.js` to load the Node.js version. This will allow the mocha unit tests to run fluently.
- Adjust `src/qt_header.js` to load Qt version the library.
 
