import './App.css';
import avatar from './assets/images/avatar.png';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import Main from './components/Layout/Main/Main';

// this data in production will be fetched from a remote server
const profileInfo = {
  avatar: avatar,
  name: 'Alex Assenmacher',
  accountType: 'Buyer',
  salesGoal: {
    progress: 98.1,
    increase: 6.9, //increase in sales
  },
  totalSales: {
    current: 985.56,
    invoiced: 2_595,
    invoices: 23,
  },
  revenue: {
    current: 13_893,
    increase: 11.3,
  },
  clients: {
    current: 1_232,
    increase: 3.2,
  },
  userOnboarding: {
    value: 2_452,
  },
};

const App = () => {
  return (
    <div className='App no-visible-scrollbar'>
      <Header />
      <Main profileInfo={profileInfo} />
      <Footer />
    </div>
  );
};

export default App;
