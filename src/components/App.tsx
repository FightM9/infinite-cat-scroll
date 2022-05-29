import { Favorite, Home, NotFound } from 'pages';
import { FC } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

import 'shared/styles/header.scss';
import 'shared/styles/page.scss';

const App: FC = () => {
  return (
    <div>
      <header className='header'>
        <nav className='container'>
          <ul className='header-list'>
            <li><NavLink to='/'>All cats</NavLink></li>
            <li><NavLink to='/favorite'>Favorite</NavLink></li>
          </ul>
        </nav>
      </header>
      <main className='page'>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favorite' element={<Favorite />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default App;
