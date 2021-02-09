//BEST SOLUTION

function nouveau(Constructor, ...args) {
   const instance = Object.create(Constructor.prototype);
   const result = Constructor.apply(instance, args);
   return result === Object(result) ? result : instance;
}

//MY SOLUTION

function nouveau(func, ...args) {
   let dis = {};
   Object.setPrototypeOf(dis, func.prototype);
   let res = func.call(dis, ...args);
   if (res && typeof res === 'object' || typeof res === 'function') return res;
   return dis;
}