import { notification, message } from 'antd';
import { 
  loginUrl, 
  logoutUrl, 
  registerUrl,
  getAllCourseListUrl, 
  addCommInfoUrl, 
  getCartInfoUrl, 
  settleAccountUrl, 
  releaseCommUrl,
  commDetailUrl,
  insertComm2CartUrl,
  findorderUrl
} from '../config';
import { courses } from '../../config/listMap';

const TYPES = {
  login: Symbol('login'),
  getAllCommodityList: Symbol('getAllCommodityList'),
  getCartInfo: Symbol('getCartInfo'),
  settleAccount: Symbol('settleAccount'),
  searchAllCommodityList: Symbol('searchAllCommodityList'),
  searchCartInfo: Symbol('searchCartInfo'),
  searchCommDetail: Symbol('searchCommDetail'),
  getCommDetail: Symbol('getCommDetail'),
  releaseComm: Symbol('releaseComm'),
  insertComm2Cart: Symbol('insertComm2Cart'),
  getInsertCartData: Symbol('getInsertCartData'),
  searchfinance: Symbol('searchfinance'),
  getfinance: Symbol('getfinance'),
  uploadData: Symbol('uploadData'),
};

const initialState = {
  role: '', // 角色
  isLogin: false,
  username: '',
  userId: '',
  courseList: [],// 全部课程
  singleCourseDetail: [], // 单个课程信息

  orderData: [], // 订单信息
  userInfo: [], // 用户信息
  commData: [], // 所有产品信息
  unBuyCommData: [], // 未购买商品信息
  singlecommDetail: [], // 查找单个商品信息
  insertCartData: [],
  financeData: []
};

