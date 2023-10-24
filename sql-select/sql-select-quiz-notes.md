# sql-select-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is SQL and how is it different from languages like JavaScript?
  Purpose: SQL is specifically designed for managing and querying databases, while JavaScript is a general-purpose programming language used for various application development tasks.

  Declarative vs. Imperative: SQL is declarative, focusing on what data you want to retrieve or manipulate, while JavaScript is imperative, where you specify step-by-step instructions for performing tasks.

  Data vs. Logic: SQL deals with data-related operations, whereas JavaScript is used for creating complex logic, user interfaces, and handling user interactions.

  Usage: SQL is typically used on the server-side for database operations, whereas JavaScript is often used on the client-side for web application interactivity and can also be used on the server-side (Node.js) for various other tasks.

- How do you retrieve specific columns from a database table?
  SELECT column1, column2, ...
  FROM table_name;
  SELECT: This keyword indicates that you want to retrieve data from the database.
  column1, column2, ...: List the names of the columns you want to retrieve. You can specify one or more column names, separating them with commas.
  FROM: This keyword specifies the table from which you want to retrieve data.
  table_name: Replace this with the name of the table from which you want to select data.

- How do you filter rows based on some specific criteria?
  SELECT column1, column2, ...
  FROM table_name
  WHERE condition;
  you can use the WHERE clause in your SQL SELECT statement. The WHERE clause allows you to specify conditions that must be met for a row to be included in the result set

- What are the benefits of formatting your SQL?

Formatting your SQL code improves readability, maintainability, and debugging while ensuring consistency and reducing the risk of errors.

- What are four comparison operators that can be used in a `where` clause?

  = (Equal to): Compares if a value is equal to another value.
  <> or != (Not Equal to): Compares if a value is not equal to another value.
  < (Less Than): Compares if a value is less than another value.

  > (Greater Than): Compares if a value is greater than another value.

- How do you limit the number of rows returned in a result set?
  you can use the LIMIT clause in some database systems like MySQL and PostgreSQL. The LIMIT clause allows you to specify the maximum number of rows to retrieve from the result set.

For example, to retrieve the first 10 rows from a table called "employees," you can use:

SELECT \*
FROM employees
LIMIT 10;

- How do you retrieve all columns from a database table?
  SELECT \*
  FROM table_name;

SELECT _: The asterisk (_) is a wildcard character that signifies "all columns." It instructs the database to retrieve every column in the specified table.

FROM: This keyword indicates the table from which you want to retrieve data.

table_name: Replace this with the name of the table from which you want to select all columns.

- How do you control the sort order of a result set?

SELECT column1, column2, ...
FROM table_name
ORDER BY column_to_sort [ASC | DESC];

you can use the ORDER BY clause in your SELECT statement. The ORDER BY clause allows you to specify one or more columns by which the result set should be sorted and whether the sorting should be in ascending (ASC) or descending (DESC) order.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
