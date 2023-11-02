

/* function getDataType(value) {
  return typeof value;
} */


function getDataType(value) {
  const type = typeof value;
  
  if (type === 'object') {
    if (value === null) {
      return 'null';
    }
    
    if (Array.isArray(value)) {
      return 'array';
    }
    
    if (value instanceof Date) {
      return 'date';
    }
    
    if (value instanceof RegExp) {
      return 'regexp';
    }
    
    return 'object';
  }
  
  return type;
}