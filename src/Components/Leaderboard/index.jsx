import React from 'react';
import Card from './Cards';
import Instructions from './Instructions'
import ProgressInstruction from './ProgressInstruction'
import theme from '../../assets/leaderboard-faces.png'
import SpectatorCard from './Spectator'
import graph from "../../assets/leaderboard-graph.jpg"
import './style.css';

const Leaderboard = () => {
    const data = [{title: "Contributor", points: [50, 500, 1000, 3000, 6000, 10000]}, {title: "Role Model", points: [10000, 20000, 30000, 40000, 50000, 60000], followers: [1000, 2000, 3000, 4000, 5000, 6000]}, {title: "Influencer", points: [100000, 250000, 50000, 1000000, 2500000, 5000000], followers: [10000, 25000, 50000, 100000, 250000, 500000]}, {title: "Celebrity", points: [10000000, 50000000, 100000000, 250000000, 500000000, 1000000000], followers: [1000000, 5000000, 10000000, 25000000, 50000000, 100000000]}]
    return (
        <div className="mt-5 leaderboard">
            <div className="leaderboard__card1">
                <div className="leaderboard__card1__text">
                    <h1 className="play__card1__title">Earn Points</h1>
                    <p className='play__card1__text__content'>You earn points for each Ocureel you post! <br /> Each question in the game is worth a different amount of points. The deeper you go, the more points you’ll earn!</p>
                </div>
                <div className="leaderboard__smilies"><img src={theme} alt="" /></div>
            </div>
            <div className="d-flex instruction__card__container">
                <Instructions/>
            </div>



            <div className="leaderboard__card2">
                <div className="">
                    <h1 className="play__card1__title">Status</h1>
                    <p className='leaderboard__card1__text__content'>Everyone on Ocureel starts a SPECTATOR. <br /> As you start contributing to the game & earning points, you can advance to <br /> the next level and become a CONTRIBUTOR. From there you can advance to <br /> a ROLE MODEL, an INFLUENCER & finally a CELEBRITY!</p>
                </div>
                <img src={graph} alt="" width="100%"/>
            </div>

            <div className="spectator">
                <SpectatorCard/>
            </div>

            <div className="point__guide__card__group">
                {
                    data.map(ele=>(
                        <Card title={ele.title} points={ele.points} followers={ele.followers}/>
                    ))
                }
            </div>
        </div>
    );
}

export default Leaderboard;
