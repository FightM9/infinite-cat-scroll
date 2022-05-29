import { NavLink } from 'react-router-dom';
import 'styles/header.scss';
import 'styles/layout.scss'

const Header = () => {
  return (
    <header className='header'>
        <nav className='wraper'>
      <ul className='header-list'>
        <li>
          <NavLink to='/' >Все котики</NavLink>{' '}
        </li>
        <li>
          <NavLink to='/favorite'>Любимые котики</NavLink>{' '}
        </li>
      </ul>
      </nav>
    </header>
  );
};

export default Header;
