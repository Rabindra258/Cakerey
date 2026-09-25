var s=0;
document.querySelector(".search2").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        x=document.getElementById("text5").value;
        if(x==768233){
            s=1;
            braj();
        }
        if(x==760010){
            s=2;
            berh();
        }
        if(x=="Jharsuguda"){
            s=1;
            braj();
            
        }
        if(x=="jharsuguda"){
            s=1;
            braj();
            
        }
        if(x=="Berhampur"){
            s=2;
            berh();
            
        }
        if(x=="berhampur"){
            s=2;
            berh();
            
        }
    }
});
function braj(){
    var queryString = "?" + s;
    window.location.href = "Rwebpage.html" + queryString;


}
function berh(){
    var queryString = "?" + s;
    window.location.href = "Rwebpage.html" + queryString;

}
