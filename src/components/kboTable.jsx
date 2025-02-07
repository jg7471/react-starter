import React, { useState } from "react";

const KboTable = () => {
  // KBO 순위 데이터 (초기 값)
  const initialData = [
    ["순위", "팀명", "경기", "승", "패", "무", "승률", "게임차", "최근10경기", "연속", "홈", "방문"],
    [1, "KIA", 144, 87, 55, 2, 0.613, 0, "5승0무5패", "2승", "42-1-30", "45-1-25"],
    [2, "삼성", 144, 78, 64, 2, 0.549, 9, "3승0무7패", "1패", "41-0-32", "37-2-32"],
    [3, "LG", 144, 76, 66, 2, 0.535, 11, "7승0무3패", "2승", "39-1-33", "37-1-33"],
    [4, "두산", 144, 74, 68, 2, 0.521, 13, "8승0무2패", "4승", "39-1-31", "35-1-37"],
    [5, "KT", 144, 72, 70, 2, 0.507, 15, "5승0무5패", "3승", "34-1-36", "38-1-34"],
    [6, "SSG", 144, 72, 70, 2, 0.507, 15, "8승0무2패", "4승", "35-1-35", "37-1-35"],
    [7, "롯데", 144, 66, 74, 4, 0.471, 20, "4승0무6패", "1승", "37-3-31", "29-1-43"],
    [8, "한화", 144, 66, 76, 2, 0.465, 21, "5승0무5패", "2패", "30-2-39", "36-0-37"],
    [9, "NC", 144, 61, 81, 2, 0.430, 26, "2승0무8패", "2패", "34-0-39", "27-2-42"],
    [10, "키움", 144, 58, 86, 0, 0.403, 30, "1승0무9패", "5패", "32-0-41", "26-0-45"],
  ];

  // kboData 상태 설정
  const [kboData, setKboData] = useState(initialData);
  const [sortOrderWins, setSortOrderWins] = useState("asc"); // "asc" 또는 "desc"
  const [sortOrderLosses, setSortOrderLosses] = useState("asc");

  // 순위에 따라 팀 스타일 적용
  const getRowStyle = (rowIndex) => {
    if (rowIndex === 0) {
      return {
        backgroundColor: "#ddd",
        fontWeight: "bold",
        color: "black",
      };
    } else if (rowIndex <= 5) {
      // 1위~5위 팀 스타일
      return {
        backgroundColor: "green",
        fontWeight: "normal",
        color: "gold",
      };
    } else if (rowIndex >= 6 && rowIndex <= 10) {
      // 6위~10위 팀 스타일
      return {
        backgroundColor: "lightgray",
        fontWeight: "normal",
        color: "black",
      };
    }
    return {}; // 기본 스타일
  };

  // "승" (wins) 열로 정렬하는 함수
  const sortByWins = () => {
    const sortedData = [...kboData].slice(1).sort((a, b) => {
      return sortOrderWins === "asc"
        ? a[3] - b[3] // 승 오름차순 정렬
        : b[3] - a[3]; // 승 내림차순 정렬
    });

    setSortOrderWins(sortOrderWins === "asc" ? "desc" : "asc");
    setKboData([kboData[0], ...sortedData]); // 데이터 업데이트 (헤더를 첫 번째로 두고 정렬된 데이터 추가)
  };

  // "패" (losses) 열로 정렬하는 함수
  const sortByLosses = () => {
    const sortedData = [...kboData].slice(1).sort((a, b) => {
      return sortOrderLosses === "asc"
        ? a[4] - b[4] // 패 오름차순 정렬
        : b[4] - a[4]; // 패 내림차순 정렬
    });

    setSortOrderLosses(sortOrderLosses === "asc" ? "desc" : "asc");
    setKboData([kboData[0], ...sortedData]); // 데이터 업데이트 (헤더를 첫 번째로 두고 정렬된 데이터 추가)
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", background: "white"}}>
      <table
        border="1"
        style={{
          borderCollapse: "collapse",
          width: "100%",
          textAlign: "center",
          color: "black",
        }}
      >
        <thead>
          <tr>
            <th>순위</th>
            <th>팀명</th>
            <th>경기</th>
            <th>
              승{""}
              <span
                style={{ cursor: "pointer", color: sortOrderWins === "asc" ? "red" : "blue"  }}
                onClick={sortByWins}
              >
                {sortOrderWins === "asc" ? "↑" : "↓"}
              </span>
            </th>
            <th>
              패{""}
              <span
                style={{ cursor: "pointer", color: sortOrderLosses === "asc" ? "red" : "blue" }}
                onClick={sortByLosses}
              >
                {sortOrderLosses === "asc" ? "↑" : "↓"}
              </span>
            </th>
            <th>무</th>
            <th>승률</th>
            <th>게임차</th>
            <th>최근10경기</th>
            <th>연속</th>
            <th>홈</th>
            <th>방문</th>
          </tr>
        </thead>
        <tbody>
          {kboData.slice(1).map((row, rowIndex) => {
            const rowStyle = getRowStyle(rowIndex + 1); // 팀 스타일 적용

            return (
              <tr key={rowIndex} style={rowStyle}>
                {row.map((cell, colIndex) => (
                  <td
                    key={colIndex}
                    style={{
                      padding: "10px",
                    }}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default KboTable;
