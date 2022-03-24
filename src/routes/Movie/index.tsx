import { useEffect, useState } from 'react';
import './index.css';
import { useParams } from "react-router-dom";
import Loading from '../../components/Loading';
import MovieFetchError from '../Movie/components/MovieFetchError';

interface Movie {
  name: string;
  backdrop_path: string,
  poster_path: string,
  title: string,
  overview: string,
  imdb_id: string,
  genres: [{ name: string, id: number }],
  spoken_languages: [{ name: string, iso_639_1: string }],
  runtime: number,
  release_date: string,
}

export default function Movie() {

  const [movie, setMovie] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [movieFetchError, setMovieFetchError] = useState(false);

  let { id } = useParams();

  async function getMovieDetails() {
    await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US`,)
      .then(res => res.json())
      .then(res => {
        setMovie([res]);
        setLoading(false);
        setMovieFetchError(false);
      }).catch(err => {
        setMovieFetchError(true);
        console.log('Movie fetch error: ' + err);
      })
  }


  function getMovie() {
    getMovieDetails()
  }


  useEffect(() => {
    getMovie()

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
              <div className='flex-row justify-cont-space-bet flex-wrap'>
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
      <div className='movie__container flex-row justify-cont-center pad-hor-20'>

        <div className='movie__details default-wrapper'>
          <div className='movie__details--wrapper flex-row pad-ver-30 pos-rel width-100'>
            <div className='movie_image__container'>
              {
                movie[0].poster_path ?
                  <img className='movie_image' src={`https://image.tmdb.org/t/p/w500/${movie[0].poster_path}`} alt="" />
                  :
                  <img className='movie_image' src='https://wipfilms.net/wp-content/uploads/2016/05/No_Poster-1.JPEG' alt="" />
              }
            </div>

            <div className='movie_image__container--resp pos-abs'>
              {
                movie[0].backdrop_path ?
                  <img className='movie_image__resp' src={`https://image.tmdb.org/t/p/w500/${movie[0].backdrop_path}`} alt="" />
                  :
                  <img className='movie_image__resp' src='https://wipfilms.net/wp-content/uploads/2016/05/No_Poster-1.JPEG' alt="" />
              }
            </div>
            <div className='movie__details__container'>
              <h1 className='movie__heading' data-testid='movie-title'>{movie[0].title && movie[0].title}</h1>
              <p className='movie__desc mar-bot-10'>{movie[0].overview && movie[0].overview}</p>
              <div className='mar-bot-10 flex-row flex-wrap gap-10'>
                {movie[0].genres.map(item => (
                  item.name && <span key={item.id} className='movie__genre cursor-pointer'>{item.name}</span>
                ))}
              </div>
              <div className='movie__lang mar-bot-10'>
                <span className=' mar-right-10'>Languages:</span>
                {movie[0].spoken_languages.map((item, index) => (
                  item.name && <span key={item.iso_639_1}>{(index ? ', ' : '') + item.name}</span>
                ))}
              </div>
              <div className='mar-bot-10'>
                <span className='mar-right-10'>Runtime: {movie[0].runtime >= 0 ? movie[0].runtime + 'min' : 'NA'}</span>
              </div>
              <div className='mar-bot-10'>
                <span className='mar-right-10'>Release Date: {movie[0].release_date ? movie[0].release_date : 'NA'}</span>
              </div>
              <div>
                <a href={`https://www.imdb.com/title/${movie[0].imdb_id}`} target="_blank">
                  <img height="20px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit provident sapiente ab! Unde facilis enim nemo voluptates autem accusantium expedita. Harum deleniti tempore odio rem, voluptate molestias totam dolores consectetur quae ab? Porro blanditiis numquam minima architecto quam. Commodi officiis voluptate, odit accusantium voluptates accusamus quasi reprehenderit quibusdam aperiam pariatur perspiciatis sequi praesentium nulla veritatis in possimus maxime, laudantium quos ipsum sunt. Nulla, labore. Facere deserunt inventore cupiditate magnam corrupti porro soluta iusto autem optio numquam quisquam cum, eos natus maxime sed eum atque illo ipsam saepe nesciunt accusamus? Aut impedit nisi porro modi culpa dolore dolorem doloremque, reprehenderit debitis atque vel iusto iste quos! Debitis quia doloremque, quaerat corrupti eum fugiat optio laboriosam alias ducimus facilis at enim soluta neque, similique rerum assumenda quam velit est temporibus numquam eos quos repellendus porro molestias! Veritatis accusamus odio suscipit facere nam saepe corrupti, culpa vel repellendus tempore. Corporis iure animi unde saepe. Quam temporibus mollitia reiciendis id laborum recusandae voluptas deleniti suscipit expedita ipsum nihil dolores quis dicta commodi tempora quisquam aliquid iste est, perspiciatis maxime doloremque minima libero! Placeat voluptas dignissimos nulla eveniet recusandae esse earum fugiat sapiente distinctio magni enim laudantium ea sit, dolor vitae quia quo! Repudiandae, possimus!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia doloribus beatae odio esse? Quaerat cupiditate perferendis aperiam veritatis ipsam rem, non omnis voluptas cumque voluptatibus harum magnam fuga iusto consequuntur in laboriosam adipisci architecto, nihil dolores quas debitis doloribus necessitatibus. Similique quasi facilis culpa aperiam dolores delectus accusantium repellat temporibus, possimus laboriosam dolorum beatae a, vero rem fuga veritatis! Incidunt vel numquam, nisi error quidem ad neque, animi repellendus porro autem dolorum obcaecati perspiciatis soluta alias. Odio facere rerum corrupti recusandae voluptates praesentium architecto quae sunt ad, ea voluptas temporibus officia nulla placeat iusto nobis, repudiandae aperiam odit, ut impedit.
          </div>
        </div>


      </div>




    </>
  )
}
