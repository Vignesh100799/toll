import { createSlice } from "@reduxjs/toolkit";

export const MapSlice = createSlice({
    name : "map",
  initialState: {
    fromlocation: "",
    tolocation: "",
    typeOfVehicle : "",
  },
  reducers: {
    setFromlocation: (state, action) => {
      state.fromlocation = action.payload;
    },
    setTolocation: (state, action) => {
      state.tolocation = action.payload;
    },
    setVehicle :(state,action)=>{
      state.typeOfVehicle = action.payload;
    }
  },
});

export const { setFromlocation, setTolocation,setVehicle } = MapSlice.actions;
export default MapSlice.reducer;
