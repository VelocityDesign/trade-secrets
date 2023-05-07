<script>
    import { state } from "../../../store";
    import { onMount } from "svelte";
    onMount(async function () {
        try {
            state.logout();
        } finally {
            state.init(null);
            push("/");
        }
    });
</script>
