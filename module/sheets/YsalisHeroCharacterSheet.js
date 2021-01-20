export default class YsalisHeroCharacterSheet extends ActorSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      template: "systems/ysalis/templates/sheets/heroCharacter-sheet.html",
      classes: ["ysalis", "sheet", "heroCharacter"],
    });
  }
}  
