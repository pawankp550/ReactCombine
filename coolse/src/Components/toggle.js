
export default function classToggle() {
  const navs = document.querySelectorAll('.nav_Link')
  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}
