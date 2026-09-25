
var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
var queries = queryString.split("&");
var v=0;
const hei="200px";
for (var i = 0; i < queries.length; i++)
{   
  if(queries[i]!=" "){
    y();
  }
}
function y(){
    v=queries[0];
    console.log(v);
    if(v==""){
        console.log("gadha");
    }
    else if(v=="1"){
        console.log("ha");
        document.getElementById("btn").value="Jharsuguda";
        
    }
    else if(v=="2"){
        console.log("ha");
        document.getElementById("btn").value="Berhampur";
        
    }
    
}
function myfunction(){    
  document.getElementById("displaytable").style.display = "none";   
}
function a(){
  console.log("2");
  document.getElementById("div1").classList.remove("active");
  document.getElementById("navbtn").classList.add("rset"); 
}
function b(){
  console.log("2");
  document.getElementById("div1").classList.add("active");
  document.getElementById("navbtn").classList.remove("rset"); 
}
function b1(){
  console.log("2");
  document.getElementById("div2").classList.add("active");
  document.getElementById("navbtn").classList.remove("rset"); 
}
function b2(){
  console.log("2");
  document.getElementById("div3").classList.add("active2");
  document.getElementById("navbtn").classList.remove("rset"); 
}
function u(){
  console.log("2");
  document.getElementById("div2").classList.remove("active");
  }
  function u2(){
    console.log("2");
    document.getElementById("div3").classList.remove("active2");
    }
var s=0;
document.querySelector(".rtxt").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        var x=document.getElementById("tastetxt").value;
        var y=x.toLocaleLowerCase();
        if(y=="cake" || y=="cakes"){
          s=1;
          window.scrollBy(0, 1000);
        }
        if(y=="birthday cakes" || y=="birthday cake"){
          s=1;
          window.scrollBy(0, 1000);
        }
        if(y=="anniversary cakes" || y=="anniversary cake" ){
          s=1;
          window.scrollBy(0, 1000);
        }
        if(y=="bestseller cakes" || y=="bestseller cake"){
          s=1;
          window.scrollBy(0, 1000);
        }
        if(y=="premium cakes" || y=="premium cake"){
          s=1;
          window.scrollBy(0, 1000);
        }
        
       
    }
});
var rp=0;
var x=false;
var s22=false;
var s33=false;
var s44=false;
var s55=false;
var s1=1;
var s2=1;
var s3=1;
var s4=1;
var s5=1;
var count=0;
var star1=document.querySelector(".s11");
var star2=document.querySelector(".s22");
var star3=document.querySelector(".s33");
var star4=document.querySelector(".s44");
var star5=document.querySelector(".s55");
var star11=document.querySelector(".s111");
var star22=document.querySelector(".s222");
var star33=document.querySelector(".s333");
var star44=document.querySelector(".s444");
var star55=document.querySelector(".s555");
var star111=document.querySelector(".s1111");
var star222=document.querySelector(".s2222");
var star333=document.querySelector(".s3333");
var star444=document.querySelector(".s4444");
var star555=document.querySelector(".s5555");
function coloured1(){
  star1.src="starc.png";
    
}
function coloured2(){

  star1.src="starc.png";
  star2.src="starc.png";

}
function coloured3(){
  star1.src="starc.png";
  star2.src="starc.png";
  star3.src="starc.png";
}
function coloured4(){
  count++;
  star1.src="starc.png";
  star2.src="starc.png";
  star3.src="starc.png";
  star4.src="starc.png";
  rp++;
  document.getElementById("rating").innerHTML = rp;

}
function coloured5(){
  s5++;
  count++;
  star1.src="starc.png";
  star2.src="starc.png";
  star3.src="starc.png";
  star4.src="starc.png";
  star5.src="starc.png";
  rp++;
  document.getElementById("rating").innerHTML = rp;
}
var co1=0;
var co2=0;
var co3=0;
var co4=0;
var co5=0;
var rpp=0;
var x=false;
var s22=false;
var s33=false;
var s44=false;
var s55=false;
var s1=1;
var s2=1;
var s3=1;
var s4=1;
var s5=1;
var count=0;
var cart=0;
function coloured11(){
  star11.src="starc.png";
    
}
function coloured22(){

  star11.src="starc.png";
  star22.src="starc.png";

}
function coloured33(){
  star11.src="starc.png";
  star22.src="starc.png";
  star33.src="starc.png";
}
function coloured44(){
  count++;
  star11.src="starc.png";
  star22.src="starc.png";
  star33.src="starc.png";
  star44.src="starc.png";
  rpp++;
  document.getElementById("rating2").innerHTML = rpp;

}
function coloured55(){
  s5++;
  count++;
  star11.src="starc.png";
  star22.src="starc.png";
  star33.src="starc.png";
  star44.src="starc.png";
  star55.src="starc.png";
  rpp++;
  document.getElementById("rating2").innerHTML = rpp;
}
var rppp=0;
var x=false;
var s22=false;
var s33=false;
var s44=false;
var s55=false;
var s1=1;
var s2=1;
var s3=1;
var s4=1;
var s5=1;
var count=0;
function coloured111(){
  star111.src="starc.png";
    
}
function coloured222(){

  star111.src="starc.png";
  star222.src="starc.png";

}
function coloured333(){
  star111.src="starc.png";
  star222.src="starc.png";
  star333.src="starc.png";
}
function coloured444(){
  count++;
  star111.src="starc.png";
  star222.src="starc.png";
  star333.src="starc.png";
  star444.src="starc.png";
  rppp++;
  document.getElementById("rating3").innerHTML = rppp;

}
function coloured555(){
  s5++;
  count++;
  star111.src="starc.png";
  star222.src="starc.png";
  star333.src="starc.png";
  star444.src="starc.png";
  star555.src="starc.png";
  rppp++;
  document.getElementById("rating3").innerHTML = rppp;
}
var nx=document.querySelector(".previous");
var pr=document.querySelector(".next");
var c=document.querySelector(".card");
var e=document.querySelector(".card2");
var f=document.querySelector(".card3");
pr.addEventListener("click", myFunction);
nx.addEventListener("click", myFunctionn);

