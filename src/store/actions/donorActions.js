import { v4 as uuidv4 } from "uuid";
import database from "../../service/firebase";

// ADD_DONOR
export const addDonor = (donor) => ({
  type: "ADD_DONOR",
  donor,
});

export const startAddDonor = (donorData) => {
  return (dispatch) => {
    //const uid = getState().auth.uid;
    const { bloodType = "", phoneNumber = "" } = donorData;
    const donor = { bloodType, phoneNumber };
    database
      .ref(`donors`)
      .push(donor)
      .then((ref) => {
        dispatch(
          addDonor({
            id: ref.key,
            ...donor,
          })
        );
      });
  };
};

//  DELETE_DONOR
export const deletDonor = ({ id }) => ({
  type: "DELETE_DONOR",
  id,
});

//  UPDATE_DONOR
export const updateDonor = ({ id, update }) => ({
  type: "EDIT_DONOR",
  id,
  update,
});

//  SET_DONOR
export const setDonor = (donor) => ({
  type: "SET_DONOR",
  donor,
});

export const startSetDonor = () => {
  return (dispatch) => {
    //const uid = getState().auth.uid;
    return database
      .ref(`donors`)
      .once("value")
      .then((snapshot) => {
        const donor = [];

        snapshot.forEach((childSnapshot) => {
          donor.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });

        dispatch(setDonor(donor));
      });
  };
};
