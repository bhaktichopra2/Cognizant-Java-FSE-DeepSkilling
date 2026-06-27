-- Scenario 3: Display reminder messages for customers whose loans
-- are due within the next 30 days.

SELECT
    c.CustomerID,
    c.Name,
    l.LoanID,
    TO_CHAR(l.DueDate, 'DD-MON-YYYY') AS DueDate,
    'Reminder: Dear ' || c.Name ||
    ', your loan (Loan ID: ' || l.LoanID ||
    ') is due on ' || TO_CHAR(l.DueDate, 'DD-MON-YYYY') ||
    '. Please make your payment on time.' AS Reminder
FROM Customers c
JOIN Loans l
ON c.CustomerID = l.CustomerID
WHERE l.DueDate BETWEEN SYSDATE AND SYSDATE + 30
ORDER BY l.DueDate;
