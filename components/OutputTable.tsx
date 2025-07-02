'use client'
export function OutputTable() {
  const sampleData = [
    { mark: 'A1', dia: 'T16', shape: 'L', qty: 12, len: 1.2, weight: 23.1 },
    { mark: 'A2', dia: 'T12', shape: 'U', qty: 8, len: 0.8, weight: 10.2 },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th>Bar Mark</th>
            <th>Dia</th>
            <th>Shape</th>
            <th>Qty</th>
            <th>Length (m)</th>
            <th>Weight (kg)</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((row, i) => (
            <tr key={i} className="text-center border-t">
              <td>{row.mark}</td>
              <td>{row.dia}</td>
              <td>{row.shape}</td>
              <td>{row.qty}</td>
              <td>{row.len}</td>
              <td>{row.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}