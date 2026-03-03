import { useEffect, useState } from "react";
import { useSearchParams  } from "react-router-dom";

// Hooks
import { useFetchMovies } from '../hooks/useFetchMovies';

// Components
import MovieCard from "../components/MovieCard";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;
const imgURL = import.meta.env.VITE_IMG;

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const urlSearchWithQuery = `${searchURL}?${apiKey}&query=${query}`;
  const searchMovies = useFetchMovies(urlSearchWithQuery);

  return (
    <section className="search-page">
      <div className="container lg:5x1 xl:w-auto mx-auto px-3 mt-15">
        <h2 className="font-bold text-3xl text-center">Resultados para: <span className="text-4xl text-yellow-500">{query}</span></h2>
        <div className="xl:w-5xl mx-auto">
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {searchMovies.results?.length > 0 && searchMovies.results.map((search) => (
              <MovieCard key={search.id} movies={search} imgURL={imgURL} showLink={true} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Search