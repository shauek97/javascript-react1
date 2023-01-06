import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';


const Favorite = () => {
  return (
    <div className={styles.hero}>
      <PageTitle>FAVORITE</PageTitle>
      <p className={styles.subtitle}>Lorem ipsum</p>
    </div>
  );
};

  export default Favorite;