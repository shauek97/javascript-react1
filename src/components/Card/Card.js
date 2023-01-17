import styles from './Card.module.scss'
import { useDispatch } from 'react-redux';
import { addFavorite, removeCard } from '../../redux/cardsRedux';
import {clsx} from 'clsx';

const Card = ({id, title, isFavorite}) => {
    
    const dispatch = useDispatch();

    const handleClickStar = e => {
        e.preventDefault();
        dispatch(addFavorite(id, isFavorite))
    }

    const handleRemoveCard = e => {
        e.preventDefault();
        dispatch(removeCard(id))
    }


    return (
    <div>
    <li className={styles.card}>
        <span>{title}</span>
        <div>
        <button onClick={handleClickStar} className={clsx(styles.star, isFavorite && styles.active)}>
            <span className={'fa fa-star-o'}></span>
        </button>
        <button onClick={handleRemoveCard} className={styles.trash}><span className={'fa fa-trash'}></span></button>
        </div>
    </li>
    </div>
    )
};

export default Card;