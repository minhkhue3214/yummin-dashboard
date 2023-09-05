import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllUserRequest,
  updateActiveMenu,
  updateActiveNavbar
} from '../store/slices/users';

const useUsersStore = () => {
  const dispatch = useDispatch();

  const usersState = useSelector((state) => state.users);

  const dispatchGetAllUsers = useCallback(
    (payload) => {
      dispatch(getAllUserRequest(payload));

      return true;
    },
    [dispatch]
  );

  const dispatchUpdateActiveMenu = useCallback(
    (payload) => {
      dispatch(updateActiveMenu(payload));

      return true;
    },
    [dispatch]
  );

  const dispatchUpdateActiveNavbar = useCallback(
    (payload) => {
      dispatch(updateActiveNavbar(payload));

      return true;
    },
    [dispatch]
  );

  return {
    dispatchGetAllUsers,
    dispatchUpdateActiveMenu,
    dispatchUpdateActiveNavbar,
    usersState
  };
};

export { useUsersStore };
