# Holberton School Web Back End: ES6 Promises Project

## Overview

This project delves into ES6 Promises in JavaScript, providing a fundamental understanding of asynchronous programming. It includes a variety of tasks that showcase the creation and handling of promises, error handling with try-catch blocks, and the use of async-await syntax.

## Files Description

- `0-promise.js`: Demonstrates basic promise creation.
- `1-promise.js`: Implements a promise that resolves or rejects based on a condition.
- `2-then.js`: Shows handling of promises with `.then`, `.catch`, and `.finally`.
- `3-all.js`: Uses `Promise.all` for handling multiple promises.
- `4-user-promise.js`: Creates a promise for user sign-up.
- `5-photo-reject.js`: Simulates a promise rejection for photo upload failure.
- `6-final-user.js`: Handles user profile sign-up and photo upload with `Promise.allSettled`.
- `7-load_balancer.js`: Demonstrates the use of `Promise.race` for load balancing.
- `8-try.js`: Implements a function with error handling using a try-catch block.
- `9-try.js`: Encapsulates a function within a try-catch block to handle potential errors.
- `utils.js`: Utility file with functions returning resolved promises.
- `*-main.js`: Main files to test the functionality of each script.

## Requirements

- Node.js
- Babel for ES6 transpilation

## Setup and Execution

### Cloning the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/zerodaypoke/holbertonschool-web_back_end
cd holbertonschool-web_back_end/ES6_promise
```

### Installing Dependencies

Install the necessary Node.js dependencies:

```bash
npm install
```

This will install all dependencies listed in the `package.json` file.

### Running the Scripts

To run a specific script using Babel and Node.js, use the following command:

```bash
npm run dev [script file path]
```

For example, to run the `1-main.js` script:

```bash
npm run dev 1-main.js
```

## Testing

To run the tests for the project using Jest:

```bash
npm run test
```

## ESLint Configuration

The project uses ESLint with Airbnb's base configuration. Custom rules are defined in `.eslintrc.js`.

## Authors

- **Chris Stamper** - [ZeroDayPoke](https://github.com/ZeroDayPoke)

## Acknowledgments

- Holberton School for providing the project guidelines and support.
