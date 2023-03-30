import React from 'react';
import './Card.css';

function Card({title, points, followers, subTitle}) {
  return (
    <div className="leaderboard-card">
      <div className="card-header">
        <h2>{title}</h2>
        <p style={{marginTop: '1rem'}}>{subTitle}</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Level</th>
            <th>Points</th>
            {followers && <th>Followers</th>}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{title}</td>
            <td>Level 1</td>
            <td>{points[0]}</td>
            {followers && <td>{followers[0]}</td>}
          </tr>
          <tr>
            <td>{title}</td>
            <td>Level 2</td>
            <td>{points[1]}</td>
            {followers && <td>{followers[0]}</td>}
          </tr>
          <tr>
            <td>{title}</td>
            <td>Level 3</td>
            <td>{points[2]}</td>
            {followers && <td>{followers[0]}</td>}
          </tr>
          <tr>
            <td>{title}</td>
            <td>Level 4</td>
            <td>{points[3]}</td>
            {followers && <td>{followers[0]}</td>}
          </tr>
          <tr>
            <td>{title}</td>
            <td>Level 5</td>
            <td>{points[4]}</td>
            {followers && <td>{followers[0]}</td>}
          </tr>
          <tr>
            <td>{title}</td>
            <td>Level 6</td>
            <td>{points[5]}</td>
            {followers && <td>{followers[0]}</td>}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Card;
