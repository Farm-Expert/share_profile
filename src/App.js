import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Share } from './screens/Share';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:token" element={<Share/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
