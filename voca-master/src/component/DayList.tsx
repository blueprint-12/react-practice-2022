import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export interface IDay {
  day: number;
  id: number;
}

export default function DayList() {
  const days: IDay[] = useFetch("http://localhost:3001/days");

  if (days.length === 0) {
    return <span>Loading...</span>;
  }

  return (
    <ul className="list_day">
      {days.map((aDay) => (
        <li key={aDay.id}>
          <Link to={`/day/${aDay.day}`}>Day {aDay.day}</Link>
        </li>
      ))}
    </ul>
  );
}
