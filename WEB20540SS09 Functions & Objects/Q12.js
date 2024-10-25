let generatePass={
    length:10,
    includeNum:"true",
    includeSpecial:"false",
}
let i=1;
let scount=1
let pass="";
let char=97;
while(i<generatePass.length-1){
   
    if(generatePass.includeNum=="true"){
        
       if(i==1){
        pass+=String.fromCharCode(char-26);
       }
       else  pass+=String.fromCharCode(char);
       char++;
    }

    if(generatePass.includeSpecial=="true" && (scount==1 || i==generatePass.length-2)){
     if(scount==1){
        pass+="@";
        scount++;
     }
     else pass+="#";
    }
    i++;
}
console.log(pass)