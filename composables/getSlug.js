export default async function () {
  const route = useRoute()
  let slug = route.params.slug
  return slug
}
