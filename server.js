const express = require("express")

const app = express();


app.use(express.json());
app.set('port', process.env.PORT || 8080);


app.get('/findUsers', async (reg, res) =>{
	
	
	user = req.query.user
	
	locations = req.query.getAll('locations')
	
})


app.listen(app.get('port'), () => 
  console.log(`it's alive on https://findnusers-apim.azure-api.net`)
);

// https://findnusers-apim.azure-api.net/findUsers?user=0.000000,0.000000&locations=1.111111&locations=1.111111