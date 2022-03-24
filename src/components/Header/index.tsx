import { setTheme } from '../../redux/reducers/theme/index'
import { useAppSelector, useAppDispatch } from '../../hooks'
import { Link } from "react-router-dom";

export default function Header(props: any) {

  const theme = useAppSelector((state) => state.theme)
  const dispatch = useAppDispatch()

  const changeTheme = () => {
    let th = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', th);
    dispatch(setTheme(th))
  }

  return (
    <div className='header'>
      <div className='flex-row align-items-center justify-cont-space-bet default-wrapper pad-hor-20'>
        <Link to="/" className='flex-row'><img height="40px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tmdb.new.logo.svg/2560px-Tmdb.new.logo.svg.png" alt="" /></Link>
        <nav className='navbar'>
          <ul className='flex-row align-items-center'>
            <li>
              <button className="button-primary" onClick={changeTheme}>Change Theme</button>
            </li>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/movies">Movies</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}