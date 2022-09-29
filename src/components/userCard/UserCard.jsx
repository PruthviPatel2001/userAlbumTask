import { Avatar, Box, Card, CardContent } from "@mui/material";

import React from "react";
import { useNavigate } from "react-router-dom";
import userImg from "../../images/user.png";

const UserCard = ({ data }) => {
  const navigate = useNavigate();

  const handlerouting = (id, data) => {
    navigate(`/album/${id}`, { state: { name: data } });
  };
  return (
    <div>
      <Card sx={{ display: "flex" }} style={{backgroundColor:'#2B4865',color:'#F9F5EB'}}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <div className="flex">
              <Avatar alt="Remy Sharp" src={userImg} />
              <div className="w-full">
                <h4 className="ml-3 font-bold text-white handle-overflow-text">
                  {data.name}
                </h4>
                <h6 className="ml-3 text-sm   handle-overflow-text">
                  UserName : {data.username}
                </h6>
              </div>
            </div>

            <div className="mt-4 w-96">
              <h2 className="font-bold underline">Details</h2>

              <h4 className="text-sm  handle-overflow-text mt-2">
                {" "}
                <span className="font-bold">Email : </span>
                {data.email}
              </h4>
              <h4 className="text-sm mt-1">
                {" "}
                <span className="font-bold">Contact :</span> {data.phone}
              </h4>
              <div className="mt-4">
                <button
                  className=" bg-emerald-400 text-white p-2 rounded-md"
                  onClick={() => handlerouting(data.id, data.name)}
                >
                  Go to Album
                </button>
              </div>
            </div>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
};

export default UserCard;
