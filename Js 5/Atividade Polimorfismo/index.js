import Mage from "./class/Mage.js";
import Thief from "./class/Thief.js";
import Warrior from "./class/Warrior.js";

const bacalhau = new Thief("Bacalhas", 130, 20, 10);
const kaio = new Mage("Kael", 100, 30, 10, 5);
const david = new Warrior("Divar", 150, 20, 30, 5);

console.table({ bacalhau, kaio, david });

david.mudarPosicao();
kaio.ataqueAlvo(david);
bacalhau.ataqueAlvo(kaio);

console.table([bacalhau, kaio, david]);

david.ataqueAlvo(kaio);
kaio.aumentarVida(kaio);
bacalhau.ataqueAlvo(david);

console.table({ bacalhau, kaio, david });
