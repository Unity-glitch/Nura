function toggleMenu(open) {
  const links = document.getElementById("mobileLinks");
  if (open) {
    links.style.display = "flex";
  } else {
    links.style.display = "none";
  }
}
