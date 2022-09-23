import React from "react";
import Hero from "../../components/Hero/Hero";
import Events from "../../components/Events/Events";
import HowToCreateEvent from "../../components/LearnHowToCreateEventsOnline/HowToCreateEvent";
import UpComingEvents from "../../components/UpComingEvents/UpComingEvents";

function Home() {
  return (
    <>
      <Hero />
      <Events />
      <HowToCreateEvent />
      <UpComingEvents />
    </>
  );
}

export default Home;
