// console.log("hwlo")
// q1

// let laptop ={
//     brand:"Asus",
//     price:100000,
//     Start: function()
//             {
//                 console.log("Laptop Satrted ")

//                 },

//     increaser: function()
//     {
//         return this.price-10000
//     }
// }

// console.log(laptop.Start())
// console.log(laptop.increaser())

// q2 

// class Employee
// {
//     constructor()
//     {
//         this.name="aki",
//         this.salary=1000000
//     }

//     printer()
//     {
//         console.log(this.name, this.salary  )
//     }

// }


// e1 = new Employee();
// e2 = new Employee();
// e3 = new Employee();

// e1.printer()

// e3.name="vansh";
// e3.printer()


// q3


// class bankAccout
// {
//     constructor(name,balance)
//     {
//         this.accountHolder=name
//         this.balance=balance;

//     }

//     increaser()
//     {
//         console.log(this.balance-100)
//     }
// }

// ba1= new bankAccout("ali",100000);
// ba2= new bankAccout("akli",1212122);

// ba1.increaser()
// ba2.increaser()

// q4

let profile={
    userName:"Aksaht",
    name: function()
            {
                console.log(this.userName);
            }
}

profile.name()