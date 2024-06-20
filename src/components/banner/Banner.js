import React, { useEffect, useState } from 'react';
import axios from 'axios';
import api from '../../api/api';
import './Banner.css';

const Banner = () => {
    const [movie, setMovie] = useState({});
    const [activeMovie, setActiveMovie] = useState(null); // Track active movie id

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(api.fetchNetflixOriginals);
                const randomMovie = response.data.results[
                    Math.floor(Math.random() * response.data.results.length)
                ];
                setMovie(randomMovie);
                setActiveMovie(randomMovie.id); // Set the active movie initially
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };
        fetchData();
    }, []);

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    };

    const togglePlay = (id) => {
        setActiveMovie(activeMovie === id ? null : id); // Toggle active movie
    };

    return (
        <header className="banner"
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: 'center center',
            }}>
            <div className="banner-contents">
                <h1 className="banner-title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner-buttons">
                    <button className="banner-button" onClick={() => togglePlay(movie.id)}>
                        {activeMovie === movie.id ? 'Pause' : 'Play'}
                    </button>
                    <button className="banner-button">My List</button>
                </div>
                <h1 className="banner-description">{truncate(movie?.overview, 150)}</h1>
            </div>
            <div className="banner-fadeBottom"></div>
        </header>
    );
};

export default Banner;
