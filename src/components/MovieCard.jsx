import { Link } from "react-router-dom";

// Fallback
import noImage from "../assets/img/no-image.jpg";


const MovieCard = ({ movies, imgURL, showLink = true }) => {
  const dateStringSlashes = movies.release_date.replace(/-/g, "/");

  console.log(movies)
  return (
    <div className="mb-20 group ">
      <div className="rounded-xl shadow-xl hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer">
        <div className="p-4">
          <span className="bg-yellow-500 py-1 px-4 italic text-sm font-semibold text-white rounded-full cursor-pointer">{movies.vote_average}</span>
          <h1 className="mt-4 text-3xl font-bold hover:underline cursor-pointer">{movies.original_title.slice(0, 10)}...</h1>
          <p className="mt-2 font-sans text-gray-700">
            <span className="font-bold">Release</span>: 
            {dateStringSlashes}
          </p>
        </div>
        <div className="relative">
          <img 
            className="w-full h-[500px] sm:h-[400px] md:h-[500px] lg:h-[450px] object-cover rounded-b-xl" 
            src={imgURL && movies.poster_path ? (`${imgURL}${movies.poster_path}`) : (noImage)} 
            alt={movies.original_title} 
            title={movies.original_title} 
          />
          {showLink && (
            <Link to={`/movie/${movies.id}`}>
              <p 
                className="z-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out text-lg absolute -bottom-4 left-1/2 -translate-x-1/2 bg-yellow-600 border-2 border-yellow-500 text-white py-1 px-10 rounded-full cursor-pointer duration-500">
                Details
              </p>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default MovieCard