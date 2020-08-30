class DarkMode {
  static domLoaded() {
    this.updateStyles();

    const elem = document.getElementById("dark_toggle");
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
    if (this.getDarkMode()) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }
}

document.addEventListener("DOMContentLoaded", () => DarkMode.domLoaded());
