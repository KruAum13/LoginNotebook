import Navbar from "../components/Navbar";

import notebooks 
from "../data/notebooks.json";



function Home(){


return(

<>


<Navbar/>


<div className="p-10">


<h1 className="
text-4xl
font-bold
text-blue-600
">

Notebook Recommendation

</h1>



<div className="
grid
md:grid-cols-3
gap-6
mt-10
">


{

notebooks.map(
(item)=>(


<div

key={item.id}

className="
bg-white
shadow
rounded-xl
p-6
border
"

>


<h2 className="
text-xl
font-bold
">

{item.name}

</h2>


<p>
CPU :
{item.cpu}
</p>


<p>
RAM :
{item.ram}
</p>


<p>
GPU :
{item.gpu}
</p>


<p className="
text-blue-600
font-bold
mt-3
">

฿ {item.price}

</p>



</div>


)

)


}


</div>



</div>


</>


)


}


export default Home;