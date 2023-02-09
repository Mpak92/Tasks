function RecentCounter() {
  this.requests = [];
}

RecentCounter.prototype.ping = function (t) {
  this.requests.push(t);
  let count = 0;
  for (const request of this.requests) {
    if ((t - 3000) <= request && request <= t) {
      count += 1;
    }
  }
  return count;
};

const task = ['RecentCounter', 'ping', 'ping', 'ping', 'ping'];
const tArr = [[], [1], [100], [3001], [3002]];
