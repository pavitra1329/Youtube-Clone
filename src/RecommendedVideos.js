import React from 'react';
import "./RecommendedVideos.css";
import VideoCard from './VideoCard.js';


function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard 
        title ="A Day in my Life!!"
        views="2.9M views"
        timestamp="4 days ago"
        channelImage="https://i.ibb.co/3M3cW1n/Whats-App-Image-2024-11-23-at-3-18-14-PM-1.jpg"
        channel="Pavitra Dasari"
        image="https://i.ibb.co/VSxRRMP/1600w-e-Dc-DDOt8-BU.webp"/>


        <VideoCard
        title="Life as a Full Stack Developer"
        views="13M views"
        timestamp="1 year ago"
        channelImage="https://i.ibb.co/RhnD0C5/Whats-App-Image-2024-11-23-at-3-18-14-PM.jpg"
        channel="Pavitra Dasari"
        image="https://i.ibb.co/10QnBF9/1-Sz-N6u2-U98-S4-Ryh-Wo-Wya-HQ.png" />


        <VideoCard 
        title="Trip to my Dream Place - NORTHERN LIGHTS"
        views="900k views"
        timestamp="10 days ago"
        channelImage="https://i.ibb.co/3M3cW1n/Whats-App-Image-2024-11-23-at-3-18-14-PM-1.jpg"
        channel="Pavitra Dasari"
        image="https://i.ibb.co/rsP0PvG/hq720.jpg" />


        <VideoCard
        title="Exploring Street Foods of Mumbai"
        views="200k views"
        timestamp="1 day ago"
        channelImage="https://i.ibb.co/RhnD0C5/Whats-App-Image-2024-11-23-at-3-18-14-PM.jpg"
        channel="Pavitra Dasari"
        image="https://i.ibb.co/ZW7KyVT/348c56a8-2376-460e-9c96-6d818f8a254c-640.jpg" />


        <VideoCard 
        title="Trip to my Dream Place - NORTHERN LIGHTS"
        views="900k views"
        timestamp="10 days ago"
        channelImage="https://i.ibb.co/3M3cW1n/Whats-App-Image-2024-11-23-at-3-18-14-PM-1.jpg"
        channel="Pavitra Dasari"
        image="https://i.ibb.co/rsP0PvG/hq720.jpg" />

        <VideoCard 
        title="Exploring Street Foods of Mumbai"
        views="200k views"
        timestamp="1 day ago"
        channelImage="https://i.ibb.co/RhnD0C5/Whats-App-Image-2024-11-23-at-3-18-14-PM.jpg"
        channel="Pavitra Dasari"
        image="https://i.ibb.co/ZW7KyVT/348c56a8-2376-460e-9c96-6d818f8a254c-640.jpg" />

        <VideoCard
        title ="A Day in my Life!!"
        views="2.9M views"
        timestamp="4 days ago"
        channelImage="https://i.ibb.co/3M3cW1n/Whats-App-Image-2024-11-23-at-3-18-14-PM-1.jpg"
        channel="Pavitra Dasari"
        image="https://i.ibb.co/VSxRRMP/1600w-e-Dc-DDOt8-BU.webp"/> 

        <VideoCard 
        title="Life as a Full Stack Developer"
        views="13M views"
        timestamp="1 year ago"
        channelImage="https://i.ibb.co/RhnD0C5/Whats-App-Image-2024-11-23-at-3-18-14-PM.jpg"
        channel="Pavitra Dasari"
        image="https://i.ibb.co/10QnBF9/1-Sz-N6u2-U98-S4-Ryh-Wo-Wya-HQ.png" />


        <VideoCard
        title ="A Day in my Life!!"
        views="2.9M views"
        timestamp="4 days ago"
        channelImage="https://i.ibb.co/3M3cW1n/Whats-App-Image-2024-11-23-at-3-18-14-PM-1.jpg"
        channel="Pavitra Dasari"
        image="https://i.ibb.co/VSxRRMP/1600w-e-Dc-DDOt8-BU.webp" />

      </div>
    </div>
  );
}

export default RecommendedVideos;