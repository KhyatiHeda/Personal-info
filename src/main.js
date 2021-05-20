import './main.css';
import man from './mot-2.jpg';
import { useState } from 'react';
const Main  = () => {
    
    const[active, setactive]=useState("inactive");

    const HandleClick=()=>
    {
        setactive("active");
    }
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
           
           <div className="mid-container">
               <div className="mid-img"><img src={man} alt="Avatar" className="mid-image"></img></div>
               <div className="mid-text" style=
               {{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-around'
               }}>
              
               <div className="mid-info" >
               <div className="mid-heading">
                   <p className="info" id="info1"><u><b>Ms Khyati Heda</b>  </u></p>
                   <p className="info"><b>Bungalow 4, Bharat Oman Refinery Limited, Agasood</b>  </p>
                   <p className="info"><b>Bina, Bhopal 470013</b>  </p>
                   <p className="info" id="gender"> Female </p></div>
               </div>
               </div>
               
           </div>

           <div className="bottom-container">
               <div className="item-1">
                   <p className="p1"> Female . NL </p>
                   <p className="p2"> Ms. Khyati Heda </p>
                   <p className="p3"> khyati.heda@gmail.com </p>
               </div>
               <div className="item-2">
                   <p className="p1"> Male . NL </p>
                   <p className="p2"> Mr. Aritam  </p>
                   <p className="p3"> aritam.asthana@gmail.com </p>
               </div>
               <div className="item-3">
                   <p className="p1"> Female . NL </p>
                   <p className="p2"> Ms. Khyati Heda  </p>
                   <p className="p3"> khyati.heda@gmail.com </p>
               </div>
               <div className="item-4">
                   <p className="p1"> Male . NL </p>
                   <p className="p2"> Mr. Aritam  </p>
                   <p className="p3"> aritam.asthana@gmail.com </p>
               </div>
               <div className="item-5">
                   <p className="p1"> Female . NL </p>
                   <p className="p2"> Ms. Khyati Heda </p>
                   <p className="p3"> khyati.heda@gmail.com </p>
               </div>
               <div className="item-6">
                   <p className="p1"> Male . NL </p>
                   <p className="p2"> Mr. Aritam  </p>
                   <p className="p3"> aritam.asthana@gmail.com </p>
               </div>
               <div className="item-7">
                   <p className="p1"> Female . NL </p>
                   <p className="p2"> Ms. Khyati Heda </p>
                   <p className="p3"> khyati.heda@gmail.com </p>
               </div>
               <div className="item-8">
                   <p className="p1"> Male . NL </p>
                   <p className="p2"> Mr. Aritam  </p>
                   <p className="p3"> aritam.asthana@gmail.com </p>
               </div>
               <div className="item-9">
                   <p className="p1"> Female . NL </p>
                   <p className="p2"> Ms. Khyati Heda </p>
                   <p className="p3"> khyati.heda@gmail.com </p>
               </div>
               <div className="item-10">
                   <p className="p1"> Male . NL </p>
                   <p className="p2"> Mr. Aritam  </p>
                   <p className="p3"> aritam.asthana@gmail.com </p>
               </div>
               <div className="item-11">
                   <p className="p1"> Female . NL </p>
                   <p className="p2"> Ms. Khyati Heda </p>
                   <p className="p3"> khyati.heda@gmail.com </p>
               </div>
               <div className="item-12">
                   <p className="p1"> Male . NL </p>
                   <p className="p2"> Mr. Aritam  </p>
                   <p className="p3"> aritam.asthana@gmail.com </p>
               </div>
               <div className="item-13">
                   <p className="p1"> Female . NL </p>
                   <p className="p2"> Ms. Khyati Heda </p>
                   <p className="p3"> khyati.heda@gmail.com </p>
               </div>
               <div className="item-14">
                   <p className="p1"> Male . NL </p>
                   <p className="p2"> Mr. Aritam  </p>
                   <p className="p3"> aritam.asthana@gmail.com </p>
               </div>
               <div className="item-15">
                   <p className="p1"> Female . NL </p>
                   <p className="p2"> Ms. Khyati Heda </p>
                   <p className="p3"> khyati.heda@gmail.com </p>
               </div>
               <div className="item-16">
                   <p className="p1"> Male . NL </p>
                   <p className="p2"> Mr. Aritam  </p>
                   <p className="p3"> aritam.asthana@gmail.com </p>
               </div>
           </div>
       </nav>
     );
}
 
export default Main;