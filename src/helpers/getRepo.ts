export async function getRepo(owner: string) {
  try {
    if (owner.length === 0) return false

    const res = await fetch(`/api/repo?owner=${owner}`, { cache: 'no-store' })
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
