export default function constructCard(item_num, testimonial_item) {
  /**
   * [constructCard: Takes in current card number and current testimonial item]
   * @param  {int} item_num [card count iterator]
   * @param  {json item} testimonial_item [testimonial item parsed from json. Contains "name", "position", etc]
   * @return {html string} [returns raw html of filled card template]
   */
  // #33c3f0
  let hsl = `hsl(${194 + parseInt(item_num * 50)}, 56%, 57%)`;
  return `
  <div id="t-${item_num.toString()}" class="t-card">
    <div class="t-card-circle">
        <img src="${
          testimonial_item.image
        }" class="t-card-image"alt="Alumni Image"/>
    </div>
    <div class="t-card-header">
      <ul>
          <h2 class="t-card-header-name section-title" style="color:${hsl}">${testimonial_item.name.toUpperCase()}</h2>
          <h2 class="t-card-header-position section-title" style="color:${hsl}">${testimonial_item.position.toUpperCase()}</h2>
          <h2 class="t-card-header-year section-title" style="color:${hsl}">${
    testimonial_item.years_active.end
  }</h2>
      </ul>
    </div>
    <div class="t-card-body" style="background-color:${hsl}">
        <p class="t-card-body-text">${testimonial_item.testimonial}</p>
    </div>
  </div>
  `;
}
