import { GlobalData } from "./GlobalData";

class Joystick {
  public control(event: KeyboardEvent) {
    let code = event.keyCode;

    if (code === 68) {
      GlobalData.currentPosition = 1;
    } else if (code === 87) {
      GlobalData.currentPosition = -GlobalData.width;
    } else if (code === 65) {
      GlobalData.currentPosition = -1;
    } else if (code === 83) {
      GlobalData.currentPosition = +GlobalData.width;
    }
  }
}
export default Joystick;
