const obj={
    name: 'Flavia',
    meet: function(){
        console.log(this.name)
    },
    meet2:() =>{
        console.log(this.name)
    }
}

//console.log(obj.name)

obj.yearsOld=25;
//console.log(obj)
//obj={}

//const arr=[1,23,3,4,5]
//arr.push(5);
//arr=[6,7,8]
obj.meet()