var http = new XMLHttpRequest();
var url = 'http://jsonplaceholder.typicode.com/posts';
var method = 'POST';

var data = 'title=Post%20Title&body=Body';

http.open(method,url);
http.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

http.onreadystatechange = function() {
    if (http.readyState === XMLHttpRequest.DONE && http.status === 201) {
        console.log(JSON.parse(http.responseText));
    } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 201) {
        console.log("ERROR");
    }
};

http.send(data);