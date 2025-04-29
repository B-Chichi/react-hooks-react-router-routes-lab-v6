import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/directors")
      .then((response) => response.json())
      .then((data) => {
        setDirectors(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching directors data:", error);
        setError("Failed to load directors data.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading directors...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <header>
        <h1>Directors Page</h1>
        <NavBar />
      </header>

      <main>
        {directors.length === 0 ? (
          <p>No directors available.</p>
        ) : (
          directors.map((director) => (
            <article key={director.id}>
              <h2>{director.name}</h2>
              <ul>
                {director.movies && director.movies.length > 0 ? (
                  director.movies.map((movie, index) => (
                    <li key={index}>{movie}</li>
                  ))
                ) : (
                  <p>No movies listed for this director.</p>
                )}
              </ul>
            </article>
          ))
        )}
      </main>
    </>
  );
}

export default Directors;
