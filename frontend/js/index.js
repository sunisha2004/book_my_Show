async function getmovies() {

    const token=localStorage.getItem("token")

    const res = await fetch("http://localhost:3000/api/getmovies",{
        headers:{"authorization":`Bearer ${token}`}
    });

    const movie=await res.json();
    console.log(movie);
    document.getElementById("user").textContent=movie.user
    str=``;
    movie.data.map((data)=>{
        str+=`
        <a href="../html/cinema.html?id=${data._id}">

        <div class="carddetails" id="carddetails">

            <div class="cards"><img src="${data.cover}" alt="" width="100%">
            </div>
            <h3>${data.name}</h3>
            <p>${data.category}</p>

        </div>
        </a>`
    });
    

    document.getElementById('cardscontainer').innerHTML=str
}
getmovies()
