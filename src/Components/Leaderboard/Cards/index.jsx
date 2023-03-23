import React from 'react';
import './Card.css';

function Card() {
  return (
    <div className="leaderboard-card">
      <div className="card-header">
        <h2>Contributor</h2>
        <p>To achieve Contributor status you must meet the Points & Follower requirements.</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Level</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Contributor</td>
            <td>Level 1</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Contributor</td>
            <td>Level 2</td>
            <td>500</td>
          </tr>
          <tr>
            <td>Contributor</td>
            <td>Level 3</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>Contributor</td>
            <td>Level 4</td>
            <td>3000</td>
          </tr>
          <tr>
            <td>Contributor</td>
            <td>Level 5</td>
            <td>6000</td>
          </tr>
          <tr>
            <td>Contributor</td>
            <td>Level 6</td>
            <td>10000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Card;
