import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export function showNotification(message: string, theme: string) {
  Toastify({
    text: message,
    duration: 3000,
    gravity: "top",
    position: "center",
    style: {
      background: theme === "dark" ? "black" : "white",
      color: theme === "dark" ? "white" : "black",
    },
  }).showToast();
}
