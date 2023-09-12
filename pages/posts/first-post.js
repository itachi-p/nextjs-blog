import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>I'm sorry. This page is still under construction.</h1>
            <Image src="/images/nante-cotta.jpg"  height={500} width={500} alt="nante-cotta" />
        </Layout>
    );
}