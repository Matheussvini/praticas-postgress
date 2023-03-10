SELECT
    users.name AS writer,
    COUNT(testimonials.id) AS "testimonialsCount"
FROM testimonials
JOIN users
ON testimonials."writerId" = users.id
WHERE users.id = 435
GROUP BY users.id;