<p align="left">
<img src="https://github.com/sheisol310/qcfirst/blob/4ed2508cc1d8aface0eac2f31f114a271ece767f/image%20for%20readMe/Queens%20college.png" width=20%>
</p>

## Project Title: Two Player Keyword Pet Matching Generator 

## Web App
[PetMatcher](https://petmatcher.netlify.app/) -> Click and try the app now!

## Demo
<p align="center">
<img src="https://github.com/ryanmohamed/pandagum-client/blob/main/dev%20log/demo.gif?raw=true" width=60%>
</p>

## Developers/Group Members  
- [Parabjot Chander](https://github.com/ParabjotChander)
- [Ryan Mohamed](https://github.com/ryanmohamed)        
- [Ching Kung Lin](https://github.com/sheisol310)  
   
## Project Report
[Report](https://github.com/ryanmohamed/pandagum-client/blob/main/dev%20log/Project%20Report.pdf)

## Project Description (200 - 500 words): 
<p>
The App will be an online 2-user generator for the Ideal Pet, intended for couples & families looking for a pet. Users connect to the server and establish a socket for connection. Upon connection, the user chooses if they’d like a random pair up or wants to enter the specific room with a “room-id.” Upon entering a room id, an enumerated channel is created in which sockets can connect or disconnect. For these purposes, the number of connected sockets to one channel is limited to 2. Otherwise, there will potentially be many random users connecting. The server will incorporate a heartbeat mechanism where every few seconds, it pairs up random users by creating an arbitrary channel. The system will be a client-server architecture that mimics p2p connections, with the room of the server acting as a middleman for the 2 sockets (clients) to communicate and share data.
Once two users are connected via socket to the same channel/room, a user interface is displayed with a question field, form field, and chatroom side panel. The server sets up the two users (clients) with a timer for the keyword entry, the two users will type in as many keywords as they want, and the chat room will be available for the 2 players to communicate with each other (only until the timer runs out). The server emits questions to both the users, where they both enter their desired keywords and emit completion statuses with their sockets. At the end of the timer, the server caches these keywords and uses them for an AI-generated search for an image (images of a pet). Once completed, the server immediately emits the image to the connected users with the socket. 
Still connected, The two users can now simultaneously produce filter events like sharpen blur they’d like applied to the image and see both of their changes made in real-time. 

First, the server receives those keywords and uses AI to generate images and send them back to the users. To get a final pet that is generated for them.
</p>


## Development log
#### a. Dev Tool: 
- [Figma](https://www.figma.com/file/rLMptvCx0YtM4eBay3rlOd/Pet-Macher?node-id=0%3A1)

#### b. Index of Meetings
- [09/26/22 Meeting](#092622-Meeting)
- [10/04/22 Meeting](#100422-Meeting)
- [10/20/22 Meeting](#102022-Meeting)

#### c. Dissussions
#### 092622 Meeting
- Topic: Discussion of UI, To-Do list
<p align="left">
<img src="https://github.com/ryanmohamed/pandagum-client/blob/main/dev%20log/Pet%20Macher.jpg?raw=true", width="50%">
</p>

#### 100422 Meeting
- Topic: More details, ryan&parabjot displays chatroom functions, Gene displays homepage. 
  - [Front-end page display](https://recordit.co/6HyhG17xwj)
  - [chatroom functions display](https://recordit.co/CTO62VWJTc)

#### 102022 Meeting
- Topic: Incorporate Front-end codes into React structure. selection pool. set up Questionnaire. 
  - [Front-end page display after apply React structure](http://g.recordit.co/5k5YDpC5rK.gif)
  - Questionnaire Related Code in Node js: 15 MCQ questions, the user will only be given 10 random ones, the image below shows the code that displays the first question, something to notice is the port number 3000 (relating it to class), the server communciates or sends a reponse to the client/browser through port number 3000. We learned the application layer of the internet has processes, each process has a port number asscociated with, using the port number and the IP addresses of the sender and receiver, messages (application layer packets) will be sent to the proper socket.    
<p align="left">
<img src="https://github.com/ryanmohamed/pandagum-client/blob/main/dev%20log/questionarie.jpeg?raw=true", width="50%">
<img src="https://github.com/ryanmohamed/pandagum-client/blob/main/dev%20log/One%20Random%20Question%20Displayed.png", width="50%">
</p>

