import {
useNavigate
}
from "react-router-dom";


import {
getUser,
logout
}
from "../auth/auth";



function Navbar(){


const nav=useNavigate();

const user=getUser();



return(

<nav

className="
bg-white
shadow
p-4
flex
justify-between
"


>


<h1

className="
font-bold
text-blue-600
"

>

💻 IT Notebook

</h1>



<div>


<span className="
mr-5
text-gray-600
">

Hello :
{user?.username}

</span>


<button

onClick={()=>{

logout();

nav("/")

}}

className="
bg-red-500
text-white
px-4
py-2
rounded
"

>

Logout

</button>



</div>


</nav>


)


}


export default Navbar;