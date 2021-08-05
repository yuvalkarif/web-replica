import React from "react";
import { Wrapper } from "./Timeline.styles";
import Skeleton from "react-loading-skeleton";
import usePhotos from "../../hooks/use-photos";
import DashPost from "../DashPost";

const Timeline = () => {
  const { photos } = usePhotos();

  return (
    <Wrapper>
      {!photos ? (
        <Skeleton count={4} width={640} height={600} className="skeleton" />
      ) : photos?.length > 0 ? (
        photos.map((content) => (
          <DashPost key={content.docId} content={content} />
        ))
      ) : (
        <p>Follow people to see photos</p>
      )}
    </Wrapper>
  );
};
export default Timeline;
