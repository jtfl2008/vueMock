import Mock from 'mockjs'
import User from './user'

Mock.mock('/getList', User.getList)

export default Mock
