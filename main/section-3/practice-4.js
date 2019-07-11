'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  let mapA = new Array();
  let result = new Array();
  let count = 0;
  collectionA.reduce((pre,cur,index)=>{
    if(pre.match(cur)){
      count ++;
    }
    else{
      mapA.push({key:pre,count});
      count = 1;
    }
    if(index === collectionA.length-1){
      mapA.push({key:cur.split(0,1),count:parseInt(cur.split(2,3))});
    }
    return cur;
  });
  mapA.map((item)=>{
    if(objectB.value.includes(item.key)){
      item.count -= parseInt(item.count/3);
    }
    result.push(item);
  })
  return result;
}
