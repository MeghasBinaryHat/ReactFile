// use props here
// import React   from 'react';
// import './Student.css';
// const Student = (props) =>{
   
//      return(
//         <div>
//             <h1 className='head1'>{props.name}</h1>
//             <h2 className='head2'>{props.live}</h2>
//             <h3 className='head3'>{props.educate}</h3>
           
            
//         </div>
//     );

// }     
// export default Student;  


// use props
// const Student = (props)=>{
//     return(
//         <div style={{backgroundColor:'pink' , width:'500px' , height:'200px' , textAlign:'center'}}>
//             <h1>{props.name} </h1>
//             <h1>{props.email} </h1>
//         </div>
//     )
// };
// export default Student;


// import React from 'react';
// const Student = ()=>{
//     let data = "megha dumbre"
//     const handleClick = ()=>{
//         data = "prachi dumbre"
//         alert(data);
//     }
//     return(
//         <div>
//             <h1>{data}</h1>
//             <button onClick={handleClick} >Click </button>
          
//         </div>
//     )
// };
// export default Student;

  
// use useState()
// import React , {useState}  from 'react';
// const Student = () =>{
//    const[name , setName] = useState("Megha");
//    const handleClick = (name) =>{
//     setName("Prachi");
//    };
//    const [value ,setNumber] = useState(4);
//    const handleClick1 = ()=>{
//     setNumber(5);
//    };
//     return(
//         <div>
//             <h1>My Name is {name}</h1>
//             <button onClick={handleClick}>Change Name</button>
//           <h1>Number is {value}</h1>
//           <button onClick={handleClick1}>Change Num</button>
//         </div>
//     );
// };
// export default Student ;



// use useState in react

// import React , {useState} from 'react';
// import './Student.css';
// const Student = () =>{
//     let[counter, setCounter] = useState(0);
//     const incrementHandler = ()=>{
//       setCounter(counter+=1);
//     }
//     const decrementHandler =()=>{ 
//       setCounter( counter-2);
//     }
//     return(
//         <div className='box'>
//           <button onClick={decrementHandler}>Decrement</button>
//             <h1>{counter}</h1>
//             <button onClick={incrementHandler}>Increment</button>
//         </div>
//     )
// };

// export default Student;




// render array in react

//  import React from 'react';
//  const Student = ()=>{
    
//     const name = ["Megha" , "Prachi" , "Raj" , "Payal" , "Anushka"];
//     return(
//         <div> 
//             {
//                   name.map((data)=>
//                     <ul>
//                         <li>{data}</li>
                    
//                     </ul>
            
//                   )
//             }
          
            
//         </div>
//     )
//  }
//  export default Student;


// how to render array of an object

// import React from 'react';

// create a array of an object
//   const info = [
//     {
//         Name : "Megha",
//         Email : "dumbremegha3232@gmail.com",
//         City : "Pune",
//         College : "JSOCE"
//     },
//     {
//         Name : "Prachi",
//         Email : "dumbreprachi123@gmail.com",
//         City : "Hadapsar",
//         College : "TSSM"
//     },
//     {
//         Name : "Payal",
//         Email : "nikhadepayal12@gmail.com",
//         City : "Chakan",
//         College : "BSCOE"
//     },
//     {
//         Name : "Anushka",
//         Email : "shivaleanushka@gmail.com",
//         City : "Pimpri",
//         College : "RSCOE"
//     }
//   ];

 
// const Student =()=>{
//     return(
//         <div>
//             <h1>Student Information</h1>
//             <table>
//                 { 
//                   info.map((data)=>
//                     <tr>
//                         <td>{data.Name}</td>
//                         <td>{data.Email}</td>
//                         <td>{data.City}</td>
//                         <td>{data.Pin}</td>
//                     </tr>
                  

//                   )
//                 }
//             </table>
            
//         </div>
//     )
// }
// export default Student;

// import React from 'react';
//   const info = [
//     {
//         "id" : 1,
//         "name" : "Akshit",
//          "city" : "Moradabad"
//     },
//     {
//         "id" : 2,
//         "name" : "Nikita",
//          "city" : "Lucknow"
//     },
//     {
//         "id" : 3,
//         "name" : "Deeksha",
       
//         "city" : "Noida"
//     },
//     {
//         "id" : 4,
//         "name" : "Eshika",
//          "city" : "Mumabi"
//     },
//     {
//         "id" : 5,
//         "name" : "Somay",
//          "city" : "Gurgoan"
//     },
//     {
//         "id" : 6,
//         "name" : "Ritesh",
//          "city" : "Delhi"
//     },
//     {
//         "id" : 7,
//         "name" : "Kalpna",
//          "city" : "Rampur"
//     },
//     {
//         "id" : 8,
//         "name" : "Parul",
//          "city" : "Chandirgadh"
//     },
//     {
//         "id" : 9,
//         "name" : "Himani",
//          "city" : "Dehradun"
//     }

//   ];
// const Student =()=>{
//     return(
//         <div> 
//             <table>
//                 {
//                   info.map((data)=>
//                   <tr>
                   
//                     <td>{data.id}</td>
                   
//                     <td>{data.name}</td>
                    
//                     <td>{data.city}</td>
//                   </tr>
//                   )  
//                 }
//             </table>
            
//         </div>

//     )
// }
// export default Student;


const Student= () =>{
    return(
        <div>

            {
                data.map((info)=>
                <select>
                    <option value="">{info.name}</option>
                   
                </select>
                )
            };

            
        </div>
    )
}
export default Student;