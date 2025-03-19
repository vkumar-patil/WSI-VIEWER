import React from "react";

const cellData = [
  { type: "RBC", percentage: 77 },
  { type: "Angled Cells", percentage: 22 },
  { type: "Borderline Cases", percentage: 1 },
  { type: "WBC", percentage: 20 },
  { type: "Neutrophils", percentage: 50 },
  { type: "Eosinophil", percentage: 2 },
  { type: "Basophil", percentage: 1 },
  { type: "Lymphocyte", percentage: 30 },
  { type: "Monocyte", percentage: 17 },
  { type: "Platelets", percentage: 222 },
];

const DetailsPanel = () => {
  return (
    <div
      style={{
        width: "280px",
        padding: "15px",
        border: "1px solid gray",
        background: "#f9f9f9",
        borderRadius: "8px",
      }}
    >
      <h3 style={{ textAlign: "center", marginBottom: "10px" }}>
        Finding Details
      </h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#ddd" }}>
            <th style={{ border: "1px solid gray", padding: "8px" }}>Type</th>
            <th style={{ border: "1px solid gray", padding: "8px" }}>
              Count %
            </th>
          </tr>
        </thead>
        <tbody>
          {cellData.map((cell, index) => (
            <tr key={index} style={{ textAlign: "center" }}>
              <td style={{ border: "1px solid gray", padding: "8px" }}>
                {cell.type}
              </td>
              <td style={{ border: "1px solid gray", padding: "8px" }}>
                {cell.percentage}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ marginTop: "10px", fontSize: "14px", textAlign: "center" }}>
        ⚠️ Possible Diagnosis: <strong>Sickle Cell Anemia</strong>
      </p>
    </div>
  );
};

export default DetailsPanel;
