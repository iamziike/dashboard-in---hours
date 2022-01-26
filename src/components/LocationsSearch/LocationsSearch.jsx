import { useState } from 'react';

import classes from './LocationsSearch.module.css';
import Button from '../UI/Button/Button';

import { ReactComponent as SearchSVG } from '../../assets/images/search.svg';
import { ReactComponent as DeleteSVG } from '../../assets/images/cancel.svg';

const LocationsSearch = ({
  className = '',
  locations,
  onLocationAdd,
  onLocationRemove,
}) => {
  const [location, setLocation] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    onLocationAdd(location);
    setLocation('');
  };

  const inputFieldChangeHandler = (event) => {
    setLocation(event.target.value);
  };

  const locationsStyled = locations.map(({ id, value }) => (
    <li
      className={`${classes['locations-search__output']} default-radius`}
      key={id}
    >
      <span>{value}</span>
      <span
        className={`${classes['locations-search__output__delete']} `}
        onClick={() => onLocationRemove(id)}
      >
        <DeleteSVG />
      </span>
    </li>
  ));

  return (
    <form
      className={`${className} ${classes['locations-search']}`}
      onSubmit={submitHandler}
    >
      <ul
        className={`${classes['locations-search__output-wrapper']} no-visible-scrollbar`}
      >
        {locationsStyled}
      </ul>
      <input
        value={location}
        type='text'
        placeholder='Add More'
        onChange={inputFieldChangeHandler}
      />
      <Button>
        <SearchSVG />
      </Button>
    </form>
  );
};

export default LocationsSearch;
