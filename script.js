document.body.innerHTML = `
<div> <button id="btn">Click Here</button>
<input type="text" id="search">
</div>

<div class="popup" >
<div class="dataDiv">
<h2 class="heading"></h2>
<div class="img"></div>
<div class="close-btn"><button>Close</button></div>
</div>
</div>

<div class="catdata"></div>
`;


let button = document.querySelector('#btn');
let popup=document.querySelector('.popup');
let closebtn=document.querySelector('.close-btn');
closebtn.addEventListener('click', () =>{
    popup.classList.remove('active');
})

button.addEventListener("click", function () {
popup.classList.add("active")
    var takeData = document.querySelector('#search').value;
let heading= document.querySelector('.heading');
heading.innerHTML = takeData;

    // console.log(takeData);


});


// get the the search api data

async function getSearchdata(){
    let searchdata;
    try {
        const data = await fetch("https://cataas.com/api/cats?tags=cute",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        searchdata = await data.json();
        // console.log(searchdata);
        var catname;
        
        searchdata.forEach(tag => {
            catname = tag.tags;
            // console.log(catname);
        })     
        
    } catch (e) {
        console.log(e);
    }
   return catname;
}
getSearchdata();

let imageclass=document.querySelector('.img')

async function DisplaySearchdata(){
    let catname=await getSearchdata();
    // console.log(catname);

    if(catname==search){
        return ``
    }
    }
    DisplaySearchdata();

  
// ********************************************************************************************
// List all the cats on the screen with a given api https://cataas.com/api/cats.

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
        console.log(catapi);

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