function myFunctionn(){
  c.classList.remove("rotate");
  e.classList.remove("rotate");
  f.classList.remove("rotate");
} 
function myFunction() {
  c.classList.add("rotate");
  e.classList.add("rotate");
  f.classList.add("rotate");
}
function x(){
  console.log(2);

}


yq=document.getElementById("rand")
txt=document.getElementById("txt")
vir=0
random=Math.floor(Math.random() * 3);
if(random==0){
  vir=0
  yq.src="p13.jpeg"
  document.getElementById("pap3").innerHTML="Preheat the oven to 350 degrees F (175 degrees C). Grease two 9-inch round pans.Make the cake: Beat 1 1/2 cups sugar and shortening together in a large bowl with an electric mixer until light and fluffy. Add eggs one at a time, beating well after each addition. Combine red food coloring and cocoa to make a paste; add to creamed mixture.Mix buttermilk, salt, and 1 teaspoon vanilla together in a small bowl. Add flour, alternating with buttermilk mixture, mixing just until incorporated. Mix vinegar and baking soda together; gently fold into cake batter and pour into prepared pans.Bake in the preheated oven until a toothpick inserted into the center comes out clean, about 30 minutes. Cool on a wire rack for 5 minutes. Run a table knife around the edges to loosen. Invert carefully onto a serving plate or cooling rack. Let cool, about 30 minutes.Make the icing: Heat milk and flour in a saucepan over low heat, stirring constantly, until thick. Set aside to cool completely.Meanwhile, beat sugar, butter, and vanilla together in a large bowl with an electric mixer until light and fluffy. Add cooled flour mixture and beat until frosting is a good spreading consistency. Frost cake layers when completely cool.";
  document.getElementById("txt").innerHTML = "  Red velvet Pastery!";
  document.getElementById("bttt").innerHTML="  Red velvet Pastery!";
}
else if(random==1){
  vir=1
  yq.src="p14.png"
  document.getElementById("pap3").innerHTML="Preheat the oven to 350 degrees F (175 degrees C). Grease two 9-inch round pans.Make the cake: Beat 1 1/2 cups sugar and shortening together in a large bowl with an electric mixer until light and fluffy. Add eggs one at a time, beating well after each addition. Combine red food coloring and cocoa to make a paste; add to creamed mixture.Mix buttermilk, salt, and 1 teaspoon vanilla together in a small bowl. Add flour, alternating with buttermilk mixture, mixing just until incorporated. Mix vinegar and baking soda together; gently fold into cake batter and pour into prepared pans.Bake in the preheated oven until a toothpick inserted into the center comes out clean, about 30 minutes. Cool on a wire rack for 5 minutes. Run a table knife around the edges to loosen. Invert carefully onto a serving plate or cooling rack. Let cool, about 30 minutes.Make the icing: Heat milk and flour in a saucepan over low heat, stirring constantly, until thick. Set aside to cool completely.Meanwhile, beat sugar, butter, and vanilla together in a large bowl with an electric mixer until light and fluffy. Add cooled flour mixture and beat until frosting is a good spreading consistency. Frost cake layers when completely cool.";
  document.getElementById("bttt").innerHTML="Speacial pastery!";
  document.getElementById("txt").innerHTML = "Speacial pastery!";
}
else if(random==2){
  vir=2
  yq.src="p15.jpeg"
  document.getElementById("pap3").innerHTML="Preheat the oven to 350 degrees F (175 degrees C). Grease two 9-inch round pans.Make the cake: Beat 1 1/2 cups sugar and shortening together in a large bowl with an electric mixer until light and fluffy. Add eggs one at a time, beating well after each addition. Combine red food coloring and cocoa to make a paste; add to creamed mixture.Mix buttermilk, salt, and 1 teaspoon vanilla together in a small bowl. Add flour, alternating with buttermilk mixture, mixing just until incorporated. Mix vinegar and baking soda together; gently fold into cake batter and pour into prepared pans.Bake in the preheated oven until a toothpick inserted into the center comes out clean, about 30 minutes. Cool on a wire rack for 5 minutes. Run a table knife around the edges to loosen. Invert carefully onto a serving plate or cooling rack. Let cool, about 30 minutes.Make the icing: Heat milk and flour in a saucepan over low heat, stirring constantly, until thick. Set aside to cool completely.Meanwhile, beat sugar, butter, and vanilla together in a large bowl with an electric mixer until light and fluffy. Add cooled flour mixture and beat until frosting is a good spreading consistency. Frost cake layers when completely cool.";
  document.getElementById("bttt").innerHTML="Turkish pastery!";
  document.getElementById("txt").innerHTML = "Turkish pastery!";
}
function cartno(){
  swal("Your Item added to cart", "press ok for continue!", "success", {
    button: "ok",
  
  });
  cart=cart+1
  document.getElementById("crtno").innerHTML = cart;
  document.getElementById("cbt").disabled = true;
  var img = document.createElement("img"); 
  if(vir==0){
    img.src = "p13.png"; 
    img.style.height = "100px";
    

    img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
    var src = document.getElementById("crtimage"); 
    src.appendChild(img); 
  }
  else if(vir==1){
    img.src = "p14.png"; 
    img.style.height = "100px";
    img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
    var src = document.getElementById("crtimage"); 
    src.appendChild(img); 
  }
  else if(vir==2){
    img.src = "p15.png"; 
    img.style.height = "100px";
    img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
    var src = document.getElementById("crtimage"); 
    src.appendChild(img); 
  }
  

}

