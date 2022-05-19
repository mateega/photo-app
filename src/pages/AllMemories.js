import { useState, useEffect } from 'react';

import MemoryList from '../components/meetups/MemoryList';

function AllMemoriesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMemories, setLoadedMemories] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://react-project-72c9d-default-rtdb.firebaseio.com/memories.json'
    ).then(response => {
      return response.json();
    }).then(data => {
        const memories = [];

        for(const key in data) {
          const memory = {
            id: key,
            ...data[key] // spread operator to copy all key value pairs into meetup object
          };

          memories.push(memory);
        }

        const memoriesOrdered = memories.reverse();
        setIsLoading(false); // end loading state once we have data
        setLoadedMemories(memoriesOrdered);
    });
  }, []);

  if (isLoading) {
    return(<section><p>Loading...</p></section>)
  }

  return (
    <section>
      <h1>Memories</h1>
      <MemoryList memories={loadedMemories} />
    </section>
  );
  }

export default AllMemoriesPage;