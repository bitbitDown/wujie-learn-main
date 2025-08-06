export default function debounce(func, wait) {
  let timeout
  return function (...args){
    if(timeout){
      clearTimeout(timeout)
    }
    timeout=setTimeout(
      ()=>{
        func.call(this,...args)
      },wait)
  }
}

