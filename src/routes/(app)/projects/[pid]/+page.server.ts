import { page } from "$app/stores"

export async function load({ params, cookies, locals }: any) {
  const jwt = cookies.get('jwt')

  const response = await fetch(`http://127.0.0.1:3000/project/${params.pid}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${jwt}`
    }
  });

  const project = await response.json();
  if (project) {
    locals.project = project;
  }

  return { project };
}
