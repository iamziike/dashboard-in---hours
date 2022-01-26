import classes from './ProgressBar.module.css';

const ProgressBar = ({ progress, className = '' }) => {
  return (
    <div className={`${classes['progress-bar']} ${className}`}>
      <div style={{ width: progress + '%' }}></div>
    </div>
  );
};

export default ProgressBar;
