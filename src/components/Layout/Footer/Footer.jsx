import classes from './Footer.module.css';

import { ReactComponent as FaceBookSVG } from '../../../assets/images/facebook.svg';
import { ReactComponent as InstagramSVG } from '../../../assets/images/insta.svg';
import { ReactComponent as TwitterSVG } from '../../../assets/images/twitter.svg';

const Footer = () => {
  return (
    <div className={`${classes.footer} default-padding`}>
      <ul className={classes['footer__about-section']}>
        <h2>About</h2>
        <li className={classes.footer__link}>Company</li>
        <li className={classes.footer__link}>Team</li>
        <li className={classes.footer__link}>Careers</li>
        <li className={classes.footer__link}>Blog</li>
      </ul>
      <ul className={classes['footer__support-section']}>
        <h2>Support</h2>
        <li className={classes.footer__link}>Help Center</li>
        <li className={classes.footer__link}>Cancellation Options</li>
        <li className={classes.footer__link}>Neighborhood Support</li>
        <li className={classes.footer__link}>Trust & Safety</li>
      </ul>
      <ul className={classes['footer__address-section']}>
        <h2>Address</h2>
        <li>Counter Delivery, Carters Beach</li>
        <li>PostCentre, Westport</li>
      </ul>
      <ul className={classes.socials}>
        <li className={classes.social}>
          <FaceBookSVG />
        </li>
        <li className={classes.social}>
          <InstagramSVG />
        </li>
        <li className={classes.social}>
          <TwitterSVG />
        </li>
      </ul>
      <div className={classes['footer__end-note']}>
        <span>©Udwell, LLC. All rights reserved.</span>
        <span>Terms & Conditions</span>
        <span>Privacy Policy</span>
      </div>
    </div>
  );
};

export default Footer;
