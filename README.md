# findnusers
A microservice that finds the closest locations of a given user

the server is running on https://findnclosestusers.azurewebsites.net/findNUsers and can be called
by sending a GET that contains a json in the body

the json must include a user and locations parameters each having pair of cordinates

Example:


```
{
  "user": [
   0.123456,
	 0.654321],
	"locations": {
	 "0": [0.111111, 
		 0.222222],
		"1": [0.333333,
		 0.444444],
		"2": [0.555555,
		 0.666666],
		"3": [0.777777,
		 0.888888]
		 }
}
```

returns a json in the order of closest to farthest

Example:

```
[
  [
    0.333333,
    0.444444
  ],
  [
    0.111111,
    0.222222
  ],
  [
    0.555555,
    0.666666
  ],
  [
    0.777777,
    0.888888
  ]
]
```

