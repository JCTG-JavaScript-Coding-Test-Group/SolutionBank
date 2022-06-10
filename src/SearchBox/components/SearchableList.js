import { getFileContent, getFileList } from "../utils/api.js";
import { splitCodeToSolutions } from "../utils/format.js";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { solutionState, loadingState } from "../../index.js";

export default function SearchableList() {
  let [fileListHTML, changeState] = useState("");
  const setSolutionInfo = useSetRecoilState(solutionState);
  const setLoadingState = useSetRecoilState(loadingState);

  // TODO: ``부분 수정 필요..
  (async function fillList() {
    const POSSIBLE_LEVELS = [1, 2, 3, 4, 5];
    const fileList = {};
    for (const level of POSSIBLE_LEVELS) {
      fileList[level] = await getFileList(level);
      delete fileList[level][0];
    }
    changeState(
      (fileListHTML = POSSIBLE_LEVELS.map(
        (level) => `
      <ul class= "file-list ${`level-${level}`}">
      <div class="levelTitle">[level ${level}]</div>
        ${fileList[level]
          .map(
            (file) =>
              `<li class="file-list-item ${`${file.name}`}">${file.name
                .slice(0, file.name.length - 3)
                .replaceAll("-", " ")}</li>`
          )
          .join("")}
      </ul>`
      ).join(""))
    );
    setLoadingState(false);
  })();

  async function showResult(e) {
    if (e.target.tagName !== "LI") return;
    const level = e.target.parentNode.classList[1].slice(-1);
    const fileName = e.target.classList[1];
    const solution = splitCodeToSolutions(await getFileContent(level, fileName));
    setSolutionInfo({
      level: level,
      fileName: fileName,
      solution: solution,
    });
  }

  return (
    <div className="searchableList">
      <div
        className="file-list-container"
        onClick={showResult}
        dangerouslySetInnerHTML={{ __html: fileListHTML }}
      ></div>
    </div>
  );
}
