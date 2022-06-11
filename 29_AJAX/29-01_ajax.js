/*
• AJAX

• Asysnchronous JavaScript & XML
• Set of web technologies
• Send and receive data asynchronously
• Does not interfere with current web page
• JSON has replaced XML for most part

• XmlHttpRequest (XHR) Object
• API in the form of an object
• Provided by browsers JS environment
• Methods transfer data b/w client/ server
• Can be ised with other protocols than HTTP
• Can work with data other than XML (JSON, plain text etc)

• Value	        State	            Description
    0	        UNSENT	            Client has been created. open() not called yet.
    1	        OPENED	            open() has been called.
    2	        HEADERS_RECEIVED	send() has been called, and headers and status are available.
    3	        LOADING	            Downloading; responseText holds partial data.
    4	        DONE	            The operation is complete.

•   Http Messages	
    200:    "OK"
    403:    "Forbidden"
    404:    "Page not found"
    For a complete list go to the Http Messages Reference
*/


let btn_1 = document.getElementById('btn-1');
btn_1.addEventListener('click', load_1);

function load_1() {
    //create xhr object
    let xhr = new XMLHttpRequest();
    console.log(xhr);

    // open - type, url/filename, async
    let url = './arry.json';
    xhr.open('GET', url, true);

    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);                     // this is string, parse it to use
            console.log(this.status,this.statusText);
        }
        else if(this.status === 404){
            console.log('error 404, file not found');
        }
    }
    
    xhr.onerror = function () {
        console.log('Request Error');
    }

    // send request
    xhr.send();
}