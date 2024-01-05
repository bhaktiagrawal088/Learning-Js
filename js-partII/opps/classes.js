// ES6

class user{
    constructor(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
    }
    encryptpassword(){
        return `${this.password}abc`
    }
    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}

const data = new user('Bhakti', 'bhaktiagrawal286@gmail.com', '1234')
console.log(data)
console.log(data.encryptpassword())
console.log(data.changeusername())


// Behind the scene

function User(username, email , password){
    this.username = username;
    this.email = email;
    this.password = password;
}
User.prototype.encryptpassword = function(){
    return `${this.password}abc`
}
User.prototype.changeusername = function(){
    return `${this.username.toUpperCase()}`
}
const tea = new User('tea', 'tea@gmail.com', 1223);
console.log(tea.encryptpassword())
console.log(tea.changeusername())