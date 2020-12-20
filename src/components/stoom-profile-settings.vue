<template>
  <div id="profileSettings">
    <div
      class="col-span-12 md:border-solid md:border-l md:border-black md:border-opacity-25 h-full pb-12 md:col-span-10"
    >
      <div class="px-4 pt-4">
        <form action="#" class="flex flex-col space-y-8">
          <div>
            <h3 class="text-2xl">You can change your information now</h3>
            <hr />
          </div>
          <div>
            <label class="text-xl">Full Name</label>
            <input
              type="text"
              value="Matvej Baranov"
              class="w-full py-1 px-2 bg-blue-100"
            />
          </div>
          <div
            class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4"
          >
            <div class="w-full">
              <label class="text-xl">Username</label>
              <input
                type="text"
                value="DuckDivision"
                class="w-full py-1 px-2 bg-blue-100"
              />
            </div>
            <div class="w-full">
              <label class="text-xl">Email</label>
              <input
                type="text"
                value="baranov-matvej@mail.ru"
                class="w-full py-1 px-2 bg-blue-100"
              />
            </div>
          </div>
          <div>
            <h3 class="text-2xl">About</h3>
            <hr />
          </div>
          <div class="w-full">
            <label class="text-xl">Biography</label>
            <textarea cols="30" rows="10" class="w-full py-1 px-2 bg-blue-100">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem natus nobis odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, eveniet fugiat? Explicabo assumenda dignissimos quisquam perspiciatis corporis sint commodi cumque rem tempora!</textarea
            >
          </div>
          <div>
            <h3 class="text-2xl">Social Media</h3>
            <hr />
          </div>
          <div>
            <label class="text-xl">Instagram</label>
            <input
              type="text"
              value="https://instagram.com/"
              class="w-full py-1 px-2 bg-blue-100"
            />
          </div>
          <div>
            <label class="text-xl">Facebook</label>
            <input
              type="text"
              value="https://facebook.com/"
              class="w-full py-1 px-2 bg-blue-100"
            />
          </div>
          <div>
            <label class="text-xl">Twitter</label>
            <input
              type="text"
              value="https://twitter.com/"
              class="w-full py-1 px-2 bg-blue-100"
            />
          </div>
        </form>
      </div>
      <div class="pt-4 flex justify-center">
        <button class="bg-blue-100 px-2 py-1" type="submit">
          save changes
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "stoom-profile-settings",
  props: {},
  methods: {},
};
</script>