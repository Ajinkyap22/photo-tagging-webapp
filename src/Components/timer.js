import { useEffect, useState } from "react";

function Timer(props) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;

    if (props.start) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
  }, [props.start]);

  return (
    <div className="text-light lead">
      {Math.floor((time / 3600) % 60)
        .toString()
        .padStart(2, "0") +
        ":" +
        Math.floor((time / 60) % 60)
          .toString()
          .padStart(2, "0") +
        ":" +
        Math.floor(time % 60)
          .toString()
          .padStart(2, "0")}
    </div>
  );
}

export default Timer;
