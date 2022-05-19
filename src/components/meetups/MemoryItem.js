import { useContext } from 'react';

import classes from './MemoryItem.module.css';
import Card from '../ui/Card';

function MemoryItem(props) {

  return(
  <li className={classes.item}>
    {/* <Card> */}
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      {/* <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>#{props.tag}</address>
        <p>{props.date}</p>
      </div> */}
    {/* </Card> */}
  </li>
  );
}

export default MemoryItem;