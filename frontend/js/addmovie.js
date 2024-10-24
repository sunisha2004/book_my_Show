document.getElementById('form').addEventListener('submit',async function (e) {
    e.preventDefault();


    name=document.getElementById('moviename').value,
    duration=document.getElementById('duration').value,
    category=document.getElementById('category').value,
    release=document.getElementById('date').value,
    language=document.getElementById('language').value,
    rating=document.getElementById('rating').value,
    screen=document.getElementById('screen').value,
    certificate=document.getElementById('certificate').value,
    cover=pic1
    banner=pic2



    const res=await fetch('http://localhost:3000/api/add',{
        method:"POST",
        headers:{"content-Type":'application/json'},
        body:JSON.stringify({name,duration,category,release,language,rating,screen,certificate,cover,banner})

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
let pic1
let pic2

async function picture1() {

    const file=document.getElementById('cover').files[0]
    pic1=await convertBase641(file)
    console.log(pic1);
    document.getElementById('card-div').src=pic1 
  
}


async function picture2() {

    const file=document.getElementById('banner').files[0]
    pic2=await convertBase642(file)
    console.log(pic2);
    document.getElementById('bg-div').src=pic2 
  
}

function convertBase641(file) {
    return new Promise((resolve,reject)=>{
        const fileReader=new FileReader();

        fileReader.readAsDataURL(file)
        fileReader.onload=()=>{
            resolve(fileReader.result)

        }
        fileReader.onerror=(error)=>{
            reject(error)
        }
    })
}

function convertBase642(file) {
    return new Promise((resolve,reject)=>{
        const fileReader=new FileReader();

        fileReader.readAsDataURL(file)
        fileReader.onload=()=>{
            resolve(fileReader.result)

        }
        fileReader.onerror=(error)=>{
            reject(error)
        }
    })
}
