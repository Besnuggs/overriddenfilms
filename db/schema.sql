drop table if exists categories;
create table categories (
category_id SERIAL PRIMARY KEY,
product_type TEXT
);

drop table if exists products;
create table products (
id SERIAL PRIMARY KEY,
name text,
price decimal,
description varchar(120),
product_type TEXT,
category_id integer REFERENCES categories(category_id)
);

drop table if exists imgs;
create table imgs (
id SERIAL PRIMARY KEY,
frontal_img TEXT,
back_img TEXT,
main boolean,
product_id integer REFERENCES products(id)
);

drop table if exists users;
create table users (
user_id SERIAL PRIMARY KEY,
first_name TEXT,
last_name TEXT,
auth_id text
);

drop table if exists cart;
create table cart (
cart_id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES users(user_id),
product_id INTEGER REFERENCES products(id)
);


-- Deleting All At Once:
drop table cart;
drop table users;
drop table imgs;
drop table products;
drop table categories;