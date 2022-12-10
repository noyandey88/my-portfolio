import { Toaster } from 'react-hot-toast'
import Layout from '../components/Layout/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Toaster></Toaster>
    </Layout>
  )
}

export default MyApp
