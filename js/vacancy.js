

function vacancySearch() {
    var input = document.getElementById("userInput").value;
    var inputLocale = document.getElementById("location").value
    var div = document.createElement("div");
    
    document.getElementById("searchText").innerHTML = 
    `
        Searching for ${input} jobs in ${inputLocale}
    
    `
    //taking input from user to search with api and collect data from the
    // api database
    fetch(`http://api.lmiforall.org.uk/api/v1/vacancies/search?location=${inputLocale}&keywords=${input}`)
    .then(
        response => response.ok ? response.json() : Promise.reject("Failed to fetch information")
    )
    .then(
        data =>{
            // document.getElementById("SearchText").innerText = "Search Results"
            document.getElementById("searchBox").innerText = " "
            //looping through the array gotten from the API
            for (let index = 0; index < 10 && index < data.length; index++) {
                const element = data[index];

                div.innerHTML = '\n'+'\n'
                +'\n' + "Title: " + element.title
                +'\n'+'\n' + "Company: " + element.company
                +'\n'+'\n' + "Start time: " + element.activedate.start
                +'\n' + "End time: " + element.activedate.end
                +'\n'+'\n' + "Location: " + element.location.location
                +'\n'+'\n' + "Job Link: " + element.link ;  
                
                
                document.getElementById("searchBox").appendChild(div);

                // document.getElementById("searchBox").innerText += '<p>' + '\n'+'\n'
                // +'\n' + "Title: " + element.title
                // +'\n'+'\n' + "Company: " + element.company
                // +'\n'+'\n' + "Start time: " + element.activedate.start
                // +'\n' + "End time: " + element.activedate.end
                // +'\n'+'\n' + "Location: " + element.location.location
                // +'\n'+'\n' + "Job Link: " + element.link + '</p>'
            }

        }
    ).catch(() => {
          document.querySelector("#searchBox").innerHTML = "Sorry, could not get information try again"
    })
}

function recent(){
    //taking input from user to search with api and collect data from the
    // api database
    
    fetch(`http://api.lmiforall.org.uk/api/v1/vacancies/search?`)
    .then(
        response => response.ok ? response.json() : Promise.reject("Failed to fetch information")
    )
    .then(
        data =>{
            // toString().length(23)
            //looping through the array gotten from the API
            for (let index = 0; index < 10; index++) {
                const element = data[index];
                
                document.getElementById("searchBox").innerText += 
                '\n'+'\n'
                +'\n' + "Title: " + element.title
                +'\n'+'\n' + "Company: " + element.company
                +'\n'+'\n' + "Location: " + element.location.location
                +'\n'+'\n' + "Job Link: " + element.link
            }


        }
    ).catch(() => {
          document.querySelector("#searchBox").innerHTML = "Sorry, could not get information try again"
    })
}