const fetch = require('node-fetch');

const sleep = (timeout = 2000) => new Promise(resolve => setTimeout(resolve, timeout));

async function getZhihuColumn(id){
  await sleep(2000);
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
  const response = await fetch(url);
  return await response.json();
}


const showColumnInfo = async () => {
  console.time('SHOWCOLUMNINFO');

  const names = ['feweekly', 'toolingtips'];
  //串行的处理方式
  const promiseArr = names.map(val => getZhihuColumn(val));
  for(let promise of promiseArr){
    const column = await promise;
    console.log(`NAME: ${column.name}`);
    console.log(`INTRO: ${column.intro}`)
  }
  //并行的处理方式
  /* for (let i = 0; i< names.length; i++){
    const column = await getZhihuColumn(names[i]);
    console.log(`NAME: ${column.name}`);
    console.log(`INTRO: ${column.intro}`);
  } */

  console.timeEnd('SHOWCOLUMNINFO');
}

showColumnInfo();
