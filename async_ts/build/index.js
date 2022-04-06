"use strict";
var step1 = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            try {
                var nextStep = 1;
                console.log("completed step 1");
                resolve(nextStep);
            }
            catch (error) {
                reject();
            }
        }, 1000);
    });
};
var step2 = function (step) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            try {
                var nextStep = step + 1;
                console.log("completed step ".concat(nextStep));
                resolve(nextStep);
            }
            catch (error) {
                reject();
            }
        }, 1000);
    });
};
var step3 = function (step) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            try {
                var nextStep = step + 1;
                console.log("completed step ".concat(nextStep));
                resolve(nextStep);
            }
            catch (error) {
                reject();
            }
        }, 1000);
    });
};
step1()
    .then(function (result) {
    return step2(result);
})
    .then(function (result) {
    return step3(result);
})
    .then(function () {
    console.log("your house is done");
})
    .catch(function () {
    console.log("there was an error building");
});
