import { Route, Routes } from "react-router-dom";
import Signuppage from "./signuppage";

function App() {
 
  return (
    <>
      <Routes>
        <Route path="/:email/:number/:token" element={<Signuppage/>}/>
      </Routes>
    </>
  );
}

export default App;
