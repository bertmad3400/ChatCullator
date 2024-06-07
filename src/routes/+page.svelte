<script lang="ts">
	let calcContent = '1+1';

	const isNr = (char: string) => !isNaN(parseInt(char));
	const lastIsNr = (str: string) => isNr(str.at(-1) ?? '');

	const spaceCalcContent = (content: string) =>
		content
			.split('')
			.map((c) => (isNr(c) || c == '.' ? c : ' ' + c + ' '))
			.join('');

	const addSymbol = (symbol: string) =>
		(calcContent = lastIsNr(calcContent)
			? calcContent + symbol
			: calcContent.slice(0, -1) + symbol);
</script>

<main class="w-screen h-screen flex flex-col justify-center items-center">
	<div class="bg-primary-500 w-full h-1/2" />
	<div class="bg-secondary-950 w-full h-1/2" />

	<div
		class="
    w-[30rem] h-[45rem]
    bg-secondary-900 absolute
    shadow-black shadow-xl
    flex flex-col
  "
	>
		<p
			class="
      flex justify-end items-center
      px-4 h-28 text-right
      text-white font-bold text-6xl
    "
		>
			{spaceCalcContent(calcContent)}
		</p>

		<section class="grow grid grid-cols-4 grid-rows-5 gap-1 bg-secondary-950">
			<button class="primary" on:click={() => (calcContent = '')}>AC</button>
			<button
				class="primary"
				on:click={() => (calcContent = calcContent.slice(0, calcContent.length - 1))}>DEL</button
			>
			<button class="primary" on:click={() => addSymbol('/')}>/</button>
			<button class="primary" on:click={() => addSymbol('x')}>X</button>

			{#each [7, 8, 9] as nr}
				<button class="secondary" on:click={() => (calcContent += nr)}>{nr}</button>
			{/each}

			<button class="primary" on:click={() => addSymbol('-')}>-</button>

			{#each [4, 5, 6] as nr}
				<button class="secondary" on:click={() => (calcContent += nr)}>{nr}</button>
			{/each}

			<button class="primary" on:click={() => addSymbol('+')}>+</button>

			{#each [1, 2, 3] as nr}
				<button class="secondary" on:click={() => (calcContent += nr)}>{nr}</button>
			{/each}

			<button
				class="
        row-span-2
        bg-primary-500 hover:bg-primary-400
      ">=</button
			>

			<button
				class="secondary col-span-2"
				on:click={() => {
					if (lastIsNr(calcContent)) calcContent += 0;
				}}>0</button
			>
			<button
				class="secondary"
				on:click={() => {
					if (!lastIsNr(calcContent)) return;
					const splitContent = calcContent.split(/[^\d\.]+/g);
					if (splitContent.length > 0 && !splitContent.at(-1)?.includes('.')) calcContent += '.';
				}}>.</button
			>
		</section>
	</div>
</main>

<style lang="postcss">
	section {
		button {
			@apply w-full h-full text-4xl text-white;

			&.primary {
				@apply bg-secondary-600 hover:bg-secondary-500 font-bold;
			}

			&.secondary {
				@apply bg-secondary-900 hover:bg-secondary-700;
			}

			@apply transition-all duration-300;

			&:active {
				@apply scale-95;
			}
		}
	}
</style>
