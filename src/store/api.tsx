import axios from "axios";

const api = ({dispatch}:{dispatch : any})=>(next : any)=>(action : any)=>{
    if(action.type!=="api/apiCall"){
        next(action)
        return
    }
    next(action)
    const {method, data, onSuccess, onFail, url} = action.payload
    axios({
        baseURL: "http://backadmintest.herokuapp.com",
        url: url,
        method: method,
        data: data
    }).then(res=>{
        dispatch({
            type: onSuccess,
            payload: res.data
        })
    }).catch(err=>{
        dispatch({
            type: onFail,
            payload: err.data
        })
    })
}
export default api