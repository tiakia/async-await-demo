const fetch = require('node-fetch');

async function getZhihuColumn(id){
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
  const response = await fetch(url);
  if(response.status != 200){
    throw new Error(response.statusText);
  }
  return await response.json();
}

// const showColunmInfo = async (id) => {
//   try{
//     const column = await getZhihuColumn(id);
//     console.log(`NAME: ${column.name}`);
//     console.log(`INTRO: ${column.intro}`);
//   }catch(err){
//     console.error(err);
//   }
// }

// showColunmInfo('feweekl12y');

getZhihuColumn('feweekl12y')
  .then( column => {
    console.log(`NAME: ${column.name}`);
    console.log(`INTRO: ${column.intro}`);
  })
  .catch(err => {
    console.log(err);
  });
