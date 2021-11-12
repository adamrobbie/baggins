<script lang="ts">
  import {  connected, solanaNetwork } from './src/stores';
  import { MAINNET_RPC_API_URL } from './src/helpers/config';

  export let name;

  solanaNetwork.update(() => MAINNET_RPC_API_URL);
</script>

<style>
  h1 {
    color: #FF3E00;
  }
</style>
<main>
  <h1>Hello {name}!</h1>

  {#if $connected}
    <p style="color: green">Connected to {$adapter?.publicKey}</p>
  {:else}
    Wallet :-)
  {/if}
  
</main>
