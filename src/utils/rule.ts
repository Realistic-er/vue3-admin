// 账号校验
export const accountrule:object[] = [
  { required: true, message: '请输入登录账号', trigger: 'blur' },
  {
    min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur',
  },
  { type: 'string', pattern: /^[a-z]+$/ },
];

// 密码校验
export const passwordrule:object[] = [
  { required: true, message: '请输入登录密码', trigger: 'blur' },
  {
    min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur',
  },
  { type: 'string', pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]*$/ },
];

// 图标名称
export const iconname:string[] = [
  'Search', 'FullScreen', 'Lock', 'ElementPlus', 'Setting',
];

// 删除标签
export const deletetag = (arr, item) => {
  const result = [];
  arr.forEach((elemment) => {
    if (elemment !== item) {
      result.push(elemment);
    }
  });
  return result;
};

// 数组去重
export const siftarray = (arr) => {
  const newArr = [];
  arr.forEach((item) => {
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  });
  return newArr;
};

// 描述列表基本信息
export const descriptioninfo:object[] = [
  {
    labelname: 'IP',
    info: '60.221.148.89',
  },
  {
    labelname: '内核',
    info: 'webkit',
  },
  {
    labelname: '内核版本',
    info: '537.36',
  },
  {
    labelname: '平台',
    info: 'desktop',
  },
  {
    labelname: '载体',
    info: 'chrome',
  },
  {
    labelname: '载体版本',
    info: '108.0.0.0',
  },
  {
    labelname: '系统',
    info: 'windows',
  },
  {
    labelname: '系统版本',
    info: '10',
  },
  {
    labelname: '距离电池充满需要',
    info: '未知',
  },
  {
    labelname: '剩余可使用时间',
    info: '未知',
  },
  {
    labelname: '电池状态',
    info: '已充满',
  },
  {
    labelname: '当前电量',
    info: '100%',
  },
  {
    labelname: '网络状态',
    info: '在线',
  },
  {
    labelname: 'WebSocket连接情况',
    info: '正常',
  },
];
