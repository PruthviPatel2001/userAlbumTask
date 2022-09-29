import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import { useNavigate } from "react-router-dom";

const PageTitle = ({ title,goback }) => {
  const navigate = useNavigate();

  return (
    <div className="heading flex content-center  mb-4 items-center ">
     { goback && <ArrowBackIcon
        style={{ cursor: "pointer" }}
        onClick={() => navigate(-1)}
        className="mr-4"
      />}
      <h2 className="title font-bold text-3xl capitalize ">{title}</h2>
    </div>
  );
};

export default PageTitle;