yq=document.getElementById("rand1")

virr=0
random=Math.floor(Math.random() * 3);
if(random==0){
  virr=0
  yq.src="b4.png"
  document.getElementById("pap2").innerHTML="Preheat the oven to 350 degrees F (175 degrees C). Grease two 9-inch round pans.Make the cake: Beat 1 1/2 cups sugar and shortening together in a large bowl with an electric mixer until light and fluffy. Add eggs one at a time, beating well after each addition. Combine red food coloring and cocoa to make a paste; add to creamed mixture.Mix buttermilk, salt, and 1 teaspoon vanilla together in a small bowl. Add flour, alternating with buttermilk mixture, mixing just until incorporated. Mix vinegar and baking soda together; gently fold into cake batter and pour into prepared pans.Bake in the preheated oven until a toothpick inserted into the center comes out clean, about 30 minutes. Cool on a wire rack for 5 minutes. Run a table knife around the edges to loosen. Invert carefully onto a serving plate or cooling rack. Let cool, about 30 minutes.Make the icing: Heat milk and flour in a saucepan over low heat, stirring constantly, until thick. Set aside to cool completely.Meanwhile, beat sugar, butter, and vanilla together in a large bowl with an electric mixer until light and fluffy. Add cooled flour mixture and beat until frosting is a good spreading consistency. Frost cake layers when completely cool.";
  document.getElementById("btt").innerHTML="Vannila Pastery!";
  document.getElementById("txt1").innerHTML = "Vannila Pastery!";
}
else if(random==1){
  virr=1
  yq.src="a16.png"
  document.getElementById("pap2").innerHTML="Preheat the oven to 350 degrees F (175 degrees C). Grease two 9-inch round pans.Make the cake: Beat 1 1/2 cups sugar and shortening together in a large bowl with an electric mixer until light and fluffy. Add eggs one at a time, beating well after each addition. Combine red food coloring and cocoa to make a paste; add to creamed mixture.Mix buttermilk, salt, and 1 teaspoon vanilla together in a small bowl. Add flour, alternating with buttermilk mixture, mixing just until incorporated. Mix vinegar and baking soda together; gently fold into cake batter and pour into prepared pans.Bake in the preheated oven until a toothpick inserted into the center comes out clean, about 30 minutes. Cool on a wire rack for 5 minutes. Run a table knife around the edges to loosen. Invert carefully onto a serving plate or cooling rack. Let cool, about 30 minutes.Make the icing: Heat milk and flour in a saucepan over low heat, stirring constantly, until thick. Set aside to cool completely.Meanwhile, beat sugar, butter, and vanilla together in a large bowl with an electric mixer until light and fluffy. Add cooled flour mixture and beat until frosting is a good spreading consistency. Frost cake layers when completely cool.";
  document.getElementById("btt").innerHTML="Anniversary Cake!";
  document.getElementById("txt1").innerHTML = "Anniversary Cake!";
}
else if(random==2){
  virr=2
  yq.src="b9.png"
  document.getElementById("pap2").innerHTML="Preheat the oven to 350 degrees F (175 degrees C). Grease two 9-inch round pans.Make the cake: Beat 1 1/2 cups sugar and shortening together in a large bowl with an electric mixer until light and fluffy. Add eggs one at a time, beating well after each addition. Combine red food coloring and cocoa to make a paste; add to creamed mixture.Mix buttermilk, salt, and 1 teaspoon vanilla together in a small bowl. Add flour, alternating with buttermilk mixture, mixing just until incorporated. Mix vinegar and baking soda together; gently fold into cake batter and pour into prepared pans.Bake in the preheated oven until a toothpick inserted into the center comes out clean, about 30 minutes. Cool on a wire rack for 5 minutes. Run a table knife around the edges to loosen. Invert carefully onto a serving plate or cooling rack. Let cool, about 30 minutes.Make the icing: Heat milk and flour in a saucepan over low heat, stirring constantly, until thick. Set aside to cool completely.Meanwhile, beat sugar, butter, and vanilla together in a large bowl with an electric mixer until light and fluffy. Add cooled flour mixture and beat until frosting is a good spreading consistency. Frost cake layers when completely cool.";
  document.getElementById("btt").innerHTML=" Game Changer's cake!";
  document.getElementById("txt1").innerHTML = " Game Changer's cake!";
}
function cartno1(){
  swal("Your Item added to cart", "press ok for continue!", "success", {
    button: "ok",
  
  });
  cart=cart+1
  document.getElementById("crtno").innerHTML = cart;
  document.getElementById("cbtt").disabled = true;
  var img = document.createElement("img"); 
  if(virr==0){
    img.src = "b4.png"; 
    img.style.height = "100px";
    img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
    var src = document.getElementById("crtimage"); 
    src.appendChild(img); 
  }
  else if(virr==1){
    img.src = "a16.png"; 
    img.style.height = "100px";
    img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
    var src = document.getElementById("crtimage"); 
    src.appendChild(img); 
  }
  else if(virr==2){
    img.src = "b9.png"; 
    img.style.height = "100px";
    img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
    var src = document.getElementById("crtimage"); 
    src.appendChild(img); 
  }

}

