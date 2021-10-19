import React from "react";
import './style.css'

const ShowTableInfo = ({info,OurClass})=>{

    const DeleteItem = ()=>{
        console.log("Deleted successfylly");
    }

    return (
        
           <div className="Container">
               <table className="customers" >
                    <tr className={OurClass}>
                        <td>{info.company}</td>
                        <td>{info.contact}</td>
                        <td>{info.country}</td>
                        <td>
                            <button onClick={DeleteItem} style={{border:"none"}}>delete</button>
                        </td>
                        
                    </tr>
                </table>
           </div>
            
        
    )

}

export default ShowTableInfo