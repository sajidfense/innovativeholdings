import AppLayout from "@/components/common/AppLayout"
import "@/styles/main.scss"

export default function App({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}
