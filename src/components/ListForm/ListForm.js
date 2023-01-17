import styles from './ListForm.module.scss'
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedux';

const ListForm = props => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [description, setIcon] = useState('');
    const listId = props.listId
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({title, description, listId}));
        setTitle('');
        setIcon('');
    }

    return (
        <form className={styles.listForm} onSubmit={handleSubmit}>
            <span>Title:</span><TextInput value={title} onChange={e => setTitle(e.target.value)}/>
            <span>Description:</span><TextInput value={description} onChange={e => setIcon(e.target.value)}/>
            <Button>Add List</Button>
        </form>
    )
}

export default ListForm