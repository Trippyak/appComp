<script>
	import CustomSelection from "./CustomSelection.svelte";
	import { getProductDetails } from "./Api.svelte";

	let selection;
	const topic = "SWORDS!";
	const options = [
			"Fire Sword",
			"Lightning Sword",
			"Ice Sword"
		];
	
	const productSelectionChanged = async (event) => {
		const productSelection = event.detail;
		const product = await getProductDetails(productSelection);
		if (product)
			selection = product.name;
		postSelection();
	}

	const postSelection = () => {
		if (window.frames.relatedProducts)
			window.frames["relatedProducts"].postMessage({
				product: selection
			}, "http://trippyak-mobile:3001/");
	}

</script>
	
<style>
	.iframe-container {
		overflow: hidden;
		/* Calculated from the aspect ration of the content (in case of 16:9 it is 9/16= 0.5625) */
		padding-top: 56.25%;
		position: relative;
	}
	
	.iframe-container iframe {
		border: 0;
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
	}
</style>

<CustomSelection {topic} {options} on:selectionChanged={productSelectionChanged}/>
{#if selection}
	<h1>{selection}</h1>
	<div class="iframe-container">
		<iframe title="relatedProducts" name="relatedProducts" src="http://trippyak-mobile:3001/" on:load={postSelection} allowfullscreen></iframe>
	</div>
{/if}