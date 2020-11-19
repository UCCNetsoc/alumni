(function(){
    document.addEventListener('DOMContentLoaded', init, false);

    function init() {
        var request = new XMLHttpRequest();
        request.open("GET", "testimonials.json", false);
        request.send(null)
        var testimonials = JSON.parse(request.responseText);
        var section = document.getElementById("testimonials");
        for (var testimonial of testimonials){
            var text = testimonial.testimonial;
            var author = " - " + testimonial.name + " (" + testimonial.position + " " + testimonial.active_years + ")"
            p = document.createElement("p");
            text_node = document.createTextNode(text);
            author_node = document.createTextNode(author);
            br = document.createElement("br");
            p.appendChild(text_node);
            p.appendChild(br);
            p.appendChild(author_node);
            section.appendChild(p);
        }
    }

})();