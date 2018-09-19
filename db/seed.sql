insert into categories
(product_type)
VALUES
('hats'),('shirts'),('bags'),('hoodies'),('mugs');

insert into products
(name, price, description, product_type, category_id)
VALUES
('Generic Mug', 4.99, 'This generic mug is dumb and therefore occupying dumby data in my database for tests', 'mugs', 5 );

insert into imgs
(name, frontal_img, back_img, main, product_id)
VALUES
('Generic Mug','https://images-na.ssl-images-amazon.com/images/I/41%2BgSo%2Bmq-L._SL500_AC_SS350_.jpg','https://images-na.ssl-images-amazon.com/images/I/41%2BgSo%2Bmq-L._SL500_AC_SS350_.jpg',true, 1 ;

insert into users
(first_name, last_name, auth_id)
VALUES
('Brady', 'Snuggs', 1);

