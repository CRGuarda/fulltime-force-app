export async function getRepo(owner: string) {
  try {
    console.log('first')
    if (owner.length === 0) return false

    const res = await fetch(`/api/repo?owner=${owner}`, { next: { revalidate: 5 } })
    const resToJSON = await res.json()
    if (!res.ok) {
      throw new Error(resToJSON.error)
    }

    console.log(res)
    return resToJSON
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
      return false
    }
  }
}
