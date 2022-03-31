import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudSunRain,
  faList,
  faDroplet,
  faEarthEurope,
} from "@fortawesome/free-solid-svg-icons";
import { updateObjState } from "../helper-functions";
import StyledFilterForm from "./styled-components/StyledFilter";
import StyledButton from "./styled-components/StyledButton";

export default function ConditionFilters({
  organic,
  setOrganic,
  setOpenPollinated,
  setHybrid,
  setSunny,
  setShady,
  setHumid,
  setDry,
  setLotsOfWater,
  setClay,
  setDrained,
  setChalkey,
  setPeaty,
  setSandy,
}) {
  const [openCat, setCatOpen] = React.useState(false);
  const [openClimate, setClimateOpen] = React.useState(false);
  const [openSoil, setSoilOpen] = React.useState(false);
  const [openWater, setWaterOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(false);

  return (
    <div className="filter-box">
      <div className="filter-icon-bar">
        <button
          onClick={() => {
            setCatOpen(!openCat);
            setClimateOpen(false);
            setWaterOpen(false);
            setSoilOpen(false);
          }}
        >
          <FontAwesomeIcon className="filter-icon" icon={faList} />
        </button>
        <button
          onClick={() => {
            setClimateOpen(!openClimate);
            setCatOpen(false);
            setWaterOpen(false);
            setSoilOpen(false);
          }}
        >
          <FontAwesomeIcon className="filter-icon" icon={faCloudSunRain} />
        </button>
        <button
          onClick={() => {
            console.log("water clicked", openWater);
            setWaterOpen(!openWater);
            setCatOpen(false);
            setClimateOpen(false);
            setSoilOpen(false);
          }}
        >
          <FontAwesomeIcon className="filter-icon" icon={faDroplet} />
        </button>
        <button
          onClick={() => {
            console.log("water clicked", openSoil);
            setSoilOpen(!openSoil);
            setCatOpen(false);
            setClimateOpen(false);
            setWaterOpen(false);
          }}
        >
          <FontAwesomeIcon className="filter-icon" icon={faEarthEurope} />
        </button>
        <StyledButton
          onClick={() => {
            setOrganic(false);
          }}
        >
          Clear filters
        </StyledButton>
      </div>
      <div className="type-filter cond-filter">
        <StyledFilterForm open={openCat}>
          <div className="box">
            <input
              type="checkbox"
              id="type"
              value="organic"
              name="type"
              checked={organic}
              onChange={(event) => {
                setOrganic(event.target.checked);
              }}
            />
            <label htmlFor="type">Organic</label>

            <input
              type="checkbox"
              id="type"
              value="openPollinated"
              name="type"
              checked={checked}
              onChange={(event) => {
                setOpenPollinated(event.target.checked);
              }}
            />
            <label htmlFor="type">Open Pollinated</label>

            <input
              type="checkbox"
              id="type"
              value="hybrid"
              name="type"
              checked={checked}
              onChange={(event) => {
                setHybrid(event.target.checked);
              }}
            />
            <label htmlFor="type">Hybrid</label>
          </div>
        </StyledFilterForm>
      </div>
      <div className="type-climate cond-filter">
        <StyledFilterForm open={openClimate}>
          <div className="box">
            <input
              type="checkbox"
              id="climate"
              value="sunny"
              name="climate"
              checked={checked}
              onChange={(event) => {
                setSunny(event.target.checked);
              }}
            />
            <label htmlFor="type">Sunny</label>

            <input
              type="checkbox"
              id="climate"
              value="shady"
              name="climate"
              checked={checked}
              onChange={(event) => {
                setShady(event.target.checked);
              }}
            />
            <label htmlFor="type">Shady</label>

            <input
              type="checkbox"
              id="water"
              value="humid"
              name="water"
              checked={checked}
              onChange={(event) => {
                setHumid(event.target.checked);
              }}
            />
            <label htmlFor="type">Humid</label>
          </div>
        </StyledFilterForm>
      </div>
      <div className="type-water cond-filter">
        <StyledFilterForm open={openWater}>
          <div className="box">
            <input
              type="checkbox"
              id="water"
              value="lotsOfWater"
              name="water"
              checked={checked}
              onChange={(event) => {
                setLotsOfWater(event.target.checked);
              }}
            />
            <label htmlFor="type">Lots of water</label>

            <input
              type="checkbox"
              id="water"
              value="dry"
              name="water"
              checked={checked}
              onChange={(event) => {
                setDry(event.target.checked);
              }}
            />
            <label htmlFor="type">Dry</label>
          </div>
        </StyledFilterForm>
      </div>
      <div className="type-soil  cond-filter">
        <StyledFilterForm open={openSoil}>
          <div className="box">
            <input
              type="checkbox"
              id="soil"
              value="clay"
              name="soil"
              checked={checked}
              onChange={(event) => {
                setClay(event.target.checked);
              }}
            />
            <label htmlFor="type">Clay</label>

            <input
              type="checkbox"
              id="soil"
              value="wellDrained"
              name="soil"
              checked={checked}
              onChange={(event) => {
                setDrained(event.target.checked);
              }}
            />
            <label htmlFor="type">Well-drained</label>

            <input
              type="checkbox"
              id="soil"
              value="peaty"
              name="soil"
              checked={checked}
              onChange={(event) => {
                setPeaty(event.target.checked);
              }}
            />
            <label htmlFor="type">Peaty</label>

            <input
              type="checkbox"
              id="soil"
              value="chalky"
              name="soil"
              checked={checked}
              onChange={(event) => {
                setChalkey(event.target.checked);
              }}
            />
            <label htmlFor="type">Chalky</label>

            <input
              type="checkbox"
              id="soil"
              value="sandy"
              name="soil"
              checked={checked}
              onChange={(event) => {
                setSandy(event.target.checked);
              }}
            />
            <label htmlFor="type">Sandy</label>
          </div>
        </StyledFilterForm>
      </div>
    </div>
  );
}
