function accumulate(...args){
  if(args.length === 0){
    return 0;
  }
  return args.reduce((accumulator, currentValue)=>accumulator + currentValue);
}
