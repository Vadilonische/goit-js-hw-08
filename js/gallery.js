const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

// const li = document.createElement("li");
// li.classList.add("gallery-item");

// const a = document.createElement("a");
// a.classList.add("gallery-link");
// a.setAttribute(
//   "href",
//   "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg"
// );

// const img = document.createElement("img");
// img.classList.add("gallery-image");
// img.setAttribute(
//   "src",
//   "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg"
// );
// img.setAttribute(
//   "data-source",
//   "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg"
// );
// img.setAttribute("alt", "Hokkaido Flower");

// a.appendChild(img);
// li.appendChild(a);

// const gallery = document.querySelector(".gallery");
// gallery.appendChild(li);
// a.addEventListener("click", function (event) {
//   event.preventDefault();
// });

//===================================================//

// function addImageToGallery(src, dataSrc, alt) {
//   const li = document.createElement("li");
//   li.classList.add("gallery-item");

//   const a = document.createElement("a");
//   a.classList.add("gallery-link");
//   a.setAttribute("href", "dataSrc");

//   const img = document.createElement("img");
//   img.classList.add("gallery-image");
//   img.setAttribute("src", src);
//   img.setAttribute("data-source", dataSrc);
//   img.setAttribute("alt", alt);

//   a.appendChild(img);
//   li.appendChild(a);

//   const gallery = document.querySelector(".gallery");
//   gallery.appendChild(li);
//   a.addEventListener("click", function (event) {
//     event.preventDefault();
//   });
// }
// addImageToGallery(
//   "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
//   "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
//   "Hokkaido Flower"
// );
// addImageToGallery(
//   "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
//   "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
//   "Container Haulage Freight"
// );
// addImageToGallery(
//   "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
//   "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
//   "Flower Blooms"
// );
// addImageToGallery(
//   "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
//   "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
//   "Alpine Mountains"
// );
// addImageToGallery(
//   "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
//   "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
//   "Mountain Lake Sailing"
// );
// addImageToGallery(
//   "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
//   "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
//   "Alpine Spring Meadows"
// );
// addImageToGallery(
//   "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
//   "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
//   "Nature Landscape"
// );
// addImageToGallery(
//   "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
//   "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
//   "Lighthouse Coast Sea"
// );

//==================================================//

/* <li class="gallery-item">
  <a class="gallery-link" href="large-image.jpg">
    <img
      class="gallery-image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</li> */
const gallery = document.querySelector(".gallery");
images.forEach((image) => {
  const li = document.createElement("li");
  li.classList.add("gallery-item");

  const a = document.createElement("a");
  a.classList.add("gallery-link");
  a.setAttribute("href", image.original);

  const img = document.createElement("img");
  img.classList.add("gallery-image");
  img.setAttribute("src", image.preview);
  img.setAttribute("data-source", image.original);
  img.setAttribute("alt", image.description);

  a.appendChild(img);
  li.appendChild(a);

  gallery.appendChild(li);
  a.addEventListener("click", function (event) {
    event.preventDefault();
  });
});
