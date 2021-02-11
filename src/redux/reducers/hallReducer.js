import {
  ADD_SELECTED_SEAT,
  DELETE_SELECTED_SEAT,
  GET_CHAIRS_BY_HALL,
  GET_RESERVATED_CHAIRS_BY_HALL,
} from "../../actions/types";

const initialState = {
  chairs: [],
  selectedSeats: [],
  reservatedChairs: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CHAIRS_BY_HALL:
      return {
        ...state,
        chairs: action.payload,
      };
    case GET_RESERVATED_CHAIRS_BY_HALL:
      return {
        ...state,
        reservatedChairs: action.payload,
      };
    case ADD_SELECTED_SEAT:
      console.log(action.payload);
      console.log(state.selectedSeats);
      return {
        ...state,
        selectedSeats: [...state.selectedSeats, action.payload],
      };
    case DELETE_SELECTED_SEAT:
      return {
        ...state,
        selectedSeats: state.selectedSeats.filter(
          (seat) => seat.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
