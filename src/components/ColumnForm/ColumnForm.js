import styles from './ColumnForm.module.scss'
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnsRedux';

const ColumnForm = props => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const listId = props.listId
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({title, icon, listId}));
        setTitle('');
        setIcon('');
    }

    return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <span>Title:</span><TextInput value={title} onChange={e => setTitle(e.target.value)}/>
            <span>Icon:</span><TextInput value={icon} onChange={e => setIcon(e.target.value)}/>
            <Button>Add Column</Button>
        </form>
    )
}

export default ColumnForm