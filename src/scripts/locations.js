// Note: Documentation was referred at https://dev.megaport.com
async function fetchEnabledLocations () {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    
    await fetch('https://api.megaport.com/v2/locations', requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
    ;
}

fetchEnabledLocations();