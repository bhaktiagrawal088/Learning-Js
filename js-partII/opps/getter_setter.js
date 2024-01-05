class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    // define getter method 'email' and change into uppercase
    get email(){
        return `${this._email.toUpperCase()}`
    }
    // define setter method 'email'
    set email(value){
        this._email = value
    }
    // define getter method 'password' and change into uppercase
    get password(){
        return `${this._password.toUpperCase()}bhakti`
    }
    // define setter method 'password'
    set password(value){
        this._password = value
    }
}
const bhakti = new User('bhakti123@gmail.com', "abcd");
console.log(bhakti.password)
console.log(bhakti.email)


// properties

function user1(username, password){
    this._username  = username;
    this._password = password;

    // define the property of username
    Object.defineProperty(this, 'username',{
        get : function(){
            return this._username.toUpperCase();
        },
        set : function(value){
            this._username = value
        }
    })

    // define the property of password
    Object.defineProperty(this, 'password',{
        get : function(){
            return this._password.toUpperCase();
        },
        set : function(value){
            this._password = value;
        }
    })
}
const b = new user1("bhakti", "1234234abcdef")
console.log(b.username) // BHAKTI
console.log(b._username) // bhakti
console.log(b.password) // 1234234ABCDEF
console.log(b._password) //1234234abcdef


// Object base getter and setter method

const Vegetable = {
    _name1 : 'Carrot',
    _name2 : 'Onion',

    get name1(){
        return this._name1.toUpperCase();
    },
    set name1(value){
        this._name1 = value;
    }
}

// factory function
const V = Object.create(Vegetable)
console.log(V.name1)
console.log(V.name2)