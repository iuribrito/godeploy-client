import { browser } from "$app/environment"
import { writable } from "svelte/store"

interface userType {
  name: string
  email: string
  jwt: string
}

const mockUser = {
  name: "Iuri Brito",
  email: "iuri.brito@gmail.com",
  jwt: "$hj22asas.asedajhj22.523gsoa"
}

const stored = browser ? (localStorage.getItem('user') ?? '{}') : '{}';

export const user = writable<userType>(JSON.parse(stored));

user.subscribe((value: userType) => {
  if (browser) {
    JSON.stringify(value);
  }
});
