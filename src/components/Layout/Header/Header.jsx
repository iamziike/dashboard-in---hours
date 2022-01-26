import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import classes from './Header.module.css';
import LocationsSearch from '../../LocationsSearch/LocationsSearch';
import { dragOut } from '../../../custom-animations/custom-animations';

import { ReactComponent as NavControl } from '../../../assets/images/menu-icon.svg';

const Header = () => {
  const [locations, setLocation] = useState([
    { id: Math.random(), value: 'Grander, IA' },
  ]);

  const [isNavLinksShown, setIsNavLinksShown] = useState(false);

  const locationAddHandler = (value) => {
    const location = { id: Math.random(), value };
    setLocation((prev) => {
      if (value.length > 3) return [...prev, location];
      return prev;
    });
  };

  const locationRemoveHandler = (id) => {
    setLocation((prev) => prev.filter((location) => location.id !== id));
  };

  const headerControlClickHandler = () => {
    setIsNavLinksShown((prev) => !prev);
  };

  return (
    <header className={classes.header}>
      <LocationsSearch
        className={classes['header__location-search']}
        locations={locations}
        onLocationAdd={locationAddHandler}
        onLocationRemove={locationRemoveHandler}
      />
      <nav className={classes.nav}>
        <AnimatePresence>
          {isNavLinksShown && (
            <motion.ul className={classes.nav__links} {...dragOut}>
              <li className={classes.nav__link}>Udwell Now</li>
              <li className={classes.nav__link}>Sell a property</li>
            </motion.ul>
          )}
        </AnimatePresence>
        <div
          className={classes.header__control}
          onClick={headerControlClickHandler}
        >
          <NavControl />
        </div>
      </nav>
    </header>
  );
};

export default Header;
