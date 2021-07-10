# Mixed Messages

### Codecademy Javascript Syntax Project
### **Author**: Dubpace
### **Twitter**: @TheDubpace

--------------------------
For this project, we were assigned to:

> Build a message generator program. Every time a user runs a program, they should get a new, randomized output. To make your program truly random, the message that it outputs should be made up of at least three different pieces of data.

I created a random celebrity quote generator that utilizes the following three data points:

1. Is the celebrity still alive?
2. Select from a pool of six total celebrities (3 alive, 3 deceased)
3. Finally, display a random quote from the selected celebrity

While accomplishing #1 listed above, I learned a new code snippet that produces a psuedorandom boolean.
```javascript
const alive = Math.random() < 0.5;
```
To accomplish this project I utilized the following technologies:
* Javascript
* node.js
* git

In addition, I took this project as an opportunity to work on my skills using a remote repository on GitHub, as well as writing a well-documented README in markdown as well.

Upon running main.js you should expect an output that looks like the following:
```
Your celebrity quote is from Kanye West, who is still alive today.
"The most genius thing about the way I create is to create with other geniuses."
```
