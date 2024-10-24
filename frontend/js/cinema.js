const url = window.location.href;
const urlParams = new URLSearchParams(url.split("?")[1]);
const id=urlParams.get("id");
console.log(id);

async function getData() {
    const res=await fetch(`http://localhost:3000/api/getMovie/${id}`)
    console.log(res);
    
    const data=await res.json();
    console.log(data);  

    document.getElementById('mai').innerHTML=`
    <div class="mainside" id="mainside">
    
            <div class="leftside">
                <div class="martin"><img src="${data.cover}" alt=""></div>
                <div class="incinema">In cinemas</div>
            </div>
            <div class="rightside">
                <h2>${data.name}</h2>
                <div class="rating">
                    <div><img src="../images/icons8-star-48.png" alt=""></div>
                    <p style="font-size: 26px; font-weight: 400px;">6/10</p>
                    <p>${data.rating}</p>
                    <div class="btt"><button>Rate Now</button></div>
                </div>
                <br><br>
                <div class="lang">
                    <div class="M2D">${data.screen}</div>
                    <div class="langs">${data.language}</div>
                </div>
                <br>
                <div class="duration">${data.duration}
                    •
                   ${data.category}
                    •
                   ${data.certificate}
                    •
                    ${data.release}</div>
                <br><br>
                <button class="bookticket">Book Tickets</button>
            </div>
            
        </div>
    `    
    document.getElementById('mainside').style.backgroundImage=`linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 90.47%, rgb(26, 26, 26) 100%), url('${data.banner}')`;

    
}
getData()

