function toggleMenu(open) {
  const links = document.getElementById("mobileLinks");
  if (!open) {
    links.style.display = "none";
  } else {
    links.style.display = "flex";
  }
}
