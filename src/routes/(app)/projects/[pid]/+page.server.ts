import { redirect } from "@sveltejs/kit";

export async function load({ params, cookies, fetch }: any) {
  let project = null;
  let deployes = [];

  const jwt = cookies.get('jwt')

  const response = await fetch(`http://127.0.0.1:3000/project/${params.pid}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${jwt}`
    }
  });

  const responseDeployes = await fetch(`http://127.0.0.1:3000/project/${params.pid}/deployes`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${jwt}`
    }
  });

  project = await response.json();
  deployes = await responseDeployes.json();

  return { project, deployes };
}

export const actions = {
  default: async ({ request, params, cookies }: any) => {
    const data = await request.formData();
    const jwt = cookies.get('jwt')

    const branch = data.get('branch');
    const project_id = parseInt(params.pid);

    const response = await fetch("http://127.0.0.1:3000/deploy", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwt}`
      },
      body: JSON.stringify({ branch, project_id })
    });

    console.log(response)
    if (response.ok) {
      const dataResponse = await response.json();

      redirect(302, '/projects');
    } else {
      const { errors } = await response.json();
      return {
        status: 400,
        body: {
          success: false,
          errors
        }
      }
    }
  }
}
