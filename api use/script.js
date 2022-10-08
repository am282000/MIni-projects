
fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers:{
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify ({
        name:'User1'
    })
})
.then(res => {
    return res.json()
    // if(res.ok){
    //     console.log('SUCCESS')
    // }else{
    //     console.log("Not successful")
    // }
}
)
.then(data=> console.log(data))
.catch(error => console.log('ERROR'))