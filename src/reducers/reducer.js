import { _timeslotList } from "../constants/constant";

const initState = {
  colleges: _timeslotList.colleges
};

export default function mainReducer(state = initState, action) {
  return state;
}
