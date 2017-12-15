const fetch = require('node-fetch');

const sleep = (timeout = 2000) => new Promise(resolve => {
  setTimeout(resolve, timeout);
})

async function getZhihuColumn(id){
  await sleep();
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
  const response = await fetch(url);
  return await response.json();
}

const showColumnInfro = async () => {
  console.time('SHOWCOLUMNINFO');
  const feweekly = await getZhihuColumn('feweekly');
  const toolingtips = await getZhihuColumn('toolingtips');

  console.log(`NAME: ${feweekly.name}`);
  console.log(`INTRO: ${feweekly.intro}`);

  console.log(`NAME: ${toolingtips.name}`);
  console.log(`INTRO: ${toolingtips.intro}`);
  console.timeEnd('SHOWCOLUMNINFO');
};

// const showColumnInfro = async () => {
//   console.time('SHOWCOLUMNINFO');
//   const feweeklyPromise = getZhihuColumn('feweekly');
//   const toolingtipsPromise = getZhihuColumn('toolingtips');

//   const feweekly = await feweeklyPromise;
//   const toolingtips = await toolingtipsPromise;

//   console.log(`NAME: ${feweekly.name}`);
//   console.log(`INTRO: ${feweekly.intro}`);

//   console.log(`NAME: ${toolingtips.name}`);
//   console.log(`INTRO: ${toolingtips.intro}`);
//   console.timeEnd('SHOWCOLUMNINFO');
// };


showColumnInfro();
