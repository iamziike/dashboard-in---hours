import classes from './Button.module.css';

const Button = ({ onClick, children }) => {
  const clickHandler = () => {
    if (onClick) onClick();
  };

  return (
    <button className={classes.btn} onClick={clickHandler}>
      {children}
    </button>
  );
};

export default Button;
