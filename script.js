// url to get space news data 

let url = "https://api.spaceflightnewsapi.net/v4/articles/?format=json&limit=25";


// Getting Data using url

async function getData (){
    let space_News;
    try {
        const data = await fetch(url,{
            method: "GET",
            headers: {
                "content-Type":"application/json"
            }
        })
        space_News = await data.json();
        // console.log(space_News)
    } catch (error) {
        console.log(error)
    }
    return space_News;
}

// Function To Display Data

async function displayData(){
    let allData = await getData();
    console.log(allData)
    let totaldata = allData.results;
    console.log(totaldata)

    let display_data = document.querySelector(".data-list");
    display_data.innerHTML = "";

    totaldata.forEach(element => {
        display_data.innerHTML +=`
        
         <div class="row g-0 bg-body-secondary position-relative">
        <div class="col-md-6 mb-md-0 p-md-4">
          <img src="${element.image_url}" class="w-100" alt="...">
        </div>
        <div class="col-md-6 p-4 ps-md-0">
          <h5 class="mt-0">${element.title}</h5>
          <p>${element.summary}</p>
          <br>
          Read More @ <a href="${element.url}" class="link"> ${element.news_site}</a>
        </div>
      </div>
      `
    });
}

displayData();
