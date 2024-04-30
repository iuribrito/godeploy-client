export async function load({ cookies, locals }: any) {
  const jwt = cookies.get('jwt')

  const response = await fetch("http://127.0.0.1:3000/projects", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${jwt}`
    }
  });

  const projects = await response.json();
  locals.projects = projects;

  return { projects };
}
