export function getToken() {
  const token = localStorage.getItem("token") ?? null;
  return token;
}
