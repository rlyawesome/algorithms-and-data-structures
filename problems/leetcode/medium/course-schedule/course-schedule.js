/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = (numCourses, prerequisites) => {
  const degree = new Array(numCourses).fill(0);

  for (const e of prerequisites) {
    degree[e[0]]++;
  }

  const stack = [];

  for (let i = 0; i < degree.length; i++) {
    if (degree[i] == 0) stack.push(i);
  }

  let count = 0;

  while (stack.length) {
    const curr = stack.pop();
    count++;

    for (const e of prerequisites) {
      if (e[1] == curr) {
        degree[e[0]]--;
        if (degree[e[0]] == 0) stack.push(e[0]);
      }
    }
  }

  return count == numCourses;
};
