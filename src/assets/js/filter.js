//   TODO: 只針對一天以下 format
export function formatTime(time) {
  return time.slice(2, -1).replace(/(H|M)/gm, ':').split(':').map((item) => (Number(item) < 10 ? 0 + item : item))
    .join(':');
}
