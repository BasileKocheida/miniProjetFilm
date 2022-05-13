let form = document.querySelector('form');

form.addEventListener("submit", function(e) {
    e.preventDefault();
    newTitle = document.querySelector('#search').value;
    loadMovies(newTitle)
})

async function getMovies(newTitle) {
    
    const title = "harry potter";
    if(newTitle.length >0){
        console.log("if", newTitle);
        let url = "https://www.omdbapi.com/?s="+newTitle+"&plot=short&apikey=2a4831ba"
        const response = await fetch(url)
        const data = await response.json()
        return data.Search
    }else{
        let url = "https://www.omdbapi.com/?s="+title+"&plot=short&apikey=2a4831ba"
        const response = await fetch(url)
        const data = await response.json()
        return data.Search
    }
}

window.addEventListener("DOMContentLoaded", function(e) {
    loadMovies()
})

  function loadMovies(newTitle = ""){
    let result = getMovies(newTitle).then(function (movies) {
        console.log(movies);
        let divMovieContent = document.querySelector(".list-movies")
        divMovieContent.innerHTML =  ''

            movies.forEach(movie => {
        
                let divCardContent = document.createElement("div")
                divCardContent.className = "card-content col-3"
                const img = document.createElement("img")
                const divMovieTitle = document.createElement("div")
                divMovieTitle.className = "title"
        
                img.setAttribute("src", movie.Poster)
                divMovieTitle.textContent = movie.Title  
        
                divMovieContent.appendChild(divCardContent)
                divCardContent.appendChild(img)
                divCardContent.appendChild(divMovieTitle)
            });
        });
  }