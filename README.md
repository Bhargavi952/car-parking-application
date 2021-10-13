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
## Create a Slot

- http://localhost:8000/parking/create/slots

### example

{

    "totalSlots": 20,
    "availableSlots": 20
    
}

## Access : POST ``` /parking/create/slots ```

![2021-10-13-08-09-18](https://user-images.githubusercontent.com/77036158/137058650-cfcabab9-e48c-4c50-995c-ae242504d4c8.png)


## Park a Car

- http://localhost:8000/parking/book

### example 
{

    "vehicleNumber": "KA21-356467" 
   
}

- If the Parking Slots are full then will get response as : "Parking Slots are full"
- If Car parking successful then will get success message as : "You've succesfully booked parking slot"

## Access : POST ``` /parking/book ```

![2021-10-13-02-57-33](https://user-images.githubusercontent.com/77036158/137059140-489f1bac-d604-498d-b918-cc5a36738469.png)


## Unpark the Car

- http://localhost:8000/parking/unpark

### example
{

    "slotNumber":16
}

- If given Slots number is not exit then will get response as : "Please enter proper Slot Number"
- If Car unparking successful then will get response as : "You've succesfully Unparked the car"

## Access : DELETE ``` /parking/unpark ```
![2021-10-13-02-57-26](https://user-images.githubusercontent.com/77036158/137058943-5b551a22-c89b-4ace-980f-7844a04a4800.png)



## Get the Car/Slot Information

- http://localhost:8000/parking/details

- If Car and slot get request is successful then will get success message 
- If Car and slot get request is unsuccessful then will get error message

## Access : GET ```/parking/details ```

![2021-10-13-02-57-44](https://user-images.githubusercontent.com/77036158/137059036-a3f3de62-68fe-4de7-9676-4163c25f2ab6.png)


## rate limit

-  if a user makes more than 10 requests in 10 seconds, then will get the appropriate error message as : "You have exceeded the 10 requests in 10 seconds limit!"


![2021-10-13-02-57-20](https://user-images.githubusercontent.com/77036158/137058905-ba4b2e09-abd3-4a10-a288-1759add43519.png)










