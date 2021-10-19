import React from "react";
import ShowTableInfo from "./ShowTableInfo";
import './style.css'

const TableComp = () =>{
    const informationCompany=[
        {
            company: "Alfreds Futterkiste",
            contact: "Maria Anders",
            country : "Germany"
        },
        {
            company: "Berglunds snabbköp",
            contact: "Christina Berglund",
            country : "Sweden"
        },
        {
            company: "Centro comercial Moctezuma",
            contact: "Francisco Chang",
            country : "Mexico"
        }
    ]

    return (
        <div>
            
            <h1>------------------Information-------------------</h1>
           <div className="Container">
                <table className="customers">
                    <tr>
                            <th>Company</th>
                            <th>Contact</th>
                            <th>Country</th>
                            <th>Delete</th>
                    </tr>
                </table>
           </div>
            {
                informationCompany.map((ele,index)=>(
                    <ShowTableInfo key={ele.contact} info={ele} OurClass={(index%2===0)?"container_blue": "container_black"} />
                ))
            }
        </div>
    )
}

export default TableComp