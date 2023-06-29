import { Route, Routes } from 'react-router-dom';
import Signup from './SingupPage';
import Forgtopassword from './forgorPassword';
function App() {
  return (
    <>
       <Routes>
            <Route path="/" element={<Signup />} exact />
            <Route path="/forgotpassword" element={<Forgtopassword />} />
        </Routes>
    </>
  );
}

export default App;