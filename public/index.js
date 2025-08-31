// 1 dom content load
document.addEventListener("DOMContentLoaded",function(){
    getmovie()
    
   

})
//3 getting movies one by one
function getmovie(){
  fetch("http://localhost:3000/movies")
  .then(res=>res.json())
  .then(movies=>{
  movies.forEach(addmovie)   
  });
}
// 2 getting all movies
  function addmovie(movie){
    let row=document.getElementById("card")
    let div=document.createElement("div")
    div.classList.add("col-3")
    div.innerHTML=`<div class="card">
    <img src="${movie.Poster}" class="card-img-top"></img>
    <div>
    <h5 class="">${movie.Title}</h5>
      <p class="card-text">${movie.Plot}</p>
      <button><a href="#" class="btn btn-outline-danger">Delete</a></button>
    </div>
    </div>`
    row.appendChild(div)
    const input = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', function(e) {
      if(e.input.value === searchInput){
          return movie.id
      }
      else{
        alert("write the correct title")
      }

    });
   
   // 6 deleting movies but not json server
    div.querySelector("button").addEventListener("click" , function(){
      div.remove()
     deletedata(movie.id)
    })
  
  }
  // 7 deleting movies also from json server
  function deletedata(id){
    fetch(`http://localhost:3000/movies/${id}`,{
      method: "DELETE",
      headers: {
        'content-type':'application/json'
      }
    })
  }

 
  
//4 submiting form 

document.querySelector("form").addEventListener("submit", addmovies);
  function addmovies(e){
  e.preventDefault()
  //console.log("submited")
 let title = document.getElementById("title")  
 let plot = document.getElementById("plot")   
 let poster = document.getElementById("poster")  


let object= {
  Title:title.value,
  Poster:poster.value,
  Plot:plot.value
}

// 5 post adding data to database from the form
 fetch("http://localhost:3000/movies",{

  method:"POST",
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(object)

 })




}


  
