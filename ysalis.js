import { ysalis } from "./module/config.js";
import YsalisItemSheet from "./module/sheets/YsalisItemSheet.js";
import YsalisHeroCharacterSheet from "./module/sheets/YsalisHeroCharacterSheet.js";


/* async function preloadHandlebarsTemplates() {
  cont templatePaths = [
    "systems/ysalis/templates/partials/sheet-block.html",
    ]

    return loadTemplates(templatePaths);
} */

Hooks.once("init", function () {
  console.log("ysalis | Initialising Ysalis System");

  CONFIG.ysalis = ysalis;

  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("ysalis", YsalisItemSheet, { makeDefault: true });

  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("ysalis", YsalisHeroCharacterSheet, { makeDefault: true });
  
  // preloadHandlebarsTemplates();
});
