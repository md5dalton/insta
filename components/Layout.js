import Head from "next/head"
import Toolbar from "./Toolbar"

export default ({ children, title, description }) => (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" type="text/css" href="/fonts/linearicons_coders/css/linearicons.css"></link>
        </Head>
        <Toolbar />
        <main>
            {children}
        </main>
    </>
)