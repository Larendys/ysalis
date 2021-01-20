export default class YsalisItemSheet extends ItemSheet {


  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      width: 530,
      height: 340,
      classes: ["ysalis", "sheet", "item"]
   });
  }

  get template() {
    return `systems/ysalis/templates/sheets/${this.item.data.type}-sheet.html`;
  }

  getData() {
    const data = super.getData();

    data.config = CONFIG.ysalis;

    return data;
  }
}
