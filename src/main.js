import './main.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
const Main  = () => {
    
    const[active, setactive]=useState("inactive");
    const [userdata, setuserdata]=useState([]);
    const [click, setclick]=useState("");
    const [ActiveUser, SetActiveUser]= useState({
        image:" " , name: " ", location:" ",loc2: " " ,gender:" "    
    });
    
    const HandleClick=()=>
    {
        setactive("active");
    }
    
    const HandleClickAgain=()=>
    {
        this.setclick("click");
         SetActiveUser(
             {
                 image:userdata[0].picture.thumbnail,
                 name: userdata[0].name.title+" "+ userdata[0].name.first+" "+ userdata[0].name.last,
                 location:userdata[0].location.street.number+" "+userdata[0].location.street.name+" "+userdata[0].location.city+" "+userdata[0].location.state+" "+userdata[0].location.country+" "+userdata[0].location.postcode,
                 loc2:userdata[0].location.timezone.offset+" "+userdata[0].location.timezone.description,
                 gender:userdata[0].gender
                 
             }
         )
    }
    useEffect(()=>{
        axios.get('https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20')
     .then((response)=>{
       
     setuserdata(response.data.results);
     })/*.catch((error)=>
     {
       setloading=true;
       console.log(error);
     })*/
    },[]);
    
    console.log(ActiveUser.gender);
    return ( 
        
       <nav className="main" style=
       {{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between'
       }}>
           <div className="top-container" style=
           {{
               display:'flex',
               flexDirection:'row',
               justifyContent:'space-between'
           }}>
               <div className="challenge"><b>Challenge</b></div>
               <div className="top-right" style=
               {{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-around'
               }}>
               <div className="items" id="prod" onClick={HandleClick}>Product</div>
               <div className="items" id="download" onClick={HandleClick}>Download</div>
               <div className="items" id="Pricing" onClick={HandleClick}>Pricing</div>
               </div>
               
           </div>
           
            <div className="mid-container" style=
               {{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-evenly'
               }} >
               <div className="mid-img"><img src={ActiveUser.image}  className="mid-image"></img></div> 
               <div className="mid-text" style=
               {{
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-around'
               }}>
              
               
                   <p className="info" id="info1">{ActiveUser.name}</p>
                   <p className="info" id="loc">{ActiveUser.location}  </p>
                   <p className="info" id="loc2">{ActiveUser.loc2}</p>
                   <p className="info" id="gender"> {ActiveUser.gender} </p></div>
               </div> 
              
               
           
            
           <div className="bottom-container">

               {userdata.map((user,index)=>
               { 
                   return(<div className="card" key={index} onClick={HandleClickAgain} id={click}>
                   <p className="p1"> {userdata[index].gender+", "+userdata[index].nat} </p>
                   <p className="p2"> {userdata[index].name.title+" "+userdata[index].name.first +" "+ userdata[index].name.last}  </p>
                   <p className="p3"> {userdata[index].email} </p>
                   
                
                </div>)
               })}
               
               
               {/* <div className="item-2" onClick={HandleClickAgain}>
                   <p className="p1"> Male . NL </p>
                   <p className="p2"> Mr. Aritam  </p>
                   <p className="p3"> aritam.asthana@gmail.com </p>
               </div>
               <div className="item-3" onClick={HandleClickAgain}>
                   <p className="p1"> Female . NL </p>
                   <p className="p2"> Ms. Khyati Heda  </p>
                   <p className="p3"> khyati.heda@gmail.com </p>
               </div>
               <div className="item-4" onClick={HandleClickAgain}>
                   <p className="p1"> Male . NL </p>
                   <p className="p2"> Mr. Aritam  </p>
                   <p className="p3"> aritam.asthana@gmail.com </p>
               </div>
               <div className="item-5" onClick={HandleClickAgain}>
                   <p className="p1"> Female . NL </p>
                   <p className="p2"> Ms. Khyati Heda </p>
                   <p className="p3"> khyati.heda@gmail.com </p>
               </div>
               <div className="item-6" onClick={HandleClickAgain}>
                   <p className="p1"> Male . NL </p>
                   <p className="p2"> Mr. Aritam  </p>
                   <p className="p3"> aritam.asthana@gmail.com </p>
               </div>
               <div className="item-7" onClick={HandleClickAgain}>
                   <p className="p1"> Female . NL </p>
                   <p className="p2"> Ms. Khyati Heda </p>
                   <p className="p3"> khyati.heda@gmail.com </p>
               </div>
               <div className="item-8" onClick={HandleClickAgain}>
                   <p className="p1"> Male . NL </p>
                   <p className="p2"> Mr. Aritam  </p>
                   <p className="p3"> aritam.asthana@gmail.com </p>
               </div>
               <div className="item-9" onClick={HandleClickAgain}>
                   <p className="p1"> Female . NL </p>
                   <p className="p2"> Ms. Khyati Heda </p>
                   <p className="p3"> khyati.heda@gmail.com </p>
               </div>
               <div className="item-10" onClick={HandleClickAgain}>
                   <p className="p1"> Male . NL </p>
                   <p className="p2"> Mr. Aritam  </p>
                   <p className="p3"> aritam.asthana@gmail.com </p>
               </div>
               <div className="item-11" onClick={HandleClickAgain}>
                   <p className="p1"> Female . NL </p>
                   <p className="p2"> Ms. Khyati Heda </p>
                   <p className="p3"> khyati.heda@gmail.com </p>
               </div>
               <div className="item-12" onClick={HandleClickAgain}>
                   <p className="p1"> Male . NL </p>
                   <p className="p2"> Mr. Aritam  </p>
                   <p className="p3"> aritam.asthana@gmail.com </p>
               </div>
               <div className="item-13" onClick={HandleClickAgain}>
                   <p className="p1"> Female . NL </p>
                   <p className="p2"> Ms. Khyati Heda </p>
                   <p className="p3"> khyati.heda@gmail.com </p>
               </div>
               <div className="item-14" onClick={HandleClickAgain}>
                   <p className="p1"> Male . NL </p>
                   <p className="p2"> Mr. Aritam  </p>
                   <p className="p3"> aritam.asthana@gmail.com </p>
               </div>
               <div className="item-15" onClick={HandleClickAgain}>
                   <p className="p1"> Female . NL </p>
                   <p className="p2"> Ms. Khyati Heda </p>
                   <p className="p3"> khyati.heda@gmail.com </p>
               </div>
               <div className="item-16" onClick={HandleClickAgain}>
                   <p className="p1"> Male . NL </p>
                   <p className="p2"> Mr. Aritam  </p>
                   <p className="p3"> aritam.asthana@gmail.com </p>
               </div> */}
           </div>
       </nav>
     );
}
 
export default Main;