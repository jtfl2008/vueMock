import Mock from './index'

const getList = () => {
  /* let tpl = {
    code: 200,
    msg: 'success',
    'data|1-100': [
      {
        'id|+1': 1
      }
    ]
  } */
  let tpl = {
    code: 200,
    msg: 'success',
    'data|1-100': [
      {
        'id|+1': 1
      }
    ]
  }
  return Mock.mock(tpl)
}

const User = {
  getList
}
export default User
