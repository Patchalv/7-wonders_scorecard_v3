
# 7 Wonders Scoring App
## Introduction
As part of the Codecademy Full-stack Engineering bootcamp I was required to build an application using everything we had learned so far in the frontend section. I was given the task of building an application that would help solve a problem that I, my friends or family might have. 

[7 Wonders](https://www.rprod.com/en/games/7-wonders) is a boardgame which I regularly play with my friends. So much so, that we have run out of the scoresheets that came with the game. For this reason I chose to build a scoring app for the 7 Wonders boardgame that would:

**Minimum**:
- Allow scoring for 3-7 players
- Show the scoring in an easy to use table format.
- On updating any score in a category it would update the total score of that player.
- Be responsive so it can easily be used on a mobile device.

**Ideally:**
- Only show table columns for the number of players actually playing. 
- Add an remove category areas depending on the expansions being played.
- Shows a little symbol beside the 1st, 2nd + 3rd best total scores to show who is winning.

## How I plan to tackle:

I plan to use create-react-app with React and split the project into:
1.  DataByPlayer.js: An array of objects for players 1-7. Each object will hold the individual score for each category area (military, armada, etc.). 

        { 
        playerId: '1',
        name: 'Player 1',
        military: 100,
        armada: 0,
        coins: 0,
        wonders: 0,
        blue: 0,
        yellow: 0,
        green: 0,
        purple: 0,
        boats: 0,
        leaders: 0,
        black: 0,
        total: 0
        }, 
        ...
2. A component that creates an editable JSX table:
	- Each column is a player and each row is a category (e.g. Military)
	- Each cell of the table contains an input that pulls the score from the DataByPlayer.js file (See above).
	- When the number input is changed then it updates number shown in the cell and it updates the players total score. 

3. An options.js component that will have inputs that all users to select:
	- How many players. If, for example, 4 players are chosen then only the first four columns are show for players 1-4.
	- What explansions are being played:
		- If leaders not being played: hide the Leaders Card row.
		- If cities not being played: hide the Cities Card and Armada rows.
 

## Project Requirements:
For this portfolio project I am required to:
  -   Build the application using React and Redux
-   Version control your application with Git and host the repository on GitHub
-   Use a project management tool (GitHub Projects, Trello, etc.) to plan your work
-   Write a README (using Markdown) that documents your project including:
    -   Wireframes
    -   Technologies used
    -   Features
    -   Future work
-   Write unit tests for your components
-   Write end-to-end tests for your application
-   Users can use the application on any device (desktop to mobile)
-   Users can use the application on any modern browser
-   Users can access your application at a URL
    -   This means your application should be hosted online
-   Users are delighted with a cohesive design system
-   Users are delighted with animations and transitions
-   Users are able to leave an error states
    -   Think about bad API calls, network failures. When an event like that happens, your app shouldn’t crash but provide a user a means to get back to a working state (retry button, go back button, etc.)
-   Get 90+ scores on  [Lighthouse](https://web.dev/measure/)
-   OPTIONAL:  [Get a custom domain name and use it for your application](https://www.codecademy.com/courses/make-a-website/lessons/setting-up-your-domain/)
-   OPTIONAL: Set up a CI/CD workflow to automatically deploy your application when the master branch in the repository changes
-   OPTIONAL: Make your application a progressive web app


### Usage
To run locally, first install the dependencies by running the `npm install` command. Then run the command `npm start` to start the development server. This will start the development server and open the application in your default web browser.