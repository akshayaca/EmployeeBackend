const express = require('express');
const cors = require('cors'); // Import cors
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/employeeRoute');
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());


app.use('/api',employeeRoutes);


app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});