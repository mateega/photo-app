import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewMemoryForm.module.css';

function NewMemoryForm(props) {
  const imageInputRef = useRef();
  const titleInputRef = useRef();
  const tagInputRef = useRef();
  const dateInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredImage = imageInputRef.current.value;
    const enteredTitle = titleInputRef.current.value;
    const enteredTag = tagInputRef.current.value;
    const enteredDate = dateInputRef.current.value;

    const memoryData = {
      image: enteredImage,
      title: enteredTitle,
      tag: enteredTag,
      date: enteredDate
    };

    props.onAddMemory(memoryData);
  }

  return(<Card>
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='image'>Image URL</label>
        <input type="url" required id="image" ref={imageInputRef}/>
      </div>
      
      <div className={classes.control}>
        <label htmlFor='title'>Title</label>
        <input type="text" required id="title" ref={titleInputRef}/>
      </div>

      <div className={classes.control}>
        <label htmlFor='address'>Hashtag</label>
        <input type="text" required id="address" ref={tagInputRef}/>
      </div>

      <div className={classes.control}>
        <label htmlFor='description'>Date</label>
        <input type="text" required id="description" ref={dateInputRef}/>
      </div>

      <div className={classes.actions}>
        <button>Add Memory</button>
      </div>
    </form>
  </Card>
  );
}

export default NewMemoryForm;