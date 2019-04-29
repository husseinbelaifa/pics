import React from "react";

const ImageList = props => {
  // console.log(props.images);

  const images = props.images.map(({ id, urls, description }) => {
    return <img src={urls.regular} key={id} alt={description} />;
  });
  return <div>{images}</div>;
};

export default ImageList;
