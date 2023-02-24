import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import { Suspense } from 'react';

// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
import { routes } from './routes';
import logo from '../logo.svg'

export const Navigation = () => {

    const navlinks = routes.map((route) => 
    <li key={route.to}>
       <NavLink to={route.to} className={({isActive}) => isActive? 'nav-active' : '' }>{route.name}</NavLink> 
    </li>);

    const definedRoutes = routes.map(({path, Component}) => {
    return <Route key={path} path={path} element={<Component/>} />
})


  return (
    <Suspense fallback={<span>Loading...</span>}>

<BrowserRouter>
    <div className="main-layout">
    <nav>
        <img src={logo} alt="React Logo" />
        <ul /* TODO: creatte dynamic */ >
       {navlinks}
    </ul>
    </nav>

    <Routes>
       {definedRoutes}
        <Route path="/*" element={<Navigate to={routes[0].to} replace/>} />
    </Routes>
   
    </div>
    </BrowserRouter>
    </Suspense>
  )
}
