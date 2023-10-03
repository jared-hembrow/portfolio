import { AppProps } from "next/app";
import "../styles/index.css";
import "../styles/home.css";
import "../styles/about.css";
import "../styles/var.css";
import "semantic-ui-css/semantic.min.css";

export default function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
