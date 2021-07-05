import { useEffect } from "react";

function Timer(props) {
  useEffect(() => {
    let interval;

    if (props.start && !props.win && !props.show) {
      interval = setInterval(() => {
        props.setTime((time) => time + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [props]);

  return (
    <div className="text-light lead">
      {Math.floor((props.time / 3600) % 60)
        .toString()
        .padStart(2, "0") +
        ":" +
        Math.floor((props.time / 60) % 60)
          .toString()
          .padStart(2, "0") +
        ":" +
        Math.floor(props.time % 60)
          .toString()
          .padStart(2, "0")}
    </div>
  );
}

export default Timer;