const actions = {
  login: data => dispatch => { //登录
    getUrl(loginUrl, {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data), 
      method: 'POST'
    }).then(res => {
      const { data, success, error} = res;
      if(error){
        notification.open({
          message: error,
        });
      }else if(data && success){
        notification.open({
          message: '登录成功',
        });
        dispatch({
          type: TYPES.uploadData,
          payload: {
            isLogin: true,
            username: data.username
          }
        });
      }
    }).catch( () =>{
      notification.open({
        message: '后台请求失败',
      });
    });
  },
  register: values => dispatch => { // 注册
    getUrl(registerUrl, {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values), 
      method: 'POST'
    }).then(res => {
      const { data, success, error } = res;
      if(error){
        notification.open({
          message: error,
        });
      }else if(data && success){
        notification.open({
          message: '注册成功,正在为你登录',
        });
        dispatch(actions.login(values));
      }
    }).catch( () =>{
      notification.open({
        message: '后台请求失败',
      });
    });
  },
  logout: () => dispatch =>{ // 退出
    getUrl(logoutUrl)
      .then(res => {
        const { error} = res;
        if(error){
          notification.open({
            message: '退出失败',
          });
        }else{
          notification.open({
            message: '退出成功',
          });
        }
      }).catch(() => {
        notification.open({
          message: '无法连接到后台服务器',
        });
      });
    dispatch({
      type: TYPES.uploadData,
      payload: {
        isLogin: false,
        username: ''
      }
    });
  },
  searchAllCourseList: () => (dispatch) => {// 获取所有课程信息
    getUrl(getAllCourseListUrl)
      .then(res=>{
        const { data, success, error} = res;
        if(error){
          notification.open({
            message: error,
          });
        }else if(data && success === 'OK'){
          dispatch({
            type: TYPES.uploadData,
            payload: {
              courseList: data
            }
          });
        }
      }).catch(() => {
        notification.open({
          message: '后台请求失败',
        });
      });
  },
  getCourseDetail: (id, callback) => (dispatch) => { // 获取课程详情
    getUrl(`courseDetailUrl/getCourseDetail?uid=${id}`)
      .then(res=>{
        const { data, success, error} = res;
        if(error){
          notification.open({
            message: error,
          });
        }else if(data && success){
          callback();
          dispatch({
            type: TYPES.uploadData,
            payload: {
              singleCourseDetail: data
            }
          });
        }
      }).catch(() => {
        notification.open({
          message: '后台请求失败',
        });
      });
  },

  updateCourseDetail: (id) => dispatch =>{
    let data = courses[id];
    
    dispatch({
      type: TYPES.uploadData,
      payload: {
        singleCourseDetail: data
      }
    });
  },
  searchCartInfo: (data) => (dispatch) => { // 查询用户购物车
    getUrl(getCartInfoUrl, {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data), 
      method: 'POST'
    }).then(res=>{
      const { data, success, error} = res;
      if(error){
        notification.open({
          message: error,
        });
      }else if(data && success){
        dispatch(actions.getCartInfo(data));
      }
    }).catch(() => {
      notification.open({
        message: '后台请求失败',
      });
    });
  },
  searchCommDetail: (data, callback) => (dispatch) => { // 获取商品详情
    getUrl(commDetailUrl, {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data), 
      method: 'POST'
    }).then(res=>{
      const { data, success, error} = res;
      if(error){
        notification.open({
          message: error,
        });
      }else if(data && success){
        callback();
        dispatch(actions.getCommDetail(data));
      }
    }).catch(() => {
      notification.open({
        message: '后台请求失败',
      });
    });
  },
  getAllCommodityList: (data) => { 
    return {
      type: TYPES.getAllCommodityList,
      payload: {
        commData: data
      }
    };
  },
  addCommInfo: (data) => { //新增商品信息
    getUrl(addCommInfoUrl, {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data), 
      method: 'POST'
    }).then(res => {
      const { data, success, error} = res;
      if(error){
        notification.open({
          message: error,
        });
      }else if(data && success){
        notification.open({
          message: '添加成功',
        });
      }
    }).catch( () =>{
      notification.open({
        message: '后台请求失败',
      });
    });
  },
  getCartInfo: (data) => { //查询用户购物车
    return {
      type: TYPES.getCartInfo,
      payload: {
        orderData: data
      }
    };
  },
  getCommDetail: (data) => {
    return {
      type: TYPES.getCommDetail,
      payload: {
        singlecommDetail: data
      }
    };
  },
  settleAccount: (data,callback) => { //结算
    getUrl(settleAccountUrl, {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data), 
      method: 'POST'
    }).then(res => {
      const { data, success, error} = res;
      if(error){
        notification.open({
          message: error,
        });
      }else if(data && success){
        notification.open({
          message: '添加成功',
        });
        callback();
      }
    }).catch( () =>{
      notification.open({
        message: '后台请求失败',
      });
    });
  },
  releaseComm: (data) => {
    getUrl(releaseCommUrl, {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data), 
      method: 'POST'
    }).then(res => {
      const { data, success, error} = res;
      if(error){
        notification.open({
          message: error,
        });
      }else if(data && success){
        notification.open({
          message: '发布成功',
        });
      }
    }).catch( () =>{
      notification.open({
        message: '后台请求失败',
      });
    });
  },
  insertComm2Cart: (data) => (dispatch) =>{ // 添加购物车
    getUrl(insertComm2CartUrl, {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data), 
      method: 'POST'
    }).then(res => {
      const { data, success, error} = res;
      if(error){
        notification.open({
          message: error,
        });
      }else if(data && success){
        dispatch(actions.getInsertCartData(data));
        notification.open({
          message: '添加成功',
        });
      }
    }).catch( () =>{
      notification.open({
        message: '后台请求失败',
      });
    });
  },
  getInsertCartData: (data) => {
    return {
      type: TYPES.getCommDetail,
      payload: {
        insertCartData: data
      }
    };
  },
  searchfinance: (data) => (dispatch) =>{
    getUrl(findorderUrl, {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data), 
      method: 'POST'
    }).then(res=>{
      const { data, success, error} = res;
      if(error){
        notification.open({
          message: error,
        });
      }else if(data && success){
        dispatch(actions.getfinance(data));
      }
    }).catch(() => {
      notification.open({
        message: '后台请求失败',
      });
    });
  },
  getfinance: (data) => {
    return {
      type: TYPES.getCommDetail,
      payload: {
        financeData: data
      }
    };
  }

};

exports.actions = actions;
exports.TYPES = TYPES;
export default (state = initialState, { type, payload }) => {
  if(type === TYPES.login){
    return {...state,...payload};
  }
  if(type === TYPES.getAllCommodityList){
    return {...state,...payload};
  }
  if(type === TYPES.getCartInfo){
    return {...state,...payload};
  }
  if(type === TYPES.getCommDetail){
    return {...state,...payload};
  }
  if(type === TYPES.settleAccount){
    return {...state,...payload};
  }
  if(type === TYPES.getInsertCartData){
    return {...state,...payload};
  }
  if(type === TYPES.getfinance){
    return {...state,...payload};
  }
  if(type === TYPES.releaseComm){
    return {...state};
  }
  if(type === TYPES.uploadData){
    return {...state,...payload};
  }
  return state;
};

function getUrl(url, options){
  options = options || {};
  // if (!options.credentials) {
  //   options.credentials = 'include';
  // }
  return fetch(url, options)
    .then(res => res.json())
    .then(data => {
      return data;
    })
    .catch(e=>{
      throw new Error(e);
    });
}
