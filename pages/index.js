import React from "react";
import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

function Home(props) {
  return (
    <div>
      <MeetupList meetups={props.meetups} />
    </div>
  );
}
// HERE WE DON'T HAVE REVALIDATE PROPERTY AS HERE THE PAGE IS REVALIDATED WITH EACH INCOMING REQUEST
// ALSO IT'S NO GOOD IF OUR RETRIEVED DATA DOESN'T VERY FREQEUENTLY &
// WE DON'T WANT TO ACCESS THE REQUEST PARAMETERS RECEIVED IN CONTEXT

// export const getServerSideProps = async () => {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     }
//   }
// }

// STATIC PROP LOADS DATA & REVALIDATES PAGE only IF REQUESTED PAGE'S REVALIDATION TIMER HAS EXPIRED
// ELSE A CACHED VERSION OF THE PAGE IS RETURNED SAVING ESSENTIAL LOADING TIME...
//  which is also it's main advantage 😁

export const getStaticProps = async () => {
  // FETCH DATA FROM AN API
  const client = await MongoClient.connect(
      "mongodb+srv://jatincodage:06qh6ig4gLjMNgH6@meetupscluster.jeznuld.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db("meetupsApp");
  const collection = db.collection("meetupsData");
  const meetupData = await collection.find().toArray();
  const meetupList=meetupData.map((meetup) => ({
    title: meetup.title,
    image: meetup.image,
    address: meetup.address,
    id: meetup._id.toString(),
  }));
  client.close();
  return {
    props: {
      meetups: meetupList,
    },
    revalidate: 10,
  };
};

export default Home;
