<template>
  <div class="profSettings">
    <div class="w-full relative overflow-hidden">
      <div class="top h-64 w-full overflow-hidden relative">
        <img
          src="https://images.alphacoders.com/106/thumb-1920-1062752.jpg"
          alt=""
          class="bg w-full h-full object-cover object-center absolute z-0"
        />
        <div
          class="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-25 text-white"
        >
          <img
            src="https://cdn.frankerfacez.com/emoticon/405548/4"
            class="h-24 w-24 object-cover"
          />
          <h1 class="text-2xl">Turtle pepega</h1>
          <h4 class="text-sm">WEB DEV GOOD</h4>
        </div>
      </div>
      <div class="grid grid-cols-12">
        <div
          class="col-span-12 w-full px-3 py-6 justify-center flex space-x-4 md:space-x-0 md:space-y-4 md:flex-col md:col-span-2 md:justify-start"
        >
          <router-link to="/Prof" class="text-sm p-2 text-center">
            Information</router-link
          >
          <router-link
            to="/profSettings"
            class="text-sm p-2 text-center bg-yellow-500"
            >Settings</router-link
          >
          <router-link to="/addGame" class="text-sm p-2 text-center"
            >Add new game</router-link
          >
          <router-link to="/addPromo" class="text-sm p-2 text-center"
            >Promotion</router-link
          >
        </div>
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
                <textarea
                  cols="30"
                  rows="10"
                  class="w-full py-1 px-2 bg-blue-100"
                >
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
            <button class="bg-yellow-400 px-2 py-1" type="submit">
              save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
