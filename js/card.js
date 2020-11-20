export default function constructCard(item_num, testimonial_item) {
  /**
   * [constructCard: Takes in current card number and current testimonial item]
   * @param  {int} item_num [card count iterator]
   * @param  {json item} testimonial_item [testimonial item parsed from json. Contains "name", "position", etc]
   * @return {html string} [returns raw html of filled card template]
   */

  return `
  <div id="t-${item_num.toString()}" class="t-card">
    <div class="t-card-circle">
        <img src="${
          testimonial_item.image
        }" class="t-card-image"alt="Alumni Image"/>
    </div>
    <div class="t-card-header">
        <span class="t-card-header-name">${testimonial_item.name.toUpperCase()}</span>
        <span class="t-card-header-position">${testimonial_item.position.toUpperCase()}</span>
        <span class="t-card-header-year">${
          testimonial_item.years_active.end
        }</span>
    </div>
    <div class="t-card-body">
        <p class="t-card-body-text">${testimonial_item.testimonial}</p>
    </div>
  </div>
  `;
}
