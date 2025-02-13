# Flag game

Flag game is a game created using html, css and javaScript. Upon pressing the start button you have two parts to the game to complete it and receive your final score. Part one consists of 5 questions one after the other where the a random country and a random flag appear and the user is required to choose true or false in order to go to the next question.
Part two is very similar but instead of a country as an option the capital city of the country is required. Upon the user answering 5 questions of each part his/her final score appears along with a play again button.

![website preview on all different screen sizes](/assets/images/am_i_responsive.png)

## Features

### Existing Features

- __The header__

 - The header contains the title of the game.
 - A short description of the game.
 - A start button that initiates the starting of the game.

 ![Game header screenshot](/assets/images/game_header_screenshot.png)


- __The Game Area__

 - This section will allow the user to test his knowledge of national flags.
 - In part one the user is required consecutively compare from the flag and country that appears and choose true or false.
 - In part two the flag appears with a capital city and the user again must choose true or false.
 - Upon pressing the start button game two is hidden along with the final score area using functions in JavaScript and upon completion of game one game two will appear and game one is hidden. Once both games are completed they are both hidden and the final score area appears.
 - There is a total of 5 questions on each part for the completion of the game.
 - The individual scores appear at the time separately for both games under the flags.

  ![Game area screenshot](/assets/images/game_area_screenshot.png)

 - __The Final Score Area__

 - This area appears upon the completion of both parts of the game.
 - It consists of the total score of the two games.
 - A play again button which restarts the game.
 - This section disappears again upon the game restarting.

 ![Final score area screenshot](/assets/images/final_score_area.png)

 - __The Footer__

 - This area is also the final score area.
 - Initially when the game loads however and before the start button is pressed it consists of a title that shows that this is where the final score will be displayed along with instructions on how many answers are required to acheive the final score.

 ![Footer area screenshot](/assets/images/footer_screenshot.png)

 ### Features Left to Implement

 - Addition of more flags and countries.

 ## Testing

 When I copied and pasted my index.html and script.js from another file which i'd written the latter part of my code accidentally many arrors appeared with closing tags.
This issue initiated mainly with the confusion of the migration of the ide to vs code and the many tabs and windows I had opened at the time trying to figure out how to do the migration mid-project.
This issue was resolved after checking the code and amending the missing attributes.

### Validator Testing 

- HTML
 - No errors were returned when passing through the official W3C validator
 - The warnings that appear in the screenshot are only because within those heading sections is where the random country and capital city appears upon initiation of the games.
 ![W3C Validator html](/assets/images/html_checker.png)
- CSS
 - No errors were found when passing through the official Jigsaw validator.
 - ![W3C CSS validator screenshot](/assets/images/css_validator.png)
- JavaScript
 - No errors were found when passing through the official Jshint validator
 - The following metrics were returned:
  - There are 17 functions in this file.
  - Function with the largest signature takes 1 argument, while the median is 0.
  - Largest function has 7 statements in it, while the median is 4.
  - The most complex function has a cyclomatic complexity value of 2 while the median is 1. 
 - ![JavaScript validator jshint screenshot](/assets/images/java_validator.png) 


 ### Unfixed Bugs
 - There are no unfixed bugs.

 ## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows.
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://achristoforou1.github.io/flag-game/

## Credits 

 ### Content 

 - The code to genrate the random functions and conditional logic along with event listeners was assissted by my mentor, tutor support, research on google, slack overflow and youtube videos.
- The code for the game was also taken in part from the CI Love Maths project.
- Bootstrap was used for the game buttons.

### Media

- The images in the game area of the flags were taken from Wikipedia.