function testMyVar(isValid){
    console.log(var1);
    if(isValid) {
        var var1 = 1;
        const const2 = 2;
        let let3 = 3;
    }
    console.log(const2);
    console.log(let3);
}
testMyVar(true);