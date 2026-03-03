import { useParams } from "react-router-dom";

// Hook
import { useFetchMovies } from "../hooks/useFetchMovies";
import { BsFillFileEarmarkTextFill, BsHourglassSplit, BsWallet2, BsGraphUp } from "react-icons/bs";

const tmdbApi = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imgURL = import.meta.env.VITE_IMG;

const Movie = () => {
  const {id} = useParams();
  const urlMovieDetails = `${tmdbApi}${id}?${apiKey}`;
  const getMovieDetails = useFetchMovies(urlMovieDetails);
  const dateStringSlashes = getMovieDetails.release_date?.replace(/-/g, "/");

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })
  }

  return (
    <article className="movie-single pb-20">
      <div className="container md:w-3xl lg:5x1 xl:w-auto mx-auto px-3 mt-15 xl:pl-0">
        <div className="xl:w-5xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-8">{getMovieDetails.original_title}</h1>

          <figure className="">
            <img className="w-80 rounded-b-xl m-auto" src={`${imgURL}${getMovieDetails.poster_path}`} />
          </figure>
          <p className="font-sans text-gray-700 text-center mb-10">
            <span className="font-bold">Release</span>: 
            {dateStringSlashes}
          </p>

          <div className="infos flex mb-3">
            <h3 className="flex items-center font-bold">
              <BsGraphUp className="mr-2" /> Receita:
            </h3>
            <p className="ml-2">
              {getMovieDetails.revenue &&
                formatCurrency(getMovieDetails.revenue)
              }
            </p>
          </div>

          <div className="infos flex mb-3">
            <h3 className="flex items-center font-bold">
              <BsHourglassSplit className="mr-2" /> Duração:
            </h3>
            <p className="ml-2">{getMovieDetails.runtime} minutos</p>
          </div>
          
          <div className="infos flex mb-3">
            <h3 className="flex items-center font-bold">
              <BsWallet2 className="mr-2" /> Orçamento:
            </h3>
            <p className="ml-2">
              {getMovieDetails.budget &&
                formatCurrency(getMovieDetails.budget)
              }
            </p>
          </div>

          <div className="infos">
            <h3 className="flex items-center font-bold">
              <BsFillFileEarmarkTextFill className="mr-2" /> Descrição
            </h3>
            <p className="">{getMovieDetails.overview}</p>
          </div>
          
        </div>
      </div>
    </article>
  )
}

export default Movie