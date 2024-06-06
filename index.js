document.addEventListener("DOMContentLoaded",function(){
    getmovie()
    
    function getmovie(){
      fetch("http://localhost:3000/movies")
      .then(res=>res.json())
      .then(movies=>{
      movies.forEach(addmovie)   
      });
      function addmovie(movie){
        let row=document.getElementById("card")
        let div=document.createElement("div")
        div.classList.add("col-3")
        div.innerHTML=`<div class="card">
        <img src="${movie.Poster}" class="card-img-top"></img>
        <div class=">
        <h5 class="${movie.Title}"</h5>
          <p class="card-text">${movie.Plot}</p>
          <a href="#" class="btn btn-outline-danger">Delete</a>
        </div>
        </div>`
        row.append(div) 
      }
    }
})
   