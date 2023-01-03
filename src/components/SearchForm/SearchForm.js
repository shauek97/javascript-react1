import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


const SearchForm = () => {
    const searchString = useSelector(state => state.searchString);
    const dispatch = useDispatch();
    const [newSearchstring, setnewSearchstring] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: 'UPDATE_SEARCHSTRING', payload: newSearchstring})
        console.log(searchString)
        console.log(newSearchstring)
        console.log('clicked');
       

    }

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." value={newSearchstring} onChange={e => setnewSearchstring(e.target.value)} />         
            <Button><span className="fa fa-search" /></Button>
        </form>
    );
  };

  export default SearchForm;