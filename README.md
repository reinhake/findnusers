# findnusers
A microservice that finds the closest locations of a given user

the server is running on https://findnclosestusers.azurewebsites.net/findNUsers and can be called
by sending a GET that contains a json in the body

the json must include a user and locations parameters each having pair of cordinates

Example:


```
{
	"user": [0.123456,
		0.654321],
	"locations": {
		"Zero": [0.111111, 
				 0.222222],
		"One": [0.333333,
					0.444444],
		"Two": [0.555555,
					0.666666],
		"Three": [0.777777,
					0.888888]
		 }
}
```

returns a json with a "Key": [value] pair in the order closest to farthest

Example:

```
{
  "One": [
    0.29681089983017805
  ],
  "Zero": [
    0.43227531137690484
  ],
  "Two": [
    0.43227531137690484
  ],
  "Three": [
    0.695095424046224
  ]
}
```

