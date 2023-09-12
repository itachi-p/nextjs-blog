import Head from 'next/head';
import Image from 'next/image';
//import Link from 'next/link';
import Layout from '../../components/layout';

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>About me</title>
            </Head>
            <h1>I'm sorry. This page is still under construction.</h1>
            <Image src="/images/nante-cotta.jpg"
                width={480}
                height={270}
                //sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="nante-cotta"
                priority={true} />            
        </Layout>
    );
}