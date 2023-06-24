import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function Meetup() {
  const onAddMeetupHandler = async (data) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const resData = await response.json();
    console.log(response);
  };
  return <NewMeetupForm onAddMeetup={onAddMeetupHandler} />;
}

export default Meetup;
