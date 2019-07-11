'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  let result = new Array();
  collectionA.map((item)=>{
    if(objectB.value.includes(item.key)){
      item.count --;
    }
    result.push(item);
  })
  return result;
}
