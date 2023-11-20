// 浅拷贝
function shallowCopy(obj){
  return Object.assign({}, obj);
}


// 深拷贝
function deepCopy(obj){
  if(typeof obj !== 'object' || obj === null){
    return obj;
  }
  if(Array.isArray(obj)){
    return obj.map(deepCopy);
  }
  const newObj = {};
  for(let key in obj){
    newObj[key] = deepCopy(obj[key]);
  }
  return newObj;
}