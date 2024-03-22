export const convertTimeStampToDate = (timestamp) => {
  const firebaseTime = new Date(
    timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000
  );
  const noteDate = firebaseTime.toDateString();
  const noteTime = firebaseTime.toLocaleTimeString();
  return [noteDate, noteTime];
};
