import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { TVShow, calendar, home, logout, movieProjector, tvImg } from '../assets';





const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const [releaseDate, setReleaseDate] = useState('');
    const { id } = useParams();

    useEffect(() => {
      const fetchMovie = async () => {
        try {
            const response = await axios.get(
               `https://api.themoviedb.org/3/movie/${id}?api_key=90bdccdda3266a87bd60088706669bda`
            );
            setMovie(response.data)
            const releaseDate = new Date(response.data.release_date).toUTCString();
            setReleaseDate(releaseDate);
            console.log(releaseDate)
            
        } catch (error) {
            console.error('An error occured, movie details unavailable;', error)
        } 
      };
      fetchMovie();
    }, [id]);


    if (!movie) {
        return <div>Loading...</div>;
    };

    const logo = (
      <div className='flex justify-center items-center pr-8'>
          <img src={tvImg} alt="tv" className='m-4' />
          <h2 href="#" className='w-[25%] '>MovieBox</h2>
      </div>
   );
    
  return (
    <>
    <div className='flex flex-row h-screen w-full  '>
      <div className=' w-60 p-3 text-center border-solid border-2 rounded-r-3xl  '>
        <div>
          {logo}
        </div>
        <div className='p-2.5 mt-3 flex items-center px-4 cursor-pointer'>
          <img src={home} alt="" />
          <span className=''>Home</span>
        </div>
        <div className='p-2.5 mt-3 flex items-center px-4 bg-rose-300 cursor-pointer'>
          <img src={movieProjector} alt="" />
          <span>Movies</span>
        </div>
        <div className='p-2.5 mt-3 flex items-center px-4 cursor-pointer'>
          <img src={TVShow} alt="" />
          <span>Tv series</span>
        </div>
        <div className='p-2.5 mt-3 flex items-center px-4 cursor-pointer'>
          <img src={calendar} alt="" />
          <span>Upcoming</span>
        </div>
        <div className='p-2.5 mt-3 flex flex-col items-center w-[10rem] px-4 bg-rose-200  border-[1px] border-solid border-rose-600 rounded-[10px] cursor-pointer'>
          <p>Play movie quizes and earn freetickets</p>
          <p className='py-2'>50k people are playing now</p>
          <button className='bg-rose-300 text-rose-600 text-sm py-2 px-6 rounded-[25px]'>Start playing</button>
        </div>
        <div className='p-2.5 mt-3 flex items-center px-4 cursor-pointer'>
          <img src={logout} alt="logout" />
          <span>Logout</span>
        </div>
      </div>
      <div className='p-4'>
        <div className=' '>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className='h-[20rem] w-[30rem] md:w-[75rem] ' />
        </div>
        <div className='flex mb-5 mt-2 '>
        <h1 className='mr-2 text-sm' data-testid='movie-title'>{movie.title}</h1>
        <p className='mr-2 text-sm' data-testid='movie-release-date'>{releaseDate}</p>
        <p className='text-sm' data-testid='movie-runtime'>{movie.runtime}</p>
        </div>
        <div className='lg:flex justify-between'>
        <p className='text-sm lg:max-w-[70%] ' data-testid='movie-overview'>{movie.overview}</p>
        <div className=''>
        <button className='bg-rose-600 text-white text-sm py-2 px-6 m-4 rounded-[10px] lg:w '>See showtimes</button>
        <button className='bg-rose-200 border-[1px] border-solid border-rose-600 text-sm py-2 px-6 rounded-[10px]'>More Watch options</button>
        </div>
        </div>
        <div className='flex justify-between lg:block'>
          <div>
             <p>Directors<span></span></p>
             <p>Writers<span></span></p>
             <p>Stars<span></span></p>
          </div>
        <button className='bg-rose-600 text-white text-sm py-2 px-6 m-4 rounded-[10px] lg:w '>Top Rated <span>#10</span></button>
        </div>
      </div>
    </div>
    </>
  )
}

export default MovieDetails