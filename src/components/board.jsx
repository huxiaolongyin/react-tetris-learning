import { shapes } from "../const/block";

// 构建一个数组的方式，采用18*10、数值都为0的数组
const BoardDefault = () => {
  const rows = 18;
  const cols = 10;
  const array = Array.from(Array(rows), () => Array(cols).fill(0)); // map的方式构建数组
  return array; // 返回包含数组的对象
};

// 数组渲染到网页上
const ArrayDisPlay = ({ array }) => {
  const block = shapes['O'];
  return (
    <div>
      {array.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((value, colIndex) => (
            <span
              key={colIndex}
              style={{
                width: "50px",
                height: "50px",
                background: value ? "#FF0000" : "#000000",
              }}
            >
              {value}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

// 更新区域
const setCellValue = (array, row, col, value) => {
  array[row][col] = value;
  return array;
};
export { BoardDefault, ArrayDisPlay, setCellValue };
