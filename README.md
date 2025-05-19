📱 Habit Tracker – Build Good Habits, Break Bad Ones!
Track your daily and weekly habits with this simple and effective habit tracking mobile app. Built using React Native CLI, TypeScript, and AsyncStorage, the app helps users stay accountable and visualize their progress over time — even offline.

📌 Features
✅ Core Functionality:
User Registration/Login (Local Only)

Save user info in AsyncStorage

Auto-login if user data exists

Create Habit

Add habits with name and frequency (Daily/Weekly)

Habit List

View all habits

Mark habits as completed for the day

Filter habits: All / Today's / Completed

Progress Tracker

Track percentage of habits completed today

(Optional) Weekly progress view

Logout

Clear data and return to Login screen

✨ Bonus Features (Optional):
Calendar view for habit streaks

Animations for completed habits

Light/Dark Mode

Offline support

🧑‍💻 Tech Stack
Tool / Library	Description
React Native CLI	Mobile App Development Framework
TypeScript	Strong typing for safety & clarity
React Navigation	Stack + Tab Navigators
AsyncStorage	Persistent local data storage
useContext (Bonus)	Global state management

🗂 Folder Structure
bash
Copy
Edit
HabitTrackerApp/
├── src/
│   ├── components/        # Reusable components (buttons, habit cards, etc.)
│   ├── screens/           # All screen components (Login, Home, Progress)
│   ├── services/          # AsyncStorage services
│   ├── navigation/        # Stack and Tab navigation setup
│   ├── context/           # Context for user & habit state (optional)
│   └── utils/             # Utility functions/helpers
├── App.tsx
├── package.json
└── README.md
🛠 Setup Instructions
Clone the Repository:

bash

git clone https://github.com/your-username/habit-tracker-app.git
cd habit-tracker-app
Install Dependencies:

bash

npm install
Run the App on Android:

bash

npx react-native run-android
Run the App on iOS (Mac only):

bash

npx react-native run-ios
⚠ Make sure your Android emulator or iOS simulator is running.

 
