import { useDispatch } from 'react-redux'
import {Button, Card,CardBody,CardTitle} from 'reactstrap'
import { userActions } from '../store';
const ViewUser=(props)=>{
  const dispatch= useDispatch();
  const deleteUserHandler=()=>{
     dispatch(userActions.deleteuser(props.user.username))
     const localStorageusers = JSON.parse(localStorage.getItem("users"))
     const filteredusers = localStorageusers.filter(user => user.username !== props.user.username)
     localStorage.setItem("users",JSON.stringify(filteredusers))
  }
    return(
       <div className='pt-2'>
         <Card>
           <CardBody>
             <CardTitle>{props.user.username} ({props.user.age} years old)
             <Button color="danger" onClick={deleteUserHandler}>Delete User</Button>
             </CardTitle>
           </CardBody>
         </Card>
       </div>
    )
 }
 export default ViewUser