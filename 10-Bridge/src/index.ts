import Facebook from "./platforms/Facebook";
import IPlatform from "./platforms/IPlatform";
import TwitchTV from "./platforms/TwitchTV";
import Youtube from "./platforms/Youtube";
import AdvancedLive from "./transmissions/AdvancedLive";
import Live from "./transmissions/Live";

function startAdvancedLive(plataform : IPlatform){
    console.log("Aguarde...");
    const live = new AdvancedLive(plataform);
    live.broadcasting();
    live.result();
    live.subtitutles();
    live.coments();
}

function startLive(plataform : IPlatform){
    console.log("Aguarde...");
    const live = new Live(plataform);
    live.broadcasting();
    live.result();
}

startLive(new TwitchTV());
startAdvancedLive(new Youtube());
startLive(new Facebook());
