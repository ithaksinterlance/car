const express = require('express')
const path = require('path')
const app = express()
const ejs = require('ejs')
const port = process.env.PORT || 3000
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

var cors = require('cors')
app.use(express.static(__dirname + "/public"));
app.use('/css',express.static(__dirname + "/public/css"));
app.use('/js',express.static(__dirname + "/public/js"));
app.use('/img',express.static(__dirname + "/public/img"));
app.use(cors())
// Home

app.get('/', function (req, res) {
  res.render('index.ejs', {
    description: "Order your car batteries now online. Car Battery Replacement | Replace your car battery anytime at United Arab Emirates, Dubai and Sharjah. We offer car battery change for batteries such as Solite, Amaron, Acdelco, Varta. We offer the best car battery services. Vehicle batteries delivery & car battery installation service at best price. 24/7 support.  Auto battery price in uae, dubai and sharjah starting from 200AED |Get car battery with warranty",
    title: "AutoB - Car battery  replacement ,delivery, installation Dubai & Sharjah | Get car battery with warranty",
    keyword:"car battery replacement dubai,car battery replacement sharjah, car battery dubai, car battery sharjah, bmw battery replacement dubai , car battery change, car battery brands in uae, battery replacement sharjah ,battery replacement dubai ,  car battery replacement , car battery shop sharjah, car battery price dubai, car battery dubai price,  car battery replacement near me,car battery change dubai, battery change dubai ,  car battery price ,  battery replacement dubai, Car Battery change Dubai, Car battery service near me, battery replacement near me , Car battery recharging shop near me, Car battery charging, Car battery mechanic near me, Car battery service near me, car battery delivery dubai, best car battery dubai,car battery with warranty",
    url:"https://emirates-car-batteries.herokuapp.com",
    CarBrandList: [
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/ac-cars.png",
        "name": "AC",
        "alt": "car battery replacement sharjah"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/acura.png",
        "name": "Acura",
        "alt": "car battery replacement dubai"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/alfa_romeo.png",
        "name": "Alfa Romeo",
        "alt": "car battery sharjah"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/ariel.png",
        "name": "Ariel",
        "alt": "bmw battery replacement dubai"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/aston_martin.png",
        "name": "Aston Martin",
        "alt": "car battery change"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/audi.png",
        "name": "Audi",
        "alt": "battery replacement sharjah"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/bentley.png",
        "name": "Bentley",
        "alt": "car battery replacement"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/bmw.png",
        "name": "BMW",
        "alt": "car battery shop sharjah"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/bugatti.png",
        "name": "Bugatti",
        "alt": "car battery price dubai"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/cadillac.png",
        "name": "Cadillac",
        "alt": "solite battery price in uae"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/chevrolet.png",
        "name": "Chevrolet",
        "alt": "car battery replacement near me"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/chrysler.png",
        "name": "Chrysler",
        "alt": "amaron battery dubai"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/citroen.png",
        "name": "Citroën",
        "alt": "car battery change dubai"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/daihat.png",
        "name": "Daihatsu",
        "alt": "battery change dubai"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/dodge.png",
        "name": "Dodge",
        "alt": "car battery price"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/ferrari.png",
        "name": "Ferrari",
        "alt": "battery replacement dubai "
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/fiat.png",
        "name": "Fiat",
        "alt": "amaron car battery"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/ford.png",
        "name": "Ford",
        "alt": "amaron battery"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/gmc.png",
        "name": "GMC",
        "alt": "car battery replacement dubai"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2013/10/Great-Wall.png",
        "name": "Great Wall",
        "alt": "car battery replacement sharjah"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/honda.png",
        "name": "Honda",
        "alt": "car battery sharjah"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/hummer.png",
        "name": "Hummer",
        "alt": "bmw battery replacement dubai "
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/hyundai.png",
        "name": "Hyundai",
        "alt": "car battery change"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/inf.png",
        "name": "Infiniti",
        "alt": "battery replacement sharjah"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/isuzu.png",
        "name": "Isuzu",
        "alt": "car battery replacement"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/jagu.png",
        "name": "Jaguar",
        "alt": "car battery shop sharjah"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/jeep.png",
        "name": "Jeep",
        "alt": "car battery price dubai"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/kia.png",
        "name": "Kia",
        "alt": "solite battery price in uae"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/lamb.png",
        "name": "Lamborghini",
        "alt": "car battery replacement near me"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/land-rover.png",
        "name": "Land Rover",
        "alt": "amaron battery dubai"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/lexus.png",
        "name": "Lexus",
        "alt": "car battery change dubai"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/linc.png",
        "name": "Lincoln",
        "alt": "battery change dubai"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/11/mahindra.png",
        "name": "Mahindra",
        "alt": "car battery price"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/12/Maruti_Suzuki.png",
        "name": "Maruti Suzuki",
        "alt": "battery replacement dubai"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/mase.png",
        "name": "Maserati",
        "alt": "amaron car battery"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/maybach.png",
        "name": "Maybach",
        "alt": "amaron battery"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/mazda.png",
        "name": "Mazda",
        "alt": "solite battery in uae"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/mclaren.png",
        "name": "Mclaren",
        "alt": "car battery dubai price"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/marchedrs.png",
        "name": "Mercedes",
        "alt": "dubai car battery"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/mg.png",
        "name": "MG",
        "alt": "amaron car battery in uae"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/mini.png",
        "name": "Mini",
        "alt": "uae car battery"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/mitub.png",
        "name": "Mitsubishi",
        "alt": "battery uae"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/morgan.png",
        "name": "Morgan Motor",
        "alt": "acdelco battery price in uae"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/mustang.png",
        "name": "Mustang",
        "alt": "battery sharjah"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/nissan.png",
        "name": "Nissan",
        "alt": "car battery price dubai"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/opel.png",
        "name": "Opel",
        "alt": "car battery price uae"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/peug.png",
        "name": "Peugeot",
        "alt": "battery change dubai"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/porsche.png",
        "name": "Porsche",
        "alt": "solite battery price uae"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/proton.png",
        "name": "Proton",
        "alt": "amaron battery price uae"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/renault.png",
        "name": "Renault",
        "alt": "amaron battery dubai"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/reva.png",
        "name": "Reva",
        "alt": "car battery"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2012/01/rimac-150x150.png",
        "name": "Rimac",
        "alt": "dubai car battery replacement"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/rolls-royce.png",
        "name": "Rolls Royce",
        "alt": "car battery"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/seat.png",
        "name": "Seat",
        "alt": "amaron battery dubai"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/10/shelby.png",
        "name": "Shelby",
        "alt": "car battery replacement sharjah"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/skoda.png",
        "name": "Skoda",
        "alt": "car battery replacement dubai"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/smart.png",
        "name": "Smart",
        "alt": "car battery change dubai"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/spyker.png",
        "name": "Spyker",
        "alt": "car battery dubai"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/ssangyong.png",
        "name": "Ssangyong",
        "alt": "car batteries dubai"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/10/ssc.png",
        "name": "SSC",
        "alt": "car battery"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/subaru.png",
        "name": "Subaru",
        "alt": "car battery sharjah"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/suzuki.png",
        "name": "Suzuki",
        "alt": "battery replacement dubai"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/tata.png",
        "name": "Tata",
        "alt": "battery replacement sharjah"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/tesla.png",
        "name": "Tesla",
        "alt": "battery sharjah"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/toyota.png",
        "name": "Toyota",
        "alt": "car battery dubai price"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/volkswagen.png",
        "name": "Volkswagen",
        "alt": "car battery"
      }, {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/volvo.png",
        "name": "Volvo",
        "alt": "sharjah car battery"
      },
    ]

  })
})

