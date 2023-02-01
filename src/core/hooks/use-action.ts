import {useTypedDispatch} from "./redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import ActionCreators from '../store/actions-creators'

export const useAction = () => {
  const dispatch = useTypedDispatch();
  return bindActionCreators(ActionCreators, dispatch);
};