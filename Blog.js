import {useState,useRef,useEffect,useReducer} from 'react';
import {db} from '../firebaseInit';
import { collection, addDoc } from "firebase/firestore"; 
import { doc, setDoc,getDocs,onSnapshot ,deleteDoc} from "firebase/firestore"; 

// Add a new document in collection "cities"


// Add a new document with a generated id.

// function blogReducer(state,action){
//     switch(action.type){
//         case "ADD" :
//               return [action.blog,...state];
//         case "REMOVE":
//                return state.filter((blog,index)=> index!==action.index);
//         default:
//                return [];

//     }

// }
export default function Blog(){
    // const [title,setTitle]=useState("");
    // const [content,setContent]=useState("");
    const [formData,setFormData]=useState({title:"",content:""});
    const [blogs,setBlogs]=useState([]);
    // const [blogs,dispatch]=useReducer(blogReducer,[]);
    const titleRef=useRef(null);
    useEffect(()=>{
        titleRef.current.focus();},[]);
useEffect(()=>{
    if(blogs.length && blogs[0].title){
        document.title=blogs[0].title;
    }
    else{
        document.title="No Blogs";
    }
},[blogs]);
useEffect(()=>{
    // async function fetchData(){
    //     const snapShot =await getDocs(collection(db,"Blogs"));
    //     const allblogs=snapShot.docs.map((doc)=>{
    //         return{
    //             id:doc.id,
    //             ...doc.data()

    //         }
    //     })
      
    //    setBlogs(allblogs);

    // }
    // fetchData();
    const unsub=onSnapshot(collection(db,"Blogs"),(snapShot)=>{
        const allblogs=snapShot.docs.map((doc)=>{
                    return{
                        id:doc.id,
                        ...doc.data()
        
                    }
                })
              
               setBlogs(allblogs);

    })

},[]);
  async  function handleSubmit(e){
        e.preventDefault();
        // setBlogs([{title:formData.title,content:formData.content},...blogs]);
        // dispatch({type:"ADD",blog:{title:formData.title,content:formData.content}})
        const docRef=doc(collection(db,"Blogs"));

         await setDoc(docRef, {
                title:formData.title,
                content:formData.content,
                createdon:new Date(),
              });
       

    

        
        //   try {
        //     const docRef = await addDoc(collection(db, "Blogs"), {
        //       title: formData.title,
        //       content: formData.content,
        //       createdon: new Date(),
        //     });
        //     console.log("Document written with ID: ", docRef.id);
        //   } catch (error) {
        //     console.error("Error adding document: ", error);
        //   }
          //console.log("Document written with ID: ", docRef.id);
        console.log(blogs);
        titleRef.current.focus();
        setFormData({title:"",content:""});
    }
  async  function removehandle(id){
        // setBlogs(blogs.filter((blog,index)=> index !== i));
        // dispatch({type:"REMOVE",index:i});
        const docref=doc(db,"Blogs",id);
     await  deleteDoc(docref);

    }
    return(
        <><div className="section"> 
        <form onSubmit={handleSubmit}>
        <Row1 label="Title">
        <input  ref={titleRef}
        value={formData.title}placeholder="enter title here" onChange={(e)=>setFormData({title:e.target.value,content:formData.content})} className="input"/>
        </Row1>
       <Row1 label="Content">
       <textarea value={formData.content}  required placeholder="enter content here" onChange={(e)=>setFormData({title:formData.title,content:e.target.value})} className="input-content"/>
       </Row1>
       <button  className="add-btn"> Add</button>
        </form> 
       
        </div>
        <h2>Blog</h2>
      {blogs.map((blog,i)=>(
        <div key={i} className="blogs2">
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
            <div className='btn-remove'>
                <button onClick={()=>removehandle(blog.id)} className='btn'>Delete</button>
            </div>
        </div>
      ))}
        </>
    )

}
function Row1(props){
    let {label}=props;
    return(
        <>
        <label>{label}<br/></label>
            {props.children}
            <hr></hr>
            </>
    )
} 