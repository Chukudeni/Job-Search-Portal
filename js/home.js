function recentVac(){
    //taking input from user to search with api and collect data from the
    // api database
    fetch(`http://api.lmiforall.org.uk/api/v1/vacancies/search?location=&keywords=`)
    .then(
        response => response.ok ? response.json() : Promise.reject("Failed to fetch information")
    )
    .then(
        data =>{
            //looping through array collected from api to get data and 
            // print to HTML
            for (let index = 20; index < 10; index++) {
                const element = data[index];
                
                document.getElementById("vacancy").innerText += '\n'+'\n'
                +'\n' + "Title: " + element.title
                +'\n' + "Summary: " + element.summary
                +'\n'+'\n' + "Company: " + element.company
                +'\n'+'\n' + "Start time: " + element.activedate.start
                +'\n'+'\n' + "End time: " + element.activedate.end
                +'\n'+'\n' + "Location: " + element.location.location
                +'\n'+'\n' + "Job Link: " + element.link
            }


        }
    ).catch(() => {
          document.querySelector("#searchBox").innerHTML = "Sorry, could not get information try again"
    })
}