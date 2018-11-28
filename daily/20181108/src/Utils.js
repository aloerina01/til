export function microTask(f) {
  return Promise.resolve().then(f);
}