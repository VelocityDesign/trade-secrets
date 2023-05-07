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
<div
    class="flex flex-col justify-center items-center space-y-3 w-screen h-screen bg-gray-800"
>
    <span class="mb-2 text-5xl"></span>
    <span class="font-sans text-6xl font-extrabold text-yellow-300"
        ></span
    >
    <p class="text-lg text-center text-gray-200 mx-15">
        
    </p>
    <button
        id="joinButton"
        class="px-4 py-2 bg-yellow-400 rounded-full transition-colors duration-400 hover:bg-yellow-500"
        ></button
    >
</div>