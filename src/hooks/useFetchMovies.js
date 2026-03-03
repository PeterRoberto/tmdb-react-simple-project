import { useState, useEffect } from "react";


export const useFetchMovies = (url) => {
    const [topMovies, setTopMovies] = useState([]);

    useEffect(() => {
        const getTopRatedMovies = async () => {
            const res = await fetch(url);
            const data = await res.json();

            setTopMovies(data);
        }
        getTopRatedMovies();
    }, [url]);

    return topMovies;
}