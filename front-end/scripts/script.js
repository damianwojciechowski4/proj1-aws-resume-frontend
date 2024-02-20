/**
 * 1. Initialize an XMLHttpRequest constructor
 * 2. Open a GET request, set the headers and response type
 * 3. Output successful response
 * 4. Output error state
 * 5. Combine with on event listener (button)
 * 6. Adjust UI states accordingly
 * 7.
 */


const API_ENDPOINT = 'https://9q8s3rkd10.execute-api.eu-central-1.amazonaws.com/devStage_cloudResume/VisitorsCounter';


const XMR = new XMLHttpRequest()

function showCounter(counter) {
    document.getElementById('counter_number').innerHTML=counter
}






function getcounter() {
    
    XMR.open("GET",API_ENDPOINT)
    
    XMR.setRequestHeader('Accept','application/json');
    XMR.responseType='json';

    // Output successful response
    XMR.onload= function(){
        showCounter(XMR.response)
    }

    XMR.send(null);
}







//run this function any time the page is loading
getcounter()
