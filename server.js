const express = require("express")

const app = express();


app.use(express.json());
app.set('port', process.env.PORT || 8080);


app.get('/findUsers', async (req, res) =>{
	
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
  console.log(`it's alive on https://findnusers-apim.azure-api.net`)
);

// https://findnusers-apim.azure-api.net/findUsers?user=0.123456,0.000321&locations=0.111111&locations=0.111111&locations=0.111110&locations=0.111110