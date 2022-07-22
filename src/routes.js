import MainMenu from "./pages/MainMenu";
import Game from "./pages/Game";
import Highscore from "./pages/Highscore";

export default {
  root: "mainMenu",
  routes: [
    {
      path: "mainMenu",
      component: MainMenu,
    },
    {
      path: "game",
      component: Game,
    },
    {
      path: "highscore",
      component: Highscore,
    },
  ],
};
