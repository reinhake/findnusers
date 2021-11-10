const express = require("express")

const app = express();


app.use(express.json());
app.set('port', process.env.PORT || 8080);


app.get('/findUsers', async (req, res) =>{
	
	
	let user = req.query.user
	
	let locations = req.query.locations
	
	let array = []
	let checkarray = []
	
	for(i=0; i < locations.length; i + 2){
		let distx = user[0] - locations[i]
		let disty = user[1] - locations[i + 1]
		let dist = Math.sqrt((distx * distx) + (disty * disty))
		array.push(dist)
		checkarray.push(i)
	}
	
	finall = []
	console.log("Array so far: ", array[1])
	
	while(checkarray){
		min = 0
		mini = -1
		for( i = 0; i < checkarray.length; i++){
			if(array[i] > min){
				min = array[i]
				mini = i
			}
		}
		let trash = array.pop(mini)
		finall.push(locations[mini*2], locations[mini*2 + 1])
	}
	
	res.status(200).send(finall)
	
})


app.listen(app.get('port'), () => 
  console.log(`it's alive on https://findnusers-apim.azure-api.net`)
);

// https://findnusers-apim.azure-api.net/findUsers?user=0.123456,0.000321&locations=0.111111&locations=0.111111&locations=0.111110&locations=0.111110