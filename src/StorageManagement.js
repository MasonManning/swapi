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
            credits: 0,
            saved: []
        }
        if (users != null && users.filter((user) => user.name === username).length) {
            return { error: true, message: "User already exists" }
        }
        !users ? localStorage.setItem("Users", JSON.stringify([user])) : localStorage.setItem("Users", JSON.stringify([...users, user]))
        return { error: false, message: "Added Correctly HTTP 200 :D", userId: user.id }
    }
    getSaved(id) {
        let users = JSON.parse(localStorage.getItem("Users"))
        const user = users.filter(u => u.id == id)
        // TODO
        // There should only be one user per id, but check length of user anyway.
        // Throw and error if it is greater than one or return the first.
        // Handle no matches showing up.
        return user.saved
    }
    newSave(userData) {
        if (userData == null) {
            return false
        }
        let users = JSON.parse(localStorage.getItem("Users"))
        const user = users.filter(u => u.id == userData.id)[0]
        const newSave = createSavedItem(userData)
        if (newSave) {

            // console.log(user)
            console.log("user.saved : " + user.saved)
            !user.saved ? user.saved = [...user.saved, newSave] : user.saved = [newSave]
        // const user = users.filter(u => u.id == userData.id)
            let susers = users.map(u => u.id === userData.id ? user : u)
            
            console.log(susers)

            localStorage.setItem("Users", JSON.stringify(susers))
            // user.saved.push(newSave)
            // console.log(user.saved)

            // user.saved && user.saved.push(newSave)
            // user.saved && user.saved = []
            // !user.saved && user.saved = [newSave]
            // user.saved.push(newSave)

            return true
        }
        return false
    }
    Login(username, password) {

        let users = JSON.parse(localStorage.getItem("Users"))
        let doesMatch = users.find((user) => user.name === username && user.password === password)
        console.log(users)
        console.log(doesMatch)
        if (users != null && doesMatch) {
            return { error: false, message: "HTTP 200 Login Successfull", id: doesMatch.id }
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
function createSavedItem(userData) {
    return ({
        saveId: uuidv4(),
        credits: userData.credits,
        starship: [userData.starship]
    })
}
export default StorageManagement