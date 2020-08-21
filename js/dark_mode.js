class DarkMode {
  static domLoaded() {
    this.DarkBG =
      getComputedStyle(document.body).getPropertyValue("--dark-bg-color");
    this.LightBG =
      getComputedStyle(document.body).getPropertyValue("--light-bg-color");
    this.DarkText =
      getComputedStyle(document.body).getPropertyValue("--dark-text-color");
    this.LightText =
      getComputedStyle(document.body).getPropertyValue("--light-text-color");

    this.updateStyles();

    var elem = document.getElementById("dark_toggle");
    elem.checked = this.getDarkMode();
    elem.addEventListener("click", () => this.toggleDarkMode());
  }

  static setDarkMode(dark_mode) {
    Cookies.set("dark_mode", dark_mode);
  }

  static toggleDarkMode() {
    this.setDarkMode(!this.getDarkMode());
    this.updateStyles();
  }

  static getDarkMode() {
    return (Cookies.get("dark_mode") !== "false");
  }

  static updateStyles() {
    var dark_mode = this.getDarkMode();
    document.body.style.setProperty(
      "--main-bg-color",
      dark_mode ? this.DarkBG : this.LightBG);
    document.body.style.setProperty(
      "--main-text-color",
      dark_mode ? this.DarkText : this.LightText);

    if (dark_mode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }
}

document.addEventListener("DOMContentLoaded", () => DarkMode.domLoaded());
