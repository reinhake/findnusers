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
	user = doc.user
	
	
	locations = doc.locations
	
	len = Object.keys(locations).length
	
	let array = []
	let checkarray = []
	
	//calculate distance of each location to the user
	for(i=0; i < len; i++){
		let loc = locations[i]
		
		let distx = user[0] - loc[0]
		let disty = user[1] - loc[1]
		let dist = (distx * distx) + (disty * disty)
		array.push(dist)
		checkarray.push(i)
	}
	
	finall = []
	
	
	//sort the arrays and push into final array to send
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
		array[mini] = 1000000
		finall.push(locations[mini])
	}
	
	//send final array
	res.status(200).send(finall)
	
})


app.listen(app.get('port'), () => 
  console.log(`it's alive on https://findnclosestusers.azurewebsites.net/findNUsers`)
);

// https://findnclosestusers.azurewebsites.net/findNUsers