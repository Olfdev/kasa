import {Link} from 'react-router-dom'
import Logo from './Logo';

export default function Header(){
  const currentRoute = window.location.pathname;

  return (
    <header>
      <Logo/>
      <nav>
        <li className='nav-links'>
          <ul className={currentRoute === '/' ? "nav-links-underline" : undefined}><Link to='/'>Accueil</Link></ul>
          <ul className={currentRoute === '/about' ? "nav-links-underline" : undefined}><Link to='/about'>À propos</Link></ul>
        </li>
      </nav>
    </header>
  );
}