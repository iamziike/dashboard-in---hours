import classes from './UserProfileMenu.module.css';
import { NavLink } from 'react-router-dom';
import Button from '../UI/Button/Button';

import { ReactComponent as ProfileSVG } from '../../assets/images/User.svg';
import { ReactComponent as ListingSVG } from '../../assets/images/Listing.svg';
import { ReactComponent as SavedHomesSVG } from '../../assets/images/Saved-homes.svg';
import { ReactComponent as SavedSearchSVG } from '../../assets/images/Saved-search.svg';
import { ReactComponent as MessagesSVG } from '../../assets/images/Messages.svg';
import { ReactComponent as NotificationsSVG } from '../../assets/images/Notifications.svg';
import { ReactComponent as BillingSVG } from '../../assets/images/Billing.svg';
import { ReactComponent as AnalyticsSVG } from '../../assets/images/Analytics.svg';
import { ReactComponent as BlogSVG } from '../../assets/images/Blog.svg';
import { ReactComponent as CopySvg } from '../../assets/images/bx-copy.svg';

const routes = [
  { title: 'Profile', icon: <ProfileSVG />, link: '/' },
  { title: 'My listing', icon: <ListingSVG />, link: '/my-listing' },
  { title: 'Saved homes', icon: <SavedHomesSVG />, link: '/saved-homes' },
  { title: 'Saved search', icon: <SavedSearchSVG />, link: '/saved-search' },
  { title: 'Messages', icon: <MessagesSVG />, link: '/messages' },
  { title: 'Notifications', icon: <NotificationsSVG />, link: '/notfications' },
  { title: 'Billing', icon: <BillingSVG />, link: '/billing' },
  { title: 'Analytics', icon: <AnalyticsSVG />, link: '/analytics' },
  { title: 'Blog', icon: <BlogSVG />, link: '/blog' },
];

const UserProfileMenu = ({ userName, userImage, userAccountType }) => {
  const linkCopyHandler = () => {
    // hardcoded it here because this linkCopyHandler has been built to just copy one link it isn't generic

    navigator.clipboard.writeText('https://www.udewell.com').catch((error) => {
      console.log('Could NOT COPY', error);
    });
  };

  return (
    <div className={`${classes['user-profile']} no-visible-scrollbar`}>
      <div className={classes['avatar']}>
        <img src={userImage} alt='avatar' />
      </div>
      <div>
        <div className={classes['user-profile__info']}>
          <div className={classes['user-profile__info__name']}>{userName}</div>
          <div className={classes['user-profile__info__account-type']}>
            Home {userAccountType}
          </div>
          <Button className={classes['user-profile__info__edit']}>
            Edit profile
          </Button>
        </div>
        <ul className={classes['user-profile__links']}>
          {routes.map((route, index) => (
            <li key={index} className={classes['user-profile__link']}>
              <NavLink to={route.link}>
                <span className={classes['user-profile__link-text']}>
                  {route.title}
                </span>
                <span>{route.icon}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        <div className={classes['copy-link']}>
          <p>Profile link</p>
          <div>
            <span>https://www.udewell.com</span>
            <span
              className={classes['copy-link__control']}
              onClick={linkCopyHandler}
            >
              <CopySvg />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileMenu;
