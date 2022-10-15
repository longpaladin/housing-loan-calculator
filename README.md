# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Completed Base features:

Property type (dropdown list):

- a simple dropdown list to note that type of housing that you are calculating for: either "HDB" or "Private Property"
- has no implication on the calculation at all

Loan amount (input field):

- minimum amount of $100,000
- maximum amount of $99,999,999
- assume calculation in SGD only
- regex present to validate input, else error message will show

Interest rate (input field):

- positive numbers only
- up to 2 decimal places
- regex present to validate input, else error message will show

Loan Tenure (input field):

- minimum of 1 year
- maximum of 30 years
- regex present to validate input, else error message will show

Calculate (button):

- disabled when input fields are not completely filled - not done yet? should I do?
- enabled when all input fields are completely filled - error messages? or disable button?
- generates a table of yearly repayment based on inputs, immediate update if there are changes
- separates principal & interest repayments, able to view yearly leftovers

Reset (button):

- clears all the input fields to 0 or nothing

## Bugs present

- During first load, if press reset, input field words overlap with number 0 in "interest rate & loan tenure"

## Possible fine-tuning to dos:

- find ways (library) to put commas in the big numbers in input fields
- header split left and right
- refactor code if possible

## Completed fine tunes & extra features:

- button to link to CPF calculator
- layout of app, responsive design, flexbox or grid in MUI
- remove magic numbers
- add in comments on how the app works
- Graph to visualise repayments over the years, using Chartjs library
- Save PDF copy into computer using a button, using @react-pdf/renderer library
