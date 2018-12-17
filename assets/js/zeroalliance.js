var pageNum = 0
var maxPageNum = 3
var starData = [
    ["빵점동맹(0-19)", 9.76, 9.81, 9.85, 9.86, 9.84, 9.87, 9.84, 9.76, 9.49, 9.55, 9.52, 9.07, 9.74, 9.62, 9.63, 9.32, 9.52, 9.58, 8.72, 8.97],
    ["빵점동맹(20-39)", 9.46, 9.49, 9.44, 9.32, 9.04, 9.47, 9.48, 9.82, 9.84, 9.83, 9.86, 9.85, 9.90, 9.84, 9.69, 9.62, 9.72, 9.72, 9.82, 9.58],
    ["빵점동맹(40-59)", 9.13, 9.19, 9.71, 8.72, 7.20, 9.65, 9.82, 9.75, 9.64, 9.82, 9.88, 9.80, 9.84, 9.71, 9.71, 9.83, 9.74, 9.36, 9.43, 9.61],
    ["빵점동맹(60-74)", 9.69, 9.55, 8.79, 8.67, 9.89, 9.94, 9.95, 9.95, 9.94, 9.90, 9.84, 9.81, 9.94, 9.87],
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
        color: {
            pattern: [
                "#ffe874"
            ]
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
                color: {
                    pattern: [
                        "#ffe874"
                    ]
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
                  color: {
                    pattern: [
                        "#ffe874"
                    ]
                },
                bindto: "#Chart"
            });
        }
    }
})