import React from "react";
import "./App.css";
import { Container, Row ,Col} from "reactstrap";
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Myheader from "./components/Myheader";
import Home from "./components/Home";
import AllCourse from "./components/AllCourse";
import AddCourse from "./components/AddCourse";
import Menus from "./components/Menus";
import {
  BrowserRouter,
  Route
} from "react-router-dom";


function App() {
  

  return (
<div>
<BrowserRouter>
<Container>
<ToastContainer/>
<Myheader/>
<Row>
  <Col md={3}>
    <Menus/>
  </Col>
  <Col md={9}>
    <Route path="/" component={Home} exact />
    <Route path="/add-course" component={AddCourse} exact />

    <Route path="/view-courses" component={AllCourse} exact />

  </Col>
</Row>
</Container>
</BrowserRouter>
  
</div>
  );
}

export default App;