app.get('/solite-battery', function (req, res) {
  res.render('solite.ejs', {
    description: "Car Battery Replacement | Replace your car battery anytime at Dubai and Sharjah. We offer the best battery replacement service. Delivery & installation service at best price. 24/7 support. We offer battery replacement for battery such as Solite, Amaron, Acdelco, Varta.",
    title: "AutoB | Solite battery replacement , delivery , installation | Dubai and sharjah",
    url : "https://emirates-car-batteries.herokuapp.com/solite-battery",
    keyword:"dubai Solite battery,sharjah solite battery, Solite car battery, Solite best price, best car battery price uae,  battery delivery dubai, battery instalation dubai, battery delivery sharjah, battery installation sharjah, car battery replacement dubai, united arab emirates, car battery replacement sharjah, car battery replacement dubai, car battery replacement uae ,car battery change, car battery dubai, car battery uae, car battery sharjah,amaron battery dubai,battery replacement dubai, battery dubai,battery sharjah,  battery uae, car battery change dubai, car battery dubai price,dubai car battery, sharjah car battery, uae car battery,battery uae, battery dubai, battery sharjah,car battery price dubai, car battery price uae, battery change dubai, dubai audi, BMW dubai, solite battery price uae, amaron battery price uae, agm battery dubai, dubai car battery replacement ,uae car battery replacement"
  })
})

