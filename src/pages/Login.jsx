import {useState} from "react";
import {createToken} from "../auth/auth";
import {useNavigate} from "react-router-dom";
import users from "../data/users.json";


function Login(){

const navigate = useNavigate();


const [username,setUsername]=useState("");
const [password,setPassword]=useState("");

const [show,setShow]=useState(false);

const [fail,setFail]=useState(0);

const [lock,setLock]=useState(false);



function submit(e){

e.preventDefault();


if(lock){
 alert("ระบบล็อก กรุณารอ 1 นาที");
 return;
}



const user =
users.find(
u=>
u.username===username &&
u.password===password
);



if(user){

createToken(user);

navigate("/home");


}
else{


let count=fail+1;

setFail(count);


if(count>=5){

setLock(true);

alert(
"Login ผิด 5 ครั้ง ระบบล็อก 1 นาที"
);


setTimeout(()=>{

setLock(false);
setFail(0);

},60000);


}

else{

alert(
`Login ไม่ถูกต้อง เหลือ ${5-count} ครั้ง`
);

}


}


}



return (

<div className="
min-h-screen
flex
items-center
justify-center
bg-gradient-to-br
from-white
to-blue-100
">


<div className="
bg-white
w-96
p-8
rounded-2xl
shadow-xl
border
">


<h1 className="
text-3xl
font-bold
text-center
text-blue-600
">

💻 IT Login

</h1>


<p className="
text-center
text-gray-500
mb-6
">

Notebook System

</p>



<form onSubmit={submit}>


<input

className="
w-full
border
p-3
rounded-lg
mb-4
"

placeholder="Username"

value={username}

onChange={
e=>setUsername(e.target.value)
}

/>



<div className="relative">


<input

className="
w-full
border
p-3
rounded-lg
"

type={
show?
"text":
"password"
}


placeholder="Password"


value={password}

onChange={
e=>setPassword(e.target.value)
}

/>


<button

type="button"

onClick={()=>setShow(!show)}

className="
absolute
right-3
top-3
"

>

👁

</button>


</div>



<button

className="
mt-5
w-full
bg-blue-600
text-white
p-3
rounded-lg
hover:bg-blue-700
"

>

Login

</button>


</form>


</div>


</div>


)

}


export default Login;
