// Note: Documentation was referred at https://dev.megaport.com
async function fetchEnabledLocations () {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    let requestOptions = {
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