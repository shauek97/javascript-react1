import styles from './NavBar.module.scss'

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <div className={styles.logo}><span className={"fa fa-tasks"}></span></div>
                <div>
                    <ul className={styles.menu}>
                        <li className={styles.link}><a href="/">HOME</a></li>
                        <li className={styles.link}><a href="/favorite">FAVORITE</a></li>
                        <li className={styles.link}><a href="/about">ABOUT</a></li>            
                    </ul>
                </div>
            </div>
        </nav>
    );
  };
  
  export default NavBar;