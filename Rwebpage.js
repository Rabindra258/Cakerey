var s=0;
document.querySelector(".search2").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        x=document.getElementById("text5").value;
        var y=x.toLocaleLowerCase();
        if(y==768233 || y=="jharsuguda"){
            s=1;
            braj();
            
        }
        if(y==760010 || y=="berhampur"){
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