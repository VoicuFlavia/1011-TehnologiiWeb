const person ={
    name: 'Flavia',
    greet : function(){
        console.log(`My name is ${this.name}`)
    }
}

console.log(person)

function User(email, nume){
    this.email=email;
    this.name=nume;
    this.online= false;
}

User.prototype.login=function(){
    this. online=true;
    console.log('User has logged in');
}

const user= new User('email','Flavia')
console.log(user)