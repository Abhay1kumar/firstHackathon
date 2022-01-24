document.body.innerHTML = `<label>Search Box</label>
<input type="search" id="search" placeholder="Search here">
<div><button type="button" id="btn">Click Here</button></div>
<div class="catdata"></div>`;

let button = document.querySelector('#btn');
button.addEventListener("click", function () {
    let takeData = document.querySelector('#search').value;

    console.log(takeData);
});


// get the cat api data

async function getApidata() {
    let catapi;
    try {
        const data = await fetch(
            "https://cataas.com/api/cats?tags=cute",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            }
        );
        catapi = await data.json();
        // console.log(catapi);

    } catch (err) {
        console.log(err);
    }
    return catapi;
}
// getApidata();

// display cat api data

async function displaydata() {
    let catapi = await getApidata();
    // console.log(catapi);

    let catdata = document.querySelector('.catdata');
    catdata.innerHTML = "";

    catapi.forEach((cats)=> {
// console.log(cats.tags);
catdata.innerHTML +=`
<div class="catdata">
<img src="${"https://cataas.com/cat?filter=filter"+cats.id}" alt="img" />

</div>`
    })
}

displaydata();