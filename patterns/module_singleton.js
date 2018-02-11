var mySingleton = (function(){
    var instance;
    function init(){
        var privateDate = Date.now();
        return {
            getPrivateDate: function(){
                return privateDate
            }
        }
    }
    return {
        getInstance: function(){
            if(!instance){
                instance = init();
            }
            return instance;
        }
    }
})()

var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
console.log(singleA.getPrivateDate() === singleB.getPrivateDate());