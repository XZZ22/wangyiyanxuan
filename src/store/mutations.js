import {GET_HEAD_CATE_LIST} from "./mutation-types";

export default {
  [GET_HEAD_CATE_LIST](state,{headCateLists}){
    state.headCateLists = headCateLists
  }
}
