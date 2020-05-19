This is a simple demo project showing best practices of redux advance.

The functinality of the demo project basically is to  increase, subtract, add a number and store the result or remove it.
By using the buttons:
* Increase: it increases the result by 1
* Decrease: it decreases the result by 1
* Subtract: it subtracts the 5 from the counter
* Store: It stores the result in the state results
* Remove: it removes the result from the state results

Specifically in a technical perspective:
* Adds a midlware simple logger
* Adds Redux DevTools configuration
* Creates action creators
* Handles asychronous code by using the middlware package called [thunk] (https://github.com/reduxjs/redux-thunk)
* Structures the reducers and actions folder as it can be implemented in bigger projects 

## To run the project

In the project directory, you can run:

### `npm install`
It will intall all the required packages from package.json needed for this project

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


