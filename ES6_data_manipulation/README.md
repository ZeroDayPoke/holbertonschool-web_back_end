# Holberton School Web Back End - ES6 Data Manipulation

## Description

This project is focused on data manipulation using ES6 features in JavaScript. It includes a variety of exercises that demonstrate the use of arrays, sets, maps, and typed arrays, along with common operations like filtering, mapping, and reducing. The project serves as a learning tool for understanding modern JavaScript data manipulation techniques.

## Files

### Main Files

- `0-get_list_students.js`: Returns an array of student objects.
- `1-get_list_student_ids.js`: Extracts and returns an array of student IDs from a list of student objects.
- `2-get_students_by_loc.js`: Filters a list of students by a specified location.
- `3-get_ids_sum.js`: Calculates the sum of student IDs.
- `4-update_grade_by_city.js`: Updates and returns student grades based on city and new grade data.
- `5-typed_arrays.js`: Creates and returns a typed array with a specific value at a given position.
- `6-set.js`: Converts an array to a Set object.
- `7-has_array_values.js`: Checks if all elements in an array exist within a given Set.
- `8-clean_set.js`: Cleans a Set by removing elements that do not start with a specified string.
- `9-groceries_list.js`: Creates and returns a grocery list using a Map.
- `10-update_uniq_items.js`: Updates values in a Map that are unique (value of 1).

### Test and Example Files

- `0-main.js`, `1-main.js`, `2-main.js`, `3-main.js`, `4-main.js`, `5-main.js`, `6-main.js`, `7-main.js`, `8-main.js`, `9-main.js`, `10-main.js`: Test files demonstrating the usage of the respective main files.

### Configuration and Setup

- `.eslintrc.js`: ESLint configuration for JavaScript linting.
- `babel.config.js`: Babel configuration for JavaScript transpiling.
- `package.json`: Defines project dependencies and scripts.

## Setup and Execution

### Cloning the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/zerodaypoke/holbertonschool-web_back_end
cd holbertonschool-web_back_end/ES6_data_manipulation
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
