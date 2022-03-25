import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { store } from '../../../store/index'
import Movies from '../index'
import { BrowserRouter } from 'react-router-dom';

describe("Handle movies tests", () => {

  it("should render 20 movies", async () => {
    render(<Provider store={store}><BrowserRouter><Movies /></BrowserRouter></Provider>)

    const allMoviesElements = await screen.findAllByTestId(/movie-item/i)
    expect(allMoviesElements.length).toBe(20)
  })

})



