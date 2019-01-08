var pageNum = 0
var maxPageNum = 4
var starData = [
    ["킬더킹(0-19)", 9.81, 9.87, 9.88, 9.87, 9.74, 9.78, 9.84, 9.84, 9.82, 9.84, 9.84, 9.81, 9.80, 9.81, 9.84, 9.83, 9.82, 9.82, 9.81, 9.80],
    ["킬더킹(20-39)", 9.80, 9.78, 9.87, 9.78, 9.71, 9.67, 9.60, 9.20, 7.33, 8.39, 9.08, 9.18, 9.23, 9.41, 9.54, 9.62, 9.73, 9.69, 9.84, 9.77],
    ["킬더킹(40-59)", 9.79, 9.81, 9.88, 9.86, 9.88, 9.86, 9.87, 9.84, 9.83, 9.83, 9.82, 9.81, 9.83, 9.86, 9.85, 9.82, 9.53, 8.97, 8.86, 9.74],
    ["킬더킹(60-79)", 9.86, 9.87, 9.85, 9.85, 9.69, 9.42, 8.44, 8.42, 7.33, 6.53, 8.44, 8.90, 9.10, 9.23, 9.49, 9.36, 9.73, 9.70, 9.78, 9.78],
    ["킬더킹(80-99)", 9.88, 9.74, 9.84, 9.87, 9.85, 9.90, 9.93, 9.91, 9.92, 9.92, 9.93, 9.93, 9.94, 9.91, 9.89, 9.93, 9.93, 9.92, 9.92, 9.92]
]

window.addEventListener("load", function(event) {
    var chart = bb.generate({
        data: {
            columns: [starData[pageNum]]
        },
        axis: {
            y: {
              max: 10,
              min: 4
            }
        },
        bindto: "#Chart"
    }) 
});

var MovePage = new Vue({
    el: '#section',
    methods: {
        next: function () {
            if (pageNum < maxPageNum) pageNum++
            else alert("마지막 페이지입니다.")
            var chart = bb.generate({
                data: {
                    columns: [starData[pageNum]]
                },
                axis: {
                    y: {
                      max: 10,
                      min: 4
                    }
                },
                bindto: "#Chart"
            });
        },
        prev: function () {
            if (pageNum > 0) pageNum--
            else alert("처음 페이지입니다.")
            var chart = bb.generate({
                data: {
                    columns: [starData[pageNum]]
                },
                axis: {
                    y: {
                      max: 10,
                      min: 4
                    }
                  },
                bindto: "#Chart"
            });
        }
    }
})