app.get('/varta-battery', function (req, res) {
  res.render('varta.ejs', {
    description: "Car Battery Replacement | Replace your car battery anytime at Dubai and Sharjah. We offer the best battery replacement service. Delivery & installation service at best price. 24/7 support. We offer battery replacement for battery such as Solite, Amaron, Acdelco, Varta.",
    title: "AutoB | Varta battery replacement , delivery , installation | Dubai and sharjah",
    url : "https://emirates-car-batteries.herokuapp.com/varta-battery",
    keyword:"dubai varta battery,sharjah varta battery, varta car battery, varta best price, best car battery price  uae,  battery delivery  dubai, battery installation dubai, battery delivery sharjah, battery installation sharjah, car battery replacement dubai, united arab emirates, car battery replacement sharjah, car battery replacement dubai, car battery replacement uae ,car battery change, car battery dubai, car battery uae, car battery sharjah,amaron battery dubai,battery replacement dubai, battery dubai,battery sharjah,  battery uae, car battery change dubai, car battery dubai price,dubai car battery, sharjah car battery, uae car battery,battery uae, battery dubai, battery sharjah,car battery price dubai, car battery price uae, battery change dubai, dubai audi, BMW dubai, solite battery price uae, amaron battery price uae, agm battery dubai, dubai car battery replacement ,uae car battery replacement"
  })
})
app.get('/acdelco-battery', function (req, res) {
  res.render('acdelco.ejs', {
    description: "Acdelco battery replacement dubai |Acdelco car battery sharjah - best price - onsite battery replacement - Acdelco battery installation - Battery delivery in @dubai - Battery delivery @sharjah - Car battery Replacement | Car Battery Replacement | Replace your car battery anytime at Dubai and Sharjah. We offer the best battery replacement service. Delivery & installation service at best price. 24/7 support. We offer battery replacement for battery such as Solite, Amaron, Acdelco, Varta.",
    title: "AutoB | Acdelco battery replacement , delivery , installation | Dubai and sharjah",
    keyword: "Acdelco battery sharjah, Acdelco car battery dubai, Acdelco best price uae, best car battery price in uae,  car battery replacement sharjah, car battery replacement dubai, car battery change dubai, car battery dubai,car batteries dubai, car battery uae,car battery sharjah,battery replacement dubai,battery replacement sharjah,battery sharjah, car battery dubai price,dubai car battery, sharjah car battery, uae car battery,battery uae, battery dubai, battery sharjah,car battery price dubai, car battery price uae, battery change dubai, solite battery price uae, amaron battery price uae,amaron battery dubai, car battery dead dubai, dubai car battery replacement,  amaron batteries dubai,amaron battery dubai",
    url: "https://emirates-car-batteries.herokuapp.com/acdelco-battery"
  })
})
app.get('/amaron-battery', function (req, res) {
  res.render('amaron.ejs', {
    description: "Amaron battery replacement |Amaron car battery - best price - onsite battery replacement - Amaron battery installation - Battery delivery in @dubai - Battery delivery @sharjah - Car battery Replacement dubai | Sharjah- Car battery change Dubai | Sharjah | Car Battery Replacement | Replace your car battery anytime at Dubai and Sharjah. We offer the best battery replacement service. Delivery & installation service at best price. 24/7 support. We offer battery replacement for battery such as Solite, Amaron, Acdelco, Varta.",
    title: "AutoB | Amaron battery replacement , delivery , installation | Dubai and sharjah",
    keyword: "dubai Amaron battery ,uae Amaron car battery,sharjah Amaron best price, best car battery price uae, battery delivery dubai, battery instalation  dubai, battery delivery sharjah, battery installation sharjah, car battery replacement dubai, united arab emirates, car battery replacement sharjah, car battery replacement dubai, car battery replacement uae ,car battery change uae, car battery dubai, car battery uae, car battery sharjah,amaron battery dubai,battery replacement dubai, battery dubai,battery sharjah,  battery uae, car battery change dubai, car battery dubai price,dubai car battery, sharjah car battery, uae car battery,battery uae, battery dubai, battery sharjah,car battery price dubai, car battery price uae, battery change dubai, dubai audi, BMW dubai, solite battery price uae, amaron battery price uae, agm battery dubai, dubai car battery replacement ,uae car battery replacement ",
    url : "https://emirates-car-batteries.herokuapp.com/acdelco-battery"
  })
})
app.get('/car-battery-brands', function (req, res) {
  res.render('brands.ejs', {
    description: "Car Battery Replacement | Replace your car battery anytime at Dubai and Sharjah. We offer the best battery replacement service. Delivery & installation service at best price. 24/7 support. We offer battery replacement for battery such as Solite, Amaron, Acdelco, Varta with warranty",
    title: "AutoB | Car Battery Dubai & Sharjah | Replacement ,delivery , installation",
    url : "https://emirates-car-batteries.herokuapp.com/car-battery-brands",
    keyword: "car battery replacement sharjah, car battery replacement dubai, car battery replacement uae ,car battery change, car battery dubai, car battery uae, car battery sharjah,amaron battery dubai,battery replacement dubai, battery dubai,battery sharjah,  battery uae, car battery change dubai, car battery dubai price,dubai car battery, sharjah car battery, uae car battery,battery uae, battery dubai, battery sharjah,car battery price dubai, car battery price uae, battery change dubai, dubai audi, BMW dubai, solite battery price uae, amaron battery price uae, agm battery dubai, dubai car battery replacement ,uae car battery replacement"
  })
})
app.get('/car-battery-replacement', function (req, res) {
  res.render('services.ejs', {
    description: "Order your car batteries now online. Car Battery Replacement | Replace your car battery anytime at United Arab Emirates, Dubai and Sharjah. We offer car battery change for batteries such as Solite, Amaron, Acdelco, Varta. We offer the best car battery services. Vehicle batteries delivery & car battery installation service at best price. 24/7 support.  Auto battery price in uae, dubai and sharjah starting from 200AED |Get car battery with warranty",
    title: "AutoB services | Car battery installation | Car battery delivery | Car battery replacement at Dubai and Sharjah , UAE",
    keyword:"car battery replacement dubai,car battery replacement sharjah, car battery dubai, car battery sharjah, bmw battery replacement dubai , car battery change, car battery brands in uae, battery replacement sharjah ,battery replacement dubai ,  car battery replacement , car battery shop sharjah, car battery price dubai, car battery dubai price,  car battery replacement near me,car battery change dubai, battery change dubai ,  car battery price ,  battery replacement dubai, Car Battery change Dubai, Car battery service near me, battery replacement near me , Car battery recharging shop near me, Car battery charging, Car battery mechanic near me, Car battery service near me, car battery delivery dubai, best car battery dubai,car battery with warranty",
    url : "https://emirates-car-batteries.herokuapp.com/car-battery-replacement"
  })
})