yq=document.getElementById("rand2")
random=Math.floor(Math.random() * 3);
virrr=0
if(random==0){
  virrr=0
  yq.src="b1.png"
  document.getElementById("pap1").innerHTML="Preheat the oven to 350 degrees F (175 degrees C). Grease two 9-inch round pans.Make the cake: Beat 1 1/2 cups sugar and shortening together in a large bowl with an electric mixer until light and fluffy. Add eggs one at a time, beating well after each addition. Combine red food coloring and cocoa to make a paste; add to creamed mixture.Mix buttermilk, salt, and 1 teaspoon vanilla together in a small bowl. Add flour, alternating with buttermilk mixture, mixing just until incorporated. Mix vinegar and baking soda together; gently fold into cake batter and pour into prepared pans.Bake in the preheated oven until a toothpick inserted into the center comes out clean, about 30 minutes. Cool on a wire rack for 5 minutes. Run a table knife around the edges to loosen. Invert carefully onto a serving plate or cooling rack. Let cool, about 30 minutes.Make the icing: Heat milk and flour in a saucepan over low heat, stirring constantly, until thick. Set aside to cool completely.Meanwhile, beat sugar, butter, and vanilla together in a large bowl with an electric mixer until light and fluffy. Add cooled flour mixture and beat until frosting is a good spreading consistency. Frost cake layers when completely cool.";
  document.getElementById("bt").innerHTML="Blue Berry cake!";
  document.getElementById("txt2").innerHTML = "Blue Berry cake!";
}
else if(random==1){
  virrr=1
  yq.src="b7.png"
  document.getElementById("pap1").innerHTML="Preheat the oven to 350 degrees F (175 degrees C). Grease two 9-inch round pans.Make the cake: Beat 1 1/2 cups sugar and shortening together in a large bowl with an electric mixer until light and fluffy. Add eggs one at a time, beating well after each addition. Combine red food coloring and cocoa to make a paste; add to creamed mixture.Mix buttermilk, salt, and 1 teaspoon vanilla together in a small bowl. Add flour, alternating with buttermilk mixture, mixing just until incorporated. Mix vinegar and baking soda together; gently fold into cake batter and pour into prepared pans.Bake in the preheated oven until a toothpick inserted into the center comes out clean, about 30 minutes. Cool on a wire rack for 5 minutes. Run a table knife around the edges to loosen. Invert carefully onto a serving plate or cooling rack. Let cool, about 30 minutes.Make the icing: Heat milk and flour in a saucepan over low heat, stirring constantly, until thick. Set aside to cool completely.Meanwhile, beat sugar, butter, and vanilla together in a large bowl with an electric mixer until light and fluffy. Add cooled flour mixture and beat until frosting is a good spreading consistency. Frost cake layers when completely cool.";
  document.getElementById("bt").innerHTML= "Chocolava cake!";
  document.getElementById("txt2").innerHTML = "Chocolava cake!";
}
else if(random==2){
  virrr=2
  yq.src="b14.png"
  document.getElementById("pap1").innerHTML="Preheat the oven to 350 degrees F (175 degrees C). Grease two 9-inch round pans.Make the cake: Beat 1 1/2 cups sugar and shortening together in a large bowl with an electric mixer until light and fluffy. Add eggs one at a time, beating well after each addition. Combine red food coloring and cocoa to make a paste; add to creamed mixture.Mix buttermilk, salt, and 1 teaspoon vanilla together in a small bowl. Add flour, alternating with buttermilk mixture, mixing just until incorporated. Mix vinegar and baking soda together; gently fold into cake batter and pour into prepared pans.Bake in the preheated oven until a toothpick inserted into the center comes out clean, about 30 minutes. Cool on a wire rack for 5 minutes. Run a table knife around the edges to loosen. Invert carefully onto a serving plate or cooling rack. Let cool, about 30 minutes.Make the icing: Heat milk and flour in a saucepan over low heat, stirring constantly, until thick. Set aside to cool completely.Meanwhile, beat sugar, butter, and vanilla together in a large bowl with an electric mixer until light and fluffy. Add cooled flour mixture and beat until frosting is a good spreading consistency. Frost cake layers when completely cool.";
  document.getElementById("bt").innerHTML="Brownise Premium Cake!";
  document.getElementById("txt2").innerHTML = "Brownise Premium Cake!";
}

