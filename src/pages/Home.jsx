import { useState, useEffect } from "react";

// Hooks
import { useFetchMovies } from '../hooks/useFetchMovies'

// Components
import MovieCard from "../components/MovieCard";

const tmdbApi = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imgURL = import.meta.env.VITE_IMG;
const urlTopVideos = `${tmdbApi}top_rated?${apiKey}`;

const Home = () => {
  const topRatedMovies = useFetchMovies(urlTopVideos);

  return (
    <div className="container md:w-3xl lg:5x1 xl:w-auto mx-auto px-3 mt-15 xl:pl-0">
      <div className="xl:w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-center uppercase">Top movies</h1>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {topRatedMovies.results?.length > 0 && topRatedMovies.results?.map((movies) => (
            <MovieCard key={movies.id} movies={movies} imgURL={imgURL} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home