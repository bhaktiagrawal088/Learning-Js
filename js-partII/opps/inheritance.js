class User  {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is ${this.username}`)
    }
}
class teacher extends User {
    constructor(username, email, password){
        // call the constructor of the parent class
        super(username);
        // Aditional initalization for the child class
        this.email = email;
        this.password = password;

        // call the logMe method of the parent class
        super.logMe();
        // Add additional functionality in the child class
        console.log('Hello form child class')
    }
        Introduce(){
            console.log(`I'm ${this.username} and Email: ${this.email} `)
        }
}
const childobj = new teacher('Bhakti', 'bhaktiagrawal286@gmail.com',12345)
console.log(childobj)
childobj.logMe(); // call the logMe method from the parent class
childobj.Introduce(); // call thr Introduce method from the child class
console.log(childobj instanceof User); // true
console.log(childobj instanceof teacher); // true