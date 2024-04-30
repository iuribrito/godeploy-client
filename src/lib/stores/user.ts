import { browser } from "$app/environment"
import { writable } from "svelte/store"

interface userType {
  name?: string
  email: string
}

export const user = writable<userType>({ name: '', email: '' });
