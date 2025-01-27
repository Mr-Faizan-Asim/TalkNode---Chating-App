# TalkNode - A Basic Version of WhatsApp

TalkNode is a simple messaging application built using Node.js and WebSocket for real-time communication. This project replicates basic features of WhatsApp, such as one-on-one messaging, real-time updates, and an intuitive user interface.

## Features

- **Real-time Messaging**: Send and receive messages in real-time using WebSocket.
- **Private Chats**: Only communicate with individuals directly through private chat rooms.
- **User Authentication**: Basic login system to identify users.
- **Message Notifications**: Receive real-time notifications when a new message is received.

## Tech Stack

- **Backend**: Node.js, Express, WebSocket (Socket.io)
- **Frontend**: React
- **Database**: MongoDB

## Setup and Installation

### Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher)

### Install Dependencies

1. Clone the repository:

2. Navigate to the project directory:

3. Install required dependencies:

    ```bash
    npm install
    ```

### Running the Application

1. Start the server:

    ```bash
    npm start
    ```

2. Open the app in your browser at `http://localhost:3000`.

### Usage

- Open the app in two or more browser windows or tabs to simulate multiple users.
- Use the basic authentication to log in and start messaging.
- Messages will appear in real-time in all connected users' chats.

## Future Enhancements

- **Media Support**: Allow users to send images, videos, and text messages.
- **User Profiles**: Users can set a profile picture, display name, and status.
- **Message History**: Implement a database for storing and retrieving message history.

## Contact

For questions or feedback, feel free to reach out at mr.faizan.asim@gmail.com.
