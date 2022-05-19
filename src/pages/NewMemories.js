import { useNavigate } from 'react-router-dom';

import NewMemoryForm from "../components/meetups/NewMemoryForm";

function NewMemoryPage() {
  const navigate = useNavigate();

  function addMemoryHandler(memoryData) {
    // sends data to firebase database
    fetch(
      'https://react-project-72c9d-default-rtdb.firebaseio.com/memories.json',
      {
        method: 'POST',
        body: JSON.stringify(memoryData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => { navigate("/memories", { replace: true }); });
  }

  return <section>
    <h1>Add New Memory</h1>
    <NewMemoryForm onAddMemory={addMemoryHandler}/>
  </section>;
}

export default NewMemoryPage;