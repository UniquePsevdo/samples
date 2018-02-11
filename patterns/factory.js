class FullTime{
    constructor(){
        this.rate = '12$'
    }

}
class PartTime{
    constructor(){
        this.rate = '11$'
    }
}

class Employee{
    create(type){
        let employee;
        switch(type){
            case 'fulltime':
                employee = new FullTime()
                break;
            case 'parttime':
                employee = new PartTime()
        }
        employee.type = type;
        employee.say = function(){
            console.log(`${this.type}  rate: ${this.rate}/hour` )
        };
        return employee;
    }
}

const factory = new Employee();
fulltime = factory.create('fulltime')
parttime = factory.create('parttime')
fulltime.say()
parttime.say()