'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  let result = new Array();
  collectionA.map((item)=>{
    if(objectB.value.includes(item.key)){
      item.count -= parseInt(item.count/3);
    }
    result.push(item);
  })
  return result;
}
