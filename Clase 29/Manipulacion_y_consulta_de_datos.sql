SELECT * FROM albumes;

SELECT * FROM clientes;

SELECT * FROM clientes 
WHERE pais LIKE "USA";

SELECT * FROM canciones
WHERE milisegundos between 200000 AND 300000;

SELECT * FROM clientes
WHERE pais = "Spain" 
OR pais = "Argentina";

SELECT * FROM generos
ORDER BY nombre ASC;

SELECT * FROM clientes
order by pais DESC, ciudad DESC;

SELECT * FROM canciones
WHERE compositor LIKE "A%";

SELECT * FROM generos
WHERE nombre LIKE "%ro%";

SELECT * FROM canciones
WHERE id BETWEEN 10 AND 20;

SELECT * FROM canciones
ORDER BY milisegundos DESC
LIMIT 3;

SELECT * FROM canciones
ORDER BY nombre ASC
LIMIT 5
OFFSET 5;

SELECT nombre AS "nombres_de_medio" FROM tipos_de_medio;

SELECT CONCAT("La canción ", nombre, " fue compuesta por ", compositor) FROM canciones;

SELECT extract(month from fecha_factura)  FROM facturas
WHERE id_cliente = 2
ORDER BY fecha_factura DESC;