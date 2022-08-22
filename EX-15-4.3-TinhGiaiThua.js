let number = parseInt(prompt("SoNhapVaoLa:"));
let result = 1 ;

function giaithua(num){
    for (let i=1; i <= num; i++){
        result = result * i;
    }
    return result;
}
document.write("so giai thua la: " + giaithua(number));