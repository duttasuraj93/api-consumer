import { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import MovieFetchError from './components/MovieFetchError';
import { addMovies, hasMoreMovies, setPage } from '../../redux/reducers/movies/index'
import { useAppSelector, useAppDispatch } from '../../hooks'
import './index.css';
import InfiniteScroll from 'react-infinite-scroller';
import EachMovie from './components/EachMovie';


export default function Movies() {

  const reduxMovies = useAppSelector((state) => state.movies.movies)
  const reduxMoviePage = useAppSelector((state) => state.movies.page)
  const reduxHasMoreMovies = useAppSelector((state) => state.movies.hasMoreMovies)
  const dispatch = useAppDispatch()

  const [loading, setLoading] = useState(true);
  const [movieFetchError, setMovieFetchError] = useState(false);

  function getMovies() {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&page=${reduxMoviePage}`,)
      .then(res => res.json())
      .then(res => {
        dispatch(addMovies(res.results))
        if (res.results.length < 20) dispatch(hasMoreMovies(false));
        dispatch(setPage(reduxMoviePage + 1));
        setLoading(false);
        setMovieFetchError(false);
      }).catch(err => {
        setLoading(false);
        setMovieFetchError(true);
        console.log('Movie fetch error: ' + err);
      })
  }


  useEffect(() => {
    if (reduxMovies.length < 1) {
      getMovies();
    } else {
      setLoading(false)
    }

    return () => {
      setLoading(true);
      setMovieFetchError(false)
    }

  }, [])


  if (loading) {
    return (
      <>
        <div className='flex-row justify-cont-center ver-pad-60'>
          <div className='default-wrapper pad-hor-20'>
            <div>
              <h1 className='mar-bot-20'>Upcoming Movies</h1>
              <div className='flex-row justify-cont-space-bet flex-wrap width-100'>
                <Loading />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  if (movieFetchError) return <MovieFetchError />

  return (
    <>
      <div className='movies bgcolor-black flex-row justify-cont-center ver-pad-60'>
        <div className='default-wrapper pad-hor-20'>
          <div>
            <h1 className='mar-bot-20'>Upcoming Movies</h1>
            <div className='movies__wrapper flex-row justify-cont-space-bet flex-wrap'>
              <InfiniteScroll
                pageStart={reduxMoviePage}
                loadMore={getMovies}
                hasMore={reduxHasMoreMovies}
                loader={<Loading key={0} />}
              >
                {reduxMovies.map((item: any, index: any) => <EachMovie key={index} movie={item} />)}
              </InfiniteScroll>
            </div>
            {
              !reduxHasMoreMovies && (
                <div className='flex-row justify-cont-center width-100 pad-ver-30'><span>There are no more upcoming movies</span></div>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}
