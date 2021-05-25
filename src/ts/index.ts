import Joystick from "./Joystick";
import { start } from "./import";
import { Snake } from "./Snake";

const joystick = new Joystick();
const snake = new Snake();

document?.addEventListener("keyup", joystick.control);
start?.addEventListener("click", () => snake.startGame());
