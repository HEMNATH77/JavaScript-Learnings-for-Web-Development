// 1. for Loop -> best when you know how many times will you want to run

syntax : for(initiaization ; condition ; increment/decrement)

for(let i = 0; i<=5 ; i++){
    console.log(i)                 // output : 0 1 2 3 4 5  printed in vertical  
}


// 2. while Loop -> best when you don't know how many times will you wan to run

 syntax : while(condition){ 
              console.log()
              increment/ decrement
}

let i = 0
while(i<=5){
    console.log(i)
    i++
}                                    // output : 0 1 2 3 4 5  printed in vertical

// 3. do - while Loop -> runs atleast once even if the condition fails 

// syntax : do{ ---- } while(condition)

let i = 5
do{
    console.log(i)
}
while(i<=4)                       // output : 5 (because i = 5 but in condition i <=4 so the condition fails)


// 4. for... of -> used to iterate over arrays or iterable objects

syntax :  for( i (or) any names of arr_name){----}

let fruits = ["apple","orange","grapes"]
for (i of fruits){
    console.log(i)
}                                      // output : apple orange grapes  printed in vertical

// 5. for... in -> used to iterate over object's keys

syntax : for (let (or) var (or) const key in object_name)

item = { name : "oppo",
         quantity : 1 ,
         price : 20000
       }

for (let key in item)
    //console.log(item)           -> will give you all values in the item 
    console.log(item[key])        // oppo   1   20000  (gives only values of the respective keys)



