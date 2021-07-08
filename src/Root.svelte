<App
    name='MyApp'
    theme='auto'
    id='com.website'
    statusbar={{
        iosOverlaysWebView: true,
        androidOverlaysWebView: false,
    }}
>
    <Popups />
</App>

<script lang="ts">
import { App,Button } from 'framework7-svelte';
import Popups from './lib/Popups.svelte';
</script>