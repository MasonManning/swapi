class StorageManagement {
    static instance = null
    constructor(){
    }
    static getInstance(){
        // return new StorageManagement()
        return this.instance == null ? new StorageManagement() : this.instance
    }
    setCaptainName(id, name){
        localStorage.setItem("CaptainName", name)
    }
    getCaptainName(){
        return localStorage.getItem("CaptainName")
    }
    SignUp(username, password){
        if(this.Login(username,password)){
            return {error: true, message: "User already exists"} 
        }
        localStorage.setItem('username', username)
        localStorage.setItem('password', password)
        this.setAuthenticcated(true)
        return {error: false, message: "Added Correctly HTTP 200 :D"}
    }
    Login(username, password){
        this.setAuthenticcated(true)
        return localStorage.getItem("username")===username && localStorage.getItem("password") === password 
    }
    isAuthenticated(){
        return localStorage.getItem('isAuthenticated')
    }
    setAuthenticcated(auth){
        localStorage.setItem('isAuthenticated',auth)
    }
    
}
export default StorageManagement