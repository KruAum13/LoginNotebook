import {
BrowserRouter,
Routes,
Route
}
from "react-router-dom";


import Login from "./pages/Login";
import Home from "./pages/Home";

import ProtectedRoute 
from "./components/ProtectedRoute";



function App(){


return(

<BrowserRouter basename={import.meta.env.BASE_URL}>


<Routes>


<Route
path="/"
element={<Login/>}
/>


<Route

path="/home"

element={

<ProtectedRoute>

<Home/>

</ProtectedRoute>

}

/>


</Routes>


</BrowserRouter>


)

}


export default App;
