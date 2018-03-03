for (var i = 0; i < 10; i++) {
    var temp = function(){
        return function(i){
            setTimeout(()=>{
                console.log(i)
            }, i*1000)
        }
    }();
    temp(i);
}