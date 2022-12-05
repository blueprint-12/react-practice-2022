import { Link } from "react-router-dom";
import useFetch from "./../hooks/useFetch";

export default function DayList() {
  // const [days, setDays] = useState([]);
  const days = useFetch("http://localhost:3001/days");

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
