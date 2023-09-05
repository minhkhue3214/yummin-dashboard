import { put, call, takeLatest } from 'redux-saga/effects';
// import {
//   getAllUsersApi,
//   requestDeleteUserApi,
//   requestAddUserApi,
//   requestGetUserApi,
//   requestUpdateUserApi,
//   requestUpdatePasswordApi
// } from '~/api/users';

import {
  getAllUserRequest,
} from '../slices/rootAction';

function* requestAllUsersSaga(action) {
  try {
    // console.log("requestAllUsersSaga", result);
    // const { meta, data } = result;

    // yield put(
    //   getAllUserSuccess({
    //     result
    //   })
    // );
  } catch (error) {
    // yield put(getAllUserFail(error));
  }
}

export default function* watchUsers() {
  yield takeLatest(getAllUserRequest.type, requestAllUsersSaga);
}
