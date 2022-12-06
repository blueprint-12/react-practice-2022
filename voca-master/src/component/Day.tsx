import Word, { IWord } from "./Word";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

//<T> 제네릭, 어떤 타입을 사용할 지 파라미터를 받아서 사용할 수 있다.
export default function Day() {
  const { day } = useParams<{ day: string }>();
  const wordList: IWord[] = useFetch(`http://localhost:3001/words?day=${day}`);

  //파라미터 아이디로 filter 사용없이 데이터 가져오기 가능
  // const filteredWordList = wordList.filter(
  //   (word) => word.day === parseInt(day)
  // );

  return (
    <>
      <h2>Day {day}</h2>
      {wordList === undefined && <span>Loading...</span>}
      {wordList.length === 0 && <p> 아직 등록된 단어가 없네요... 🕵️‍♀️</p>}
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
