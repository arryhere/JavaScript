/*
• Value	        State	            Description
    0	        UNSENT	            request not initialized                 -- Client has been created. open() not called yet.
    1	        OPENED	            server connection established           -- open() has been called.
    2	        HEADERS_RECEIVED	request received                        -- send() has been called, and headers and status are available.
    3	        LOADING	            processing request                      -- Downloading; responseText holds partial data.
    4	        DONE	            request finished and response is ready  -- The operation is complete.

•   Http Messages	
    200:    "OK"
    403:    "Forbidden"
    404:    "Page not found"
    For a complete list go to the Http Messages Reference
*/


let btn_3 = document.getElementById('btn-3');
btn_3.addEventListener('click', load_3);

function load_3() {

    let xhr = new XMLHttpRequest();
    console.log(xhr);
    console.log('READY STATE 1: ', xhr.readyState);

    let url = './arry.json';
    xhr.open('GET', url, true);
    console.log('READY STATE 2: ', xhr.readyState);

    //optional - used for loaders
    xhr.onprogress = function (){
        console.log('READY STATE 3: ', xhr.readyState);
    }

    xhr.onload = function () {
        console.log('READY STATE 4: ', xhr.readyState);
        if (this.status === 200) {
            console.log(this.response);
        }
    }

    // xhr.onreadystatechange = function () {
    //     console.log('READY STATE 4: ', xhr.readyState);
    //     if (this.readyState === 4 && this.status === 200) {
    //         console.log(this.response);
    //     }
    // }

    console.log('READY STATE 5: ', xhr.readyState);

    xhr.send();
}