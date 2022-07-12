import { ADD_JOB_HISTORY, GET_JOB_HISTORY } from "./actionsTypes";
import HttpService from "../../../services/HttpService";

export const addJobHistory = (data) => ({
  type: ADD_JOB_HISTORY,
  payload: {
    request: {
      url: "/job-history",
      method: HttpService.HttpMethods.POST,
      data: data,
    },
  },
});

export const getJobHistoryById = (id) => ({
  type: GET_JOB_HISTORY,
  payload: {
    request: {
      url: "/job-history/" +1,
      method: HttpService.HttpMethods.GET
    }
  }
})
