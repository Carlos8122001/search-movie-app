import { useEffect, useState } from "react";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";

import Movies from "./components/Movies";
import "./App.css";

function App() {
  const [sort,setSort] = useState(false);
  const {search,updateSearch,error} = useSearch();
  const { movies, getMovies,loading } = useMovies({search,sort});
  
  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({search});
  };

  const handleQuery = (event) => {
    const newQuey = event.target.value;
    updateSearch(newQuey);
    getMovies({search:newQuey})
  };

  const handleSort = () =>{
    setSort(!sort);
  }

  return (
    <>
      <div className="container">
        <header>
          <h1>Buscador de peliculas</h1>
          <form onSubmit={(event) => handleSubmit(event)}>
            <input
              type="text"
              placeholder="search"
              value={search}
              onChange={(event) => handleQuery(event)}
            />
            <input type="checkbox" onChange={handleSort} checked={sort}/>
            <button type="submit">Buscar</button>
          </form>
          {
            error? <p>{error}</p> :""
          }
        </header>
        <main>
          <Movies movies={movies} />
        </main>
      </div>
    </>
  );
}

export default App;
