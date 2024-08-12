const SaveStates = (dispState, schedule, pickedOpt) => {
  if (dispState) localStorage.setItem("display", dispState);
  if (schedule) localStorage.setItem("schedule", schedule);
  if (pickedOpt) localStorage.setItem("pick", pickedOpt);
};
export default SaveStates;
