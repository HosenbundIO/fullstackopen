# Part 1
[Exercises 1.1 - 1.2](https://fullstackopen.com/en/part1/introduction_to_react#exercises-1-1-1-2)
[Exercises 1.3 - 1.5](https://fullstackopen.com/en/part1/java_script#exercises-1-3-1-5)


## 1.1: Course Information, step 1
Unfortunately, the entire application is in the same component. Refactor the code so that it consists of three new components: Header, Content, and Total. All data still resides in the App component, which passes the necessary data to each component using props. Header takes care of rendering the name of the course, Content renders the parts and their number of exercises and Total renders the total number of exercises.

Define the new components in the file App.jsx.

## 1.2: Course Information, step 2
Refactor the Content component so that it does not render any names of parts or their number of exercises by itself. Instead, it only renders three Part components of which each renders the name and number of exercises of one part.

## 1.3: Course Information, step 3
Let's move forward to using objects in our application. Modify the variable definitions of the App component as follows and also refactor the application so that it still works

## 1.4: Course Information, step 4
Place the objects into an array. Modify the variable definitions of App into the following form and modify the other parts of the application accordingly

NB at this point you can assume that there are always three items, so there is no need to go through the arrays using loops. We will come back to the topic of rendering components based on items in arrays with a more thorough exploration in the next part of the course.

However, do not pass different objects as separate props from the App component to the components Content and Total. Instead, pass them directly as an array

## 1.5: Course Information, step 5
Let's take the changes one step further. Change the course and its parts into a single JavaScript object. Fix everything that breaks.