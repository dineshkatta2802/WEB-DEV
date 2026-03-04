import React, { useReducer } from "react";
import "./FIE.css";

const initialState = {
  default:
    "https://images.unsplash.com/photo-1764087957302-ef0756ed8e0a?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  activeImg: null,
  edits: {
    brightness: 100,
    contrast: 100,
    saturation: 100,
    grayscale: 0,
    sepia: 0,
    hue: 0,
    rotate: 0,
    stack: [],
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ACTIVE_IMG":
      return { ...state, activeImg: action.payload };

    case "UPDATE":
      return {
        ...state,
        edits: {
          ...state.edits,
          [action.payload.key]: action.payload.value,
          stack: [...state.edits.stack, action.payload.key],
        },
      };

    case "ROTATE":
      return {
        ...state,
        edits: {
          ...state.edits,
          rotate: state.edits.rotate + 90,
          stack: [...state.edits.stack, "rotate"],
        },
      };

    case "RESET":
      return {
        ...state,
        edits: { ...initialState.edits, rotate: state.edits.rotate },
      };

    case "RESET_ALL":
      return {
        ...state,
        edits: { ...initialState.edits },
      };

    default:
      return state;
  }
};

export default function FIE() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const Img = state.activeImg || state.default;

  const style = {
    filter: `
            brightness(${state.edits.brightness}%)
            contrast(${state.edits.contrast}%)
            saturate(${state.edits.saturation}%)
            grayscale(${state.edits.grayscale}%)
            sepia(${state.edits.sepia}%)
            hue-rotate(${state.edits.hue}deg)
        `,
    transform: `rotate(${state.edits.rotate}deg)`,
  };

  const handleChange = (e) => {
    dispatch({ type: "SET_ACTIVE_IMG", payload: e.target.value });
  };

  const handleClear = () => {
    document.getElementById("url").value = "";
  };

  const handleUpdate = (e) => {
    dispatch({
      type: "UPDATE",
      payload: { key: e.target.name, value: Number(e.target.value) },
    });
  };

  const controlArr = [
    ["Brightness", "brightness", 0, 200],
    ["Contrast", "contrast", 0, 200],
    ["Saturation", "saturation", 0, 200],
    ["Grayscale", "grayscale", 0, 100],
    ["Sepia", "sepia", 0, 100],
    ["Hue", "hue", 0, 360],
  ];

  return (
    <div className="FIE">
      <h1>IMAGE EDITOR PIPELINE</h1>

      <div className="input">
        <label htmlFor="url">Image URL :</label>
        <input
          type="text"
          id="url"
          placeholder="Enter url"
          onChange={handleChange}
        />
        <button onClick={handleClear}>Clear</button>
      </div>

      <div className="panel">
        <div className="image">
          <img src={Img} alt="Image" style={style} />
        </div>

        <div className="controls">
          <div className="ranges">
            {controlArr.map(([label, key, min, max]) => (
              <div key={key}>
                <label htmlFor={key}>{label}</label>
                <input
                  type="range"
                  min={min}
                  max={max}
                  name={key}
                  id={key}
                  value={state.edits[key]}
                  onChange={handleUpdate}
                />
              </div>
            ))}
          </div>

          <div className="buttons">
            <button onClick={() => dispatch({ type: "ROTATE" })}>Rotate</button>
            <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
            <button onClick={() => dispatch({ type: "RESET_ALL" })}>
              Reset All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
