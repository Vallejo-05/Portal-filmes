import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import GenreListPage from './pages/GenreListPage.jsx'
import Home from './pages/Home.jsx'
import MovieDetailPage from './pages/MovieDetailPage.jsx'
import MovieListPage from './pages/MovieListPage.jsx'
import  MoviesByGenrePage from './pages/MoviesByGenrePage.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {index:true, element: <Home/>},
      {path: '/movies', element: <MovieListPage/>},
      {path: '/movies/:id', element: <MovieDetailPage/>},
      {path: '/genre', element: <GenreListPage/>},
      {path: '/genre/:id', element: <MoviesByGenrePage/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router= {router}/>
  </StrictMode>,
)