app.get('/become-a-partner', function (req, res) {
  res.render('sell.ejs', {
    description: "Car battery deal |  AutoB deals with Car battery",
    title: "Get best car battery deals with AutoB for amaron, acdelco, solite, varta",
    url : "https://emirates-car-batteries.herokuapp.com/become-a-partner",
    keyword:"car battery dealer dubai, car battery dealer uae, car battery dealer united arab emirates, amaron car battery dealer dubai, solite car battery dealer in dubai, varta car battery dealer, amaron battery dealers near me, automotive battery suppliers in uae"
  })
})

app.get('/contact', function (req, res) {
  res.render('contact.ejs', {
    description: "Call | WhatsApp | Send Inquiries through our whatsapp inquiry form | Roadside assistance provided | Replacement | installation | delivery onsite at dubai and sharjah , United arab emirates",
    title: "AutoB | Contact us for roadside assistance | Get car battery with warranty",
    url : "https://emirates-car-batteries.herokuapp.com/contact",
    keyword: "car battery replacement dubai,car battery replacement sharjah, car battery dubai, car battery sharjah, bmw battery replacement dubai , car battery change, car battery brands in uae, battery replacement sharjah ,battery replacement dubai ,  car battery replacement , car battery shop sharjah, car battery price dubai, car battery dubai price,  car battery replacement near me,car battery change dubai, battery change dubai ,  car battery price ,  battery replacement dubai, Car Battery change Dubai, Car battery service near me, battery replacement near me , Car battery recharging shop near me, Car battery charging, Car battery mechanic near me, Car battery service near me, car battery delivery dubai, best car battery dubai,car battery with warranty"
  })
})

