import React from "react";
import Hero from "../../components/Hero/Hero";
import Events from "../../components/Events/Events";
import HowToCreateEvent from "../../components/LearnHowToCreateEventsOnline/HowToCreateEvent";
import UpComingEvents from "../../components/UpComingEvents/UpComingEvents";
import BrowseByCategory from "../../components/BrowseByCategory/BrowseByCategory";
import BrowseByCause from "../../components/BrowseByCause/BrowseByCause";
import Form from "../../components/SubscribeForm/Form";

function Home() {
  return (
    <>
      <Hero />
      <Events />
      <HowToCreateEvent />
      <UpComingEvents />
      <BrowseByCategory />
      <BrowseByCause />
      <Form />
    </>
  );
}

export default Home;
