import { useEffect, useState } from "react";

function Nav(props) {
  const [time, setTime] = useState({ hour: 0, minute: 0, secs: 0 });

  function updateTime() {
    setInterval(() => {
      if (time.secs === 60) {
        const newTime = {
          hour: time.hour,
          minute: time.minute + 1,
          secs: 0,
        };

        setTime(newTime);
      }

      if (time.minute === 60) {
        const newTime = {
          hour: time.hour + 1,
          minute: 0,
          secs: 0,
        };

        setTime(newTime);
      }

      setTime({ hour: time.hour, minute: time.minute, secs: (time.secs += 1) });
    }, 1000);
  }

  useEffect(() => updateTime, []);

  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark py-3 fixed-top">
      <div className="container">
        <h2 className="navbar-brand">Find The Character</h2>
        <h2 className="navbar-brand">
          {time.hour.toString().padStart(2, "0") +
            ":" +
            time.minute.toString().padStart(2, "0") +
            ":" +
            time.secs.toString().padStart(2, "0")}
        </h2>
        <button className="btn btn-light" onClick={props.displayModal}>
          Characters
        </button>
      </div>
    </nav>
  );
}

export default Nav;
