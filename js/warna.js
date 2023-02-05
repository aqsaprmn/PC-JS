const container = document.querySelector(".container");
const otomatis = document.querySelector(".otomatis");
const span = document.querySelector(".container h4 span");

const refresh = document.querySelector(".container input[value=Refresh]");

refresh.onclick = () => {
  window.location.reload();
};

//Tambah Botton Baru Ubah Warna
const creBtnBaru = document.createElement("button");
const textBtnBaru = document.createTextNode("Sini Ubah Warna Random");
creBtnBaru.appendChild(textBtnBaru);
container.appendChild(creBtnBaru);

creBtnBaru.classList.add("btn");

//Tambah Button Baru clerInterval
const SButton = document.createElement("button");
const textSButton = document.createTextNode("Stop");
SButton.appendChild(textSButton);
otomatis.appendChild(SButton);

SButton.classList.add("btn");

//Tambah Button Baru clerInterval
const OButton = document.createElement("button");
const textOButton = document.createTextNode("Go");
OButton.appendChild(textOButton);
otomatis.appendChild(OButton);

OButton.classList.add("btn");

function acakRgb() {
  return Math.floor(Math.random() * (255 + 1));
}

creBtnBaru.addEventListener("click", function () {
  const red = acakRgb();
  const green = acakRgb();
  const blue = acakRgb();
  const bgBody = (document.body.style.backgroundColor =
    "rgb(" + red + " , " + green + " , " + blue + ")");
  span.textContent = bgBody;
});

const iRed = document.querySelector(".box input[name=red]");
const iGreen = document.querySelector(".box input[name=green]");
const iBlue = document.querySelector(".box input[name=blue]");
// console.log(iRed.value);

const input = document.querySelectorAll(".box input");

input.forEach(function (e) {
  console.log(e);
  e.addEventListener("input", function () {
    document.body.style.backgroundColor =
      "rgb(" + iRed.value + " , " + iGreen.value + " , " + iBlue.value + ")";
    span.textContent =
      "rgb(" + iRed.value + " , " + iGreen.value + " , " + iBlue.value + ")";
  });
});

// iRed.addEventListener('input' , function () {
//     document.body.style.backgroundColor = 'rgb('+ iRed.value +' , ' + iGreen.value + ' , ' + iBlue.value + ')';
//  })

//  iGreen.addEventListener('input' , function () {
//     document.body.style.backgroundColor = 'rgb('+ iRed.value +' , ' + iGreen.value + ' , ' + iBlue.value + ')';
//  })

//  iBlue.addEventListener('input' , function () {
//     document.body.style.backgroundColor = 'rgb('+ iRed.value +' , ' + iGreen.value + ' , ' + iBlue.value + ')';
//  })

const uMouse = document.getElementById("uMouse");
const uMatiMouse = document.getElementById("uMatiMouse");
// console.log(uMatiMouse);

function gerakinMouse(e) {
  const Red = Math.round((e.clientX / window.innerWidth) * 255);
  const Green = Math.round((e.clientY / window.innerHeight) * 255);
  const Blue = Math.round((e.clientY / window.innerHeight) * 255);

  console.log(e.clientX, e.clientY);
  document.body.style.backgroundColor =
    "rgb( " + Red + " , " + Green + " , " + Blue + ")";
  span.textContent = "rgb(" + Red + " , " + Green + " , " + Blue + ")";
}

function ubahWarnaMouse() {
  document.body.addEventListener("mousemove", gerakinMouse);
}

uMouse.addEventListener("click", ubahWarnaMouse);

function removeHandler() {
  document.body.removeEventListener("mousemove", gerakinMouse);
}

uMatiMouse.addEventListener("click", removeHandler);

const setiap = document.querySelector(".otomatis input[name=setiap]");
const lama = document.querySelector(".otomatis input[name=lama]");
OButton.addEventListener("click", function () {
  console.log(setiap.value, lama.value);
  if (
    (lama.value == null && setiap.value == null) ||
    (lama.value == "" && setiap.value == "") ||
    (!lama.value && !setiap.value)
  ) {
    const gas = setInterval(function () {
      const red = acakRgb();
      const green = acakRgb();
      const blue = acakRgb();
      const bgBody = (document.body.style.backgroundColor =
        "rgb(" + red + " , " + green + " , " + blue + ")");
      span.textContent = bgBody;
    }, 1000);
    SButton.addEventListener("click", function () {
      clearInterval(gas);
    });
  } else {
    const gas = setInterval(function () {
      const red = acakRgb();
      const green = acakRgb();
      const blue = acakRgb();
      const bgBody = (document.body.style.backgroundColor =
        "rgb(" + red + " , " + green + " , " + blue + ")");
      span.textContent = bgBody;
      OButton.setAttribute("disabled", "");
      console.log(setiap.value, lama.value);
    }, parseInt(setiap.value + "000"));

    const gasLama = setTimeout(function () {
      clearInterval(gas);
      clearTimeout(gasLama);
      OButton.removeAttribute("disabled");
    }, parseInt(lama.value + "000"));

    SButton.addEventListener("click", function () {
      clearInterval(gas);
      clearTimeout(gasLama);
      OButton.removeAttribute("disabled");
    });
  }
});
