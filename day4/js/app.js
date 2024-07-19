//callback hell

function getData(dataId,getDataF){
    setTimeout(()=>{
        console.log("data", dataId);
        if(getDataF){
                getDataF();
            
        }
    },2000);
}

// getData(2,()=>{
//     getData(3,()=>{
//         getData(4, ()=>{
//             getData(5);
//         });
//     });
// });

//promise chain
function getData(dataId, getNextData) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
            if(getNextData) {
                getNextData();
            }
        }, 2000);
    })
}
let p1 = getData(1);
p1.then((res) => {
    console.log(res);
    getData(2).then((res) => {
        console.log(res);
        getData(3);
    });
})

//promise
function asyncFunc1(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log("data1");
            resolve("success");
        }, 2000);
    });
}

function asyncFunc2(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=> {
            console.log("data2");
            resolve("success2");
        },2000);
    });
}

// console.log("fetching data1");
// asyncFunc1().then((res) => {
//     console.log("fetching data2");
//     asyncFunc2().then((res) => {});
// })

//async await
function api() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log("weather data");
            resolve(200);
        }, 2000);
    });
}

async function getWeatherData() {
    await api();
    await api();
}

async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
}




