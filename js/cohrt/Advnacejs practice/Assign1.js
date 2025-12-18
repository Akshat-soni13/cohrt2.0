// Assignm-1/
// user={
//     name:"Akshat",
//     email:"aksiusdnsuida",
//     printer: function()
//             {
//                 console.log("User Login")
//             }
// }



// user.printer();



// using class 

// class user 
// {
//     constructor(name,email)
//     {
//         this.name=name;
//         this.email=email;
//         // agar mene function constructor me banaya then sabka alag alag banaya ga matlab sara obejct ke liye 
//         // Performanc()
//         // {

//         // }
    
//     }
//     // mene nica functionb banaya yhai so sara object ke prototype me milaga function 
//     printer()
//     {
//         console.log("Use login");

//     }
// }

// u1 = new user("akshat","sdasjdsavb");
// u1.printer();
// console.log(u1)


// q2
let product={
    name:"cap",
    price:200,
    discounter:function()
    {
        // matlab 10% discount
        return 200-(10/100)*this.price
    }

}


let ans= product.discounter();
console.log(ans )

// q3 

// class Car {
//   constructor(brand, speed) {
//     this.brand = brand;
//     this.speed = speed;

//     // this function is individual for al
//     this.drive = function () {
//       console.log(this.brand, this.speed);
//     };
//   }
// }
//     // for prototype
//     // drive()
//     // {
//     //     consoel
//     // }

// // }


// c1 = new Car("akshatKiCar",1500)

// q3

// doner

// q4

// function user()
// {
//     this.name="akshat"
//     this.login= function(){
//         console.log("name")
//     }
// }

// user.prototype.key="hi"

//  u1 = new user()
//  console.log(u1)


// q5