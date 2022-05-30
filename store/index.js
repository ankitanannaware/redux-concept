import { configureStore, createSlice } from "@reduxjs/toolkit"

const initialState={
    users:[]
}

const userSlice=createSlice({
     name:"Users",
     initialState:initialState,
     reducers:{
         adduser(state,action){
             state.users=[...state.users,action.payload]
         },
         addBulkUsers (state,action){
            state.users = action.payload
         },
         deleteuser (state,action) {
            console.log("deleted users",action.payload)
            state.users=state.users.filter(user=>
                user.username !== action.payload
            )
         },
         modifyuser(){

         }
     }
})
export const userActions = userSlice.actions;
const store = configureStore({
    reducer:{user : userSlice.reducer}
})
export default store