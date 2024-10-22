const person={
    fullName: function(){
        console.log(`${this.firstName} ${this.lastName}`)
    },
    greet: function(age, punctuation){
        console.log(`I am ${age} old ${punctuation}`)
    }
}

const person2={
    firstName:'Flavia',
    lastName: 'Voicu'
}



person.fullName.call(person2)
person.greet.call(person2,24,'!')
person.greet.apply(person2, [24,'!']) 
//diferenta intre call si apply este ca la apply se trimit ca array paramterii

const bound = person.greet.bind(person2)
//extrage functia atasata
console.log(bound)