dark_mode = !!Cookies.get("dark_mode");
console.log(Cookies.get());
console.log(dark_mode);
function toggleDarkMode() {
  dark_mode = !dark_mode;
  Cookies.set("dark_mode", dark_mode);
  console.log(dark_mode);
}
