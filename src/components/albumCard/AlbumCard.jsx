import React from "react";
import folderimg from "../../images/folder.png";
import { useNavigate } from "react-router-dom";

const AlbumCard = ({ data }) => {
  const navigate = useNavigate();

  const handlerouting = (id, title) => {
    navigate(`/gallery/${id}`, { state: { title: title } });
  };

  return (
    <>
      <div className="border-2 border-emerald-200 mt-7 bg-[#2B4865] text-[#F9F5EB]">
        <div className="folder-img    flex justify-center relative  w-full  bottom-8">
          <img
            src={folderimg}
            alt=""
            height="120px"
            width="100px"
            className="z-1"
          />
        </div>
        <div className="folder-details  text-center">
          <h4 className="font-bold ml-4 text-sm capitalize handle-overflow-text ">
            {data.title}
          </h4>
          <div className="ml-4 mt-4 mb-7">
            
            <button
              className=" bg-emerald-400 text-white p-2 rounded-md"
              onClick={() => handlerouting(data.id, data.title)}
            >
              Go to gallery
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlbumCard;
