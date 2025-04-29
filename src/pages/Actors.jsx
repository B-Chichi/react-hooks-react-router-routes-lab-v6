import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/actors")
      .then((response) => response.json())
      .then((data) => {
        setActors(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching actors data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <header>
        <h1>Actors Page</h1> 
        <NavBar />
      </header>
      <main>
        {loading ? (
          <div>Loading actors...</div> 
        ) : (
          actors.map((actor) => (
            <article key={actor.id}>
              <h2>{actor.name}</h2>
              <ul>
                {actor.movies.map((movie, index) => (
                  <li key={index}>{movie}</li>
                ))}
              </ul>
            </article>
          ))
        )}
      </main>
    </>
  );
}

export default Actors;
