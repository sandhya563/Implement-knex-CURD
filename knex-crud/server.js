const express = require('express');
const app = express();
const port = 4000;

// For runig server 
app.use(express.json());
app.use('/',require('./router'))
app.use('/',require('./database'))

app.listen(port,()=>{
    console.log(`SERVER IS RUNNING AT PORT ${port}`);
});











