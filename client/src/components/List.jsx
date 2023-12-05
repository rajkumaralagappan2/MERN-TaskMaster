import React from "react";

function List(props){
    const id=props.id;
   
    const buttonStyle={border:"none",outline:"none",background:"none",textDecoration:"underline",cursor:"pointer"};
    let[edit,updateStatus]=React.useState(false);
    let[task,editedTask]=React.useState("");
    

    function deleteItem(){
        props.deleteFn(props.id)
    }
    function editButton(){
        updateStatus(true);
    }

    function editTask(event){
        const {value}=event.target;
        editedTask(value)
    }

    function submitTask(event){
        const {id}=event.target
        console.log("i have been accessed")
        props.edit(id,task)
        updateStatus(false)
        editedTask("")
        event.preventDefault();
    }

    
    return(
        <li> {props.text}
        {edit ? <form><input type="text" onChange={editTask}  value={task} /><button id={id} onClick={submitTask}><i class="fa-solid fa-check"></i></button></form>  
        : <span className="editDelete"><button style={buttonStyle} type="submit" onClick={deleteItem}><span><i class="fa-solid fa-trash"></i></span></button>
        <button style={buttonStyle} type="submit" onClick={editButton}><span ><i class="fa-solid fa-pen-to-square"></i></span></button></span>}
        </li> 
    )
}

export default List