import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
  projectId: 'oxeoe90p',
  dataset: 'production',
  apiVersion: '2023-03-20',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_URL
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)

export default client
