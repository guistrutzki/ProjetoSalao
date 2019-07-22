import { loadUnavailableDays } from "../FirebaseDB";

export const loadCalendar = () => {
  return dispatch => {
    loadUnavailableDays()
      .then(res => {
        dispatch({
          type: "loadCalendar",
          payload: {
            unavailableDays: res
          }
        })
      })
  };
};

export const selectDate = (dateSelected) => {
  return {
    type: "selectDate",
    payload: {
      dateSelected
    }
  }
}