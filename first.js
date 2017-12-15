const fetch = require('node-fetch');

// function getZhihuColumn(id){
//   const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
//   fetch(url)
//     .then(response => response.json())
//     .then(column => {
//       console.log(`NAME: ${column.name} `);
//       console.log(`INTRO: ${column.intro}`);
//     })
// }

async function getZhihuColumn(id){
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
  const response = await fetch(url);
  const column = await response.json();
  console.log(`NAME: ${column.name}`);
  console.log(`INTRO: ${column.intro}`);
}

getZhihuColumn('feweekly');
