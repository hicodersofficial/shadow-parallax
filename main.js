const text = document.querySelector("h1");
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", handleMousemove);

function handleMousemove(e) {
  let x = e.clientX,
    y = e.clientY;
  const widthMid = parseInt(window.innerWidth / 2);
  const heightMid = parseInt(window.innerHeight / 2);

  x = x - widthMid;
  y = heightMid - y;
  let angle = Math.atan2(y, x) * (180 / Math.PI);
  cursor.style.transform = `translate(${x + widthMid - 64}px, ${
    -y + heightMid - 31
  }px) rotate(${-angle}deg)`;
  const factor = 0.16;
  text.style.textShadow = `${-x * factor}px ${
    y * factor
  }px 5px rgba(0, 0, 0, .4)`;

  // Debugging

  // document.querySelector(".origin-angle").innerHTML = `X: ${x} : Y: ${y}`;
  // document.querySelector(".torch-angle").innerHTML = parseInt(angle) + "°";
}
