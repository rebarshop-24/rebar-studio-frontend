export default function Table({ data }) {
  return (
    <table className="table-auto w-full border border-gray-200">
      <thead>
        <tr className="bg-gray-100">
          <th>Mark</th><th>Dia</th><th>Shape</th><th>Qty</th><th>Len</th><th>Weight</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx}>
            <td>{row.mark}</td><td>{row.dia}</td><td>{row.shape}</td>
            <td>{row.qty}</td><td>{row.len}</td><td>{row.weight}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}