function cartno2(){
  swal("Your Item added to cart", "press ok for continue!", "success", {
    button: "ok",
  
  });
  cart=cart+1
  document.getElementById("crtno").innerHTML = cart;
  document.getElementById("cbttt").disabled = true;
  var img = document.createElement("img"); 
  if(virrr==0){
    img.src = "b1.png"; 
    img.style.height = "100px";
    img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
    var src = document.getElementById("crtimage"); 
    src.appendChild(img); 
  }
  else if(virrr==1){
    img.src = "b7.png"; 
    img.style.height = "100px";
    img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
    var src = document.getElementById("crtimage"); 
    src.appendChild(img); 
  }
  else if(virrr==2){
    img.src = "b14.png"; 
    img.style.height = "100px";
    img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
    var src = document.getElementById("crtimage"); 
    src.appendChild(img); 
  }

}
function t4(){
  swal("Your Item added to cart", "press ok for continue!", "success", {
    button: "ok",
  
  });
  cart=cart+1
  document.getElementById("crtno").innerHTML = cart;
  document.getElementById("t4").disabled = true;
  var img = document.createElement("img"); 
  img.src = "a3.png"; 
  img.style.height = "100px";
  img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
  var src = document.getElementById("crtimage"); 
  src.appendChild(img); 

}
function t3(){
  swal("Your Item added to cart", "press ok for continue!", "success", {
    button: "ok",
  
  });
  cart=cart+1
  document.getElementById("crtno").innerHTML = cart;
  document.getElementById("t3").disabled = true;
  var img = document.createElement("img"); 
  img.src = "a6.png"; 
  img.style.height = "100px";
  img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
  var src = document.getElementById("crtimage"); 
  src.appendChild(img); 

}
function t2(){
  swal("Your Item added to cart", "press ok for continue!", "success", {
    button: "ok",
  
  });
  cart=cart+1
  document.getElementById("crtno").innerHTML = cart;
  document.getElementById("t2").disabled = true;
  var img = document.createElement("img"); 
  img.src = "a7.png"; 
  img.style.height = "100px";
  img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
  var src = document.getElementById("crtimage"); 
  src.appendChild(img); 
}
function t1(){
  swal("Your Item added to cart", "press ok for continue!", "success", {
    button: "ok",
  
  });
  cart=cart+1
  document.getElementById("crtno").innerHTML = cart;
  document.getElementById("t1").disabled = true;
  var img = document.createElement("img"); 
  img.src = "b.png"; 
  img.style.height = "100px";
  img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
  var src = document.getElementById("crtimage"); 
  src.appendChild(img); 
  
}
function se1(){
  swal("Your Item added to cart", "press ok for continue!", "success", {
    button: "ok",
  
  });
  cart=cart+1
  document.getElementById("crtno").innerHTML = cart;
  document.getElementById("s1").disabled = true;
  var img = document.createElement("img"); 
  img.src = "b11.png"; 
  img.style.height = "100px";
  img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
  var src = document.getElementById("crtimage"); 
  src.appendChild(img); 

}
function se2(){
  swal("Your Item added to cart", "press ok for continue!", "success", {
    button: "ok",
  
  });
  cart=cart+1
  document.getElementById("crtno").innerHTML = cart;
  document.getElementById("s2").disabled = true;
  var img = document.createElement("img"); 
  img.src = "b9.png"; 
  img.style.height = "100px";
  img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
  var src = document.getElementById("crtimage"); 
  src.appendChild(img); 

}
function se3(){
  swal("Your Item added to cart", "press ok for continue!", "success", {
    button: "ok",
  
  });
  cart=cart+1
  document.getElementById("crtno").innerHTML = cart;
  document.getElementById("s3").disabled = true;
  var img = document.createElement("img"); 
  img.src = "b8.png"; 
  img.style.height = "100px";
  img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
  var src = document.getElementById("crtimage"); 
  src.appendChild(img); 

}
function se4(){
  swal("Your Item added to cart", "press ok for continue!", "success", {
    button: "ok",
  
  });
  cart=cart+1
  document.getElementById("crtno").innerHTML = cart;
  document.getElementById("s4").disabled = true;
  var img = document.createElement("img"); 
  img.src = "b4.png"; 
  img.style.height = "100px";
  img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
  var src = document.getElementById("crtimage"); 
  src.appendChild(img); 

}
function k1(){
  swal("Your Item added to cart", "press ok for continue!", "success", {
    button: "ok",
  
  });
  cart=cart+1
  document.getElementById("crtno").innerHTML = cart;
  document.getElementById("k1").disabled = true;
  var img = document.createElement("img"); 
  img.src = "a20.jpeg"; 
  img.style.height = "100px";
  img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
  var src = document.getElementById("crtimage"); 
  src.appendChild(img); 

}
yq=document.getElementById("ca1")
random=Math.floor(Math.random() * 9);
console.log(random)
mvirrr=0
if(random==0){
  mvirrr=0
  yq.src="a2.png"
  document.getElementById("name").innerHTML = "Indore Speacial cake!";
}
else if(random==1){
  mvirrr=1
  yq.src="a11.png"
  document.getElementById("name").innerHTML = " Nutella's cake !";
}
else if(random==2){
  mvirrr=2
  yq.src="a15.png"
  document.getElementById("name").innerHTML = "Dark chocolate cake!";
}
else if(random==3){
  mvirrr=3
  yq.src="b2.png"
  document.getElementById("name").innerHTML = "Speacial cake!";
}
else if(random==4){
  mvirrr=4
  yq.src="b5.png"
  document.getElementById("name").innerHTML = "Strawberry cake!";
}
else if(random==5){
  mvirrr=5
  yq.src="b6.png"
  document.getElementById("name").innerHTML = "Orio cake!";
}
else if(random==6){
  mvirrr=6
  yq.src="b10.png"
  document.getElementById("name").innerHTML = "New Year Cake!";
}
else if(random==7){
  mvirrr=7
  yq.src="b13.png"
  document.getElementById("name").innerHTML = "Choco Almond cake!";
}


