// THIS IS THE MAIN APP WE ARE WORKING IN


// this file is releted to the build in modules

// let os=require("os")

// console.log(os.userInfo())

 
// console.log(`the system is started ${os.uptime()} seconds brfore`)

// let obj={
//     type:os.type(),
//     release:os.release(),
//     total:os.totalmem(),
//     free:os.freemem()
// }

// console.log(obj)

// let path=require("path")
// console.log(path.sep)


// let pathha=path.join('/content','test')
// console.log(pathha)
// console.log(path.basename(pathha))

// console.log(path.resolve(__dirname,"/content","test"))

// the below is the fs module
// give the correct directory name
// the flag method will append the both if we run it 2 times it will append 2 times






// the code is executing the lione by line
// which we actually do not need
// let fs=require('fs')
// console.log("starting the task")
// console.log(fs.readFileSync("./content/first.txt","utf8"))
// console.log(fs.readFileSync("./content/second.txt","utf8"))

// console.log("middle of the task")

// fs.writeFileSync("./content/makingfile","this file will be created ang this will be the text in it",{flag:'a'})

// console.log("ending the task")







// the asynchonous method
// the below is the call back hell
// but the code is not executing line by the line is good for us but we use promises or the async await instead of the call back


// console.log("starting the work")
// fs.readFile("./content/first.txt",'utf8',(err,result)=>{
//     if(err){
//         // console.log("the error has occured")
//         console.log(err)
//         return
//     }

//     let first=result

//     fs.readFile("./content/second.txt","utf8",(err,result2)=>{
//         if(err){
//             console.log(err)
//             return
//         }

//         let second=result2
//           fs.writeFile("./content/file2created",`the first: ${first} amd the second:${second}`,(err,result3)=>{
//               if(err){

//                   console.log(err)
//                   return
//                 }
//                 // console.log(result3)
//                 console.log("in the middle of the work")
//             })
           
//     })

// })

// console.log("we have just completed th ework")




// the below is the http module

// let http=require("http")
// const { initial } = require("lodash")

// let webpage=http.createServer((request,response)=>{
//     response.write("this is the first website of my node")
//     response.end()
// })

// webpage.listen(1234)

// making the pages

// let website=http.createServer((req,res)=>{
//     console.log(req)
//     if(req.url==="/"){
//         res.end(`<h1>This si the home page<h1/>`)
//     }
//     if(req.url==="/about"){
//         res.end("this is the about page")
//     }
    
//     res.end(`<h1>The page is not availabe soory!!<h1/>
//           <a href="/">Go back to the home<a/>`)
    
// })
// website.listen(5555)


// npmjs.com


// we install the dependencies like loash or the bootstrap then we refresh the vscode then there will be node_modules and we see the dependencies we install it with the npm i bootstrap,lodash and and also the dependencies they will use like the bootstrap uses the popperjs this will get into the modules

// bootstrap lodash are the packages modules that are the external and http path fs the y are build in modules and the packages we need to install them by npm install ... they are put in the dependencies and the node_module folder is created


// using the lodash
// _ has all the methods in it this is for the external modules
// let _=require("lodash")
// let arr=[12,[12,[12,[12,22,22]]]]

// console.log("my name is sardar ali murada li munna")
// console.log(_.flattenDeep(arr))


// installing the git and making the folder of the gitignore and place the node_modules
// also intall the .netframework and make teh file name .gitattributes and place the below in it 
// * text-auto

// * .jpg binary
// * .png binary


// commands to run in the terminal 
// git init
// git add .
// git commit -m "first commit"
// then when we create the repository and click the create repository and we copy the the blow and paste in the terminal
// git remote add origin https://github.com/Sardar-Murad-Ali/new-repo.git
// git branch -M main
// git push -u origin main



// to install the node dependencies we write
// the go in the dev dependencies so when we share the code they are not shown only we use them while building the app
// THE BELOW IS SAVED IN THE DEV DEPENDENCIES
// npm install nodemon (--save-dev or -D)



