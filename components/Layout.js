import Head from "next/head"
import Toolbar from "./Toolbar"

export default ({ children, title, description }) => (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Toolbar />
        <main className="overflow-scroll">
            {children}
        </main>
    </>
)