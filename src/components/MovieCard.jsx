import React from 'react'

const MovieCard = (props) => {

  return (
    <div className='w-[12rem] md:w-[25rem] m-4 bg-white shadow-lg ' data-testid='movie-card'>
           <img data-testid='movie-poster' src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`} alt={props.title} className='' />
        <div className='flex justify-between p-2'>
            <p className='text-sm' data-testid='movie-title'>{props.title}</p>
            <p className='text-sm' data-testid='movie-release-date'>{props.release_date}</p>
        </div>
    </div>
  )
}

export default MovieCard;