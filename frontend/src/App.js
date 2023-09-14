import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
// import Users from './components/Users';
import Employee from './components/Employee';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';
import CreateEmployee from './components/CreateEmployee';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Users/>}></Route> */}
          <Route path='/' element={<Employee/>}></Route>
          <Route path='/CreateEmp' element={<CreateEmployee/>}></Route>
          <Route path='/create' element={<CreateUser/>}></Route>
          <Route path='/update/:id' element={<UpdateUser/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
