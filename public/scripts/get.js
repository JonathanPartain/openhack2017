function getRequest(url) {

    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            console.log(xmlHttp.responseText);
    }

    xmlHttp.open('GET', url, true); // false for synchronous request
    xmlHttp.send( null );

}
