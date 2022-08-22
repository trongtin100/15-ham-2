let tin = ['1','2','3','4','5","6","7","8","9"]

let result = prompt("So Can Nhap Vao La: ");
function checknumber(result){
    for (var i = 0 ; i<=tin.length; i++){

        if ( result == (tin[i]) ){
            return i
        }
    }
    return -1
}
