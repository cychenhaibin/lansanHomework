function currAdd(x){
  return function(y){
    return function(z){
      return x+y+z;
    }
  }
}
const curriedAdd = currAdd(1);
const result = curriedAdd(2)(3);
console.log(result);