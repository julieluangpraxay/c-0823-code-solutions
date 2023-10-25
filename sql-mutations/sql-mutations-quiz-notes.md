# sql-mutations-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the SQL _CRUD_ operations?
  Create, Read, Update, Delete
- How do you add a row to a SQL table?
  INSERT INTO dogs(id, name, gender) VALUES (1, 'AXEL', 'M');

- How do you add multiple rows to a SQL table at once?
  INSERT INTO employees (first_name, last_name, age)
  VALUES
  ('John', 'Doe', 30),
  ('Jane', 'Smith', 28),
  ('Bob', 'Johnson', 35);

- How do you update rows in a database table?
  UPDATE table_name
  SET column1 = new_value1, column2 = new_value2, ...
  WHERE condition;

- How do you delete rows from a database table?
  Using Delete
- Why is it important to include a `where` clause in your `update` and `delete` statements?
  DELETE FROM employees; -- Deletes all employees in the table
  DELETE FROM employees WHERE department = 'HR'; -- Deletes employees only from the HR department
  including a WHERE clause in your UPDATE and DELETE statements is a best practice that helps ensure the accuracy and safety of your database operations, as well as the performance and maintainability of your SQL code.
- How do you accidentally delete or update all rows in a table?
  Without using the where clause and only using from
- How do you get back the modified row without a separate `select` statement?
  UPDATE your_table
  SET column1 = 'new_value'
  WHERE your_condition
  RETURNING \*; -- This will return all columns of the modified rows

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
