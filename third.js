const fetch = require('node-fetch');

// const getZhihuColumn = async (id) => {
//   const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
//   const response = await fetch(url);
//   return await response.json();
// };

// (async ()=>{
//   const column = await getZhihuColumn('feweekly');
//   console.log(`NAME: ${column.name}`);
//   console.log(`INTRO: ${column.intro}`);
// })();


/*
* Use Class
*/

class APIClient{
  async getColumn(id){
    const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
    const response = await fetch(url);
    return await response.json();
  }
}

(async ()=> {
  const client = new APIClient();
  const column = await client.getColumn('feweekly');
  console.log(`NAME: ${column.name}`);
  console.log(`INTRO: ${column.intro}`);
})();
