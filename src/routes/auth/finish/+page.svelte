<script>
    import { sdk } from "../../../appwrite";
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { state } from "../../../store";

    let emoji = "";
    let heading = "";
    let para = "";
    let bt = "";

    onMount(async function () {
        let userId = $page.url.searchParams.get("userId");
        let secret = $page.url.searchParams.get("secret");
        let promise = state.login(userId, secret);
        
        promise.then(
            async function (response) {
                console.log(response)
                emoji = "✅";
                heading = "You're In";
                para =
                    "You're... you! Congratulations! You can get back to playing now...";
                bt = "Let's Go!"
            },
            function (error) {
                console.log(error)
                emoji = "🚫";
                heading = "Uh-oh";
                para = "Did you click the right link?";
                bt = "Go home"
            }
        );
    });
    function navigateHome() {
        goto("/")
    }
</script>

<div
    class="flex flex-col justify-center items-center space-y-3 w-screen h-screen bg-gray-800"
>
    <span class="mb-2 text-5xl">{emoji}</span>
    <span class="font-sans text-6xl font-extrabold text-yellow-300"
        >{heading}</span
    >
    <p class="text-lg text-center text-gray-200 mx-15">
        {para}
    </p>
    <button
        on:click={navigateHome}
        id="joinButton"
        class="px-4 py-2 bg-yellow-400 rounded-full transition-colors duration-400 hover:bg-yellow-500"
        >{bt}</button
    >
    <p>{JSON.stringify($state.account)}</p>
</div>
