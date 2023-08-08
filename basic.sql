CREATE DATABASE IF NOT EXISTS biastdb;

CREATE USER 'admin'@'localhost' IDENTIFIED BY 'biast@dmin'; 

GRANT ALL PRIVILEGES ON 'biastdb' TO 'admin'@'localhost' WITH GRANT OPTION;