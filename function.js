function find_two(number){
    var result = process(number);
    if(Array.isArray(result) && result.length)
        alert(result[0] +","+result[1]);
    else
        alert("no way");
    document.form.text.focus();
}

function process(number){
    var arr = [33,25,12,5];
    var test;
    var temp = new Array();
   
    for(var i=0;i<arr.length;i++){
        for(var j=i;j<arr.length;j++){
            test = arr[i] + arr[j+1];
            if(test == number.value){
                temp[0] = i;
                temp[1] = j+1;
                break;
            }
        }
    }
    return temp;
    
}