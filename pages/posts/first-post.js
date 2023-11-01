import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstPost() {
    return <Layout>
            <Head>
                <title>Post-1 title</title>
            </Head>
            <Script 
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                console.log(`script loaded correctly, window.FB has been populated`)
                }
            />
            <h1 className="container">Post 1</h1>
            <h2><Link href="/"> Back to home </Link></h2>
            <hr/>
            <Image
                src ="/images/profile.jpg"
                width = {200}
                height = {200}
                alt="balise"
            />
    
        </Layout>

}