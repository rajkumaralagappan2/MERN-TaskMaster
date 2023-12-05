import React from "react";

function Header(props){
    let[listItem,updateItem]=React.useState("");

    const handleChange= (event)=>{
        const {value}=event.target;
        updateItem(value)
    }

   
    return (
        <div>
            <div className="heading" >
                <h1 >MERN-TaskMaster</h1>
            </div>
            <input type="text" name="item" value={listItem} onChange={handleChange} />
            <button type="submit" onClick={(event)=>{
                props.add(listItem);
                updateItem("");
            }} ><span><i class="fa-solid fa-plus"></i></span></button>
        </div>
    )
}

export default Header