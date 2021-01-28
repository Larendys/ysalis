export default class YsalisHeroCharacterSheet extends ActorSheet {

  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      template: "systems/ysalis/templates/sheets/heroCharacter-sheet.html",
      classes: ["ysalis", "sheet", "heroCharacter"],
    });
  }

  getData() {
    const data = super.getData();
    data.config = CONFIG.ysalis; 
    data.weapons = data.items.filter(function (item) {return item.type == "weapon"});

    return data;
  }

  activateListeners(html) {
    html.find(".item-create").click(this._onItemCreate.bind(this));

    super.activateListeners(html);
  }


  _onItemCreate(event) {
    event.preventDefault();
    let element = event.currentTarget;

    let itemData = {
      
    }
  }
}
