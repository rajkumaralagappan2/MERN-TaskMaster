import React, {useState,useEffect} from "react";
import Header from "./Header";
import axios from "axios";
import List from "./List";


function App(){
    let [todoItem,updateItem]=useState([]);

    const fetchData= async()=>{
        const response= await axios.get("http://localhost:8080/get")
        updateItem(response.data)
    };

    useEffect(()=>{
        fetchData();
    },[])

    function handleClick(listItem){
        axios.post("http://localhost:8080/add",{task:listItem})
        .then(response => fetchData())
        .catch(err => console.log(err))
        
    }

    function deleteItem(id){
        axios.put("http://localhost:8080/delete",{item:id})
        .then(response => fetchData())
        .catch( err => console.log(err))
        fetchData()

    }

    function editItem(id,task){
        console.log(id);
        console.log(task);
        const url="http://localhost:8080/update/" + id
        console.log(url);
        axios.put(url,{value:task})
        .then(response => fetchData())
        .catch(err => console.log(err))
    }

    return (
        <div className="container-fluid">
            <div className="container">
                <Header add={handleClick} />
                <div>
                    <ul>
                        {todoItem.map(elements => <List edit={editItem} key={elements._id} id={elements._id} deleteFn={deleteItem} text={elements.task} />)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default App