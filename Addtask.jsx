import {  useState } from 'react';
import Viewtask from './ViewTask'
import { Button, Form, Label, Input } from 'reactstrap'
import UserContext from './context/UserContext';
import { useSelector } from 'react-redux';
const Addtask = ()=>{
    const reduxUsers = useSelector(state=>state.user)
    // const context = useContext(UserContext)
    // console.log("context------",context)
    const[title,setTitle]=useState("")
    const[description,setDescription]=useState("")
    const[assignedTo,setAssignedTo]=useState("")
    
    
    const[tasks,setTasks]=useState([])

    const titleChangeHandler=(event)=>{
        if(event.target.value.length<9){
            setTitle(event.target.value)
        }
    
        console.log(title)
    }

    const descriptionChangeHandler=(event)=>{
        setDescription(event.target.value)
    }

    const assignedToChangeHandler=(event)=>{
        setAssignedTo(event.target.value)
    }

    const submitHandler = (event)=>{
        event.preventDefault();
      
        const task={
            title:title,
            description:description,
            assignedTo:assignedTo,
            complete:false
        }
        setTasks([...tasks,task])
        setTitle("");
        setDescription("")
        setAssignedTo("")
    }
        const taskCompleteHandler =(taskTitle,taskDescription,taskAssignedTo)=>{
             const taskWithCompletedInformation =tasks.map(task =>{
                 if(task.title === taskTitle){
                     task.complete = true
                 }
                 return task;
             })
             setTasks(taskWithCompletedInformation)
        }
    return(
        <div>
            <h1>Add  task</h1>
            {/* <h1><span style={{color:"red" }}>Add  task</span></h1> */}
            <Form onSubmit={submitHandler}>
                <div>
                    <Label>Title</Label>
                    <Input type="text" value={title} onChange={titleChangeHandler}/>
                </div>
                <div>
                    <Label>Description</Label>
                    <Input type="text" value={description} onChange={descriptionChangeHandler}/>
                </div>
                <div>
                    <Label>Assigned to</Label>
                    <Input type="text" value={assignedTo} onChange={assignedToChangeHandler}/>
                </div>
{/*                 
                <Label for="assignedTo">Assigned to</Label>
                    <Input type="select" name="assignedTo" id="assignedTo" onChange={assignedToChangeHandler}>
                       {
                           context.users.map(user=>{
                               return <option>{user.username} {user.age}</option>
                           })
                       } 
                    </Input> */}
                    <Label for="assignedTo">Assigned to</Label>
                    <Input type="select" name="assignedTo" id="assignedTo" onChange={assignedToChangeHandler}>
                       {
                           reduxUsers.users.map(user=>{
                               return <option>{user.username} {user.age}</option>
                           })
                       } 
                    </Input>
                <div>
                    <Button color="danger" type="submit">Add Task</Button>
                </div>
                
            </Form>
            {
                tasks.map((task)=>{
                    return(
                        <Viewtask key={task.id} id={task.id} 
                        title={task.title} description={task.description} 
                        assignedTo={task.assignedTo} 
                        complete = {task.complete}
                        onCompleteTask={taskCompleteHandler}/>
                    )
                })
            }
        
        </div>
    )
}
export default Addtask