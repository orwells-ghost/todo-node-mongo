var express = require('express'),
    app     = express(),
    port    = 3000,
    bodyParse = require('body-parser');

var todoRoutes = require('./routes/todos');

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));

app.get('/', function(req, res){
    res.send("hello from from the root route");
});

app.use('/api/todos', todoRoutes);

app.listen(port, function(){
    console.log("App is running on port " + port);
});