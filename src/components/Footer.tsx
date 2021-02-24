import React, { FC } from "react";
import "../styles/Footer.css";

interface IFooterProps {
  filterStatus: string;
  setFilterStatus: (status: string) => void;
  itemLeft: number;
}

const Footer: FC<IFooterProps> = ({
  filterStatus,
  setFilterStatus,
  itemLeft,
}) => {
  return (
    <div className="d-flex space-between mt-10">
      <div className="item-left d-flex align-center">{itemLeft} items left</div>
      <div className="d-flex space-between filter-button-container">
        <button
          className={`filter-button d-flex align-center
          ${filterStatus === "All" && "button-activate"} `}
          onClick={() => {
            setFilterStatus("All");
          }}
        >
          All
        </button>
        <button
          className={`filter-button d-flex align-center
        ${filterStatus === "Activated" && "button-activate"}
        `}
          onClick={() => {
            setFilterStatus("Activated");
          }}
        >
          Activated
        </button>
        <button
          className={`filter-button d-flex align-center
          ${filterStatus === "Completed" && "button-activate"} `}
          onClick={() => {
            setFilterStatus("Completed");
          }}
        >
          Completed
        </button>
      </div>
    </div>
  );
};
export default Footer;
