/**
 * generateReport
 * @param {object} res
 * @return
 */

 const generateReport = (res) => {
  if (isValidJson(res)) {
    console.log(`Below is the list of top 10 seafood restaurants in Boston`);
    console.log(``);
    for (let count in res.data) {
      console.log(`${Number(count) + 1}: ${res.data[count].name}`);
    }
    console.log(``);
    console.log(`* * * * * *`);
  }
};

const isValidJson = (data) => {
  return data && Object.keys(data).length;
};

module.exports = { generateReport };