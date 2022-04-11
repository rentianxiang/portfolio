import React, { useState } from "react";
import Tick from "@pqina/flip";
import "@pqina/flip/dist/flip.min.css";
import dayjs from "dayjs";

class Flip extends React.Component {
  constructor (props) {
    super(props);
    this._tickRef = React.createRef();
  }
  componentDidMount() {
    this._tickInstance = Tick.DOM.create(this._tickRef.current, {
      value: this.props.value,
    });
  }
  componentDidUpdate() {
    if (!this._tickInstance) return;
    this._tickInstance.value = this.props.value;
  }
  componentWillUnmount() {
    if (!this._tickInstance) return;
    Tick.DOM.destroy(this._tickRef.current);
  }
  render() {
    return (
      <div ref={this._tickRef} className="tick">
        <div data-repeat="true" aria-hidden="true">
          <span data-view="flip">Tick</span>
        </div>
      </div>
    );
  }
}

const DurationItem = ({ text, value }) => {
  return (
    <div className="flex flex-col items-center w-fit">
      <Flip value={value} />
      <div className="text-xs text-gray-400">{text}</div>
    </div>
  );
};

const CareerDuration = () => {
  dayjs.extend(require("dayjs/plugin/duration"));
  const [years, setYears] = useState("--");
  const [months, setMonths] = useState("--");
  const [days, setDays] = useState("--");
  const [hours, setHours] = useState("--");
  const [minutes, setMinutes] = useState("--");
  const [seconds, setSeconds] = useState("--");
  setInterval(() => {
    const duration = dayjs
      .duration(dayjs().diff(dayjs("2018-12-04")))
      .format("YY-MM-DD-HH-mm-ss")
      .split("-");
    setYears(duration[0]);
    setMonths(duration[1]);
    setDays(duration[2]);
    setHours(duration[3]);
    setMinutes(duration[4]);
    setSeconds(duration[5]);
  }, 1000);
  return (
    <div className="flex flex-col items-center">
      <p className="text-2xl font-light text-gray-500">I have been a developer for</p>
      <div className="mt-2 flex w-fit gap-2">
        <DurationItem text="Years" value={years} />
        <DurationItem text="Months" value={months} />
        <DurationItem text="Days" value={days} />
        <DurationItem text="Hours" value={hours} />
        <DurationItem text="Mins" value={minutes} />
        <DurationItem text="Secs" value={seconds} />
      </div>
    </div>
  );
};

export default CareerDuration;
