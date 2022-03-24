import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
    <div className='flex-row justify-cont-center ver-pad-60'>
        <div className='default-wrapper pad-hor-20'>
          <div>
            <h1 className='mar-bot-20'>Home Page</h1>
            <div>
              <p className='mar-bot-20'>You are in Home page, would you like to go to movies page?</p>
              <button className='flex-row button-primary'><Link to="/movies" className="color-white"><h1>Movies</h1></Link></button>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}
