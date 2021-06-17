import React from "react";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import "./SearchPage.css";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://yestheory.com/wp-content/themes/yes-update/images/yes_theory_blue.png"
        channel="Yes Theory"
        verified
        subs="6.71M"
        noOfVideos={333}
        description="We believe that life's greatest moments and deepest connections exist outside your comfort zone.

      Brand Partnerships: ..."
      />

      <hr />

      <VideoRow
        views="1M"
        subs="6.71M"
        description="HOW WE MAKE OUR VIDEOS Where we find our music: 1- Epidemic Sound. Amazing royalty free music for YouTube."
        timestamp="3 days ago"
        channel="Yes Theory"
        title="Asking Strangers in Elevators to Leave the Country on the Spot!"
        image="https://img.youtube.com/vi/TQcODHmw378/mqdefault.jpg"
      />
      <VideoRow
        views="2.4M"
        subs="6.71M"
        description="I've been fascinated with Chernobyl since the moment I read about it in history class over 10 years ago. A few months ago I had ..."
        timestamp="1 week ago"
        channel="Yes Theory"
        title="50 Hours Inside the Most Radioactive Place On Earth (Exclusion Zone of Chernobyl)"
        image="https://img.youtube.com/vi/ersITE-HiLI/mqdefault.jpg"
      />
      <VideoRow
        views="688K"
        subs="6.71M"
        description="Thanks to Headspace for partnering with us on 100 Days of Meditation 

        Participate in the challenge by posting on instagram using ..."
        timestamp="2 weeks ago"
        channel="Yes Theory"
        title="I Meditated Every Day For 1,000 Days Straight. Here’s What It Did!!"
        image="https://img.youtube.com/vi/8pl8Rai0OWM/mqdefault.jpg"
      />
      <VideoRow
        views="961K"
        subs="6.71M"
        description="Welcome to our Season 2 of 2021! We have 10 episodes coming out with a lot of variety in stories. We are excited to bit by bit start ..."
        timestamp="3 weeks ago"
        channel="Yes Theory"
        title="24 Hours Underground Inside A Giant Gold Mine"
        image="https://img.youtube.com/vi/Uu-u8LEC1ek/mqdefault.jpg"
      />
      <VideoRow
        views="1.4M"
        subs="6.71M"
        description="Thank you to Paw Works Animal Rescue for providing these adorable & adoptable puppies! To learn how to adopt, foster or ..."
        timestamp="2 months ago"
        channel="Yes Theory"
        title="STRANGERS FIND LOVE USING OUR BILLBOARD"
        image="https://img.youtube.com/vi/Y3OM1PfDgMY/mqdefault.jpg"
      />
      <VideoRow
        views="1.1M"
        subs="6.71M"
        description="0:00 - 7:56 Making the billboard 
        7:56 - 11:20 The Big Reveal
        11:21 - 13:00 Secret Giveaway
        
        ✈ Book an Adventure ..."
        timestamp="2 months ago"
        channel="Yes Theory"
        title="I Used A Billboard To Find My Friend A Date (Ultimate Wingman)"
        image="https://img.youtube.com/vi/MeeQLeZU2TE/mqdefault.jpg"
      />
      <VideoRow
        views="2.7M"
        subs="6.71M"
        description="Special thanks to:
        - Sean MacCormac @Seanmaccormac 
        - Jon Devore @jondevore 
        - Romulo da Rocha Rangel Antunes ..."
        timestamp="2 months ago"
        channel="Yes Theory"
        title="I Jumped the World’s Most Extreme Skydive (Near Death Experience)"
        image="https://img.youtube.com/vi/Mvher-mKt1Y/mqdefault.jpg"
      />
    </div>
  );
}

export default SearchPage;
