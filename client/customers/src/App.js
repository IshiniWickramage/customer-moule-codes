import React from "react";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import CustomerCreation from "./pages/CustomerCreation";
import CustomerList from "./pages/CustomerList";
import CustomerOverview from "./pages/CustomerOverview";
import CustomerOverviewSecond from "./pages/CustomerOverviewSecond";
import CustomerOverviewThird from "./pages/CustomerOverviewThird";
import "bootstrap/dist/css/bootstrap.min.css"


function App() {

  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<CustomerCreation />}></Route>
  <Route path="/CustomerList" element={<CustomerList/>}></Route>
  <Route path="/CustomerOverview/:id" element={<CustomerOverview/>}></Route>
  <Route path="/CustomerOverviewSecond" element={<CustomerOverviewSecond/>}></Route>
  <Route path="/CustomerOverviewThird" element={<CustomerOverviewThird/>}></Route>
</Routes>
</BrowserRouter>
    );
}

export default App
