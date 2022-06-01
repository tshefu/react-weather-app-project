import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          <p>
            This project was coded by Viktoria Schneider and is{" "}
            <a
              href="https://github.com/tshefu/react-weather-app-project"
              target="_blank"
            >
              open-sourced on GitHub
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
