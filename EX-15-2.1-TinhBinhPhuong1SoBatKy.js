var tin = ["sao1","sao2","sao3","sao4", "sao5", "sao6", "sao7" ]
var tin2 = ["saocopy1", "saocopy2", "saocopy3", "saocopy4", "saocopy5", "saocopy6", "saocopy7"]
var result= prompt("giatrinhapvao");
function findstatindex(result){
    for (var i = 0 ; i <= tin.length ; i++ ) {
        if ( result == (tin[i]) ){
            return i;
        }
    }
    return -1
}
var starindex = findstatindex(result)
if (result !=-1){
    document.write(tin2[starindex]);
}else {
    document.write("khong co ket qua");
}

