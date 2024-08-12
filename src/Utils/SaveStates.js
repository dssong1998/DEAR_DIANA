const SaveStates = (dispState, schedule, pickedOpt) => {
  if (dispState) localStorage.setItem("display", dispState);
  if (schedule) localStorage.setItem("schedule", schedule);
  if (pickedOpt) localStorage.setItem("pick", pickedOpt);
  console.log(parseInt(localStorage.getItem("display")));
};
export default SaveStates;
