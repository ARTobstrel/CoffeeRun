(function (window) {
    'use strict';

    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var myTruck = new Truck('ncc-1701', new DataStore());
    var myTruck2 = new Truck('Galaxy', new DataStore());

    // выносим переменные myTruck myTruck2 в зону видимости глобальных переменных
    window.myTruck = myTruck;
    window.myTruck2 = myTruck2;
})(window);