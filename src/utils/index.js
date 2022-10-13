
export const isFalsy = (value) => {return value === 0 ? false : !value}

//用来消除值为空的元素
export const cleanObject = (object) => {
  //避免产生副作用，拷贝一份object
  const result = {...object}
  //遍历新object的key，判断其key对应的值是否为空
  //需要判断特殊值0
  Object.keys(result).forEach(key => {
    const value = result[key]
    if (isFalsy(value)) {
      delete result[key]
    } 
  })

  return result
}