
import http from "../http-common";
const admin = data => {
    return http.post("/admin/findone", data)
}
const AdminService = {
    admin
}
export default AdminService