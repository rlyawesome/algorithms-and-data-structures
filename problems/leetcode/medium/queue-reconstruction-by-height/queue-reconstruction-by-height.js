/**
 * @param {number[][]} people
 * @return {number[][]}
 */
const reconstructQueue = (people) => {
  const ans = [];
  people.sort((a, b) => (a[0] != b[0] ? b[0] - a[0] : a[1] - b[1]));
  console.log(people);
  for (i = 0; i < people.length; i++) {
    ans.splice(people[i][1], 0, people[i]);
  }

  return ans;
};
