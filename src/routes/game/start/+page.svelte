<script>
    import { state } from "../../../store";
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    onMount(async () => {
        try {
            const account = await sdk.account.get();
            state.init(account);
        } catch (error) {
            state.init(null);
        } finally {
            if (!$state.account) {
                goto("/auth/");
            }
            console.log($state)
        }
    });
</script>
