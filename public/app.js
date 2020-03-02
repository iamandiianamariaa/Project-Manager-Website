var express=require("express");         
var app=express();
var fs= require('fs');

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));

const path = require('path');
const viewsPath = path.join(__dirname,'../views/pages');
app.set('views',viewsPath);
app.set('view engine', 'ejs');
app.use(express.static("partials"));
app.use(express.static(__dirname + '/partials'));

app.get('/', function(req, res) {
    res.render('home');
});

app.get('/help', function(req, res) {
    res.render('help');
});
app.get('/calendar', function(req, res) {
    res.render('calendar');
});
app.get('/plan', function(req, res) {
    res.render('plan');
});
app.get('/task', function(req, res) {
    res.render('task');
});
app.get('/today', function(req, res) {
    res.render('today');
});
app.get('/user', function(req, res) {
    res.render('user');
});
app.get('/in', function(req, res) {
    res.render('in');
});
app.post('/',(req,res)=>{
    let arr = []
    if(fs.existsSync('users.json')){
        let fis = fs.readFileSync('users.json','utf8')
        arr=JSON.parse(fis)
    }
    arr.push(req.body)
    fs.writeFileSync('users.json',JSON.stringify(arr));
    console.log("Log In Successful")
    res.redirect('/')
})

app.use(function(req,res,next){
    res.status(404).render('404');
})
  
  
app.listen(4000);
console.log("Serverul a pornit");
