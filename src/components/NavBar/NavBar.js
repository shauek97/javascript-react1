import styles from './NavBar.module.scss'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <div className={styles.logo}><Link to="/"><span className={"fa fa-tasks"}></span></Link></div>
                <div>
                    <ul className={styles.menu}>
                        <li className={styles.link}><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">HOME</NavLink></li>
                        <li className={styles.link}><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/Favorite">FAVORITE</NavLink></li>
                        <li className={styles.link}><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/About">ABOUT</NavLink></li>            
                    </ul>
                </div>
            </div>
        </nav>
    );
  };
  
  export default NavBar;