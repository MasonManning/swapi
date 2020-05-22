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
    
}
export default StorageManagement