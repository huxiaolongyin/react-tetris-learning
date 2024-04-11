// 构建一个数组的方式，采用18*10、数值都为0的数组
const BoardDefault = () => {
  const rows = 18;
  const cols = 10;
  const array = Array.from(Array(rows), () => Array(cols).fill(0)); // map的方式构建数组
  return { array }; // 返回包含数组的对象
};

// 数组渲染到网页上
const ArrayDisPlay = (props) => {
  // 解构赋值
  const board=props
  return (
    <div>
      {board.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((value, colIndex) => (
            <span key={colIndex} style={{ margin: "ipx" }}>
              {value}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export { BoardDefault, ArrayDisPlay};
