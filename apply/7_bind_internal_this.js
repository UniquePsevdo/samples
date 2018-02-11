let myObj = {
    asyncGet(cb){
        cb()
    },
    parse(){
        console.log('parse called');
    },
    render(){
        this.asyncGet(function(){
         this.parse()
        }.bind(this))
    }
}

myObj.render();