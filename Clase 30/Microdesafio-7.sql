SELECT id, first_name, last_name FROM actors
WHERE length(first_name) > 6
ORDER BY first_name ASC;

SELECT count(distinct title) FROM episodes;

SELECT series.title, count(seasons.title) AS "Numero de Temporadas" FROM series
INNER JOIN seasons
ON series.id = seasons.serie_id
GROUP BY series.title;

-- SELECT * FROM seasons;

SELECT genres.name, count(movies.title) AS "Numero de Peliculas" FROM genres
INNER JOIN movies
ON movies.genre_id = genres.id
group by genres.name
HAVING count(movies.title) >= 3;