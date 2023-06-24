import React from "react";
import MeetupDetails from "../../components/meetups/MeetupDetails";

function MeetupDetail(props) {
  return (
    //  DYNAMICALLY FETCH DATA USING getStaticProps
    <MeetupDetails
      key={props.meetupData.id}
      image={props.meetupData.image}
      title={props.meetupData.title}
      description={props.meetupData.description}
      address={props.meetupData.address}
    />
  );
}

// WE NEED THE getStaticPaths function if we're accessing dynamic routes to pre generate certain pages

export const getStaticPaths = () => {
  return {
    // THE FALLBACK PROPERTY IS TO TELL IF WE WANT A FALLBACK RENDERING
    // IF THERE ARE PATHS THAT AREN'T SPECIFIED
    // SO THAT THE SERVER CAN GENERATE THAT PAGE WHEN THAT PATH IS ENCOUNTERED
    // THIS ALLOWS US TO PRE-GENERATE SOME PAGES WHICH ARE ESSENTIAL AND LOAD OTHERS ON THE FLY

    fallback: true,
    
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {

  
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        id: meetupId,
        image: meetupData.image,
        title: meetupData.title,
        description: meetupData.description,
        address: meetupData.address,
      },
    },
  };
};
export default MeetupDetail;
