/*Find the town judge 
In a town, there are n people labeled from 1 to n. There is a rumor that one of thesepeople is secretly 
the town judge.If the town judge exists, then: 1. The town judge trusts nobody. 
2. Everybody (except forthe town judge) trusts the town judge. 3. There is exactly one person that 
satisfies properties 1 and 2.You are given an array trust where trust[i] = [ai, bi] representing that 
the person labeledai trusts the person labeled bi. Return the label of the town judge if the town judge
 existsand can be identified, or return -1 otherwise. */

var findJudge = function (N, trust) {
  const counts = new Array(N + 1).fill(0);

  for (let [i, j] of trust) {
    counts[i] -= 1;

    counts[j] += 1;
  }

  for (let i = 1; i < counts.length; i++) {
    if (N - 1 === counts[i]) {
      return i;
    }
  }
  return -1;
};
