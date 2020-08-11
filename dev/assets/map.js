/*------------------Карта-------------------*/
ymaps.ready(function () {
  var myMap = new ymaps.Map('contacts-map', {
    center: [53.23042954121858,50.19112696465629],
    zoom: 12
  }, {
    searchControlProvider: 'yandex#search'
  }),
  myPlacemark1 = new ymaps.Placemark([53.21836528603984,50.19165339021297], {
    hintContent: 'Московское шоссе 29'
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: 'img/map-loc.png',
    // Размеры метки.
    iconImageSize: [43, 43]
  }),
  myPlacemark2 = new ymaps.Placemark([53.20414973150674,50.18249074603269], {
    hintContent: 'Печерская 20А'
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map-loc.png',
    iconImageSize: [43, 43],
  }),
  myPlacemark3 = new ymaps.Placemark([53.21542907119717,50.260254999999944], {
    hintContent: 'Физкультурная 103'
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map-loc.png',
    iconImageSize: [43, 43],
  }),
  myPlacemark4 = new ymaps.Placemark([53.26135157117065,50.221636499999974], {
    hintContent: 'Георгия Димитрова 112'
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map-loc.png',
    iconImageSize: [43, 43],
  }),
  myPlacemark5 = new ymaps.Placemark([53.21903814767784,50.16850443386834], {
    hintContent: 'Врубеля 15'
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map-loc.png',
    iconImageSize: [43, 43],
  }),
  myPlacemark6 = new ymaps.Placemark([53.24169270642357,50.187036957672056], {
    hintContent: 'Солнечная 16'
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map-loc.png',
    iconImageSize: [43, 43],
  });
  myMap.geoObjects
    .add(myPlacemark1)
    .add(myPlacemark2)
    .add(myPlacemark3)
    .add(myPlacemark4)
    .add(myPlacemark5)
    .add(myPlacemark6);
})
/*------------------------------------------*/
// $('a.popup-lg[href="#map"]').on('click', function() {
/*------------------Карта-------------------*/
$('.popup-lg-map').fancybox({
  maxWidth: 1010,
  padding: 0,
  helpers: {
    overlay: {
      closeClick: true,
      locked: false
    }
  },
  afterShow: function() {
    
    ymaps.ready(function () {
      var myMap = new ymaps.Map('popup-map', {
        center: [53.23042954121858,50.19112696465629],
        zoom: 12
      }, {
        searchControlProvider: 'yandex#search'
      }),
      myPlacemark1 = new ymaps.Placemark([53.21836528603984,50.19165339021297], {
        hintContent: 'Московское шоссе 29'
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/map-loc.png',
        // Размеры метки.
        iconImageSize: [43, 43]
      }),
      myPlacemark2 = new ymaps.Placemark([53.20414973150674,50.18249074603269], {
        hintContent: 'Печерская 20А'
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-loc.png',
        iconImageSize: [43, 43],
      }),
      myPlacemark3 = new ymaps.Placemark([53.21542907119717,50.260254999999944], {
        hintContent: 'Физкультурная 103'
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-loc.png',
        iconImageSize: [43, 43],
      }),
      myPlacemark4 = new ymaps.Placemark([53.26135157117065,50.221636499999974], {
        hintContent: 'Георгия Димитрова 112'
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-loc.png',
        iconImageSize: [43, 43],
      }),
      myPlacemark5 = new ymaps.Placemark([53.21903814767784,50.16850443386834], {
        hintContent: 'Врубеля 15'
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-loc.png',
        iconImageSize: [43, 43],
      }),
      myPlacemark6 = new ymaps.Placemark([53.24169270642357,50.187036957672056], {
        hintContent: 'Солнечная 16'
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-loc.png',
        iconImageSize: [43, 43],
      });
      myMap.geoObjects
        .add(myPlacemark1)
        .add(myPlacemark2)
        .add(myPlacemark3)
        .add(myPlacemark4)
        .add(myPlacemark5)
        .add(myPlacemark6);
    })

  }
})
/*------------------------------------------*/
