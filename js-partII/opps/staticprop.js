class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is ${this.username}`)
    }
    static createId(){
        console.log( `123`)
    }
}
const Bhakti = new User('Bhakti');
Bhakti.logMe();   // username is Bhakti
// Bhakti.createId(); // 123 and error --> with static keyword createId is not function  

class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email= email
    }
}
const teacherobj = new Teacher('Bhakti', 'bhaktiagrawa286@gmail.com')
teacherobj.logMe();
// teacherobj.createId(); // error --> createdId is not a function because createId is static methods 

const Instance = new User('Bhakti');
Instance.logMe();