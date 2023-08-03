let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector("#quote-of-the-day").textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
  function part1() {
    let mainT = document.querySelector("#main-title");
    return (mainT.innerHTML = "<h1>Hi my name is Dom</h1>");
  }
  part1();

  // Part 2
  //Select the body and change the background-color to a new color of your choice.

  function part2() {
    let newBgc = document.querySelector("body");
    return (newBgc.style.backgroundColor = "skyblue");
  }
  part2();

  // Select DOM's Favorite Things list and remove the last list item.
  // Part 3

  function part3() {
    let rmvLi = document.getElementById("favorite-things");
    const li = rmvLi.lastElementChild;
    rmvLi.removeChild(li);
  }
  part3();

  // Part 4

  // Select all .special-title class elements and change their font-size to 2rem. Remember you might have to iterate through the list of elements

  function part4() {
    let sp = document.querySelectorAll(".special-title");
    sp.forEach((el) => {
      el.style.fontSize = "2rem";
    });
  }
  part4();

  //Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.

  // Part 5

  function part5() {
    const pastRaces = document.getElementById("past-races");
    const locations = pastRaces.children;
    for (let i = 0; i < locations.length; i++) {
      if (locations[i].textContent === "Chicago") {
        pastRaces.removeChild(locations[i]);
      }
    }
  }
  part5();

  //Creating New DOM Elements

  //Let's add to DOM's Past Races list. Create a new <li>element, change the new <li>text to the name of a city, and append it to the Past Races list.

  // Part 6
  function part6() {
    const pastRaces = document.getElementById("past-races");
    const newRace = document.createElement("li");
    const ctn = document.createTextNode("Cincinnati");
    pastRaces.appendChild(ctn);
  }
  part6();

  //Create a new .blog-post corresponding to the new city added in Part 6. You will have to create a new <div>with class of .blog-post, a new <h2>with text, and a new <p>with some text. Think about what order you want to create the elements, and what order you want to append them in.

  // Part 7

  function part7() {
    const step0 = document.getElementById("past-races");

    const step1 = document.createElement("div");
    step1.classList.add("blog-post");

    const step2 = document.createElement("h2");
    step2.textContent = "Cincinnati";

    const step3 = document.createElement("p");
    step3.textContent = "Cincinnati is fun";

    step1.appendChild(step2);
    step1.appendChild(step3);

    step0.appendChild(step1);
  }
  part7();
  //

  // Event Handlers

  // Part 8
  // Query select the #quote-title ID element and add a click event handler. That event handler should use the function randomQuote whenever #quote-title is clicked.

  function part8() {
    const quote = document.querySelector("#quote-title");
    quote.addEventListener("click", randomQuote);
  }
  part8();

  // Part 9
  //Select all .blog-post class elements. Iterate through the list of .blog-post class elements and apply two event handlers to each node. The first event handler should be listening for mouseout events while the second handler should be listening for mouseenter events.
  // AI completely helped me with this one

  function part9() {
    const step0 = document.querySelectorAll(".blog-post");

    step0.forEach((bp) => {
      bp.addEventListener("mouseout", () => {
        bp.classList.toggle("purple");
      });

      bp.addEventListener("mouseenter", () => {
        bp.classList.toggle("red");
      });
    });
  }
  part9();
});
