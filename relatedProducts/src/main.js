import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		product: "Ice Sword"
	}
});

export default app;