// "scripts": {
//     "start": "node app.js",
//     "dev":"nodemon app.js"
//   },
// run only the app.js code only
// by npm start   ---run the programs 
// by npm run dev   ---nedd to type only for the one time then by only saving the code program runs

// npm uninstall bootstrap 
// this way we remove teh package

// deleting the package lock json deleting the node modules and command clear and 
// running the npm install whatever in the package.lock it will create the node module and packagelock.json
 

// the below is for the globally 
// by the above command we are only installing them in this folder in this project but by  the global commands we use them in all the app we craeted in the 

// ctrl+c to came out from the terminal
// nodemon is used for only to not type again again node and filname
// npm install -g nodemon


// the package.json has all the packsges we install the dependencies and the packagelock.json they contain the information about the dependencies of the dependencies for the bootstrap the the dependency is popper.js it will be shown in the packagelock.json and node_modules have all the packsges

// nodesource.com the basic of the package.json in the node.js and npm

// 2:30 THE PACKAGE NAMES TO LEARN THE MORE
// THE NODE JS EVENT LOOP THE TOPIC AND THE RESOURCES IN 2:30
// https://course-api.com
// the above is the resourse

// the below is starting the event loop

// the second step reading the is a bigger step so it is offloading

// console.log('this is the start')
// let fs=require("fs")
// fs.readFile("./content/first.txt","utf8",(err,result)=>{
//     if(err){

//         console.log(err)
//     }
//     console.log("this is the middle")
//     console.log("the result or the writting the file.txt is "+result)
// })

// console.log("this is the end one")



// second example


// console.log("this is the first one")

// setTimeout(()=>{
//     console.log("this is the second one")
// },1000)

// console.log("this is the third one")


// see the difference between timeout and set timeinterval the settimeinterval is executed after the every 2 second  and the timeout and the settimeout are asynchorous and also the reading the file so they are always offloaded
// console.log("this is the first one")

// setInterval(() => {
//         console.log("this is the second one")
// }, 2000);


// so the listen is asychoronous we resfresh the page and say send response again and again to run the code in the create server


// let http=require("http")
// let server=http.createServer((request,response)=>{
//     console.log("consoling the first")
//     response.end(`<h1>This is the port running<h1/>`)
// })

// server.listen(3456,()=>{
//     console.log("this si the second console")
// })



// see that the for loop is not offloaded
// console.log("this is the first one")
// for(let i=0;i<10;i++){
//     console.log("this second will run 10 times")
// }
// console.log("this console will run the 3 no")

// the below is casing the error
// NEED TO RESOLVED
// let http=require('http')
// let server=http.createServer((req,res)=>{
//     if(req.url==='/'){
//         // for(let i=0;i<1000;i++){
//         //     console.log('this will block the code ')
//         // }
//         res.end("this is home page")
//     }
//     if(req.url==='/about'){
//         res.end("this is the about page")
//     }
   
//     res.end("this page doesnt exist")
    
// })

// server.listen(5000,()=>{
//     console.log("the poert is running")
// })


// transformong from the call back to promises

// let fs=require("fs")
// let gettext=(path)=>{
//     return new Promise((resolve,reject)=>{
//       fs.readFile(path,"utf8",(err,result)=>{
//           if(err){
//               reject(err)
//           }
//           else{
//               resolve(result)
//           }
//       })
//     })
// }

// gettext("./content/first.txt").then(result=>{
//     console.log(result)
// }).catch(err=>console.log("the err is:"+err))


// the below is the by the async await methos see

// let fs=require("fs")
// let gettext=(path)=>{
//     return new Promise((resolve,reject)=>{
//       fs.readFile(path,"utf8",(err,result)=>{
         
//           if(err){
//               reject(err)
//           }
//           else{
//               resolve(result)
//           }
//       })
//     })
// }

// let fun=async()=>{
//     try {  
//         let firsttxt=await gettext("./content/first.txt")
//         console.log(firsttxt)
//         let secondtxt=await gettext("./content/second.txt")
//         console.log(secondtxt)
//     } catch (error) {
//         console.log(error)
//     }
//     // fs.writeFile("./content/asynnewfilecreated",`the first:${firsttxt} and second:${secondtxt}`)
// }

