import Input from "./UseState/Input";
import Blog from "./Component/Blog";
import Login from './Login/Login';
import Reset from './Login/Reset';
import {useState} from 'react';
function App() {
  // const[form,setForm]=useState("login");
  
  return (
   <>
   <Blog/>
   {/* <div >
    <h1>Welcome!</h1>
    {form ==="login"?<Login/>:<Reset/>}

    <button onClick={()=>{setForm(form==="login"?"reset":"login")}}>
      {form==="login"?"Forgot Password":"login"}
    </button>

   </div> */}
   </>
  );
}

export default App;
