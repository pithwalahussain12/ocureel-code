import React from 'react';
import Card from './Cards';
import Instructions from './Instructions'
import ProgressInstruction from './ProgressInstruction'
import theme from '../../assets/leaderboard-faces.png'
import SpectatorCard from './Spectator'
import './style.css';

const Leaderboard = () => {
    return (
        <div className="mt-5 leaderboard">
            <div className="leaderboard__card1">
                <div className="">
                    <h1 className="play__card1__title">Earn Points</h1>
                    <p className='play__card1__text__content'>You earn points for each Ocureel you post! <br /> Each question in the game is worth a different amount of points. The deeper you go, the more points you’ll earn!</p>
                </div>
                <div className=""><img src={theme} alt="" /></div>
            </div>
            <div className="d-flex h-100 w-100">
                <Instructions/>
            </div>



            <div className="leaderboard__card2">
                <div className="">
                    <h1 className="play__card1__title">Status</h1>
                    <p className='leaderboard__card1__text__content'>Everyone on Ocureel starts a SPECTATOR. <br /> As you start contributing to the game & earning points, you can advance to <br /> the next level and become a CONTRIBUTOR. From there you can advance to <br /> a ROLE MODEL, an INFLUENCER & finally a CELEBRITY!</p>
                </div>
                <ProgressInstruction/>
            </div>

            <div className="spectator">
                <SpectatorCard/>
            </div>

            <div className="point__guide__card__group">
                {
                    [1, 2, 3, 4].map(ele=>(
                        <Card/>
                    ))
                }
            </div>
        </div>
    );
}

export default Leaderboard;
