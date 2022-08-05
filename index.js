const outputs = document.getElementById('result');
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '51bf7c5f34msh8377844a315882fp127d87jsn189e9e5bde87',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

fetch('https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc', options)
	.then(response => response.json())
	.then(response => Game(response))
	.catch(err => console.error(err));


    function Game (response) {
        let output = '<div class = " text-center row">';

        console.log(response);
    
        response.forEach(data => {
    
          output += `
        

        <div class=" col-md-4">
        <img src = ${data.thumbnail}>
        <h5 class="card-title text-dark">${data.title}</h5>
        <a href = "${data.freetogame_profile_url}" target= "_blank" class = "btn btn-primary">Read More</a>
        </div>
          `;
        });
        output += '</div>';
        document.getElementById('result').innerHTML = output;
    }

