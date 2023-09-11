export function addAndGetQueryString(
  param: URLSearchParams,
  queries: { name: string; value: string }[],
) {
  const params = new URLSearchParams(param);
  for (const { name, value } of queries) {
    if (value) params.set(name, value);
    else params.delete(name); // 텅 빈 문자열 보내면 해당 쿼리는 제거
  }
  return params.toString();
}
