import { useEffect, useState } from 'react';
import './App.css';
// http://www.omdbapi.com/?t=the endgame&apikey=6d780b65


function App() {
  let [movieinfo,setMovieinfo]=useState(null);
  let[movietitle,setTitle]=useState("saaho");
useEffect(()=>{

  getMovieData();
},[])

function readTitle(value){

  setTitle(value);
  
  
}
function getMovieData(){
  let url=`https://www.omdbapi.com/?t=${movietitle}&apikey=6d780b65`;
  fetch(url)
  .then((response)=>response.json())
       .then((movie)=>{
         console.log(movie);
        setMovieinfo(movie)
        
        })
       .catch((err)=>{
            console.log(err);
           
        })
}
  return (
    <div className="bg-dark h-100">
    <div className="App bg-dark" className="container bg-dark p-4 ms-5 me-5 ">
    <h1 className="h1 text-white text-center ">Movie Search</h1>
    <br></br>

    <div className="d-flex ps-5 ms-5">
    
     <div className=" form-label w-100 ps-4 ms-3">
       <input type="text" placeholder="Enter some movie name" onChange={(Event)=>{readTitle(Event.target.value)}} className="form-control center w-100 text-center rounded border-1"></input>
     </div>
     <button className="btn bg-warning h-50 pe-5 ps-5 ms-3 me-5"  onClick={getMovieData}>Search</button>
     </div>
     
     </div>
     {  movieinfo?.Error===undefined?(
     <div className="row container mx-auto p-5 me-5 bg-dark">
       
                 <div className="col-sm-6   col-md-6 col-lg-3">
                   <img src={movieinfo?.Poster}></img>
                 </div>
                 <div className="col-lg-2">

                       </div>
                 <div className="col-sm-6  col-md-6 col-lg-7  bg-dark text-white">
                   <h1 className="h2 text-danger ps-1"><strong className="text-warning">Title</strong> : {movieinfo?.Title}</h1> 
                   <h1 className="h6 p-1"><strong className="text-warning">Genre</strong> : {movieinfo?.Genre}</h1>                   
                   <h1 className="h6 p-1"><strong className="text-warning">Actors</strong> : {movieinfo?.Actors}</h1>  
                   <h1 className="h6 p-1"><strong className="text-warning">Director</strong> : {movieinfo?.Director}</h1>  
                   <h1 className="h6 p-1"><strong className="text-warning">BoxOffice</strong> : {movieinfo?.BoxOffice}</h1>  
                   <h1 className="h6 p-1"><strong className="text-warning">Plot</strong> : {movieinfo?.Plot}</h1>   
                   <h1 className="h6 p-1"><strong className="text-warning">Released</strong> : {movieinfo?.Released}</h1>  
                   <h1 className="h6 p-1"><strong className="text-warning">Language</strong> : {movieinfo?.Language}</h1>  
                   <h1 className="h6 p-1"><strong className="text-warning">Runtime</strong> : {movieinfo?.Runtime}</h1>
                   <div className="d-flex pt-2 ">
                     {
                     movieinfo?.Ratings.map((rating,index)=>(
                     
                     <h1 key={index} className="h6 ps-1 "><strong className="text-warning">{rating.Source}</strong> : {rating.Value}  ,</h1>
                
                     ))
                      }
                   
                   
                   </div>
                      

                 </div>
                 
      </div>
     
                    
     ):<h1 class="text-center container-fluid p-5 text-white" >Movie Not Found</h1>
    }
    
    </div>
                    
  );
}

export default App;
