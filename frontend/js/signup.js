document.getElementById('form').addEventListener('submit',async function (e) {
    e.preventDefault();

    name=document.getElementById('name').value,
    email=document.getElementById('email').value,
    pass=document.getElementById('pass').value,
    cpass=document.getElementById('cpass').value,

    console.log(name,email,pass,cpass);

    const res=await fetch('http://localhost:3001/api/adduser',{
        method:"POST",
        headers:{"content-Type":'application/json'},
        body:JSON.stringify({name,email,pass,cpass})

    })
    console.log(res);

    const data=await res.json()
    if(res.status==201){
        alert(data.msg)
        window.location.href="../html/index.html"
    }
    else{
        alert(data.error)
    }
    

})