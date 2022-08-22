let  i=2;
var check = true;
var tin= parseInt(prompt("SoCanKiemTraLa: "));
    for ( i=2; i<tin-1; i++) {
        if (tin % i == 0) {
            check = false;
            break;
        }
    } if ( check == true){
        alert("day la so nguyen to");

    }  else {
        alert("day khong phải so nguyen to");
    }




