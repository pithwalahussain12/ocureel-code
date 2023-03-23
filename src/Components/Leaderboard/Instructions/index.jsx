import React from 'react';
import icon1 from "../../../assets/leaderboard-card-icon1.jpg"
import icon2 from "../../../assets/leaderboard-card-icon2.jpg"
import icon3 from "../../../assets/leaderboard-card-icon3.jpg"
import './Instructions.css';

function CardGroup() {
    const content = [{ heading: "After you’ve posted, viewers can interact with your ocureels to give you points!", icon: icon1, points: ["1 point for each emotion that is tapped", "3 points every time the 💯 is tapped", "1 point for each comment 1 point for every full view", "25 points for each gift you receive"] }, { heading: `You can get more points by interact with someone else's ocureel:`, icon: icon2, points: ["Giving a gift - 25 points each gift", "Taping 1 or more emotion - 1 point per ocureel", "Leaving a comment - 1 point per ocureel", "Taping the 💯- 1 point per ocureel (💯 is Ocureel for “WOW that was some real SH*T!”)", "3 points every time the 💯 is tapped", "1 point for each comment 1 point for every full view"] }, { heading: "You can also refer your friends to come and play Ocureel with you!", icon: icon3, points: ["You’ll earn 100 points for each new user that signs up using your referral code."] }]
    return (
        <div className="card-group">
            {
                content.map(({ heading, icon, points }) => (
                    <div className="instruction__card">
                        <img src={icon} alt="Card image" />
                        <div className="card-body">
                            <h5 className="instruction__card__title">{heading}</h5>
                            <div className="instruction__card__list__group">

                                <ul className="instruction__card__list">
                                    {
                                        points.map(point => (
                                            <li><span className="bullet"></span>{point}</li>
                                        ))
                                    }
                                </ul>

                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default CardGroup;
