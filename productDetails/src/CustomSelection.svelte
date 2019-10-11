<script>
	import { createEventDispatcher } from "svelte";
	const dispatch = createEventDispatcher();
	
	let selection;
	export let topic;
	export let options = [];
	const selectionChanged = () =>
	{
		if (selection && selection !== topic)
			dispatch("selectionChanged", selection);
	}
</script>

<select bind:value={selection} on:change="{selectionChanged}">
	<option value="">{topic}</option>
	{#each options as option}
		<option value={option}>
			{option}
		</option>
	{/each}
</select>