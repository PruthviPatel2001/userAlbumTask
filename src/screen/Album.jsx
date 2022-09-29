import React, { useEffect, useState } from "react";

import AlbumCard from "../components/albumCard/AlbumCard";
import { Grid } from "@mui/material";
import PageTitle from "../components/common/PageTitle";
import { fetchAlbums } from "../api/albumApi";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

const Album = (props) => {
  const { id } = useParams();
  const [AlbumData, setAlbumData] = useState([]);
  const location = useLocation();
  let userName = location.state.name;

  useEffect(() => {
    const getUserAlbum = async (id) => {
      try {
        const response = await fetchAlbums(id);
        setAlbumData(response);
      } catch (error) {
        console.log(error);
      }
    };

    id && getUserAlbum(id);
  }, [id]);

  return (
    <div className="p-7">
      <PageTitle title={`${userName} : Albums`} goback={true} />
      {AlbumData.length > 0 ? (
        <Grid container spacing={2} className="mt-4">
          {AlbumData.map((val, index) => {
            return (
              <Grid key={index} item md={3} lg={3} sm={6} xs={12}>
                <AlbumCard data={val} />
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Album;
