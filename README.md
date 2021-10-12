# car-parking-application

## Run Locally

Clone the project

```bash
  https://github.com/Bhargavi952/car-parking-application.git
```
Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run server
```

## Park a Car

- http://localhost:8000/parking/book

### example 
{
 "vehicleNumber":"KA21-356467" 
}

- If the Parking Slots are full then will get response as : "Parking Slots are full"
- If Car parking successful then will get success message as : "You've succesfully booked parking slot"

## Unpark the Car

- http://localhost:8000/parking/unpark

### example
{
    "slotNumber":16
}

- If given Slots number is not exit then will get response as : "Please enter proper Slot Number"
- If Car unparking successful then will get response as : "You've succesfully Unparked the car"


## Get the Car/Slot Information

- http://localhost:8000/parking/details

- If Car and slot get request is successful then will get success message 
- If Car and slot get request is unsuccessful then will get error message











