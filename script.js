$("#button-search").click(function () {
    $.ajax({
      url: "http://www.omdbapi.com/?&apikey=894fcdb5&s=" + $("#search-movie").val(),
      success: function (result) {
        console.log(result.Search);
        const movies = result.Search;
        let cards = "";
        movies.forEach((film) => {
          cards += `
            <div class= "col-md-4 my-3">
            <div class="card">
                <img src="${film.Poster}" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">${film.Title}</h5>
                  <p class="card-text">${film.Year}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            
            `;
        });
        $(".movie-container").html(cards);
      },
    });
  });