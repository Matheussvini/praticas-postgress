SELECT 
    MAX(jobs.salary) AS "maximumSalary",
    roles.name AS roles
FROM jobs
JOIN roles
ON jobs."roleId" = roles.id
WHERE jobs.active = true
GROUP BY roles.name
ORDER BY "maximumSalary" ASC;