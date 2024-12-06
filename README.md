# Tennis Score Tracker

Tennis Score Tracker is an application that simulates a tennis match and keeps track of scores and status using official tennis terms like "Love," "Fifteen," "Deuce," and more. The application consists of a **frontend** and a **backend**.

## Functions

- **Retrieve the current game state**: See score and stauts.
- **Update scores**: add points for Player 1 or Player 2.
- **Reset the game**: Reset score and return to the initial state.

---

## Technologies

### Backend

- **Node.js** and **Express** for server handling.
- **REST API** with endpoints to manage the game.
- Data stored in a simple JavaScript object.

### Frontend

- **React.js** for the user interface.
- **Axios** for making API requests to the backend.

---

## Installation och usage

### Prerequisites

- Node.js installed on your computer.
- A package manager like **npm** eller **yarn**.

### Clone Project

```bash
git clone https://github.com/damiantirapegui/tennis-score-table.git
cd tennis-score-tracker
```

---

### Installation for the frontend

Open new terminal

```bash
cd frontend
```

```bash
npm install
```

create **.env** file and add this variable **VITE_API_URL=http://localhost:8000/**

### Installation for the backend

Open another terminal

```bash
cd backend
```

```bash
npm install
```

create **.env** file and add this variable **PORT=8000**

---

# Testing

## Test the application from the frontend

Before testing you'll need to activate the backend server.
**Recomended to have 2 terminals open. One for the frontend och one for the backend.**

### Open terminal for frontend

```bash
cd frontend
```

### Open terminal for backend

```bash
cd backend
```

**Now you can go to your backend terminal and run the server**

```bash
npm run dev
```

Now that the server is activated, then you can go to the frontend terminal and add:

```bash
npm run dev
```

## Test the application from the backend

You can also test the application from the backend side. For this use Postman, insomnia or other testing tool.

### URL and endpoints:

- http://localhost:8000/api
- /game - **Get** gamestatus
- /score - **Post** score to eachplayer
- /reset - Resets the game

## Get Game Status

- Send a **GET** request to this url **http://localhost:8000/api/game**

## Send Score

- Send a **POST** request to this url **http://localhost:8000/api/score**
- In the body you can either send 1 point to Player 1 or Player 2 or you can add a score to both of them.

```body
{
    "player": "player1"
}
```

In this case Player 1 will get one point.

## Reset The Game

- Send a **POST** request to this url **http://localhost:8000/api/reset**
- No need to add anything in the body.
