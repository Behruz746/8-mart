/* https://greensock.com/gsap */
TweenLite.set("#petals", { perspective: 600 })
TweenLite.set("img", { xPercent: "-50%", yPercent: "-50%" })
var app = document.getElementById("text")

var total = 50
var warp = document.getElementById("petals"),
  w = window.innerWidth,
  h = window.innerHeight

for (i = 0; i < total; i++) {
  var Div = document.createElement("div")
  TweenLite.set(Div, {
    attr: { class: "dot" },
    x: R(0, w),
    y: R(-200, -150),
    z: R(-200, 200),
  })
  warp.appendChild(Div)
  animm(Div)
}

function animm(elm) {
  TweenMax.to(elm, R(6, 15), {
    y: h + 100,
    ease: Linear.easeNone,
    repeat: -1,
    delay: -15,
  })
  TweenMax.to(elm, R(4, 8), {
    x: "+=100",
    rotationZ: R(0, 180),
    repeat: -1,
    yoyo: true,
    ease: Sine.easeInOut,
  })
  TweenMax.to(elm, R(2, 8), {
    rotationX: R(0, 360),
    rotationY: R(0, 360),
    repeat: -1,
    yoyo: true,
    ease: Sine.easeInOut,
    delay: -5,
  })
}

function R(min, max) {
  return min + Math.random() * (max - min)
}

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 50,
})

typewriter
  .pauseFor(2000)
  .typeString(
    "Sizga bahoriy kayfiyat tilayman, ruhingiz doimo yorug' va shod bo'lsin. Yuzingizdan doim tabassum bo'lishini tilayman, hayot sovg'alar bilan saxovatli bo'lsin. Ayollar kunida sizga oddiy ayollar baxti va sog'liq tilayman.  <br />   <strong<span style='background-image: linear-gradient(110deg, #ff6945 0%, #8047ca 100%);  -webkit-background-clip: text;  -webkit-text-fill-color: transparent; color: #121212;'>- Behruz Madaminov</span></strong>"
  )
  .pauseFor(500)
  .deleteAll()
  .typeString(
    "Желаю весеннего настроения, пусть на душе всегда будет светло и радостно. Желаю, чтобы на лице всегда сияла улыбка, пусть жизнь будет щедра на подарки. В самый женский день года желаю простого женского счастья и здоровья.  <br />   <strong<span style='background-image: linear-gradient(110deg, #ff6945 0%, #8047ca 100%);  -webkit-background-clip: text;  -webkit-text-fill-color: transparent; color: #121212;'>- Behruz Madaminov</span></strong>"
  )
  .pauseFor(500)
  .deleteAll()
  .typeString(
    'I wish you a spring mood, let your soul always be light and joyful. I wish you to always have a smile on your face, let life be generous with gifts. On the most women’s day of the year, I wish you simple women’s happiness and health. <br /> <strong<span style="background-image: linear-gradient(110deg, #ff6945 0%, #8047ca 100%);  -webkit-background-clip: text;  -webkit-text-fill-color: transparent; color: #121212;">- Behruz Madaminov</span></strong>'
  )
  .pauseFor(500)
  .deleteAll()
  .typeString(
    'Size bir bahar havası diliyorum, ruhunuz hep hafif ve neşeli olsun. Yüzünüzde her zaman bir gülümseme olsun, hayat hediyelerle cömert olsun. Yılın en kadın gününde size sade kadınlar diliyorum. mutluluk ve sağlık. <br /> <strong<span style="background-image: linear-gradient(110deg, #ff6945 0%, #8047ca 100%);  -webkit-background-clip: text;  -webkit-text-fill-color: transparent; color: #121212;">- Behruz Madaminov</span></strong>'
  )
  .pauseFor(500)
  .deleteAll()
  .typeString(
    "Je vous souhaite une ambiance printanière, que votre âme soit toujours légère et joyeuse. Je vous souhaite d'avoir toujours le sourire aux lèvres, que la vie soit généreuse en cadeaux. Le jour le plus féminin de l'année, je vous souhaite des femmes simples le bonheur et la santé. <br /> <strong<span style='background-image: linear-gradient(110deg, #ff6945 0%, #8047ca 100%);  -webkit-background-clip: text;  -webkit-text-fill-color: transparent; color: #121212;'>- Behruz Madaminov</span></strong>"
  )
  .pauseFor(500)
  .deleteAll()
  .typeString(
    '「あなたに春の気分をお祈りします。あなたの魂が常に明るく楽しいものでありますように。あなたがいつも笑顔で、人生に贈り物を惜しみなく与えられることを願っています。一年で最も女性の日であるこの日に、私はあなたがシンプルな女性であることを祈ります。」幸福と健康。 <br /> <strong<span style="background-image: linear-gradient(110deg, #ff6945 0%, #8047ca 100%);  -webkit-background-clip: text;  -webkit-text-fill-color: transparent; color: #121212;">- Behruz Madaminov</span></strong>'
  )
  .pauseFor(500)
  .deleteAll()
  .typeString(
    "「祝你春意盎然，讓你的心靈永遠輕盈愉悅。祝你臉上永遠掛著微笑，讓生活慷慨贈禮。在一年中最婦女節，祝你簡單的女人」幸福和健康。 <br /> <strong<span style='background-image: linear-gradient(110deg, #ff6945 0%, #8047ca 100%);  -webkit-background-clip: text;  -webkit-text-fill-color: transparent; color: #121212;'>- Behruz Madaminov</span></strong>"
  )
  .pauseFor(0)
  .start()