app.get('/post', function (req, res) {
  res.render('post.ejs', {
    description: "How to maintain your car battery | How to know if your car battery is dying | Tips to sanitize your car during covid-19 | All you need to know about car battery | Top 4 battery for your car",
    title: "AutoB | Blogs",
    url : "https://emirates-car-batteries.herokuapp.com/post",
    keyword: "car battery replacement sharjah, car battery replacement dubai, how to maintain your car battery, maintain car battery, car battery maintainence, how do i keep my car battery in good condition, how to you maintain a battery, what maintainence a car battery needs, how do you keep a car battery from dying when not in use, signs of a dying car battery, signs of battery dying when driving, weak car battery symptoms, how to check if you need a new car battery,how to know if car battery needs to be replaced, how to check car battery life,how to sanitize a car, how to disinfect car interior from covid-19, how to sanitize car during covid,car battery price dubai, car battery price sharjah, car battery price, car battery lifespan, car battery types , cold cranking amps, car battery warranty, car battery warranty dubai, car battery warranty sharjah, car battery with warranty,car battery with warranty, car battery replacement dubai,car battery replacement sharjah, car battery dubai, car battery sharjah, bmw battery replacement dubai , car battery change, car battery brands in uae, battery replacement sharjah ,battery replacement dubai ,  car battery replacement , car battery shop sharjah, car battery price dubai, car battery dubai price,  car battery replacement near me,car battery change dubai, battery change dubai ,  car battery price ,  battery replacement dubai, Car Battery change Dubai, Car battery service near me, battery replacement near me , Car battery recharging shop near me, Car battery charging, Car battery mechanic near me, Car battery service near me, car battery delivery dubai, best car battery dubai"
  })
})

app.get('/how_to_maintain_your_car_battery', function (req, res) {
  res.render('blog1.ejs', {
    description: "How to maintain Your car battery |Switch On Your Car Engine very often in winter, Cool the temprature of your car in summer, Idea from this based lady in cooling her car, Clean Your battery from Dust, How often should your change your battery?",
    title: "AutoB | How to maintain Your car battery",
    url : "https://emirates-car-batteries.herokuapp.com/how_to_maintain_your_car_battery",
    keyword: "car battery replacement sharjah, car battery replacement dubai, how to maintain your car battery, maintain car battery, car battery maintainence, how do i keep my car battery in good condition, how to you maintain a battery, what maintainence a car battery needs, how do you keep a car battery from dying when not in use",
  })
})

app.get('/how_to_know_if_your_car_battery_is_dying', function (req, res) {
  res.render('blog2.ejs', {
    description: "How to know if your car battery is dying | Dimming of headlights, Battery connectors are corroded, Car makes a sound when turning on the engine, Your car battery is more than 3.5 years, Bad smells",
    title: "AutoB | Warning Signs that your Car Battery is dying",
    url : "https://emirates-car-batteries.herokuapp.com/how_to_know_if_your_car_battery_is_dying",
    keyword: "signs of a dying car battery, signs of battery dying when driving, weak car battery symptoms, how to check if you need a new car battery,how to know if car battery needs to be replaced, how to check car battery life"
  })
})

app.get('/tips_to_sanitize_your_car_during_covid_19', function (req, res) {
  res.render('blog3.ejs', {
    description: "Tips to sanitize your car during covid-19 | Sanitize your car handles, Clean your upholstery, Donot use wet cloth for sanitizing, Disinfect your air conditioning system, Personal Hygiene, Wear disposable hand gloves and Mask, Get off the car only if necessary, Prepare sticky notes",
    title: "AutoB | Tips to sanitize your car during covid-19",
    url : "https://emirates-car-batteries.herokuapp.com/tips_to_sanitize_your_car_during_covid_19",
    keyword:"how to sanitize a car, how to disinfect car interior from covid-19, how to sanitize car during covid",
  })
})

app.get('/all_you_need_to_know_about_car_battery', function (req, res) {
  res.render('blog4.ejs', {
    description: "AutoB | All you need to know about car battery",
    title: "All you need to know about car battery | Do's and Dont's inside the car during pandemic , When will your car battery die , Don't use tap water to refill your battery , Find the CCA(Cold Cranking Amps) of your battery , Brand of your car battery, Warranty, Manufacturing date , Battery types , Know about our service",
    url : "https://emirates-car-batteries.herokuapp.com/all_you_need_to_know_about_car_battery",
    keyword :"car battery price dubai, car battery price sharjah, car battery price, car battery lifespan, car battery types , cold cranking amps, car battery warranty, car battery warranty dubai, car battery warranty sharjah, car battery with warranty"
  })
})

