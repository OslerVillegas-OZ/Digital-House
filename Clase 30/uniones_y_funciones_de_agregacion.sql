SELECT canciones.nombre
FROM canciones
INNER JOIN generos ON canciones.id_genero = generos.id
WHERE generos.nombre LIKE "ROCK";

SELECT albumes.titulo FROM albumes
INNER JOIN artistas ON albumes.id_artista = artistas.id
WHERE artistas.nombre LIKE "Deep Purple";

SELECT canciones.nombre FROM canciones
INNER JOIN tipos_de_medio ON canciones.id_tipo_de_medio = tipos_de_medio.id
WHERE tipos_de_medio.nombre LIKE "MPEG audio file";

SELECT distinct(empleados.titulo) FROM empleados;

SELECT id_genero, COUNT(*) FROM canciones
GROUP BY id_genero;

SELECT COUNT(*) FROM clientes
WHERE pais LIKE "Brazil";

SELECT SUM(total) FROM facturas;

SELECT MIN(bytes) FROM canciones;

SELECT pais_de_facturacion, SUM(total) FROM facturas
group by pais_de_facturacion
HAVING SUM(total) > 100;

SELECT ciudad, count(ciudad) FROM clientes
group by ciudad
having count(ciudad) >= 2;

SELECT canciones.nombre,count(generos.nombre) FROM canciones
INNER JOIN generos ON canciones.id_genero = generos.id
WHERE generos.nombre = "Blues";

SELECT albumes.titulo, count(canciones.nombre), AVG(canciones.milisegundos) FROM canciones
INNER JOIN albumes ON canciones.id_album = albumes.id
group by albumes.titulo
having albumes.titulo LIKE "%there be%";

SELECT MAX(facturas.total) FROM facturas
INNER JOIN clientes ON facturas.id_cliente = clientes.id
WHERE clientes.id = 48;
