<template>
  <div class="gamePage">
    <div class="px-5 py-24 mx-auto">
      <div class="lg:w-3/5 mx-auto flex flex-wrap">
        <img
          alt="gameImage"
          class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
          src="https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673.png"
        />
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 class="text-sm tracking-widest">BRAND NAME</h2>
          <h1 class="text-gray-900 text-3xl mb-1">Who's Joe?</h1>
          <div class="flex mb-4">
            <span class="flex items-center">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 text-red-500"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path>
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 text-red-500"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path>
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 text-red-500"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path>
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 text-red-500"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path>
              </svg>
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 text-red-500"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path>
              </svg>
              <span class="ml-3">4 Reviews</span>
            </span>
          </div>
          <p class="leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus nulla suscipit cupiditate earum doloremque laudantium
            explicabo doloribus amet culpa, mollitia facilis nostrum quasi quod,
            tempora distinctio, voluptas ipsam aperiam neque.
          </p>
          <div class="flex py-8">
            <span class="title-font font-medium text-2xl">$69.99</span>
            <button
              class="flex ml-auto buttonBuy items-center justify-center hover:bg-red-700"
            >
              Buy
            </button>
            <button
              class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center hover:bg-yellow-500 ml-4"
            >
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <header class="text-center font-mono text-3xl py-8">
      <h3>Write your own review!</h3>
    </header>

    <div class="w-3/4 mx-auto">
      <div class="flex gap-5">
        <label class="text-xl">Rate it:</label>
        <input type="text" class="w-16 py-1 px-2 bg-red-200" />
      </div>
      <textarea cols="30" rows="10" class="w-full py-1 px-2 bg-gray-300">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem natus nobis odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, eveniet fugiat? Explicabo assumenda dignissimos quisquam perspiciatis corporis sint commodi cumque rem tempora!</textarea
      >
    </div>

    <div class="flex justify-center">
      <button class="w-3/4 bg-yellow-400 px-2 py-1" type="submit">
        Submitt review
      </button>
    </div>

    <header class="text-center font-mono text-3xl py-8">
      <h2>Reviews</h2>
    </header>

    <div class="w-3/4 mx-auto pb-8">
      <label class="text-xl">1) MY NAME IS POG:</label>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
        nihil.
      </p>
      <p>10/10</p>
    </div>
    <div class="w-3/4 mx-auto pb-8">
      <label class="text-xl">2) Banana:</label>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
        molestias quia error praesentium tempora provident eaque. Dicta vero,
        voluptates atque pariatur quo accusamus, eum tenetur doloremque fugiat
        necessitatibus, qui excepturi.
      </p>
      <p>7/10</p>
    </div>
    <div class="w-3/4 mx-auto pb-8">
      <label class="text-xl">3) HACKERMANS:</label>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
        molestiae ipsa placeat fugiat earum blanditiis aliquid magnam? Ipsam
        tenetur sit distinctio iste dolore. Libero ducimus, cum obcaecati
        consequatur veniam iste!
      </p>
      <p>2/10</p>
    </div>
    <div class="w-3/4 mx-auto pb-8">
      <label class="text-xl">4) Lorik:</label>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In similique
        laborum impedit sapiente error, aliquam animi cumque, blanditiis libero
        delectus laboriosam quisquam. Impedit dicta libero, ex quibusdam rem
        ipsa voluptates.
      </p>
      <p>7/10</p>
    </div>
  </div>
</template>
