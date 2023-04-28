# JS Todo App

An app for exploring JS ORMs and testing around them.

## Intall stuff

npm i -D nodemon

npm i express sqlite3 knex




## Create DB

`sqlite3 todos.db`

```sql
attach database todos.db

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS items;

CREATE TABLE users(
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    firstname TEXT not null,
    lastname TEXT not null
);

CREATE TABLE items(
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    task TEXT not null,
    owner INT not null,
    done BOOL DEFAULT false,
    FOREIGN KEY (owner) REFERENCES users (id) 
);


INSERT INTO users (firstname, lastname) VALUES ('Bob', 'B');
INSERT INTO users (firstname, lastname) VALUES ('Sally', 'S');

INSERT INTO items (task, owner) VALUES ('Get milk', (SELECT id FROM users WHERE firstname='Bob' and lastname="B"));
INSERT INTO items (task, owner) VALUES ('Wash Car', (SELECT id FROM users WHERE firstname='Bob' and lastname="B"));
INSERT INTO items (task, owner) VALUES ('Fold Laundry', (SELECT id FROM users WHERE firstname='Sally' and lastname="S"));
INSERT INTO items (task, owner) VALUES ('Vaccuum', (SELECT id FROM users WHERE firstname='Sally' and lastname="S"));
```

`.exit`