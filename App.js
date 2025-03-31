import { useState } from "react";

export default function MatrixGame() {
  const [grid, setGrid] = useState(Array(9).fill("white"));
  const [clickedOrder, setClickedOrder] = useState([]);

  const handleClick = (index) => {
    if (grid[index] === "white") {
      const newGrid = [...grid];
      newGrid[index] = "green";
      setGrid(newGrid);
      setClickedOrder([...clickedOrder, index]);
    }
  };

  const handleLastClick = () => {
    if (clickedOrder.length === 0) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i < clickedOrder.length) {
        setGrid((prevGrid) => {
          const newGrid = [...prevGrid];
          newGrid[clickedOrder[i]] = "orange";
          return newGrid;
        });
        i++;
      } else {
        clearInterval(interval);
      }
    }, 500);
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 100px)", gap: "5px" }}>
      {grid.map((color, index) => (
        <div
          key={index}
          onClick={() =>
            index === 8 ? handleLastClick() : handleClick(index)
          }
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: color,
            border: "1px solid black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
        </div>
      ))}
    </div>
  );
}