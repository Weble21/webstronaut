import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import Movie from '../components/Movie';

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState();
    const getMovie = async () => {
         const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
            console.log(json);
            setMovies(json.data.movie.title);
            console.log(movies);
            setLoading(false);
        };
    
    useEffect(() => {
        getMovie();
    },[]);
    return (
        <div>
            <div>
                {
                loading ? <h1>Loading...</h1> : movies
                }
            </div>
        </div>
    )
}
export default Detail;