const profile = {
    firstName:'',
    lastName:'',
    setName: function(name){
        let splitName = (n) => {
            let nameArr = n.split(' ');
            this.firstName = nameArr[0];
            this.lastName = nameArr[1];
        }
        splitName(name);        //this inside arrow function takes this from the setName
    }
}

profile.setName('john doe');
console.log(profile.firstName);