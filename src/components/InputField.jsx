import React, { useState } from "react";
import "bootstrap-icons/icons/car-front-fill.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  setFromlocation,
  setTolocation,
  setVehicle,
} from "../reducers/Reducer";

const InputField = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const dispatch = useDispatch();

  const from = useSelector((state) => state.map.fromlocation);
  const to = useSelector((state) => state.map.tolocation);
  const vehicletype = useSelector((state) => state.map.typeOfVehicle);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleFrom = (event) => {
    dispatch(setFromlocation(event.target.value));
  };
  const handleTo = (event) => {
    dispatch(setTolocation(event.target.value));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Submitted:", { from, to, vehicletype });
  };
  const handleType = (event) => {
    dispatch(setVehicle(event.target.value));
  };
  const getToggleButtonContent = () => (isCollapsed ? "+ " : "- ");

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <form action="" onSubmit={handleSubmit}>
            <input
              className="form-control"
              autoCorrect="off"
              autoCapitalize="off"
              autoComplete="off"
              spellCheck="off"
              type="text"
              placeholder="Enter address"
              onChange={handleFrom}
            />

            <button className="btn btn-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="#0463fb"
                className="bi bi-arrow-down-up m-3"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5m-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5"
                />
              </svg>
            </button>

            <input
              className="form-control"
              autoCorrect="off"
              autoCapitalize="off"
              autoComplete="off"
              spellCheck="off"
              type="text"
              placeholder="Enter address"
              onChange={handleTo}
            />
            <p
              className="text-primary ng-tns-c155-0"
              style={{ marginTop: "10px" }}
            >
              <strong className="ng-tns-c155-0">Select Your Vehicle</strong>
            </p>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={handleType} // Move the onChange to the select element
              value={vehicletype} // Optionally, you can set the value attribute to control the select value
            >
              <option value="" disabled selected>
                Select vehicle type
              </option>
              <option value="Car / Jeep / Van / SUV">
                Car / Jeep / Van / SUV
              </option>
              <option value="Taxi">Taxi</option>
              <option value="Bike">Bike</option>
              <option value="Pickup truck">Pickup truck</option>
              <option value="Truck">Truck</option>
              <option value="Bus">Bus</option>
            </select>

            <div>
              <p className="d-inline-flex gap-1">
                <button
                  className="btn btn-primary m-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  aria-expanded={isCollapsed ? "false" : "true"}
                  aria-controls="collapseExample"
                  onClick={toggleCollapse}
                >
                  {getToggleButtonContent()}Button with data-bs-target
                </button>
              </p>
              <div
                className={`collapse ${isCollapsed ? "" : "show"}`}
                id="collapseExample"
              >
                Some placeholder content for the collapse component. This panel
                is hidden by default but revealed when the user activates the
                relevant trigger.
              </div>
            </div>

            {from === "" || to === "" || vehicletype === "" ? (
              <button disabled className="btn btn-primary m-3" type="submit">
                Submit
              </button>
            ) : (
              <button className="btn btn-primary m-3" type="submit">
                Submit
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default InputField;
