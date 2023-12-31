import { AppProps } from "next/app";
import "../styles/index.css";
import "../styles/home.css";
import "../styles/about.css";
import "../styles/projects.css";
import "../styles/var.css";
import "../styles/testimonials.css";
import "semantic-ui-css/semantic.min.css";

export default function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
