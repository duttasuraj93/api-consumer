import { lazy, Suspense } from 'react';
import './App.css';
import './index.css';
import Loading from './components/Loading';
import { useAppSelector } from './hooks'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header/index';

const Home = lazy(() => import('./routes/Home/index'));
const Movie = lazy(() => import('./routes/Movie/index'));
const Movies = lazy(() => import('./routes/Movies/index'));


function App() {

  const theme = useAppSelector(state => state.theme);

  return (
    <>
      <div className='App' data-theme={theme}>
        <Router>
          <Header />
          <Suspense fallback={<div className='flex-row justify-cont-center ver-pad-60'>
            <div className='default-wrapper pad-hor-20'>
              <div>
                <div className='flex-row justify-cont-space-bet flex-wrap'>
                  <Loading />
                </div>
              </div>
            </div>
          </div>}>
            <Routes>
              <Route path="/" element={<Movies />} />
              <Route path="/home" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/movie/:id" element={<Movie />} />
            </Routes>
          </Suspense>
        </Router>
      </div>
    </>
  );
}

export default App;
