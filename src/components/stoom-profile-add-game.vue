<template>
  <div id="profileAddGame">
    <div
      class="col-span-12 md:border-solid md:border-l md:border-black md:border-opacity-25 h-full pb-12 md:col-span-10"
    >
      <div class="px-4 pt-4">
        <form action="#" class="flex flex-col space-y-8">
          <div>
            <h3 class="text-2xl">Send your crap</h3>
            <hr />
          </div>
          <div>
            <label class="text-xl">Name of the game</label>
            <input type="text" class="w-full py-1 px-2 bg-red-200" />
          </div>
          <div class="w-full">
            <label class="text-xl">Company name</label>
            <input type="text" class="w-full py-1 px-2 bg-red-200" />
          </div>
          <div class="w-full">
            <label class="text-xl">Game link</label>
            <input type="text" class="w-full py-1 px-2 bg-red-200" />
          </div>
          <div class="w-full">
            <label class="text-xl">Game image</label>
            <input type="text" class="w-full py-1 px-2 bg-red-200" />
          </div>
          <div>
            <h3 class="text-2xl">Describe the game</h3>
            <hr />
          </div>
          <div class="w-full">
            <textarea cols="30" rows="10" class="w-full py-1 px-2 bg-red-200">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem natus nobis odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, eveniet fugiat? Explicabo assumenda dignissimos quisquam perspiciatis corporis sint commodi cumque rem tempora!</textarea
            >
          </div>
          <div class="pt-4 flex justify-center">
            <button class="w-64 bg-red-300 px-2 py-1" type="submit">
              SUBMITT THE GAME
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "stoom-profile-add-game",
  props: {},
  methods: {},
};
</script>