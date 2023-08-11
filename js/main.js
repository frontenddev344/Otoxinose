// header
$(function () {
  var e = $("body");
  $(window).scroll(function () {
      $(window).scrollTop() >= 1 ? e.removeClass("body").addClass("darkHeader") : e.removeClass("darkHeader").addClass("body");
  });
}),

// loder
  $(document).ready(function () {
      $(".lodder--wrapper").show(),
          $("body").addClass("loder"),
          setTimeout(function e() {
              $(".lodder--wrapper").hide(), $("body").removeClass("loder");
          }, 2000),
          $("body").addClass("loder");
  });


const intervalText = document.getElementById("interval-text"),
  intervalRange = document.getElementById("interval"),
  bannerContent = document.getElementById("banner-content"),
  sliderBanner = document.getElementById("slider-banner"),
  slideIndicators = document.getElementById("slide-indicators"),
  json = `
[{
"srcset": [
"https://bogatyr.club/uploads/posts/2023-03/1679320330_bogatyr-club-p-sobaka-na-zheltom-fone-foni-vkontakte-20.jpg"
],
"text": "Мне врут"
},
{
"srcset": [
"https://catherineasquithgallery.com/uploads/posts/2021-02/1613444903_35-p-fon-dlya-prezentatsii-pro-sobak-38.jpg"
],
"text": "Я знаю, мне врут"
},
{
"srcset": [
"https://catherineasquithgallery.com/uploads/posts/2021-02/1612936209_2-p-zhivotnie-na-krasnom-fone-3.jpg"
],
"text": "Но всё равно хаваю, что мне суюут"
}
]
`,
  images = JSON.parse(json);
function createSlides(e) {
  let t = [],
      a = [],
      s = 3e3;
  e.forEach((e, s) => {
      let n = document.createElement("div");
      (n.className = `slide slide-${s}`), 0 === s && n.classList.add("active");
      let l = document.createElement("picture");
      e.srcset.forEach((e) => {
          let t = document.createElement("source");
          (t.srcset = e), l.append(t);
      });
      let r = document.createElement("img");
      (r.src = e.srcset.find((e) => !e.includes("webp"))), l.append(r), n.append(l);
      let d = document.createElement("p");
      (d.textContent = e.text), n.append(d);
      let i = document.createElement("div");
      (i.className = "slide-indicator"), 0 === s && i.classList.add("active"), t.push(n), a.push(i);
  }),
      bannerContent.append(...t),
      slideIndicators.append(...a);
  let n;
  function l() {
      n && clearInterval(n);
      let e = 0;
      n = setInterval(() => {
          t[e].classList.remove("active"), a[e].classList.remove("active"), t[(e = (e + 1) % t.length)].classList.add("active"), a[e].classList.add("active");
      }, s);
  }
  intervalRange.addEventListener("input", (e) => {
      (intervalText.innerText = e.target.value), (s = 1e3 * e.target.value), l(), (sliderBanner.style = `--duration: ${e.target.value}s`);
  }),
      l();
}
createSlides(images);
