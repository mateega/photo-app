import MemoryItem from './MemoryItem';
import classes from './MemoryList.module.css';

function MemoryList(props) {
  return(
    <ul className={classes.list}>
        {props.memories.map((memory) => (
          <MemoryItem
            key={memory.id}
            id={memory.id}
            image={memory.image}
            title={memory.title}
            tag={memory.tag}
            date={memory.date}
          />
        ))}
    </ul>
  );
}

export default MemoryList;