export async function getUsers(owner: string) {
  try {
    if (owner.length === 0) return false

    const res = await fetch(`/api/users?owner=${owner}`, { next: { revalidate: 5 } })
    const resToJSON = await res.json()
    if (!res.ok) {
      throw new Error(resToJSON.error)
    }
    return resToJSON
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
      return false
    }
  }
}
