

// fetch('https://shazam.p.rapidapi.com/artists/get-latest-release?id=73406786&l=en-US')
// .then (function (response){
//     return response.json();
// })
// .then(function (data) {
//     console.log(data);
//     for (const )
// })

// const url = 'https://airbnb19.p.rapidapi.com/api/v1/searchPropertyByPlace?id=ChIJ7cv00DwsDogRAMDACa2m4K8&display_name=Chicago%2C%20IL&totalRecords=10&currency=USD&adults'

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '20134425d0msh72452ccaece14edp13103ejsn21d1a8af6e4c',
		
// 	}
// };



// async function fetchUrl() {

//     const response = await fetch(url, options)
//     const data = await response.json()
//     console.log(data)

// }

// fetchUrl()


const url = 'https://airbnb19.p.rapidapi.com/api/v1/searchPropertyByLocation?location=accra&totalRecords=10&currency=USD&adults=1';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '20134425d0msh72452ccaece14edp13103ejsn21d1a8af6e4c',
		
	}
};

async function fetchUrl() {

    try {
        const response = await fetch(url, options) 
    const data = await response.json()
    console.table(data.data)



    } catch (error) {
        
    }
}


 fetchUrl()



 
