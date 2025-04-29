import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams(); 
  const [movie, setMovie] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

 
  useEffect(() => {
    
    fetch(`http://localhost:3000/movies/${id}`) 
      .then((response) => {
        if (!response.ok) {
          throw new Error("Movie not found"); 
        }
        return response.json();
      })
      .then((data) => {
        setMovie(data); 
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
        setError(error.message); 
        setLoading(false);
      });
  }, [id]); 

  
  if (loading) {
    return <div>Loading movie details...</div>;
  }

  
  if (error) {
    return <div>Error: {error}</div>;
  }

  
  if (!movie) {
    return <div>Movie not found</div>; 
  }

  
  return (
    <>
      <NavBar />
      <header>
        <h1>{movie.title}</h1> 
      </header>
      <main>
        <p>
          <strong>Time:</strong> {movie.time}
        </p>{" "}
       
        <div>
          <strong>Genres: </strong>
          {movie.genres.length > 0 ? (
            movie.genres.map((genre, index) => (
              <span key={index} className="genre">
                {genre}
              </span> 
            ))
          ) : (
            <span>No genres available</span> 
          )}
        </div>
      </main>
    </>
  );
}

export default Movie;
