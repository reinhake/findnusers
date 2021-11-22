const express = require("express")

const app = express();


app.use(express.json());
app.set('port', process.env.PORT || 8080);


app.get('/findUsers', async (req, res) =>{
	//req.body should include a json with parameters user and locations
	//user should containt a pair of coordinates
	//locations should contain an array of pairs of coordinates
	//returns an array of coordinates in the order of closest to farthes from the user
	
	doc = req.body

	//user location
	user = doc.user
	
	//array of key: location pairs
	locations = doc.locations
	
	//len is number of locations not including the user
	len = Object.keys(locations).length

	//loca is the list of key names
	loca = Object.keys(locations)

	let array = []
	
	//calculate distance of each location to the user and store them in array
	for(i=0; i < len; i++){
		let loc = locations[loca[i]]
		
		let distx = user[0] - loc[0]
		let disty = user[1] - loc[1]
		let dist = Math.sqrt((distx * distx) + (disty * disty))
		array.push(dist)
	}
	
	var finall = ''
	
	
	//sort the distances in array and put into finall in the syntax of a JSON
	for(j = 0; j < len; j++){
		min = 1000000
		mini = -1
		for( i = 0; i < array.length; i++){
			if(array[i] < min){
				min = array[i]
				mini = i
			}
		}
		console.log(mini)
		if(j == 0){
			finall += '{"' + loca[mini] + '": [' + array[mini] + '], '
		}
		else if (j == len - 1){
			finall += '"' + loca[mini] + '": [' + array[mini] + ']}'
		}
		else{
			finall += '"' + loca[mini] + '": [' + array[mini] + '], '
		}
		array[mini] = 1000000
		
	}
	
	//send final array
	res.header("Content-Type",'application/json')
	res.status(200).send(finall)
	
})


app.listen(app.get('port'), () => 
  console.log(`it's alive on https://findnclosestusers.azurewebsites.net/findNUsers`)
);

// https://findnclosestusers.azurewebsites.net/findNUsers