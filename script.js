var key = 'ea0a07b6';

  
  function getTitle(){
      var title = document.getElementById("title").value;

      const url = `http://www.omdbapi.com/?t=${title}&apikey=ea0a07b6`;
      
     

      fetch(url)
      .then(function(res){

        return res.json();
      })
      .then(function(res){
       
        displayMovie(res)

      }).catch(function(err){
          console.log(err);
         
          let show_err = document.getElementById("show_error");
          show_err.innerHTML=null;
          let p = document.createElement("img");
          p.src = "https://media0.giphy.com/media/NTXqH1bUCfHBS/giphy.gif";
          show_err.append(p);
          
      });
 }

function displayMovie(movie){

  console.log(movie);
  var container =document.querySelector("#show_result") 
  container.innerHTML=null;

  var div = document.createElement("div");

  var poster = document.createElement("img");
  poster.src = movie.Poster;

  var title = document.createElement("h2");
  title.innerText = "Title of the movie:-"+movie.Title;
  title.style.color="blue";

  var Released = document.createElement("h2");
  Released.innerText = "Released Date of the movie:-"+movie.Released;

  var Director = document.createElement("h2");
  Director.innerText = "Director of the movie:-"+movie.Director;

  var Ratings = document.createElement("h2");
  Ratings.innerText = "IMDB Rating of the movie:-"+movie.Ratings[0].Value;
  Ratings.style.color="orange";

  div.append(poster,title,Released,Director,Ratings);
 
  container.append(div);

}