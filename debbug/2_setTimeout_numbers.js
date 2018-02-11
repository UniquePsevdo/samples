for (var i = 0; i < 4; i++) {
    let j = i;
    (()=>{
        setTimeout(() => console.log(j), 0)
    })(j)
}
