export function debounce(fn, preExecute, duration) {
  const defaultProps = {
   fn: fn,
   preExecute: preExecute || false,
   duration: duration || 1000
  }
  let timer = null;
  return function() {
   const parent = this;
   const argus = arguments
    return new Promise(resolve => {
     let result = null;
      // 前置执行
     if (preExecute) {
       if (!timer) {
         result = fn.apply(parent, argus)
         timer = setTimeout(() => {
          clearTimeout(timer)
          timer = null
        }, defaultProps.duration)
       }
       resolve(result)
       
       return result
      }
      // 后置执行
      if (!timer) {
        timer = setTimeout(() => {
          result = fn.apply(parent, argus)
          resolve(result)
          clearTimeout(timer)
          timer = null
        }, defaultProps.duration)  
      }
    })
   }
}


/**
  * 函数节流，即对函数进行特殊处理，使其在约定的时间段内避免函数过多次执行。
  * @param fn 待处理的函数
  * @param duration 函数防抖时长，单位为毫秒，默认为1000
  * @return 经过处理的fn
  * @category Throttle
  */

export function throttle(fn, duration) {
  return debounce(fn, true, duration)
}