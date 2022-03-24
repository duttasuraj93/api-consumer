import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { store } from '../../../store/index'
import Movie from '../index'

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
      id: '629542',
    }),
    useRouteMatch: () => ({ url: '/movie/629542' }),
  }));

describe("Handle movie tests", () => {

  it("should render movie title", async () => {
    render(<Provider store={store}><Movie /></Provider>)

    const eachMovieDiv = await screen.findByTestId("movie-title")
    expect(eachMovieDiv).toBeInTheDocument()

    const movieTitle = await screen.getByText("The Bad Guys")
    expect(movieTitle).toBeInTheDocument()

  })

})



