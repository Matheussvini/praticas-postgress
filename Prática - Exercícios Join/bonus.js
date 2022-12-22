SELECT
    s.id,
    s.name AS school,
    cs.name AS course,
    co.name AS company,
    r.name AS role
FROM
    educations e
JOIN
    schools s
ON
    e."schoolId" = s.id
JOIN
    courses cs
ON
    e."courseId" = cs.id
JOIN
    users u
ON 
    e."userId" = u.id
JOIN
    experiences ex
ON
    u.id = ex."userId"
JOIN
    companies co
ON
    ex."companyId" = co.id
JOIN
    roles r
ON
    ex."roleId" = r.id
JOIN
    jobs j
ON
    r.id = j."roleId"
WHERE 
co.id = 10
AND
r.name = 'Software Engineer'
    AND
    j.active = true;