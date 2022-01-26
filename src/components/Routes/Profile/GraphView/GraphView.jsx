import classes from './GraphView.module.css';

import YellowGraph from '../../../../assets/images/Graph.svg';
import GreenGraph from '../../../../assets/images/graph_green.svg';
import { ReactComponent as MoreSVG } from '../../../../assets/images/more.svg';

const GraphView = ({ color, title, className }) => {
  let Graph = YellowGraph;
  if (color === 'GREEN') Graph = GreenGraph;

  return (
    <div className={`${className} ${classes['graph-view']}`}>
      <header className={classes['graph-view__header']}>
        <p className={classes['graph-view__title']}>{title}</p>
        <div>
          <MoreSVG />
        </div>
      </header>
      <main className={classes['graph-view__main']}>
        <img src={Graph} alt='graph' />
      </main>
    </div>
  );
};

export default GraphView;
