import Play from "./gaming/Play";
import IConsole from "./consoles/IConsole";
import PlayStation from "./consoles/PlayStation";
import AdvancedPlay from "./gaming/AdvancedPlay";
import Xbox from "./consoles/Xbox";

/*function startGame(console : IConsole){
    const play = new Play(console);
    play.playing();
    play.result();
}*/
function startGameAdvanced(console : IConsole){
    const play = new AdvancedPlay(console);
    play.playing();
    play.result();
    play.challenge();
}
//startGame(new PlayStation());
startGameAdvanced(new Xbox());