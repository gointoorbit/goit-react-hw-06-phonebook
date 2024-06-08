import css from './SearchFilter.module.css';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

const searchFilterId = nanoid();

export const SearchFilter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const filter = event.target.value;
    dispatch(setFilter(filter));
  };

  return (
    <div className={css.filterContainer}>
      <label htmlFor={searchFilterId} className={css.filterLabel}>
        Find contacts by name
      </label>
      <input
        id={searchFilterId}
        className={css.filterInput}
        type="text"
        name="filter"
        onChange={handleFilterChange}
      ></input>
    </div>
  );
};
