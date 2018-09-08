import Mock from 'mockjs'
import apiData from './msite'

//apiData.headCateList 返回的是一个数组
Mock.mock('/headcatelist',{code:0,data:apiData.headCateList})
