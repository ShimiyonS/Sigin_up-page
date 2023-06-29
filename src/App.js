import { Route, Routes } from 'react-router-dom';
import Signup from './SingupPage';
import Forgtopassword from './forgorPassword';
function App() {
  return (
    <>
       <Routes>
            <Route path="/users" element={<Forgtopassword />} />
            <Route path="/" element={<Signup />} exact />
        </Routes>
    </>
  );
}

export default App;