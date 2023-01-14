import Head from "next/head"
import Header from "./Header"

export default ({ children, title, description }) => (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/* <link rel="icon" type="image/png" href="/images/favicon.png" /> */}
        </Head>
        <Header />
        <main>
            {children}
        </main>
    </>
)