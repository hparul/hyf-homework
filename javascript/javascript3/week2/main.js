function moveElement(boxToMove, newPosition) {
  return new Promise((resolve) => {
    boxToMove.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px)`;
    boxToMove.addEventListener("transitionend", resolve);
  });
}

window.moveElement = moveElement;

// This code will move the li to the position 100, 100. Calling moveElement will return a promise that resolves after the li element has been moved.

function translateOneByOne() {
  moveElement(document.getElementById("red"), { x: 20, y: 300 }).then(() => {
    console.log("red ball has been moved");

    moveElement(document.getElementById("blue"), { x: 400, y: 300 }).then(
      () => {
        console.log("blue ball has been moved");

        moveElement(document.getElementById("green"), { x: 400, y: 20 }).then(
          () => {
            console.log("green ball has been moved");
          }
        );
      }
    );
  });
}
translateOneByOne();

//hitting targets at same time
function moveElement(boxToMove, newPosition) {
  return new Promise((resolve) => {
    boxToMove.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px)`;
    boxToMove.addEventListener("transitionend", resolve);
  });
}

window.moveElement = moveElement;

function translateAllAtOnce() {
  Promise.all([
    moveElement(document.getElementById("red"), { x: 20, y: 300 }),
    moveElement(document.getElementById("blue"), { x: 400, y: 300 }),
    moveElement(document.getElementById("green"), { x: 400, y: 20 }),
  ]).then(() => {
    console.log("all balls has been moved at same time");
  });
}

//translateAllAtOnce();
