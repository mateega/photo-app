import { Route, Routes } from 'react-router-dom';

import AllMemoriesPage from './pages/AllMemories';
import NewMemoriesPage from './pages/NewMemories';
import Layout from './components/layout/Layout';

function App() {
  return(
    <Layout>
      <Routes>
        <Route path="/" element={<AllMemoriesPage />} />
        <Route path="/add-memory" element={<NewMemoriesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
