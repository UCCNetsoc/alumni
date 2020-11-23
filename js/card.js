export default function constructCard(item_num, testimonial_item) {
  /**
   * [constructCard: Takes in current card number and current testimonial item]
   * @param  {int} item_num [card count iterator]
   * @param  {json item} testimonial_item [testimonial item parsed from json. Contains "name", "position", etc]
   * @return {html string} [returns raw html of filled card template]
   */
  let hsl = 194 + parseInt(item_num * 40);
  let banner_image = "./img/committee-19.jpg";
  if (testimonial_item.banner_image.length > 3) {
    banner_image = testimonial_item.banner_image;
  }
  return `
  <div id="t-${item_num.toString()}" class="t-card">
    <div class="t-card-circle">
        <img src="${
          testimonial_item.profile_image
        }" class="t-card-alumni-image"alt="Alumni Image"/>
    </div>
    <div class="t-card-header">
      <ul>
          <h2 class="t-card-header-name section-title" style="color:hsl(${hsl}, 56%, 57%)">${testimonial_item.name.toUpperCase()}</h2>
          <h2 class="t-card-header-position section-title" style="color:hsl(${hsl}, 56%, 57%)">${testimonial_item.position.toUpperCase()}</h2>
          <h2 class="t-card-header-year section-title" style="color:hsl(${hsl}, 56%, 57%)">${
    testimonial_item.years_active.end
  }</h2>
      </ul>
    </div>
    <div class="t-card-body" style="background:linear-gradient(hsl(${hsl}deg 56% 57%), hsl(${
    hsl + 40
  }deg 56% 57%))">
      <section class="section-para">
        <p class="t-card-body-text">${testimonial_item.testimonial}</p>
      </section>
      <div class="t-card-body-image" style="box-shadow:hsl(${hsl}, 56%, 57%) 0px 0px 50px 50px; background-image:linear-gradient(-90deg, transparent, hsl(${hsl}, 56%, 57%)),url(${banner_image})"></div>
    </div>
  </div>
  `;
}
