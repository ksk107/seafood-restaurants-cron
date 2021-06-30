# seafood-restaurants-cron
seafood-restaurants-cron is a utility that finds the zip code in Boston with best reviewed sea food restaurant in yelp. Criteria is there should be 50 reviews and the zip code should have atleast 2 restaurants

## Prerequisites
Before you begin, ensure you have met the following requirements:
1) You have installed Redis and have it running either locally or in a server. If you are not connecting to localhost update the host in environment file DB_HOST

Instructions to install Redis

### On Mac

```
brew install redis
brew services start redis
```
### Windows

Download the package and unzip the file

https://github.com/dmajkic/redis/downloads

Run redis-server.exe under 64bit or 32 bit folder according to your system 

2) API Key from yelp developers site and update it in environment.dev in API_KEY

https://www.yelp.com/developers

## Installing seafood-restaurants-cron
To install all the dependencies

```
npm install
```

## Using seafood-restaurants-cron

To run the application
```
npm start
```
To run the testcases

```
npm test
```
