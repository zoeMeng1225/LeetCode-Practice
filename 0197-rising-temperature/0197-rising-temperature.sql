# Write your MySQL query statement below
-- Select the id from the 'today' table (w1)
SELECT w1.id
FROM Weather w1
JOIN Weather w2
-- The join condition: The date of w1 is exactly one day older than that of w2
ON DATEDIFF(w1.recordDate, w2.recordDate) = 1

WHERE w1.temperature > w2.temperature