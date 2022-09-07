console.log(Math.round(4.3))
console.log(Math.floor(4.9))
console.log(Math.trunc(4.76287646))
console.log(Math.pow(4,5))
console.log(Math.sqrt(25))
console.log(Math.abs(-25))
console.log(Math.cos(0 * Math.PI / 180))

console.log(Math.round((Math.random()*10)+1))
var x = 10;
var y = 20;
var c = 30;
if (x > y ){
    alert('x is bigger then ')
}
else {
    alert('y is bigger then x')
}

if (x > y){
    alert('x is greather then y')

}
else if(y > c){
    alert('y is greader ten c')
}else{
    alert('c is greader then y')

}




function mathfunc(){
    var num1 =document.getElementById('vala').value;
    var num2 =document.getElementById('vab').value;
    var numaint =Math.round(num1)
    var numbint =Math.round(num2)

    if (num1 > num2){
   
        alert('a is greader then b')
    }else{
        alert('b is graedr then a')
    }
}

// function mathfunc(){
//     var num1 = document.getElementById('vala').value;
//     var aa = prompt('enter u year')


//     if (aa/100 ==0 & aa/100 ==0 & aa/400 ==0 ){
//         alert('its a leap year')
//     }else(){
//         alert('not a leap year')
//     }
// }



var a = 10;
var a = 20;
var c = 30;
console.log( new Date().getDay())
switch( new Date().getDay()){
    case 0:
        alert('JUMA')
        break;
    case 1:
        alert('SHANABA')
        break;
    case 2:
        alert('1SHANABA')
        break;
    case 3:
        alert('2SHANABA')
        break;
    case 4:
        alert('3SHANABA')
        break;
    case 5:
        alert('4SHANABA')
        break;
    case 6:
        alert('5SHANABA')
        break;
    case 7:
        alert('6SHANABA')
        break; 
        default:
            alert('SANBI')  
}

// numarat student

var score = prompt();
var XX
switch(true){
    case ( score <= 100 && score >= 90):
        alert("a")
        break;
    case ( score <= 89 && score >= 80):
        alert("b")
        break;   
    case ( score >= 79 && score >= 70 ):
        alert("c")
         break;
         case ( score <= 69 && score >= 60):
            alert("d")
            break;


            case ( score <= 59 && score >= 50):
        alert("e")
        break;

        case ( score <= 49 && score >= 40):
        alert("f")
        break;

       

}
const arnum = [112,13,14,15,161,717,78,99]

for (let i =0; i< arnum.length; i++){
    console.log(arnum[i])
    
}


// for(let x in item){
//     console.log(item[x])
// }
// const item ={
//     name:"mobile",price:300,
//     name:"tv",price:600,
//     name:"car",price:9000,
//     name:"pc",price:1000,
//     name:"notebook",price:300,
// }

// for(let key in item){
//     console.log(key +":"+ item[key])
// }



const tools =['tv','car','pc','moblie', 'notebook','sanitizer']

for(let x of tools){
    console.log(x)
}
for(let i =0; i<70;i++){
    if(i == 56){
        continue
    }
    console.log(i)
}
var count =1;

var shomara =[];
function countfunc(){
    count++
    
    shomara.push(count)
    
    console.log(count)
    if(count % 3 == 0 && count % 5  == 0 ){
        shomara.push("hi")
       }
   if(count % 3 == 0 ){
    shomara.push("hi")
   }

   if(count % 5 == 0 ){
    shomara.push("hello")
   }
 



     console.log("total" + shomara)


}





