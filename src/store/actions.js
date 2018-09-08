import {reqHeadCateList} from '../api'

import {GET_HEAD_CATE_LIST} from "./mutation-types";

export default {
  async getHeadCateList({commit},cb){
    const result = await reqHeadCateList()
    commit(GET_HEAD_CATE_LIST,{headCateLists:result.data})

    cb && cb()
  }
}
