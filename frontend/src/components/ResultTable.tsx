import React from 'react';

interface Result {
  name: string;
  score: number;
  good_points: string[];
  bad_points: string[];
}

const ResultTable: React.FC<{ data: Result[] }> = ({ data }) => {
  const sorted = [...data].sort((a, b) => b.score - a.score);

  return (
    <div className="results">
      {sorted.map((res, i) => (
        <div key={i} className="card">
          <h3>{res.name} - Score: {res.score}</h3>
          <p><strong>Good Points:</strong></p>
          <ul>{res.good_points.map((g, i) => <li key={i}>{g}</li>)}</ul>
          <p><strong>Bad Points:</strong></p>
          <ul>{res.bad_points.map((b, i) => <li key={i}>{b}</li>)}</ul>
        </div>
      ))}
    </div>
  );
};

export default ResultTable;