function c1(){
  swal("Your Item added to cart", "press ok for continue!", "success", {
    button: "ok",
  
  });
  cart=cart+1
  document.getElementById("crtno").innerHTML = cart;
  document.getElementById("c1").disabled = true;
  var img = document.createElement("img"); 
  if(mvirrr==0){
    img.src = "a2.png"; 
    img.style.height = "100px";
    img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
    var src = document.getElementById("crtimage"); 
    src.appendChild(img); 
  }
  else if(mvirrr==1){
    img.src = "a11.png"; 
    img.style.height = "100px";
    img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
    var src = document.getElementById("crtimage"); 
    src.appendChild(img); 
  }
  else if(mvirrr==2){
    img.src = "a15.png"; 
    img.style.height = "100px";
    img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
    var src = document.getElementById("crtimage"); 
    src.appendChild(img); 
  }
  else if(mvirrr==3){
    img.src = "b2.png"; 
    img.style.height = "100px";
    img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
    var src = document.getElementById("crtimage"); 
    src.appendChild(img); 
  }
  else if(mvirrr==4){
    img.src = "b5.png"; 
    img.style.height = "100px";
    img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
    var src = document.getElementById("crtimage"); 
    src.appendChild(img); 
  }
  else if(mvirrr==5){
    img.src = "b6.png"; 
    img.style.height = "100px";
    img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
    var src = document.getElementById("crtimage"); 
    src.appendChild(img); 
  }
  else if(mvirrr==6){
    img.src = "b10.png"; 
    img.style.height = "100px";
    img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
    var src = document.getElementById("crtimage"); 
    src.appendChild(img); 
  }
  else if(mvirrr==7){
    img.src = "b13.png"; 
    img.style.height = "100px";
    img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
    var src = document.getElementById("crtimage"); 
    src.appendChild(img); 
  }
  else if(mvirrr==8){
    img.src = "b16.png"; 
    img.style.height = "100px";
    img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
    var src = document.getElementById("crtimage"); 
    src.appendChild(img); 
  }

}
yq=document.getElementById("ca2")
random=Math.floor(Math.random() * 9);
nvirrr=0
if(random==0){
  nvirrr=0
  yq.src="b17.png"
  document.getElementById("name2").innerHTML = "Ice cake!";
}
else if(random==1){
  nvirrr=1
  yq.src="b21.jpeg"
  document.getElementById("name2").innerHTML = " Chocoloaded cake !";
}
else if(random==2){
  nvirrr=2
  yq.src="p2.png"
  document.getElementById("name2").innerHTML = "Choco pastry!";
}
else if(random==3){
  nvirrr=3
  yq.src="p3.png"
  document.getElementById("name2").innerHTML = "THE BARBE CAKE!";
}
else if(random==4){
  nvirrr=4
  yq.src="p4.png"
  document.getElementById("name2").innerHTML = "Itallian Desert pastry!";
}
else if(random==5){
  nvirrr=5
  yq.src="p5.png"
  document.getElementById("name2").innerHTML = "Frech Desert pastry!";
}
else if(random==6){
  nvirrr=6
  yq.src="p6.png"
  document.getElementById("name2").innerHTML = "Cream Puff pastrys!";
}
else if(random==7){
  nvirrr=7
  yq.src="p7.png"
  document.getElementById("name2").innerHTML = "Red spongy pastry!";
}


