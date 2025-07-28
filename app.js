const images = [
  {
    src: "./assets/b_20250629_728_trophies_FD1_0943.webp",
    alt: "Trophies displayed on Centre Court before the final",
  },

  {
    src: "./assets/b_BQ103181-450648_trophy_2633_20250713.avif",
    alt: "Wimbledon trophy being engraved with Sinner's name",
  },

  {
    src: "./assets/b_AB108949-450916_jannikchampion_2739_20250714.avif",
    alt: "Jannik Sinner holding the Wimbledon 2025 trophy standing next to the champions board",
  },

  {
    src: "./assets/b_FE2_8535-450629__312_130725.avif",
    alt: "Jannik Sinner and Carlos Alcaraz with their Wimbledon Trophies",
  },

  {
    src: "./assets/b_JM2_1282-450603_jannikchampion_2750_20250714.avif",
    alt: "Jannik Sinner kissing the Wimbledon trophy",
  },

  {
    src: "./assets/b_TL100705__211_120725.jpg",
    alt: "Iga Swiatek at the famous south west balcony after displaying her Venus Rose water dish to the spectators gathered below",
  },
  {
    src: "./assets/b_RJ3_5897-445088_ladiesfinal25_2468_20250712.webp",
    alt: "Iga Swiatek the Wimbledon Ladies' singles champion kissing the trophy",
  },
  {
    src: "./assets/b_SB3_7074-444884_ladiesfinal25_2471_20250712.webp",
    alt: "Iga Swiatek celebrating after her winning the final set in the ladies finals",
  },

  {
    src: "./assets/b_AB203302-450978_jannikchampion_2742_20250714.webp",
    alt: "Jannik Sinner and Carlos Alcaraz with their trophies",
  },

  {
    src: "./assets/b_FE1_0343-448568_ladiesdubsfinal_2600_20250713.avif",
    alt: "Ladies' doubles winner Kudermetova and Mertens celebrating ",
  },

  {
    src: "./assets/b_SB3_2883-443992_cash_glasspool_016_071225.avif",
    alt: "British lads Cash and Glasspool lifting their trophies after winning the gentlemen's doubles",
  },
  {
    src: "./assets/b_PN022028-443461__127_120725.avif",
    alt: "Wang with the ladies wheelchair singles trophy",
  },
  {
    src: "./assets/b_IW7_2546-448003_oda_016_071325.avif",
    alt: "Oda kissing the trophy after winning the Gentlemen's wheelchair singles",
  },

  {
    src: "./assets/b_JJ090459-449278_mensfinal25_2605_20250713.avif",
    alt: "Carlos Alcaraz stretching to return a shot in the Gentlemens singles final",
  },
  {
    src: "./assets/b_PN028746-450394_mensfinal25_2630_20250713.avif",
    alt: "Jannik Sinner and Carloz Alcaraz at the nets congratulating each other after the finals",
  },

  {
    src: "./assets/b_SB2_4656_day12highlights_2421_20250712.jpg",
    alt: "Carlos Alcaraz in action, a blurry image of the future GOAT",
  },
  {
    src: "./assets/b_SB2_5671_day12highlights_2422_20250712.webp",
    alt: "Carlos Alcaraz serving, a spectacular blurry image with the crowd in the background",
  },
  {
    src: "./assets/b_JM2_6040-434829_djokocob_2289_20250709.avif",
    alt: "Djokovic the GOAT, doing the usual age defying returns during his quarterfinal match",
  },

  {
    src: "./assets/b_JN3_1011-435604_djokocob_2306_20250709.webp",
    alt: "Djokovic, the GOAT leaving the centre court after the semi final defeat. Crowd giving a standing ovation.",
  },

  {
    src: "./assets/b_JN1_6134-441501_day12highlights_2412_20250712.avif",
    alt: "Spectacular Carlos Alcaraz jumping and stretching to return a serve",
  },

  {
    src: "./assets/b_SB2_7135-441264_alcafrit_2507_20250711.avif",
    alt: "Alcaraz celebrating after beating Taylor Fritz in the semis",
  },

  {
    src: "./assets/b_TB1_7710-419142_radsab_1461_20250704.avif",
    alt: "Raducanu celebrating her set win against Sabalenka",
  },
  {
    src: "./assets/b_IW6_1248-419256_radsab_1455_20250704.jpg",
    alt: "British Number 1 Raducanu waving after her match with Sabelenka",
  },
  {
    src: "./assets/b_TB1_9901-444991__205_120725.avif",
    alt: "Pohankova emotional after winning the girls singles event",
  },

  {
    src: "./assets/b_IW7_5192-448487_ivanov_032_071325.avif",
    alt: "Ivanov kissing the trophy after winning the Boy's singles",
  },
];

const mainImage = document.getElementById("mainImage");
const thumbnailContainer = document.getElementById("thumbnailContainer");
let currentIndex = 0;

function updateMainImage(index) {
  mainImage.src = images[index].src;
  mainImage.alt = images[index].alt;

  const allThumbs = document.getElementsByClassName("thumb");
  for (let i = 0; i < allThumbs.length; i++) {
    allThumbs[i].classList.remove("selected");
  }
  allThumbs[index].classList.add("selected");

  currentIndex = index;
}

for (let i = 0; i < images.length; i++) {
  const thumb = document.createElement("img");
  thumb.src = images[i].src;
  thumb.alt = images[i].alt;
  thumb.className = "thumb";

  if (i === 0) {
    thumb.classList.add("selected");
    mainImage.src = images[i].src;
    mainImage.alt = images[i].alt;
  }

  thumb.addEventListener("click", function () {
    updateMainImage(i);
  });

  thumbnailContainer.appendChild(thumb);
}

const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

prevButton.addEventListener("click", function () {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateMainImage(currentIndex);
});

nextButton.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % images.length;
  updateMainImage(currentIndex);
});
