<script lang="ts">
  import "../app.postcss";
  import { pwaInfo } from 'virtual:pwa-info';
  import {onMount} from "svelte";

  // Adapted from https://vite-pwa-org.netlify.app/frameworks/sveltekit.html
  onMount(async () => {
    if (pwaInfo) {
      const { registerSW } = await import('virtual:pwa-register');
      registerSW({
        immediate: true,
        onRegistered(r: ServiceWorkerRegistration) {
          // uncomment following code if you want check for updates
          // r && setInterval(() => {
          //    console.log('Checking for sw update')
          //    r.update()
          // }, 20000 /* 20s for testing purposes */)
          console.log("SW Registered:", r);
        },
        onRegisterError(error: any) {
          console.log('SW registration error', error)
        }
      })
    }
  })

  $: webManifestLink = pwaInfo ? pwaInfo.webManifest.linkTag : ''
</script>

<svelte:head>
    {@html webManifestLink}
</svelte:head>

<slot></slot>
