import { formattedFileName } from "./utils/format.js";
import { copyText } from "./utils/copyText.js";
import { useState } from "react";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { solutionState, solutionNoState } from "../index.js";

export default function SearchResult() {
  const [{ fileName, solution }] = useRecoilState(solutionState);
  const solutionNo = useRecoilValue(solutionNoState);
  const setSolutionNo = useSetRecoilState(solutionNoState);
  let [copyMessage, changeCopyMessage] = useState();

  function copyCode(e) {
    const src = e.target.previousElementSibling;
    copyText(src);
    changeCopyMessage((copyMessage = " 📋 클립보드에 복사됨!"));
    setTimeout(() => {
      changeCopyMessage((copyMessage = ""));
    }, 1000);
  }

  function showdifferentSolution(e) {
    if (e.target.innerHTML === "이전 해설" && solutionNo > 0) setSolutionNo((no) => no - 1);
    if (e.target.innerHTML === "다음 해설" && solutionNo < solution.length - 1)
      setSolutionNo((no) => no + 1);
  }

  return (
    <div className="searchResult">
      <div className="solutionNavigator">
        <button className="btnPrevSolution-inactive" onClick={showdifferentSolution}>
          이전 해설
        </button>
        <button className="btnPrevSolution-inactive" onClick={showdifferentSolution}>
          다음 해설
        </button>
      </div>
      <div className="file-title">{formattedFileName(fileName)}</div>
      <div className="wrapCode">
        <pre className="code">{solution[solutionNo]}</pre>
        <button className="btn-copy" onClick={copyCode}>
          코드 복사하기
        </button>
        <span className="isCopied">{copyMessage}</span>
      </div>
    </div>
  );
}
