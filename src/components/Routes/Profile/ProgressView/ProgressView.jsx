import classes from './ProgressView.module.css';
import ProgressBar from '../../../UI/ProgressBar/ProgressBar';
import { ReactComponent as BarChart } from '../../../../assets/images/barchart.svg';

const ProgressView = ({
  title,
  dataType,
  progress,
  increase,
  chartType = 'PROGRESS_BAR',
  progressBarValue = 0,
  className = '',
}) => {
  let ChartType = (
    <>
      <ProgressBar progress={progressBarValue} />
      <div className={classes['yearly-goal']}>Yearly Goal</div>
    </>
  );

  if (chartType === 'BAR_CHART') {
    ChartType = (
      <div>
        <BarChart />
      </div>
    );
  }

  return (
    <div className={`${classes['progress-view']} ${className}`}>
      <p className={classes.title}>{title}</p>
      <p className={classes.descr}>{dataType}</p>
      <p className={classes.counter}>{progress}</p>
      <p className={classes.increase}>+{increase}%</p>
      <div className={classes['progress-chart']}>{ChartType}</div>
    </div>
  );
};

export default ProgressView;
