const initialState = {
  unavailableDays: false,
  dateSelected: "lalala",
  hourSelected: ""
};

const ScheduleReducer = (state = initialState, action) => {
  if (action.type === 'loadCalendar') {
    return { ...state, unavailableDays: action.payload.unavailableDays };
  }

  if(action.type === 'selectDate') {
    return { ...state, dateSelected: action.payload.dateSelected }
  }

  return state;
};

export default ScheduleReducer;