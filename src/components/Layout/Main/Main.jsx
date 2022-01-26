import { Route, Routes } from 'react-router-dom';

import classes from './Main.module.css';
import Profile from '../../Routes/Profile/Profile';
import UserProfileMenu from '../../UserProfileMenu/UserProfileMenu';

const Main = ({ profileInfo }) => {
  return (
    <main className={classes.main}>
      <UserProfileMenu
        userName={profileInfo.name}
        userImage={profileInfo.avatar}
        userAccountType={profileInfo.accountType}
      />
      <Routes>
        <Route path='*' element={<Profile profileInfo={profileInfo} />} />
      </Routes>
    </main>
  );
};

export default Main;
