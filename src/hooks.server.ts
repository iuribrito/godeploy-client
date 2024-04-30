import { redirect } from "@sveltejs/kit";
import { user } from "$stores/user";

const public_paths = [
  '/login'
];

function isPathAllowed(path: string) {
  return public_paths.some(allowedPath =>
    path === allowedPath || path.startsWith(`${allowedPath}/`)
  );
}

export const handle = async ({ event, resolve }: any) => {
  let userObj = null;

  if (event.cookies.get('user') != undefined && event.cookies.get('user') != null) {
    userObj = JSON.parse(event.cookies.get('user'));
  }

  const url = new URL(event.request.url);


  if (!userObj && !isPathAllowed(url.pathname)) {
    throw redirect(302, '/login');
  }

  if (userObj) {
    user.set(userObj);

    if (url.pathname.startsWith('/login')) {
      throw redirect(302, '/')
    }
  }

  const response = await resolve(event)
  return response
}
