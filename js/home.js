function recentVac(){
    //taking input from user to search with api and collect data from the
    // api database
    fetch("http://api.lmiforall.org.uk/api/v1/vacancies/search")
    .then(
        response => response.ok ? response.json() : Promise.reject("Failed to fetch information")
    )
    .then(
        data =>{
            //looping through array collected from api to get data and 
            // print to HTML
            for (let index = 0; index < 10; index++) {
                const element = data[index];
                
                // document.getElementsByClassName("recent").innerHTML 
                document.querySelector(".recent").innerText
                += '\n'+'\n'
                +'\n' + "Title: " + element.title
                +'\n'+'\n' + "Company: " + element.company
                +'\n'+'\n' + "Location: " + element.location.location
                +'\n'+'\n' + "Job Link: " + element.link
                
            }


        }
    ).catch(() => {
          document.querySelector(".recent").innerHTML = "Sorry, could not get information try again"
    })
}