function c2(){
  swal("Your Item added to cart", "press ok for continue!", "success", {
    button: "ok",
  
  });
  cart=cart+1
  document.getElementById("crtno").innerHTML = cart;
  document.getElementById("c2").disabled = true;
  var img = document.createElement("img"); 
  if(nvirrr==0){
    img.src = "b17.png"; 
    img.style.height = "100px";
    img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
    var src = document.getElementById("crtimage");
    var xyz=document.createElement("BUTTON"); 
    xyz.classList.add("crtload");
    xyz.appendChild(img); 
    xyz.style.height = "200px";
    xyz.style.width = "600px";
    xyz.style.backgroundColor = "lightblue";
    src.style.left = "-100px";
    const node = document.createTextNode("Ice cake!");
    xyz.appendChild(node);
    src.appendChild(xyz);
  }
  else if(nvirrr==1){
    img.src = "b21.png"; 
    img.style.height = "100px";
    img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
    var src = document.getElementById("crtimage");
    var yr=document.createElement("div");
    var xyz=document.createElement("BUTTON"); 
    xyz.classList.add("crtload");
    xyz.appendChild(img); 
    xyz.style.height = "200px";
    xyz.style.width = "600px";
    xyz.style.backgroundColor = "lightblue";
    src.style.left = "-100px";
    const node = document.createTextNode("Chocoloaded cake !");
    xyz.appendChild(node);
    src.appendChild(xyz);
  }
  else if(nvirrr==2){
    img.src = "p2.png"; 
    img.style.height = "100px";
    img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
    var src = document.getElementById("crtimage");
    var xyz=document.createElement("BUTTON"); 
    xyz.classList.add("crtload");
    xyz.appendChild(img); 
    xyz.style.height = "200px";
    xyz.style.width = "600px";
    xyz.style.backgroundColor = "lightblue";
    src.style.left = "-100px";
    const node = document.createTextNode("Choco pastry!");
    xyz.appendChild(node);
    src.appendChild(xyz);
  }
  else if(nvirrr==3){
    img.src = "p3.png"; 
    img.style.height = "100px";
    img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
    var src = document.getElementById("crtimage");
    var xyz=document.createElement("BUTTON"); 
    xyz.classList.add("crtload");
    xyz.appendChild(img); 
    xyz.style.height = "200px";
    xyz.style.width = "600px";
    xyz.style.backgroundColor = "lightblue";
    src.style.left = "-100px";
    const node = document.createTextNode("THE BARBE CAKE!");
    xyz.appendChild(node);
    src.appendChild(xyz);
  }
  else if(nvirrr==4){
    img.src = "p4.png"; 
    img.style.height = "100px";
    img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
    var src = document.getElementById("crtimage");
    var xyz=document.createElement("BUTTON"); 
    xyz.classList.add("crtload");
    xyz.appendChild(img); 
    xyz.style.height = "200px";
    xyz.style.width = "600px";
    xyz.style.backgroundColor = "lightblue";
    src.style.left = "-100px";
    const node = document.createTextNode("Itallian Desert pastry!");
    xyz.appendChild(node);
    src.appendChild(xyz);
  }
  else if(nvirrr==5){
    img.src = "p5.png"; 
    img.style.height = "100px";
    img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
    var src = document.getElementById("crtimage");
    var xyz=document.createElement("BUTTON"); 
    xyz.classList.add("crtload");
    xyz.appendChild(img); 
    xyz.style.height = "200px";
    xyz.style.width = "600px";
    xyz.style.backgroundColor = "lightblue";
    src.style.left = "-100px";
    const node = document.createTextNode("Frech Desert pastry!");
    xyz.appendChild(node);
    src.appendChild(xyz);  
  }
  else if(nvirrr==6){
    img.src = "p6.png"; 
    img.style.height = "100px";
    img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
    var src = document.getElementById("crtimage");
    var xyz=document.createElement("BUTTON"); 
    xyz.classList.add("crtload");
    xyz.appendChild(img); 
    xyz.style.height = "200px";
    xyz.style.width = "600px";
    xyz.style.backgroundColor = "lightblue";
    src.style.left = "-100px";
    const node = document.createTextNode("Cream Puff pastrys!");
    xyz.appendChild(node);
    src.appendChild(xyz);  
  }
  else if(nvirrr==7){
    img.src = "p7.png"; 
    img.style.height = "100px";
    img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
    var src = document.getElementById("crtimage");
    var xyz=document.createElement("BUTTON"); 
    xyz.classList.add("crtload");
    xyz.appendChild(img); 
    xyz.style.height = "200px";
    xyz.style.width = "600px";
    xyz.style.backgroundColor = "lightblue";
    src.style.left = "-100px";
    const node = document.createTextNode("Red spongy pastry!");
    xyz.appendChild(node);
    src.appendChild(xyz);  
  }
  else if(nvirrr==8){
    img.src = "p9.png"; 
    img.style.height = "100px";
    img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
    var src = document.getElementById("crtimage");
    var xyz=document.createElement("BUTTON"); 
    xyz.classList.add("crtload");
    xyz.appendChild(img); 
    xyz.style.height = "200px";
    xyz.style.width = "600px";
    xyz.style.backgroundColor = "lightblue";
    src.style.left = "-100px";
    const node = document.createTextNode("Turkish patrey!");
    xyz.appendChild(node);
    src.appendChild(xyz); 
  }

}
yq=document.getElementById("ca3")
random=Math.floor(Math.random() * 9);
ovirrr=0
if(random==0){
  ovirrr=0
  yq.src="p10.png"
  document.getElementById("name3").innerHTML = "Red Velvet Pastry!";
}
else if(random==1){
  ovirrr=1
  yq.src="p11.png"
  document.getElementById("name3").innerHTML = " Blackforest Pastry !";
}
else if(random==2){
  ovirrr=2
  yq.src="p12.png"
  document.getElementById("name3").innerHTML = "Fantastic Surprise pastry!";
}
else if(random==3){
  ovirrr=3
  yq.src="a1.png"
  document.getElementById("name3").innerHTML = "Heart shape pastry!";
}
else if(random==4){
  ovirrr=4
  yq.src="a3.png"
  document.getElementById("name3").innerHTML = "Itallian Desert pastry!";
}
else if(random==5){
  ovirrr=5
  yq.src="a12.png"
  document.getElementById("name3").innerHTML = "Frech Desert pastry!";
}
else if(random==6){
  ovirrr=6
  yq.src="a17.jpeg"
  document.getElementById("name3").innerHTML = "Cream Puff pastrys!";
}
else if(random==7){
  ovirrr=7
  yq.src="a19.png"
  document.getElementById("name3").innerHTML = "Tuttlea pastry!";
}


