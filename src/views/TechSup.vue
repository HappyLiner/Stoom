<template>
  <div class="techSup">
    <div class="max-w-2xl py-10 px-5 m-auto">
      <div class="text-3xl mb-6 text-center">
        We'll never help you, don't try it
      </div>

      <div class="grid grid-cols-2 gap-4 max-w-xl m-auto">
        <div class="col-span-2 lg:col-span-1">
          <input type="text" class="textBox md:text-xl" placeholder="Name" />
        </div>
        <div class="col-span-2 lg:col-span-1">
          <input
            type="text"
            class="textBox md:text-xl"
            placeholder="Email Address"
          />
        </div>
        <div class="col-span-2">
          <textarea
            cols="30"
            rows="8"
            class="textBox md:text-xl"
            placeholder="Cry me a river"
          ></textarea>
        </div>
        <div class="col-span-2 text-right">
          <button
            class="py-3 px-6 bg-green-500 text-white font-bold w-full sm:w-32"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
