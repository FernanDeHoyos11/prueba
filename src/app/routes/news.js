const session = require('express-session')
module.exports = app => {
   var api_key = 'a650fd63b0a815e75cf22d0b805ec101'
   var url = 'https://api.themoviedb.org/3/movie/550?api_key={api_key}&callback=test'
   var nurl = 'https://api.themoviedb.org/3/configuration?api_key=a650fd63b0a815e75cf22d0b805ec101'

   app.get('/', (req, res)=>{
    
    fetch(`https://api.themoviedb.org/4/list/1?page=1&api_key=a650fd63b0a815e75cf22d0b805ec101`)
   .then(response => response.json())
   .then(data => {
    var titulos = []
    for (let i in data.results) {
        titulos.push(data.results[i].overview)
   }
    res.send(titulos)
   })
   .catch(error => console.log('error:', error));
   })

   app.get('/peli', (req,res)=>{
    fetch(`https://api.themoviedb.org/4/list/1?page=1&api_key=a650fd63b0a815e75cf22d0b805ec101`)
   .then(response => response.json())
   .then(data => {
    var titulos = []
    var images = []
    var popularidad = []
    var sinopsis = []
    for (let i in data.results) {
        titulos.push(data.results[i].title)
        images.push(data.results[i].poster_path)
        popularidad.push(data.results[i].popularity)
        sinopsis.push(data.results[i].overview)
   }
   console.log(popularidad)
    res.render('index',{
      name: titulos,
      image: images,
      popul: popularidad,
      sinopsis: sinopsis
    })
    })
   .catch(error => console.log('error:', error));
   })
};
