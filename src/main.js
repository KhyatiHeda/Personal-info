import './main.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
const Main  = () => {
    
    const [userdata, setuserdata]=useState([]);
    const [click, setclick]=useState(false);

    const [ActiveUser, SetActiveUser]= useState({
        image:" " , name: " ", location:" ",loc2: " " ,gender:" "    
    });
    
    const HandleClickAgain=(val)=>
    {
        console.log(val.currentTarget.value)
        var v = val.currentTarget.value
        var btn = val.currentTarget

        
        btn.style.background="#A259FF"
        btn.style.color="#fff"
        setclick(true);
        SetActiveUser(
             {
                 image:userdata[v].picture.thumbnail,
                 name: userdata[v].name.title+" "+ userdata[v].name.first+" "+ userdata[v].name.last,
                 location:userdata[v].location.street.number+" "+userdata[v].location.street.name+" "+userdata[v].location.city+" "+userdata[v].location.state+" "+userdata[v].location.country+" "+userdata[v].location.postcode,
                 loc2:userdata[v].location.timezone.offset+" "+userdata[v].location.timezone.description,
                 gender:userdata[v].gender
        
             }
         )
    }
    useEffect(()=>{
        axios.get('https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20')
    .then((response)=>{
    setuserdata(response.data.results);
    }).catch((e)=>{
        console.log(e)
    })
    },[])
    
    
    return ( 
        
       <div className="main" style=
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
               <div className="items" id="prod" >Product</div>
               <div className="items" id="download" >Download</div>
               <div className="items" id="Pricing" >Pricing</div>
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
                   <p className="info" id="gender"> {ActiveUser.gender} </p>
                   </div>
               </div> 

           <div className="bottom-container">

               {userdata.map((user,index)=>
               { 
                   return(
                    <button className="card"  key={index} value={index} onClick={HandleClickAgain}>
                        <p className="p1"> {user.gender+", "+user.nat} </p>
                        <p className="p2"> {user.name.title+" "+user.name.first +" "+ user.name.last}  </p>
                        <p className="p3"> {user.email} </p>
                    </button>)
               })}
           </div>
       </div>
     );
}
 
export default Main;