const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const mongoose = require('mongoose');
const exphdbs = require('express-handlebars');


const hbs = exphdbs.create({
  defaultLayout : 'main',
  extname : 'hbs'
});


app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

async function start (){
  try {
    await mongoose.connect('mongodb+srv://Andestrial:arti200026@cluster0-iqgo4.mongodb.net/test', {
      useNewUrlParser : true,
      useFindAndModify : false,
      useUnifiedTopology: true
    })
  } catch (error) {
    
  }
}

start();

app.get('/weather', function(req, res) {
  res.render(
      {
        smth : 'hi',
        txt : 'helllllllo'
      }
  );
});

app.get('/home' , (req, res)=>{
    res.render('home' , {
      title: 'HomePage'
    });
});

app.get('/about' ,(req, res)=>{
    res.send("about");
});

const publicPath = path.join(__dirname, 'public');


app.use(express.static(publicPath));

app.listen(PORT, () => {
    console.log('Example app listening on port 3000!');
  });
  