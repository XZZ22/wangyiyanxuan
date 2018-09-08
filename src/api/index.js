import ajax from './ajax.js'

const BASE = '/api'
//获取头部导航列表
export const reqHeadCateList = ()=>ajax('/headcatelist')
