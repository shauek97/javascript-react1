import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchString } from '../../redux/searchStringRedux';


const SearchForm = () => {
    const dispatch = useDispatch();
    const savedString = useSelector(state => state.searchString)
    const [newSearchstring, setnewSearchString] = useState(savedString || '');
    

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearchString(newSearchstring))
        console.log(newSearchstring)
    } 

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder='Search...' value={newSearchstring} onChange={e => setnewSearchString(e.target.value)} />         
            <Button><span className="fa fa-search" /></Button>
        </form>
    );
  };

  export default SearchForm;