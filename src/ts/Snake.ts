import { GlobalData } from "./GlobalData";
import appleGenerator from "./AppleGenerator";
import { GameControl } from "./GameControl";
import mapGenerator from "./MapGenerator";
const game = mapGenerator.getBoard();

export class Snake extends GameControl {
  private PlaySnake() {
    const Pop = GlobalData.player.pop() as number;
    GlobalData.player.unshift(
      GlobalData.currentPosition + GlobalData.player[0]
    );

    game[Pop].classList.remove("character");
    GlobalData.player.forEach((index) =>
      game[index].classList.add("character")
    );

    let wall = game[GlobalData.player[0]].classList.contains("wall");
    let collision = game[GlobalData.player[0]].classList.contains("apple");

    if (wall) this.GameOver();
    if (collision) this.Collision();
  }

  public startGame() {
    GlobalData.counter += 1;

    if (GlobalData.counter <= 1) {
      appleGenerator.randomApple();
      GlobalData.PlayTimer = setInterval(
        () => this.PlaySnake(),
        GlobalData.IntervalTime
      );
    }
  }
}
