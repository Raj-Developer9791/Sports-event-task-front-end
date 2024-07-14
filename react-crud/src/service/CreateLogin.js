
import http from "../http-common";
const create=data=>{
    return http.post("/createlogin",data)
}
const Createlogin={
    create
}
export default Createlogin