<script>
	import { getRelatedProducts } from "./Api.svelte";
	
	let product;
	let relatedProducts = [];
	
	const onProductChanged = async (event) => {
		product = event.data.product;
		const data = await getRelatedProducts(product);
		relatedProducts = data.relatedProducts;
	}
</script>
	
<style>
</style>

<svelte:window on:message|preventDefault={onProductChanged} />
{#if relatedProducts !== []}
	<h1>Products Related to {product}</h1>
	{#each relatedProducts as relatedProduct}
		<p>{relatedProduct}</p>
	{/each}
{/if}