function SetUsername(username){
    // Complex DB calls
    this.username = username
}
function CreateUsername(username,email,password){
    SetUsername.call(this, username)
    this.email= email
    this.password = password
}
const name =  new CreateUsername('Bhakti', 'bhaktiagrawal286@gmail.com', 1234);
console.log(name)