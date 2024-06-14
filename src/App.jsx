import { useState, lazy, Suspense } from 'react'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements } from 'react-router-dom'

// components
import HeaderLayout from './layouts/HeaderLayout'
import Signup from './components/Signup'
import Signin from './components/Signin'
import EditProfile from './components/EditProfile'
import CreateArticle from './components/articles/CreateArticle'
import EditArticle from './components/articles/EditArticle'
import Loader from './components/Loader'
import NotFound from './components/NotFound'
import ArticlesError from './components/articles/ArticlesError'

// loaders
import { articlesLoader } from './components/articles/ArticlesList'
import { articleDataLoader } from './components/articles/Article'

// styles
import './App.css'

const ArticlesList = lazy(() => import('./components/articles/ArticlesList'))
const Article = lazy(() => import('./components/articles/Article'))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<HeaderLayout />} errorElement={<ArticlesError/>} >
      <Route
        index
        loader={articlesLoader} 
        element={(
          <Suspense fallback={<Loader />}>
            <ArticlesList/>
          </Suspense>
        )}
      />
      <Route
        path=':slug'
        loader={articleDataLoader}
        element={(
          <Suspense fallback={<Loader />}>
            <Article/>
          </Suspense>
        )}/>
      <Route path='signin' element={<Signin />} />
      <Route path='signup' element={<Signup />} />
      <Route path='new-article' element={<CreateArticle />} />
      <Route path='edit-article' element={<EditArticle />} />
      <Route path='edit-profile' element={<EditProfile />} />

      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  )
}


export default App
