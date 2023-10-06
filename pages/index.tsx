import { Layout, Home, About, Projects } from "../components";
import Head from "next/head";

export default function Index() {
	return (
		<>
			<Layout>
				<Head>
					<title>{`Portfolio`}</title>
				</Head>
				<>
					<Home />
					<About />
					<Projects />
				</>
			</Layout>
		</>
	);
}
