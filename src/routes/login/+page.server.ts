import { user } from "$stores/user";
import { redirect } from "@sveltejs/kit";

export async function load({ cookies }) {
}

export const actions = {
  default: async ({ cookies, request }: any) => {
    const data = await request.formData();

    const email = data.get('email');
    const password = data.get('password');

    const response = await fetch("http://127.0.0.1:3030/auth/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password })
    });

    if (response.ok) {
      const dataResponse = await response.json();

      cookies.set('user', JSON.stringify({ email }), { path: '/' });
      cookies.set('jwt', dataResponse.data, { path: '/' })

      user.set({
        name: 'Iuri Brito',
        email,
      })

      redirect(302, '/');
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
