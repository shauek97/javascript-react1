import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchstring } from '../../redux/store';


const SearchForm = () => {
    const dispatch = useDispatch();
    const savedString = useSelector(state => state.searchString)
    const [newSearchstring, setnewSearchstring] = useState(savedString || '');
    

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearchstring(newSearchstring))
    } 

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder='Search...' value={newSearchstring} onChange={e => setnewSearchstring(e.target.value)} />         
            <Button><span className="fa fa-search" /></Button>
        </form>
    );
  };

  export default SearchForm;