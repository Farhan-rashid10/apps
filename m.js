document.addEventListener("DOMContentLoaded",function(){
    getmovie()
    
   

})
function getmovie(){
  fetch("http://localhost:3000/movies")
  .then(res=>res.json())
  .then(movies=>{
  movies.forEach(addmovie)   
  });
}
  function addmovie(movie){
    let row=document.getElementById("card")
    let div=document.createElement("div")
    div.classList.add("col-3")
    div.innerHTML=`<div class="card">
    <img src="${movie.Poster}" class="card-img-top"></img>
    <div class=">
    <h5 class="${movie.Title}"</h5>
      <p class="card-text">${movie.Plot}</p>
      <button><a href="#" class="btn btn-outline-danger">Delete</a></button>
    </div>
    </div>`
    row.append(div) 
    div.querySelector("button").addEventListener("click" , function(){
      div.remove()
     deletedata(movie.id)
    })
  }
  function deletedata(id){
    fetch(`http://localhost:3000/movies/${id}`,{
      method: "DELETE",
      headers: {
        'content-type':'application/json'
      }
    })
  }
  


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
 fetch("http://localhost:3000/movies",{

  method:"POST",
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(object)

 })




}