import {types} from "./types";
import {get} from "../services/httpService";
import { toast } from 'react-toastify';

//This first part is necessary to deal with cors problems.
const guildsEndpoint = "https://cors-anywhere.herokuapp.com/https://api.tibiadata.com/v2/guild/Phoenix+Force.json";

export const getMembersData = () => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      const request = () => ({type: types.GET_MEMBERS});
      const success = (data) => ({type: types.GET_MEMBERS_SUCCESS, members: data.guild.members});
      const failure = (error) => ({type: types.GET_MEMBERS_FAILURE, error});

      dispatch(request);

      get(guildsEndpoint).then(data => {
        resolve(dispatch(success(data.data)))
      }).catch(error => {
        toast.error("There is an unexpected problem");
        return reject(dispatch(failure(error)));
      })
    });
  }
}