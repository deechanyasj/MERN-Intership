//promise
const promise = new Promise((resolve, reject) => {
    var success = false;
    if(success){
        resolve("Success");
    }else{
        reject("Failure");
    }
})
promise.then((msg)=>console.log(msg)).catch((err)=>console.log(err))

//promise
//const prime = new promise((resolve,reject)=>{
  /*  setTimeout(()=>{
        resolve("sucsess")
    },2000)
})*/
const getData=()=>
    {
        return fetch('https://jsonplaceholder.typicode.com/posts')
}
getData().then((res)=>res.json())
.then((data)=>console.log(data))
.catch((err)=>console.log(err))