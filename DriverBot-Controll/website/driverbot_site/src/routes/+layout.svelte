<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import GithubIcon from "../githubIcon.svelte";
	import TiktokIcon from '../tiktokIcon.svelte';
	import YoutubeLogo from '../youtubeLogo.svelte';
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Driver Bot</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">

				<div class=" logo-cloud grid-cols-3 lg:!grid-cols-3 gap-1 w-36 h-42">
					<!-- lg:!grid-cols-3 -->
					<a href="https://github.com/Adrian-Damianovici" target="_blank" class=" logo-item variant-filled">
						<svelte:component this={GithubIcon} />
					</a>
					<a href="https://www.tiktok.com/@theobnoxiouspig" target="_blank" class="logo-item variant-filled">
						<svelte:component this={TiktokIcon} />
					</a>
					<a href="https://www.youtube.com/channel/UC2eN3ft0DKqTo6kSbJDm5ow" target="_blank" class="logo-item variant-filled">
						<svelte:component this={YoutubeLogo} />
					</a>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
<style lang="postcss">
	:global(body) {
		@apply bg-gradient-to-t from-secondary-500  from-20% to-tertiary-500
	}
</style>
