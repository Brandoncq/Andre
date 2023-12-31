import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/nav';
import { Work, Contact,ProjectDetails } from './components/pages';

function App() {

  return (
    <div className='App'>
      <Navbar />
      <Routes>
      <Route
          index
          element={<Work />}
        />
        <Route path='/work' element={<Work />} />
        <Route path='/work/:project' element={<ProjectDetails />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}
export default App;
