import {createSlice, createAction} from "@reduxjs/toolkit";

const slice = createSlice({
    name: "doc",
    initialState: {
        docs: ["fddkf"]
    },
    reducers:{
        getFromResponse: (state :any, action: any)=>{
            state.docs = action.payload
        },
        appEdit: (state : any, action : any) =>{
            state.docs.map((item : any)=>{
                if(item.id==action.payload.id){
                    item.Apps = action.payload.Apps
                }
            })
        }
    }

})
const apiCall : any = createAction("api/apiCall")
export const getDocs =()=> apiCall({
    url: "/docs",
    method: "get",
    onSuccess: slice.actions.getFromResponse.type
})
export const saveApp =(data : any)=> apiCall({
    url: "/docs/"+data.id,
    method: "put",
    data,
    onSuccess: slice.actions.appEdit.type
})
export default slice.reducer