app.get('/top_4_battery_for_your_car', function (req, res) {
  res.render('blog5.ejs', {
    description: "Top 4 battery for your car | Amaron , Acdelco , Solite , Varta | Get your car battery replacement, delivery and installation done anywhere at dubai and sharjah, uae",
    title: "AutoB | Top 4 battery for your car",
    url : "https://emirates-car-batteries.herokuapp.com/top_4_battery_for_your_car",
    keyword: "car battery with warranty, car battery replacement dubai,car battery replacement sharjah, car battery dubai, car battery sharjah, bmw battery replacement dubai , car battery change, car battery brands in uae, battery replacement sharjah ,battery replacement dubai ,  car battery replacement , car battery shop sharjah, car battery price dubai, car battery dubai price,  car battery replacement near me,car battery change dubai, battery change dubai ,  car battery price ,  battery replacement dubai, Car Battery change Dubai, Car battery service near me, battery replacement near me , Car battery recharging shop near me, Car battery charging, Car battery mechanic near me, Car battery service near me, car battery delivery dubai, best car battery dubai"
  })
})

//app.get('/car-battery-replacement-sharjah', function (req, res) {
//  res.render('sharjah.ejs', {
//    description: "Car battery replacement sharjah",
//    title: "Sharjah",
//    url : "https://emirates-car-batteries.herokuapp.com/car-battery-replacement-sharjah"
//  })
//})

//app.get('/car-battery-replacement-dubai', function (req, res) {
//  res.render('dubai.ejs', {
//    description: "Car battery replacement dubai",
//    title: "Dubai",
//    url : "https://emirates-car-batteries.herokuapp.com/car-battery-replacement-dubai"
//  })
//})

app.get('/bmw-battery-replacement', function (req, res) {
  res.render('bmw.ejs', {
    description: "Order your BMW car batteries now online. Car Battery Replacement | Replace your car battery anytime at United Arab Emirates, Dubai and Sharjah. We offer car battery change for batteries such as Solite, Amaron, Acdelco, Varta. We offer the best car battery services. Vehicle batteries delivery & car battery installation service at best price. 24/7 support.  Auto battery price in uae, dubai and sharjah starting from 200AED | Get car battery with warranty",
    title: "BMW car battery replacement",
    url : "https://emirates-car-batteries.herokuapp.com/bmw-battery-replacement",
    keyword:"bmw car battery replacement dubai,bmw car battery replacement sharjah,bmw car battery dubai,bmw car battery sharjah, bmw battery replacement dubai ,bmw car battery change,bmw car battery brands in uae,bmw battery replacement sharjah ,bmw battery replacement dubai ,bmw car battery replacement ,bmw car battery shop sharjah,bmw car battery price dubai,bmw car battery dubai price,bmw  car battery replacement near me,bmw car battery change dubai,bmw battery change dubai ,bmw  car battery price , bmw battery replacement dubai,bmw Car Battery change Dubai,bmw Car battery service near me,bmw battery replacement near me ,bmw Car battery recharging shop near me,bmw Car battery charging, bmw Car battery mechanic near me,bmw Car battery service near me,bmw car battery delivery dubai,bmw best car battery dubai,bmw car battery with warranty"
  })
})

app.get('/audi-battery-replacement', function (req, res) {
  res.render('audi.ejs', {
    description: "Order your Audi car batteries now online. Car Battery Replacement | Replace your car battery anytime at United Arab Emirates, Dubai and Sharjah. We offer car battery change for batteries such as Solite, Amaron, Acdelco, Varta. We offer the best car battery services. Vehicle batteries delivery & car battery installation service at best price. 24/7 support.  Auto battery price in uae, dubai and sharjah starting from 200AED | Get car battery with warranty",
    title: "Audi car battery replacement",
    url : "https://emirates-car-batteries.herokuapp.com/audi-battery-replacement",
    keyword:"audi car battery replacement dubai,audi car battery replacement sharjah,audi car battery dubai,audi car battery sharjah, audi battery replacement dubai ,audi car battery change,audi car battery brands in uae,audi battery replacement sharjah ,audi battery replacement dubai ,audi car battery replacement ,audi car battery shop sharjah,audi car battery price dubai,audi car battery dubai price,audi  car battery replacement near me,audi car battery change dubai,audi battery change dubai ,audi  car battery price , audi battery replacement dubai,audi Car Battery change Dubai,audi Car battery service near me,audi battery replacement near me ,audi Car battery recharging shop near me,audi Car battery charging, audi Car battery mechanic near me,audi Car battery service near me,audi car battery delivery dubai,audi best car battery dubai,audi car battery with warranty"

  })
})

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


app.listen( port, () => {
  console.log('Listening on Port 3000');
});
