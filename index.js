//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )

//Information should be retrieved from localstorage only, avoid hard coding data.

var Display = document.getElementById("display_data")
//  calling display data here

   var scopeArr= []
//  creating app for scope 
function scope(){
   
    var L_1= "There are 2 type of scope in Js "
    var L_11= "Local scope."
    var L_12= " Global scope "
    var L_13="Local Scope occurs when you create a variable inside a function"
    var L_14="Global scope is the context where everything in a Javascript program executes by default. " 

// creating object usig above data
   var obj_scope ={
       li_1:L_1,
       li_2:L_11,
       li_3:L_12,
       li_4:L_13,
       li_5:L_14,
   }
// console.log(obj_scope)
   scopeArr.push(obj_scope)
  localStorage.setItem("scope",JSON.stringify(scopeArr))
  console.log(scopeArr)

  //   its VVV importent 
display_scope()

}
// scope()

   var scope_data = JSON.parse(localStorage.getItem("scope"))
  
   function display_scope () {

       scope_data.map(function(ele){
        Display.innerHTML = "";
//   creating div
       var div = document.createElement("div")

//  L_1  
       var L_1=document.createElement("li")
       L_1.innerText= ele.li_1;
// L_11
       var L_11 =document.createElement("li")
       L_11.innerText=ele.li_2
//  L12
        var L_12 = document.createElement("li")
        L_12.innerText = ele.li_3
 //  L13
        var L_13 = document.createElement("li")
        L_13.innerText = ele.li_4
 //  L14
        var L_14 = document.createElement("li")
        L_14.innerText = ele.li_5        


// append all L_1, L_11, L_12_ L_13 L14 to div
       div.append(L_1 , L_11 , L_12 , L_13 , L_14)

//  div appending to Diplay
       Display.append(div)
       Display.style.background= "green"

       })
   }

// 2. *****  Hoisting **********
   var Hoisting_Arr = []

  function Hoisting(){
//    creating all required data
var L_2= "Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution"
var L_21= "function: JavaScript has a feature that allows function and variables to be hoisted"
var L_22= " importence of Hoisting: it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local"
 
//  by the above data creating obj 
    var obj_Hoisting = {
        li_1:L_2,
       li_2:L_21,
       li_3:L_22,   
    }
//    pushing all data to arr
    Hoisting_Arr.push(obj_Hoisting)
   console.log(Hoisting_Arr)

//   Hoisting_Arr stored into the local storage 
    localStorage.setItem("Hoisting" , JSON.stringify (Hoisting_Arr)) 
    display_hoisting()
 }
   
 //  creating function to display hoisting_data  
  var Hoisting_data = JSON.parse( localStorage.getItem("Hoisting"))
    console.log(Hoisting_data)

//display  Hoisting_data on browser
   function display_hoisting(){
//   mapping Hoisting_data
    Hoisting_data.map(function(ele){
        Display.innerHTML = "";
        var div = document.createElement("div")
    
     var L2 = document.createElement("li") 
     L2.innerText = ele.li_1 

     var L21 = document.createElement("li") 
     L21.innerText = ele.li_2  

     var L22 = document.createElement("li") 
     L22.innerText = ele.li_3  


        div.append(L2 , L21 , L22)
        // append to container
        Display.append(div)
        Display.style.background= "teal"

    })

   }


// 3. ***** Constructor Functions ****
  var constructor_Arr= []
 function Constructor_Functions(){
    
    var L_3= "A contructor function is a special function that creates and initializes an object instance of a class."
    var L_31= " use constructors to initialize the object with the default or initial state."
    var L_32= "Rules for creating Java constructor"
    var L_33="Constructor name must be the same as its class name"
    var L_34="A Constructor must have no explicit return type"
    var L_35=  "A Java constructor cannot be abstract, static, final, and synchronized "

   var obj_constructor = {
       li_1:L_3,
       li_2:L_31,
       li_3:L_32,
       li_4:L_33,   
       li_4:L_34,  
       li_5:L_35,  
   }
    constructor_Arr.push(obj_constructor)
    console.log(constructor_Arr)

    localStorage.setItem("constructor" , JSON.stringify (constructor_Arr))
    display_constructor ();
 }

//   displya constructor data 
// 1st get data from localstorage
 var constructor_data = JSON.parse(localStorage.getItem("constructor"))
//  console.log(constructor_data)
   function display_constructor (){
    constructor_data.map(function(ele){
        Display.innerHTML = "";
        var div = document.createElement("div")

         var L3 = document.createElement("li")
         L3.innerText= ele.li_1

         var L_31 = document.createElement("li")
         L_31.innerText = ele.li_2

         var L_32 = document.createElement("li")
         L_32.innerText = ele.li_3
      
         var L_33 = document.createElement("li")
         L_33.innerText = ele.li_4

         var L_34 = document.createElement("li")
         L_34.innerText = ele.li_5

         var L_35 = document.createElement("li")
         L_35.innerText = ele.li_5


       div.append( L_31 ,L_32,L_33,L_34 ,L_35  )
        //  append div to display
        Display.append(div)
        Display.style.background= "yellow"
    })

   }

//    4. ****** prototype ********

var prototype_Arr= []
function prototype (){
   
   var L_4= "The prototype is an object that is associated with every functions and objects by default in JavaScript."
   var L_41= " Prototypes allow you to easily define methods to all instances of a particular object."
   var L_42= "simulates the real and future product"
   var L_43="name of the function is addNumbers()"
   var L_44="return type of the function is int."
   var L_45=  "two arguments of type int are passed to the function."

  var obj_prototype = {
      li_1:L_4,
      li_2:L_41,
      li_3:L_42,
      li_4:L_43,   
      li_4:L_44,  
      li_5:L_45,  
  }
  prototype_Arr.push(obj_prototype)
   console.log(prototype_Arr)

   localStorage.setItem("prototype" , JSON.stringify (prototype_Arr))
   display_prototype ();
}

//   displya constructor data 
// 1st get data from localstorage
var prototype_data = JSON.parse(localStorage.getItem("prototype"))
//  console.log(constructor_data)
  function display_prototype (){
    prototype_data.map(function(ele){
       Display.innerHTML = "";
       var div = document.createElement("div")

        var L4 = document.createElement("li")
        L4.innerText= ele.li_1

        var L_41 = document.createElement("li")
        L_41.innerText = ele.li_2

        var L_42 = document.createElement("li")
        L_42.innerText = ele.li_3
     
        var L_43 = document.createElement("li")
        L_43.innerText = ele.li_4

        var L_44 = document.createElement("li")
        L_44.innerText = ele.li_5

        var L_45 = document.createElement("li")
        L_45.innerText = ele.li_5


      div.append(L4 , L_41 ,L_42,L_43,L_44 )
       //  append div to display
       Display.append(div)
       Display.style.background= "green"
   })

  }

