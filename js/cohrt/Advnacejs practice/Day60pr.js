// task 1 done
// function AfterDelay(time ,cb )
// {
//     setTimeout(cb,time);
// }

// AfterDelay(2000,function()
// {
//     console.log("heelo")
// }
// )

// task2 

// function getUser(username,cb)
// {
//     console.log("Fetching data waiting.....");

//     setTimeout(function(){
    
//         cb({id:1,name:"akshat"})
// },1000)

// }

// function getPost(userId,cb)
// {
//     console.log("fetching user Post");
//     setTimeout(function(){
//         cb({id:userId,post:"USerpost"})
//         // cb("heelo")
//         // cb(userId)
//     },1000)

// }


// getUser("akshat",function(data)
// {
//     console.log(data)

//     getPost(data.id,function(data)
//     {
//         console.log(data)
//     }
// )

// })


// task3 


// function Loginuser(username,cb)
// {
//     console.log("Fecthing User data....")

//     setTimeout(function()
//     {
//         cb({id:1,name:"aki"})
//     },1000)

// }

// function fetchPermission(userID,cb)
// {
//     setTimeout(function()
//     {
//         cb(["permisiionGranted"])
//     },1000)
// }

// function loadDashBoard(permision,cb)
// {
//     console.log("Loaidng Dashboard")

//     setTimeout(function()
// {
//         cb();
// },1000)

// }


// Loginuser("aki",function(data)
// {
//     console.log(data)
//     fetchPermission(data.id,function(data)
// {
//     loadDashBoard(data,function()
// {
//     console.log("DashBoard Loaded")
// })

// })
// })