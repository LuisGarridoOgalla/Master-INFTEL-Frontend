import "./mystyles.scss";
import logoImg from "./content/logo_1.png";

const img = document.createElement("img");

img.src = logoImg;
const logoContainer = document.getElementById("logoContainer");
if (logoContainer) {
  logoContainer.appendChild(img);
}

