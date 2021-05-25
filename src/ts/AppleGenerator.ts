import { GlobalData } from "./GlobalData";
import mapGenerator from "./MapGenerator";

class AppleGenerator {
  randomApple() {
    const game = mapGenerator.getBoard();

    while (
      (game[GlobalData.randomBlockNumber].classList.contains("character") &&
        game[GlobalData.randomBlockNumber].id === "0") ||
      game[GlobalData.randomBlockNumber].classList.contains("wall")
    ) {
      GlobalData.randomBlockNumber = Math.floor(Math.random() * game.length);
    }

    if (!game[GlobalData.randomBlockNumber].classList.contains("character")) {
      game[GlobalData.randomBlockNumber].classList.add("apple");
    }
  }
}

const appleGenerator = new AppleGenerator();

export default appleGenerator;
