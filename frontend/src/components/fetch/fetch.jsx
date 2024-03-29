import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  token: import.meta.env.VITE_SANITY_TOKEN,
  useCdn: true, // `false` if you want to ensure fresh data
})
  
export default client;