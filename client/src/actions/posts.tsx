import * as api from '../api';
import { Dispatch } from 'redux';

export const getPosts = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: 'FETCH_ALL', payload: data })

  } catch (err) {
    console.log(err)
  }
}