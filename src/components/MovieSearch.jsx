import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MovieCard from './MovieCard';
import Footer from '../container/Footer';
import { ellipse1, menu, search, tvImg } from '../assets';
import Loader from './Loader';




const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsloading] = useState(false);


  const navigate = useNavigate();


useEffect(() => {
    const fetchTopRated = async () => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=90bdccdda3266a87bd60088706669bda`)
            setMovies(response.data.results.slice(0, 10))
        } catch (error) {
            console.error('Bad internet connection, cant communicate the server!!!', error)
        }
    }
    fetchTopRated();
}, []);


const handleSubmit = async (e) => {
   e.preventDefault();
   setIsloading(true)
   try {
    const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=90bdccdda3266a87bd60088706669bda&query=${searchTerm}`
    );
    setMovies(response.data.results);
    setIsloading(false);
   } catch (error) {
    setIsloading(false);
    console.error('Movie is unavailable or perhaps check your internet connection.', error);
   }
};

const handleMovieClick = (movieId) => {
        navigate(`/movies/${movieId}`)
}

const logo = (
  <div className='flex justify-center items-center mr-4'>
      <img src={tvImg} alt="tv" className='mr-2 h-8 w-8 ' />
      <h2 href="#" className='w-[15%] text-white text-sm mr-4'>MovieBox</h2>
  </div>
);

const navbar = (
  <div className='flex justify-around items-center p-4 w-full '>
  {logo}
  
  <div className=''>
    <form onSubmit={handleSubmit} className='bg-gray-400 rounded-[6px] relative mx-4'>
       <input type="text" id="searchTerm" placeholder='what do you want to watch?' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='text-sm w-[100%] md:w-[40rem] h-[100%] rounded-[6px] border-none py-[8px] pr-[40px] pl-[20px] focus:outline-none ' required/>
        <button type='submit' className='absolute top-0 right-0 w-[50px] h-[100%] rounded-[50%] cursor-pointer border-none bg-none text-xl '><img src={search} alt="search" className="bg-gray-200" /></button>
    </form>
  </div>

<div className='flex justify-center items-center '>
  <a href="#" className="text-white text-sm">Sign In</a>
  <div className='m-2'>
     <img src={ellipse1} alt="ellipse1" className='absolute ' />
     <img src={menu} alt="menu" className='relative mt-2 ml-1' />
  </div>
</div>
</div>
);

const header = (
  <div className={`bg-img w-full h-[50vh] `}>
        {navbar}

        <div className="flex flex-wrap w-[50%] md:w-[40%] m-10">
            <h1 className="text-white  md:text-3xl">John Wick 3 : Parabellum</h1>
            <p className="text-white text-sm mb-2">John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
            <button className="bg-red-600 text-white text-sm py-2 px-4">Watch Trailer</button>
        </div>
    </div>
);

  return (
    <>
      {isLoading && <Loader /> }
      <div className='w-full'>
        {header}
        <h2 className='text-2xl my-4'>Top 10 Movies</h2>
        <ul className='grid grid-cols-3 place-items-center '>
         {movies.map(movie => (
      
             <li key={movie.id} className='' onClick={() => handleMovieClick(movie.id)} >
                 <MovieCard {...movie} />   
             </li>
         ))}
       </ul>
       
       <Footer />
       </div>
    </>
  )
}

export default MovieSearch;