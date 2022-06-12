import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Vienna" />
        <footer>
          <p>
            This project was coded by
            <a
              href="https://thirsty-goldstine-72f798.netlify.app/"
              target="_blank"
              className="footerLink"
              rel="noreferrer"
            >
              {" "}
              Viktoria Schneider{" "}
            </a>{" "}
            and is open-sourced on
            <a
              href="https://github.com/tshefu/react-weather-app-project"
              target="_blank"
              className="footerLink"
              rel="noreferrer"
            >
              {" "}
              GitHub
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
