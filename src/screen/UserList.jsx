import React, { useEffect, useState } from "react";

import { Grid } from "@mui/material";
import PageTitle from "../components/common/PageTitle";
import UserCard from "../components/userCard/UserCard";
import { fetchUser } from "../api/userApi";

const UserList = () => {
  const [UserData, setUserData] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await fetchUser();
        setUserData(response);
      } catch (error) {
        console.log(error);
      }
    };

    getUserData();
  }, []);

  return (
    <>
      <div className="p-7">
        <div className="mt-4">
          <PageTitle title="Current Users" goback={false} />
        </div>

        {UserData.length > 0 ? (
          <Grid container spacing={2}>
            {UserData.map((val, index) => {
              return (
                <Grid key={index} item md={3} lg={3} sm={12} xs={12}>
                  <UserCard data={val} />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </>
  );
};

export default UserList;
