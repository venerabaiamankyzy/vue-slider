const { createApp } = Vue;

createApp({
  data() {
    return {
      movie: {
        title: [
          "Marvel's Spiderman Miles Morale",
          "Ratchet &amp; Clank: Rift Apart",
          "Fortnite",
          "Stray",
          "Marvel's Avengers",
        ],

        text: [
          "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
          "Go dimension-hopping with Ratchet and Clank as they take on anevil emperor from another reality.",
          "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting,shootouts and chaos.",
          "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
          "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
        ],

        images: [
          "../img/01.webp",
          "../img/02.webp",
          "../img/03.webp",
          "../img/04.webp",
          "../img/05.webp",
        ],

        activeImage: 0,
        activeTitle: 0,
        activeText: 0,
      },
    };
  },

  methods: {
    switchToImage(index) {
      this.movie.activeImage = index;
      this.movie.activeTitle = index;
      this.movie.activeText = index;
    },
  },
}).mount("#app");
