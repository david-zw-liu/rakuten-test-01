function insertInterval(intervals, newInterval) {
  const right = []; // before newInterval
  const left = []; // after newInterval
  for(let interval of intervals) {
    const [currStart, currEnd] = interval;
    const [newStart, newEnd] = newInterval;

    if (currEnd < newStart) {
      right.push(interval);
    } else if (currStart > newEnd) {
      left.push(interval);
    } else {
      // merge interval when overlapped
      newInterval[0] = Math.min(currStart, newStart);
      newInterval[1] = Math.max(currEnd, newEnd);
    }
  }

  return [...right, newInterval, ...left];
}

module.exports = insertInterval;
