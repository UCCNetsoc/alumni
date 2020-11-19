import GITHUB_TESTIMONIAL_URL from "./config.js";
import constructCard from "./card.js";

async function parseTestimonials() {
  /**
   * [parseTestimonials: Sends request to github repo through API then parses alumni testimonials.json]
   * @return {json promise} data [returns promise of parsed json testimonial data]
   */
  const response = await fetch(GITHUB_TESTIMONIAL_URL);
  const data = await response.json();
  return data;
}

parseTestimonials().then((data) => {
  /**
   * [parseTestimonials().then(): Resolves promise to json data and initialises new AlumniCardCont object]
   */
  new AlumniCardCont(
    document.getElementById("testimonial-card-container"),
    data
  );
});

class AlumniCardCont {
  init(container, data) {
    this.container = container;
    this.testimonials = data;
    this.render();
  }

  render() {
    this.container.innerHTML = AlumniCardCont.markup(this, this.testimonials);
  }

  static markup(cont) {
    let cards = "";
    for (let i = 0; i < cont.testimonials.length; i++) {
      cards = cards + constructCard(i, cont.testimonials[i]);
    }
    return cards;
  }

  constructor(container, data) {
    if (typeof container.dataset.ref === "undefined") {
      this.ref = Math.random();
      AlumniCardCont.refs[this.ref] = this;
      container.dataset.ref = this.ref;
      this.init(container, data);
    } else {
      return AlumniCardCont.refs[container.dataset.ref];
    }
  }
}

AlumniCardCont.refs = {};
