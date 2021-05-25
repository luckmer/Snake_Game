import { Points } from "./import";
import { GlobalData } from "./GlobalData";
import appleGenerator from "./AppleGenerator";
import mapGenerator from "./MapGenerator";
const game = mapGenerator.getBoard();

export class GameControl {
  protected GameOver() {
    GlobalData.player = [28, 27, 26];
    GlobalData.currentPosition = 1;
    GlobalData.IntervalTime = 200;
    GlobalData.randomBlockNumber = 65;
    GlobalData.snakeStart = true;
    GlobalData.CollectedPoints = 0;
    GlobalData.width = 12;
    GlobalData.counter = 0;
    GlobalData.Points = 0;
    game.forEach((el) => {
      el.classList.remove("character");
      el.classList.remove("apple");
    });
    Points ? (Points.innerHTML = `${GlobalData.Points}`) : 0;
    clearInterval(GlobalData.PlayTimer);
  }

  protected Collision() {
    const Pop = GlobalData.player.pop() as number;
    GlobalData.Points += 1;
    game.forEach((el) => el.classList.remove("apple"));
    GlobalData.player.unshift(
      GlobalData.player[0] + GlobalData.currentPosition
    );

    GlobalData.player.push(Pop);
    appleGenerator.randomApple();
    Points ? (Points.innerHTML = `${GlobalData.Points}`) : 0;
  }
}
