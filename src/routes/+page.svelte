<script>
    let user = { nickname: "TheAwesomeJayla" };
</script>

<div
    class="flex flex-col justify-center items-center space-y-3.5 w-screen h-screen bg-gray-800"
>
    <span class="font-sans text-6xl font-extrabold text-yellow-300"
        >Trade Secrets</span
    >
    <div class="flex flex-row space-x-2 text-lg font-normal">
        <button
            class="px-4 py-2 bg-yellow-400 rounded-full transition-colors duration-400 hover:bg-yellow-500"
            >Start Game</button
        >
        <button
            class="px-4 py-2 bg-yellow-400 rounded-full transition-colors duration-400 hover:bg-yellow-500"
            >Join Game</button
        >
    </div>
    <div class="flex flex-col text-center text-gray-400">
        <span>Signed in as {user.nickname}.</span>
        <a href="/logout/" class="text-gray-500 underline">Not you? Sign out.</a>
    </div>
</div>
<div class="flex flex-col justify-center items-center bg-gray-900" />
