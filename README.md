# Pomopal 🕑 – Interactive Pomodoro Timer

Pomopal is a fun, web-based Pomodoro timer that helps you stay focused, track tasks, and take regular breaks using the Pomodoro technique. Built with Flask, HTML, CSS, and JavaScript, it features dynamic themes, task management, and customizable work/break intervals.

## 🌟 Features

- ⏰ **Pomodoro Timer** – 25-minute focus sessions by default
- ☕ **Short Break & Long Break** – 5-minute and 15-minute breaks
- 🎨 **Dynamic Overlay Colors** – Background changes by mode:
  - 🔴 Red for work
  - 🔵 Blue for short break
  - 🟢 Green for long break
- 📝 **Task Management** – Add, complete, and clear tasks
- ⚙️ **Custom Timer Settings** – Set your preferred durations
- 🎛️ **Interactive Controls** – Start/Pause, Prev/Next navigation
- 🔔 **Audio Alerts** – Beep sound when timer finishes


## 🚀 Getting Started


1️⃣ **Clone the repository**

```bash
git clone https://github.com/<your-username>/pomopal.git
cd pomopal-flask
2️⃣ Install dependencies

bash
Copy code
pip install flask
3️⃣ Run the app

bash
Copy code
python app.py
4️⃣ Open in browser
Visit: http://127.0.0.1:5000

⚡ How to Use
Switch between Pomodoro, Short Break, and Long Break modes

Click START/PAUSE to control the timer

Use Prev/Next buttons to navigate modes

Manage tasks:

Add new tasks

Mark tasks as complete ✔

Clear finished/all tasks via dropdown menu

Customize durations in Settings (⚙)

💻 Technologies
Backend: Python Flask

Frontend: HTML, CSS, JavaScript

Audio Alerts: Online beep sounds

Static Assets: Background image, CSS, JS

🌱 Future Improvements
Persist tasks and timer progress using localStorage or database

Add mobile-friendly responsive UI

Include progress statistics and charts

Enable multi-user support with authentication