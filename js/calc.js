
function printInfo(){
    var payPerHour = document.getElementById("pay").value
    var payPerWeek = 0
    var payPerMonth = 0
    var payPerYear = 0
    var title = document.getElementById("jobTitle").value
    var workHours = parseFloat((document.getElementById("hours").value))
    var pay = parseFloat(document.getElementById("pay").value)
    var taxes = parseFloat(document.getElementById("tax").value)
    var niRate = parseFloat(document.getElementById("ni").value)

    payPerWeek = payPerHour*workHours
    payPerMonth = payPerWeek*4
    payPerYear = payPerWeek*52
    
    var thPayMonth = parseFloat(payPerMonth - (payPerMonth*(taxes/100)) - (payPerMonth*(niRate/100)) ).toFixed(2)
    var thPayYear = (thPayMonth * 12).toFixed(2)
    var thPayWeek = (thPayMonth / 4).toFixed(2)
    var thPayHour = (thPayWeek/workHours).toFixed(2)

    //printing all calculations and inputted data to HTML document
    document.getElementById("info").innerText
    += '\n'+ '\n'+
        " Job: " + title + '\n' + " Working " + workHours 
        + " hours a week for a gross pay of $" + pay 
        + " per hour with " + taxes + "% Tax and " + niRate 
        + "% NI,"+'\n'+'\n'+ "Results in a take-home pay of :" 
        + '\n' + "Your take home pay per hour is $"+ thPayHour+ '\n'
        + " Your take home pay per week is $" + thPayWeek + '\n'
        +" Your take home pay per month is $" + thPayMonth + '\n'
    + " Your take home pay per year is $" + thPayYear ;
}
