import http from "../http-common";
const login = data => {
    return http.post("/login/findone", data)
}
const LoginService = {
    login
}
export default LoginService