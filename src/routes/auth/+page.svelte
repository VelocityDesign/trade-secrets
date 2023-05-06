<script>
    import { sdk } from "../../appwrite";
    import { ID } from "appwrite"
    import { goto } from "$app/navigation";
    let email = "";

    async function startAuth(event) {
        event.preventDefault();
        let magicLinkStatus = sdk.account.createMagicURLSession(ID.unique(), email);
        Promise.resolve(magicLinkStatus).then(
            function (response) {
                goto("/auth/sent/")
            },
            function (error) {
                console.log(error);
            }
        );
    }
</script>

<div
    class="flex flex-col justify-center items-center space-y-3 w-screen h-screen bg-gray-800"
>
    <span class="mb-2 text-5xl md:text-6xl">👥</span>
    <span class="font-sans text-6xl font-extrabold text-yellow-300"
        >Sign In</span
    >
    <form
        on:submit|preventDefault={startAuth}
        class="flex flex-col justify-center items-center space-y-1.5"
    >
        <input
            class="px-4 py-2 text-white bg-gray-700 rounded-full"
            type="email"
            id="email"
            placeholder="email"
            name="email"
            bind:value={email}
            required
        />
        <button
            type="submit"
            class="px-4 py-2 bg-yellow-400 rounded-full transition-colors duration-400 hover:bg-yellow-500"
            >Let's Go!</button
        >
    </form>
</div>
