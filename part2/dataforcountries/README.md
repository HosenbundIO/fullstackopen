# Part 2

[Exercises 2.18 - 2.20](https://fullstackopen.com/en/part2/adding_styles_to_react_app#exercises-2-18-2-20)

## 2.18\*: Data for countries, step 1

At https://studies.cs.helsinki.fi/restcountries/ you can find a service that offers a lot of information related to different countries in a so-called machine-readable format via the REST API. Make an application that allows you to view information from different countries.

The user interface is very simple. The country to be shown is found by typing a search query into the search field.

If there are too many (over 10) countries that match the query, then the user is prompted to make their query more specific.

If there are ten or fewer countries, but more than one, then all countries matching the query are shown.

When there is only one country matching the query, then the basic data of the country (eg. capital and area), its flag and the languages spoken are shown.

## 2.19\*: Data for countries, step 2

There is still a lot to do in this part, so don't get stuck on this exercise!

Improve on the application in the previous exercise, such that when the names of multiple countries are shown on the page there is a button next to the name of the country, which when pressed shows the view for that country.

In this exercise, it is also enough that your application works for most countries. Countries whose name appears in the name of another country, like Sudan, can be ignored.

## 2.20\*: Data for countries, step 3

Add to the view showing the data of a single country, the weather report for the capital of that country. There are dozens of providers for weather data. One suggested API is https://openweathermap.org. Note that it might take some minutes until a generated API key is valid.
