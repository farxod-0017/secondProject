import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import PorfolioPage from './pages/PorfolioPage';
import ContactMe from './pages/ContactMe';
import Portfolios from './components/Portfolios';
import PortfolioHome from './components/PortfolioHome';

const root = ReactDOM.createRoot(document.getElementById('root'));

const myRouter = createBrowserRouter([{
  path:"/",
  element:<App/>,
  errorElement:<ErrorPage/>,
  children:[
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"/portfolio",
      element:<PorfolioPage/>,
      children:[
        {
          path:"/portfolio",
          element:<PortfolioHome/>
        },
        {
          path:"/portfolio/:prNumber",
          element:<Portfolios/>
        }
      ]
    },
    {
      path:"contact",
      element:<ContactMe/>
    }
  ]
}])
root.render(
  <React.StrictMode>
    <RouterProvider router={myRouter}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
