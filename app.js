
const OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'dc8b897442mshcbec4a98d6ddc1dp1eb693jsn5a3317dc0a06',
    'X-RapidAPI-Host': 'ip-reputation-geoip-and-detect-vpn.p.rapidapi.com'
  }
};


const fetchIPInfo = (ip) => {
    return fetch(
  `https://ip-reputation-geoip-and-detect-vpn.p.rapidapi.com/?ip=${ip}`,
     OPTIONS   
    )
    .then(res => res.json())
    .catch(err => console.error(err))

}

const $form = document.querySelector('#form') // $ = notacion para elemento del dom
const $input = document.querySelector('#input')
const $submit = document.querySelector('#submit') 
const $results = document.querySelector('#results') 

$form.addEventListener('submit', async (e) => {
    e.preventDefault() // por defecto el boton se carga porque esta en post

    const {value} = $input

    if (!value) {
        return null;
    }

    $submit.setAttribute('disabled', '')
    $submit.setAttribute('aria-busy', 'true')

    const ipInfo = await fetchIPInfo(value)


    if(ipInfo) {

        $results.innerHTML = JSON.stringify(ipInfo, null, 2)

    }
    else{
        $results.innerHTML = 'a'
    }

    $submit.removeAttribute('disabled')
    $submit.removeAttribute('aria-busy')



})
