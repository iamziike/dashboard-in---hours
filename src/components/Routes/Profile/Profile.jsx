import classes from './Profile.module.css';
import setNumberComma from '../../../utilities/setNumberComma';
import ProgressView from './ProgressView/ProgressView';

import { ReactComponent as SalesSVG } from '../../../assets/images/sales.svg';
import { ReactComponent as UserOnboardSVG } from '../../../assets/images/User.svg';
import GraphView from './GraphView/GraphView';
import DoughnutView from './DoughnutView/DoughnutView';

const Profile = ({ profileInfo }) => {
  const { salesGoal, clients, revenue, userOnboarding, totalSales } =
    profileInfo;

  return (
    <div className={classes.profile}>
      <ProgressView
        className={classes.sales}
        title={'Sales'}
        dataType={'Monthly Goal'}
        progress={`${salesGoal.progress}%`}
        increase={salesGoal.increase}
        chartType={'PROGRESS_BAR'}
        progressBarValue={70}
      />
      <ProgressView
        className={classes.revenue}
        title={'Revenue'}
        dataType={'Total Profits'}
        progress={'$' + setNumberComma(revenue.current)}
        increase={revenue.increase}
        chartType={'BAR_CHART'}
      />
      <ProgressView
        className={classes.clients}
        title={'Clients'}
        dataType={'Subscribed'}
        progress={setNumberComma(clients.current)}
        increase={clients.increase}
        chartType={'PROGRESS_BAR'}
        progressBarValue={90}
      />
      <DoughnutView
        title='Total Sales'
        progressText={'+$' + totalSales.current}
        progressPercent={70}
        icon={<SalesSVG />}
        otherData={[
          {
            value: '$' + setNumberComma(totalSales.invoiced),
            text: 'Invoiced',
          },
          { value: totalSales.invoices, text: 'Invoices' },
        ]}
        className={classes['total-sales']}
      />
      <GraphView title='Daily Profit' className={classes['daily-profit']} />
      <GraphView
        title='Daily active clients'
        className={classes['daily-active-clients']}
        color='GREEN'
      />
      <DoughnutView
        title='User Onboarding'
        progressText='Q3 Goal: 8,000 User'
        progressPercent={70}
        icon={<UserOnboardSVG />}
        color='ORANGE'
        otherData={[
          { value: setNumberComma(userOnboarding.value), text: 'ONBOARDED' },
        ]}
        className={classes['user-onboarding']}
      />
    </div>
  );
};

export default Profile;
