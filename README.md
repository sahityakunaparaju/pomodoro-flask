Pomopal 🕑 – Interactive Pomodoro Timer

Pomopal is a fun, web-based Pomodoro timer that helps you stay focused, track tasks, and take regular breaks using the Pomodoro technique.
Built with Flask, HTML, CSS, and JavaScript, it features dynamic themes, task management, and customizable work/break intervals.

This project also demonstrates CI/CD with Jenkins and containerization with Docker.

🌟 Features

⏰ Pomodoro Timer – 25-minute focus sessions by default

☕ Short & Long Breaks – 5-minute and 15-minute breaks

🎨 Dynamic Overlay Colors

🔴 Red for work

🔵 Blue for short break

🟢 Green for long break

📝 Task Management – Add, complete, and clear tasks

⚙️ Custom Timer Settings – Set your preferred durations

🎛️ Interactive Controls – Start/Pause, Prev/Next navigation

🔔 Audio Alerts – Beep sound when timer finishes

🐳 Docker Support – Run the app in a container

🛠️ Jenkins CI/CD – Automate build and deployment

🚀 Getting Started

1️⃣ Clone the repository

git clone https://github.com/<your-username>/pomopal.git
cd pomopal-flask


2️⃣ Install dependencies

pip install flask


3️⃣ Run the app

python app.py


4️⃣ Open in browser
Visit: http://127.0.0.1:5000

5️⃣ Run with Docker (optional)

docker build -t pomopal .
docker run -p 5000:5000 pomopal


6️⃣ Jenkins CI/CD

The included Jenkinsfile automates testing, building, and deploying your Flask app.

Configure Jenkins with your GitHub repo to run pipelines automatically.

⚡ How to Use

Switch between Pomodoro, Short Break, and Long Break modes

Click START/PAUSE to control the timer

Use Prev/Next buttons to navigate modes

Task Management

Add new tasks

Mark tasks as complete ✔

Clear finished/all tasks via dropdown menu

Settings

Customize durations in Settings (⚙)

💻 Technologies Used

Backend: Python Flask

Frontend: HTML, CSS, JavaScript

Audio Alerts: Online beep sounds

CI/CD: Jenkins pipeline

Containerization: Docker

Static Assets: Background image, CSS, JS

🌱 Future Improvements

Persist tasks and timer progress using localStorage or a database

Add mobile-friendly responsive UI

Include progress statistics and charts

Enable multi-user support with authentication

Add advanced notifications and browser push alerts