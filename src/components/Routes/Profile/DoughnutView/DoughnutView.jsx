import classes from './DoughnutView.module.css';

import { ReactComponent as DoughnutChart } from '../../../../assets/images/pie_chart_green.svg';
import { ReactComponent as DoughnutChartOrange } from '../../../../assets/images/pie_chart_orange.svg';
import { ReactComponent as MoreSVG } from '../../../../assets/images/more.svg';

const DoughnutView = ({
  title,
  progressText,
  icon,
  otherData,
  className,
  color,
}) => {
  return (
    <div className={`${classes['doughnut-view']} ${className}`}>
      <header className={classes['doughnut-view__header']}>
        <div className={classes['icon-wrapper']}>{icon}</div>
        <div className={classes['header__text-wrapper']}>
          <p>{title}</p>
          <p>{progressText}</p>
        </div>
        <div className={classes.more}>
          <MoreSVG />
        </div>
      </header>
      <main className={classes['doughnut-view__main']}>
        <div className={classes['doughnut-chart']}>
          {color === 'ORANGE' ? <DoughnutChartOrange /> : <DoughnutChart />}
        </div>
        <div className={classes['other-data']}>
          {otherData.map((data, index) => (
            <div key={index}>
              <p className={classes['other-data__value']}>{data.value}</p>
              <p className={classes['other-data__text']}>{data.text}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default DoughnutView;
