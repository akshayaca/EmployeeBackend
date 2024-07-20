const sql = require('mssql/msnodesqlv8');

const config = {
    driver: 'msnodesqlv8',
    connectionString: 'Driver={ODBC Driver 18 for SQL Server};Server=LAPTOP-QAFG3TH4\\MSSQLSERVER11;Database=Employee;Uid=SQLLogin11;Pwd=1234;TrustServerCertificate=yes;'
};

const connection = new sql.ConnectionPool(config)
    .connect()
    .then((conn) => {
        console.log('Connection is successful');
        return conn;
    })
    .catch((err) => {
        console.log(`Failed to connect due to ${err}`);
    });

module.exports = {
    sql,
    connection
};
