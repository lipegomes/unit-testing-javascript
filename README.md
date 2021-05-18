# unit-testing-javascript

This repository is for me to date my studies on unit tests in javascript during BootCamp [FullStackMaster](https://devpleno.com):

## Requirements:

- Have [NodeJs](https://nodejs.org/en/download/) and npm installed on your operating system.

- Clone the file, enter the file folder and run the command below to install the dependencies

```
npm install
```

- In package.json add:

  Linux or Mac:

  "test": "./node_modules/.bin/mocha --reporter spec **/*.test.js​"

  "coverage": "node_modules/.bin/istanbul cover node_modules/mocha/bin/_mocha -- --reporter spec **/*.test.js"

  Windows:

  "test": "node_modules\\.bin\\mocha --reporter spec **/*.test.js"

  "coverage": "node_modules\\.bin\\istanbul cover node_modules\\mocha\\bin\\_mocha -- --reporter spec **/*.test.js"


## Run tests

```
npm test
```

![](https://github.com/lipegomes/unit-testing-javascript/blob/main/assets/img/npm_test.png)

## Code coverage

```
npm run coverage
```

![](https://github.com/lipegomes/unit-testing-javascript/blob/main/assets/img/npm_run_coverage.png)

## References

- [chaijs](https://www.chaijs.com/)

- [istanbuljs](https://istanbul.js.org/)

- [mochajs](https://mochajs.org/)

- [sinonjs](https://sinonjs.org/)

## Tools used:

- [Visual Studio Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)
