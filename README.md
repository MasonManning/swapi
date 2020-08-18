This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Purpose

The goal of this project is to learn react in a fun manner utilizing the free star wars api hosted at swapi.dev. React will consume the api and display the data using different features of the framework. No database is used, instead all data is stored in the browser by way of the window.localStorage. The project currently has the ability to sign up/ log in, buy starships, buy upgrades, save state and load state.

## Concepts Covered
The following react/javascript concepts and features have been used in this project:
* React Class Components
* React Functional Components
* Api Call Using Fetch
* Basic Form
* Context (Context.Consumer, Context.Provider)
* Routing
* Routing Redirect
* UseState Hooks
* useContext Hooks
* localStorage (window.localStorage)

## About
This react web app has implemented the following functionality:
* Sign Up 
* Login
* Navigate to different pages (Home,Starships,Hangar,Mission,Shop)
* Once Logged in the SignUp/Login buttons will dissapear
* Log Out
* Ability to buy Starships from the Starships page
* Display bought ships on the Hangar Page
* Bought ships are stored in the UserContext along with other user data
* Ability to save which will write the saved UserData to localStorage
* Ability to send selected starships on missions via the Mission page
* Use of a Modal to display a list of owned starships to send on Missions
* Missions take a randomised time to complete
* Ability to buy upgrades from a shop

## How To Play
* Sign Up
* Buy A Spaceship
* Battle or Trade 
* Select A Mission
* Dynamically Generate Mission Duration, Exp, Level and Credits
* Select Spaceships To Send On Mission
* Wait For Mission Timeout to complete
* Earn Credits From Missions 
* Level Up Captain By Completing Missions
* Buy Upgrades From Shop
