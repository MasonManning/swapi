import { v4 as uuidv4 } from 'uuid'
class StorageManagement {
    static instance = null
    constructor() {
    }
    static getInstance() {
        // return new StorageManagement()
        return this.instance == null ? new StorageManagement() : this.instance
    }
    setCaptainName(id, name) {
        localStorage.setItem("CaptainName", name)
    }
    getCaptainName() {
        return localStorage.getItem("CaptainName")
    }
    SignUp(username, password) {
        // Add user
        let users = JSON.parse(localStorage.getItem("Users"))
        const user = {
            id: uuidv4(),
            name: username,
            password: password,
            credits: 0
        }
        if (users != null && users.filter((user) => user.name === username).length) {
            return { error: true, message: "User already exists" }
        }
        !users ? localStorage.setItem("Users", JSON.stringify([user])) : localStorage.setItem("Users", JSON.stringify([...users, user]))
        return { error: false, message: "Added Correctly HTTP 200 :D" }
    }
    Login(username, password) {

        let users = JSON.parse(localStorage.getItem("Users"))
        if (users != null && users.filter((user) => user.name === username && user.password === password).length) {
            return { error: false, message: "HTTP 200 Login Successfull" }
        }
        return { error: true, message: "Login Fail" }
    }
    isAuthenticated() {
        return localStorage.getItem('isAuthenticated')
    }
    Logout() {
        this.setAuthentication(false)
        // localStorage.setItem('isAuthenticated', false)
    }
    setAuthentication(auth) {
        localStorage.setItem('isAuthenticated', auth)
    }
    clearStorage() {
        localStorage.clear()
    }

}
export default StorageManagement