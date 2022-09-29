import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import PageTitle from "../components/common/PageTitle";
import { fetchPhotos } from "../api/galleryApi";

const PhotoGallery = () => {
  const { id } = useParams();
  const location = useLocation();
  let title= location.state.title

  const [AlbumPhotosData, setAlbumPhotosData] = useState([]);

  useEffect(() => {
    const getAlbumPhotos = async (id) => {
      const response = await fetchPhotos(id);
      setAlbumPhotosData(response);
    };

    id && getAlbumPhotos(id);
  }, [id]);

  return (
    <div className="p-7">
      <PageTitle title={`${title} : Gallery`} goback={true} />

      {AlbumPhotosData.length > 0 ? (
        <ImageList sx={{ width: "100%", height: "100%" }} cols={4}>
          {AlbumPhotosData.map((val, index) => (
            <ImageListItem key={val.id}>
              <img
                src={val.url}
                srcSet={val.url}
                alt={val.title}
                loading="lazy"
              />
              <ImageListItemBar title={val.title} />
            </ImageListItem>
          ))}
        </ImageList>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default PhotoGallery;
