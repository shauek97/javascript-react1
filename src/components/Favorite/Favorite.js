import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { getFavoriteCard } from '../../redux/cardsRedux';
import { useSelector } from 'react-redux';

const Favorite = () => {
  const cards = useSelector(getFavoriteCard)
  if(!cards.length) return <div className={styles.no_cards}>No favorite cards…</div>
  return (
    <div className={styles.hero}>
      <PageTitle>FAVORITE</PageTitle>
      <p className={styles.subtitle}>Your favorite cards</p>
      <ul className={styles.cards}>
			  {cards.map(card => <Card key={card.id} title={card.title} isFavorite={card.isFavorite} id={card.id} />)}
		  </ul>
    </div>
  );
};

  export default Favorite;