import { useEffect, useState } from "react";

const JsonTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/output.json") // Ensure output.json is in the public folder
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  if (data.length === 0) {
    return <p>Loading...</p>;
  }

  // Extract column headers dynamically
  const columns = Object.keys(data[0]);

  return (
    <div className="container">
      <h2>JSON Data Table</h2>
      <table border="1">
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col, colIndex) => (
                <td key={colIndex}>{row[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JsonTable;
