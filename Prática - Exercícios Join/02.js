SELECT 
    testimonials.id,
    users1.name AS writer,
    users2.name AS recipient,
    testimonials.message
FROM 
    testimonials
JOIN
    users users1
ON
    testimonials."writerId" = users1.id
JOIN
    users users2
ON 
    testimonials."recipientId" = users2.id
ORDER BY
    testimonials.id;