// fun()


// the below is only the way to work with the asyns
// let fs=require("fs")
// let util=require("util")
// let read=util.promisify(fs.readFile)
// let write=util.promisify(fs.writeFile)

// let name=async()=>{
//     let first=await read("./content/first.txt","utf-8")
//     let second=await read("./content/second.txt","utf-8")
//     let writting=await write("./content/asyncfilecreated",`the first ${first} and the second is :${second}`)
//     console.log(first,second)
// }

// name()





// the below is the much clearner
// flag will append the above text and make the one more duplicaye of the above
// console.log("this is the start")
// let fs=require("fs").promises

// let name=async()=>{
//     let first=await fs.readFile("./content/first.txt","utf-8")
//     let second=await fs.readFile("./content/second.txt","utf-8")
//     let writting=await fs.writeFile("./content/asyncfilecreated",` this is owsomethe first ${first} and the second is :${second}`,{flag:"a"})
//     console.log("this is the middle")
//     console.log(first,second)
// }

// console.log("this is the end")

// name()


// THE BELOW IS THE EVENT DRIVEN PROGRAMMING
// CONTROLLLING THE EVENTS

// let EventEmitter=require("events")
// let instance=new EventEmitter()

// instance.on('response',()=>{
//     console.log("data recieved")
// })

// instance.emit("response")






// THE SECOND STEP

// let EventEmitter=require("events")
// let custom= new EventEmitter()

// custom.on('responseaya',(name,age)=>{
//     console.log(`there goese the first ligic  ${name} ${age}`)
// })


// custom.on('responseaya',(name,age)=>{
//     console.log(`there goese the second  ligic the order of all matters  ${name} ${age}`)
// })

// custom.emit("responseaya","sardar ali murad ali",19)




// let http=require("http")
// let server=http.createServer()
// server.on("request",(req,res)=>{
//     res.end("this is the page sarad")
// })

// server.listen(5000)



// THE BELOW ARE THE STREAMS
// by readfileSync we only can read the small files but with the streams we read the big biles
// creating the big file below
// we get the data in chunks of the buffers

// let fs=require("fs")

// for(let i=0;i<100;i++){
//     fs.writeFileSync("./content/big-file",`${i} this is sardar`,{flag:'a'})
// }

// // below reading the big file
// let alldata=fs.createReadStream("./content/big-file")
// // console.log(alldata)
// alldata.on("data",(resul)=>{
//     console.log(resul)
// })





// let fs=require("fs")

// for(let i=0;i<100;i++){
//     fs.writeFileSync("./content/big-file",`${i} this is sardar`,{flag:"a"})
// }

// // below reading the big file
// let alldata=fs.createReadStream("./content/big-file",{
//     highWaterMark:50,
//     // encoding:"utf8"
// })
// // console.log(alldata)
// alldata.on("data",(resul)=>{
//     console.log(resul)
// })
// alldata.on('error',(err)=>{
//    console.log(err)
// })


// every time we save the below code again runs so uncomment the below when run first time
// se put the file to the server by normal way this file size is very big but by the streams the data is broken into chunks  file is not so big anymore
// let fs=require("fs")

// // for(i=0;i<1000;i++){
// //     fs.writeFileSync("./content/big","this is murad",{flag:"a"})   
// // }

// let http=require("http")
// http.createServer((req,res)=>{
//     text=fs.readFileSync("./content/big","utf8")
//     res.end(text)
// }).listen(1234)


// so we have big file user requests it we give them big the size is very big go in the networks abd reload see the big size

// see the below by the streams

let fs=require("fs")

// for(i=0;i<1000;i++){
//     fs.writeFileSync("./content/big","this is murad",{flag:"a"})   
// }

let http=require("http")
http.createServer((req,res)=>{
    // text=fs.readFileSync("./content/big","utf8")
    // res.end(text)

   let stream=fs.createReadStream("./content/big","utf8")
    stream.on("open",()=>{
        stream.pipe(res)
    })
}).listen(1234)

