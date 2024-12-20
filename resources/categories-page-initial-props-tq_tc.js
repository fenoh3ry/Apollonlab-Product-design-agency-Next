import { normalize } from '@teleporthq/cms-mappers/strapi'

export default async function (params = {}) {
  const urlParams = {
    ...(params['id'] && {
      'filters[id][$eq]': params['id'],
    }),
    populate: 'deep',
    locale: params?.locale,
  }
  const data = await fetch(
    `${process.env.CMS_URL}/api/Categories?${new URLSearchParams(urlParams)}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.CMS_ACCESS_TOKEN}`,
      },
    }
  )
  const response = await data.json()
  return normalize(response)
}
