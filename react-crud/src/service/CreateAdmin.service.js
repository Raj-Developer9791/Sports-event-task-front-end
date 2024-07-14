
import http from "../http-common";
const create=data=>{
    return http.post("/createadmin",data)
}
const Adminreg={
    create
}
export default Adminreg