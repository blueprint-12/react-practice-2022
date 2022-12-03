import Word from "./Word";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Day() {
  const [wordList, setWordList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/words")
      .then((res) => res.json())
      .then((data) => setWordList(data));
  }, []);

  const { day } = useParams();
  const filteredWordList = wordList.filter(
    (word) => word.day === parseInt(day)
  );

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {filteredWordList.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}

/**
 * REST API
 *
 * Create : POST
 * Read : GET
 * Update : PUT
 * Delete : DELETE
 *
 */
