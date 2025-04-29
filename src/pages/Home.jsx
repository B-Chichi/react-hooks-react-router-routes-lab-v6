import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import MovieCard from "../components/MovieCard"; 
import NavBar from "../components/NavBar";

function Home() {
  const [movies, setMovies] = useState([]); 
  const [loading, setLoading] = useState(true); 

 
  useEffect(() => {
    
    fetch("http://localhost:3000/movies")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setMovies(data);
        } else {
          console.error("Expected an array of movies, but got:", data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setLoading(false); 
      });
  }, []);

  return (
    <>
      <header>
        <h1>Home Page</h1> 
        <NavBar />
      </header>

      <main>
        {loading ? (
          <p>Loading movies...</p>
        ) : (
          <div className="movie-list">
            {movies
              .filter((movie) => movie && movie.title)
              .map((movie) => (
                <div key={movie.id} className="movie-card">
                  <h2>{movie.title}</h2>

                  <Link to={`/movie/${movie.id}`}>View Info</Link>
                </div>
              ))}
          </div>
        )}
      </main>
    </>
  );
}

export default Home;