function c3(){
  swal("Your Item added to cart", "press ok for continue!", "success", {
    button: "ok",
  
  });
  cart=cart+1
  document.getElementById("crtno").innerHTML = cart;
  document.getElementById("c3").disabled = true;
  var img = document.createElement("img"); 
  if(ovirrr==0){
    img.src = "p10.png"; 
    img.style.height = hei;
    img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
    var src = document.getElementById("crtimage");
    var xyz=document.createElement("BUTTON"); 
    xyz.classList.add("crtload");
    xyz.appendChild(img); 
    xyz.style.height = "200px";
    xyz.style.width = "600px";
    xyz.style.backgroundColor = "lightblue";
    src.style.left = "-100px";
    const node = document.createTextNode("Red Velvet Pastry!");
    xyz.appendChild(node);
    src.appendChild(xyz); 
  }
  else if(ovirrr==1){
    img.src = "p11.png"; 
    img.style.height =hei;
    img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
    var src = document.getElementById("crtimage");
    var xyz=document.createElement("BUTTON"); 
    xyz.classList.add("crtload");
    xyz.appendChild(img); 
    xyz.style.height = "200px";
    xyz.style.width = "600px";
    xyz.style.backgroundColor = "lightblue";
    src.style.left = "-100px";
    const node = document.createTextNode("Blackforest Pastry!");
    xyz.appendChild(node);
    src.appendChild(xyz); 
  }
  else if(ovirrr==2){
    img.src = "p12.png"; 
    img.style.height = hei;
    img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
   var src = document.getElementById("crtimage");
    var xyz=document.createElement("BUTTON"); 
    xyz.classList.add("crtload");
    xyz.appendChild(img); 
    xyz.style.height = "200px";
    xyz.style.width = "600px";
    xyz.style.backgroundColor = "lightblue";
    src.style.left = "-100px";
    const node = document.createTextNode("Fantastic Surprise pastry!");
    xyz.appendChild(node);
    src.appendChild(xyz); 
  }
  else if(ovirrr==3){
    img.src = "a1.png"; 
    img.style.height = hei;
    img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
   var src = document.getElementById("crtimage");
    var xyz=document.createElement("BUTTON"); 
    xyz.classList.add("crtload");
    xyz.appendChild(img); 
    xyz.style.height = "200px";
    xyz.style.width = "600px";
    xyz.style.backgroundColor = "lightblue";
    src.style.left = "-100px";
    const node = document.createTextNode("THE BARBE CAKE!");
    xyz.appendChild(node);
    src.appendChild(xyz); 
  }
  else if(ovirrr==4){
    img.src = "a3.png"; 
    img.style.height =hei;
    img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
    var src = document.getElementById("crtimage");
    var xyz=document.createElement("BUTTON"); 
    xyz.classList.add("crtload");
    xyz.appendChild(img); 
    xyz.style.height = "200px";
    xyz.style.width = "600px";
    xyz.style.backgroundColor = "lightblue";
    src.style.left = "-100px";
    const node = document.createTextNode("Itallian Desert pastry!");
    xyz.appendChild(node);
    src.appendChild(xyz); 
  }
  else if(ovirrr==5){
    img.src = "a12.png"; 
    img.style.height = hei;
    img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
    var src = document.getElementById("crtimage");
    var xyz=document.createElement("BUTTON"); 
    xyz.classList.add("crtload");
    xyz.appendChild(img); 
    xyz.style.height = "200px";
    xyz.style.width = "600px";
    xyz.style.backgroundColor = "lightblue";
    src.style.left = "-100px";
    const node = document.createTextNode("Frech Desert pastry!");
    xyz.appendChild(node);
    src.appendChild(xyz); 
  }
  else if(ovirrr==6){
    img.src = "a17.png"; 
    img.style.height = hei;
    img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
    var src = document.getElementById("crtimage");
    var xyz=document.createElement("BUTTON"); 
    xyz.classList.add("crtload");
    xyz.appendChild(img); 
    xyz.style.height = "200px";
    xyz.style.width = "600px";
    xyz.style.backgroundColor = "lightblue";
    src.style.left = "-100px";
    const node = document.createTextNode("Cream Puff pastrys!");
    xyz.appendChild(node);
    src.appendChild(xyz); 
  }
  else if(ovirrr==7){
    img.src = "a19.png"; 
    img.style.height = hei;
    img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
    var src = document.getElementById("crtimage");
    var xyz=document.createElement("BUTTON"); 
    xyz.classList.add("crtload");
    xyz.appendChild(img); 
    xyz.style.height = "200px";
    xyz.style.width = "600px";
    xyz.style.backgroundColor = "lightblue";
    src.style.left = "-100px";
    const node = document.createTextNode("Tuttlea pastry!");
    xyz.appendChild(node);
    src.appendChild(xyz); 
  }
  else if(ovirrr==8){
    img.src = "a20.png"; 
    img.style.height = hei;
    img.addEventListener('click', function handleClick(event) {
      location.href = "glink.html";
    });
    var src = document.getElementById("crtimage");
    var xyz=document.createElement("BUTTON"); 
    xyz.classList.add("crtload");
    xyz.appendChild(img); 
    xyz.style.height = "200px";
    xyz.style.width = "600px";
    xyz.style.backgroundColor = "lightblue";
    src.style.left = "-100px";
    const node = document.createTextNode("Indore Speacial cake!");
    xyz.appendChild(node);
    src.appendChild(xyz); 
  }

}
function u(){
  window.scrollBy(0, 2000);
}