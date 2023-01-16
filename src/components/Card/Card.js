import styles from './Card.module.scss'
import { useDispatch } from 'react-redux';
import { addFavorite } from '../../redux/store';
import {clsx} from 'clsx';

const Card = ({id, title, isFavorite}) => {
    
    const dispatch = useDispatch();

    const handleClick = e => {
        e.preventDefault();
        dispatch(addFavorite(id, isFavorite))
    }

    return (
    <div>
    <li className={styles.card}><span>{title}</span><button onClick={handleClick} className={clsx(styles.star, isFavorite && styles.active)}><span className={'fa fa-star-o fa-2x'}></span></button></li>
    </div>
    )
};

export default Card;