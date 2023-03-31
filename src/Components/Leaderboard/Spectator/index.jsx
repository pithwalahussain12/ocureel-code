import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="spectator-card">
      <div className="spectator-card-header">
        <h2 className="spectator-card-title">Spectator</h2>
        <p className="spectator-card-subtitle">
          Start as a SPECTATOR and advance to a contributor as soon as you earn
          50 points!
        </p>
      </div>
      <table className="spectator-card-table">
        <tbody>
          <tr>
            <td>Status</td>
            <td className="spectator-table-head2">Level</td>
          </tr>
          <tr>
            <td>Spectator</td>
            <td className="spectator-table-head2">Level 1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Card;
