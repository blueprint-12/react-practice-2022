import Word from "./Word";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Day() {
  const { day } = useParams();
  const wordList = useFetch(`http://localhost:3001/words?day=${day}`);

  //파라미터 아이디로 filter 사용없이 데이터 가져오기 가능
  // const filteredWordList = wordList.filter(
  //   (word) => word.day === parseInt(day)
  // );

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {wordList.map((word) => (
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
