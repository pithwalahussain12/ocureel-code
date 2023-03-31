import React from 'react'
import VideoPlayer from './VideoPlayer'
import "./style.css"

const Index = () => {
  const videoId = [
  { id: "804736385", cardTitle: "What is something bad you've experienced, that actually turned out to be for the best?" },
  { id: "804744289", cardTitle: "What has been the hardest relationship you've lost or had to mourn losing?" },
  { id: "804735441", cardTitle: "Random Acts of Kindness" },
  { id: "804736156", cardTitle: "Have you ever been or felt abandoned?" },
  { id: "804747089", cardTitle: "At what point in your life have you felt most alone?" },
  { id: "804746770", cardTitle: "Have you ever felt unconditional love and where did it come from?" },
  { id: "804755082", cardTitle: "What are you most proud of that you accomplished this year?" },
  { id: "804748930", cardTitle: "What is one thing you've tried to make sure no one knows about you?" },
  { id: "804753282", cardTitle: "Were you abandoned by your parents? Was it physically or emotionally?" },
  { id: "804755366", cardTitle: "What is something bad you've experienced, that actually turned out to be for the best?" },
  { id: "804748707", cardTitle: "A random question at a random time every day!", cardHead: "Ocureel Daily Challenge!"},
  { id: "804757684", cardTitle: "NO FILTERS! NO HATE! ONLY POSITIVITY!", cardHead: "Ocureel Reveal"}]
  return (
    <div className='get__inspired'>
      <div className="caption">
        <h1>GET INSPIRED!</h1>
        <p>Get Inspired! Watch other people who have played the game before you take the leap! Our mission is to create an online community that celebrates honesty, authenticity, and positivity. </p>
        <p>We invite everyone to join us in this mission and see for themselves just how rewarding <br /> it can be to be SEEN and ACCEPTED for who you really are. </p>
      </div>



      <div className='grid-container '>

        {
          videoId.map(({ id, cardTitle, cardHead}, index) => (
            <VideoPlayer videoId={id} cardTitle={cardTitle} place={index} head={cardHead && cardHead}/>
          ))
        }

      </div>
    </div>
  )
}

export default Index