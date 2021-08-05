import React from "react";
import { Wrapper } from "./Timeline.styles";
import Skeleton from "react-loading-skeleton";
import usePhotos from "../../hooks/use-photos";

const Timeline = () => {
  const { photos } = usePhotos();
  console.log(photos);
  return <Wrapper>TIMELINE</Wrapper>;
};
export default Timeline;
