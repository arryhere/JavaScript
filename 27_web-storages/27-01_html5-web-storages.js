/*
• HTML5 Web Storage

• Web Storage(sessionStorage and localStorage) is a new HTML5 API offering important benefits over traditional cookies
• Before HTML5, application data had to be stored in cookies, included in every server request
• Web storage is more secure, and large amounts of data can be stored locally, without affecting website performance

• The data storage limit of cookies in many web browsers is about 4 KB per cookie
• Web Storages can store far larger data (at least 5MB) and never transferred to the server
• All sites from the same or one origin can store and access the same data

• There are two Web Storage objects:

    sessionStorage
    localStorage

• localStorage is similar to sessionStorage, except that while data stored in localStorage has no expiration time
• Data stored in sessionStorage gets cleared when the page session ends
• It should be noted that data stored in either localStorage or sessionStorage is specific to the protocol of the page

• The keys and the values are always strings (note that, as with objects, integer keys will be automatically converted to strings)
*/

/*
• localStorage

• The HTML5 localStorage is the para of the web storage API which is used to store data on the browser with no expiration data
• The data will be available on the browser even after the browser is closed
• LocalStorage is kept even between browser sessions
• This means data is still available when the browser is closed and reopened, and also instantly between tabs and windows
*/

/*
• sessionStorage

• sessionStorage is only available within the browser tab or window session
• It’s designed to store data in a single web page session
• That means if the window is closed the session data will be removed
• Since sessionStorage and localStorage has similar methods, we will focus only on localStorage
*/

/*
• Use case of Web Storages

• store data temporarily
• saving products that the user places in his shopping cart
• data can be made available between page requests, multiple browser tabs, and also between browser sessions using localStorage
• can be used offline completely using localStorage
• Web Storage can be a great performance win when some static data is stored on the client to minimize the number of subsequent requests.
    Even images can be stored in strings using Base64 encoding.
• can be used for user authentication method
*/

/*
• 
• 
*/
