(function ($) {
    getUserMe();
    getMyInfo();
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });


    // Progress Bar
    $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Calender
    $('#calender').datetimepicker({
        inline: true,
        format: 'L'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav : false
    });


    // Worldwide Sales Chart
    var ctx1 = $("#worldwide-sales").get(0).getContext("2d");
    var myChart1 = new Chart(ctx1, {
        type: "bar",
        data: {
            labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
            datasets: [{
                    label: "USA",
                    data: [15, 30, 55, 65, 60, 80, 95],
                    backgroundColor: "rgba(0, 156, 255, .7)"
                },
                {
                    label: "UK",
                    data: [8, 35, 40, 60, 70, 55, 75],
                    backgroundColor: "rgba(0, 156, 255, .5)"
                },
                {
                    label: "AU",
                    data: [12, 25, 45, 55, 65, 70, 60],
                    backgroundColor: "rgba(0, 156, 255, .3)"
                }
            ]
            },
        options: {
            responsive: true
        }
    });


    // Salse & Revenue Chart
    var ctx2 = $("#salse-revenue").get(0).getContext("2d");
    var myChart2 = new Chart(ctx2, {
        type: "line",
        data: {
            labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
            datasets: [{
                    label: "Salse",
                    data: [15, 30, 55, 45, 70, 65, 85],
                    backgroundColor: "rgba(0, 156, 255, .5)",
                    fill: true
                },
                {
                    label: "Revenue",
                    data: [99, 135, 170, 130, 190, 180, 270],
                    backgroundColor: "rgba(0, 156, 255, .3)",
                    fill: true
                }
            ]
            },
        options: {
            responsive: true
        }
    });
    


    // Single Line Chart
    var ctx3 = $("#line-chart").get(0).getContext("2d");
    var myChart3 = new Chart(ctx3, {
        type: "line",
        data: {
            labels: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
            datasets: [{
                label: "Salse",
                fill: false,
                backgroundColor: "rgba(0, 156, 255, .3)",
                data: [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15]
            }]
        },
        options: {
            responsive: true
        }
    });


    // Single Bar Chart
    var ctx4 = $("#bar-chart").get(0).getContext("2d");
    var myChart4 = new Chart(ctx4, {
        type: "bar",
        data: {
            labels: ["Italy", "France", "Spain", "USA", "Argentina"],
            datasets: [{
                backgroundColor: [
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255, .6)",
                    "rgba(0, 156, 255, .5)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .3)"
                ],
                data: [55, 49, 44, 24, 15]
            }]
        },
        options: {
            responsive: true
        }
    });


    // Pie Chart
    var ctx5 = $("#pie-chart").get(0).getContext("2d");
    var myChart5 = new Chart(ctx5, {
        type: "pie",
        data: {
            labels: ["Italy", "France", "Spain", "USA", "Argentina"],
            datasets: [{
                backgroundColor: [
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255, .6)",
                    "rgba(0, 156, 255, .5)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .3)"
                ],
                data: [55, 49, 44, 24, 15]
            }]
        },
        options: {
            responsive: true
        }
    });


    // Doughnut Chart
    var ctx6 = $("#doughnut-chart").get(0).getContext("2d");
    var myChart6 = new Chart(ctx6, {
        type: "doughnut",
        data: {
            labels: ["Italy", "France", "Spain", "USA", "Argentina"],
            datasets: [{
                backgroundColor: [
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255, .6)",
                    "rgba(0, 156, 255, .5)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .3)"
                ],
                data: [55, 49, 44, 24, 15]
            }]
        },
        options: {
            responsive: true
        }
    });

    
})(jQuery);



function getMyQeustionList(){
	var settings = {
		"url": "http://localhost:8080/my-questions",
		"method": "GET",
		"timeout": 0,
		"headers": {
            "Authorization": localStorage.getItem('accessToken')
		},
	  };
	  
	  $.ajax(settings).done(function (response) {
		console.log(response);
        for(let i=0; i<response.data.length; i++){
            let questionDto0 = response.data[0];
            let questionDto1 = response.data[1];
            let questionDto2 = response.data[2];
            let questionDto3 = response.data[3];
            let questionDto4 = response.data[4];
            let questionDto5 = response.data[5];
            let questionDto6 = response.data[6];
            let questionDto7 = response.data[7];
            let questionDto8 = response.data[8];
            let questionDto9 = response.data[9];
            // $('#questionList1').empty();
            $('#questionList0').append(questionDto0.title);
            $('#questionList0').append(questionDto0.title);
            $('#questionList1').append(questionDto1.title);
            // $('#questionList2').empty();
            $('#questionList2').append(questionDto2.title);
            // $('#questionList3').empty();
            $('#questionList3').append(questionDto3.title);
            // $('#questionList4').empty();
            $('#questionList4').append(questionDto4.title);
            // $('#questionList5').empty();
            $('#questionList5').append(questionDto5.title);
            // $('#questionList').empty();
            $('#questionList6').append(questionDto6.title);
            $('#questionList7').append(questionDto7.title);
            $('#questionList8').append(questionDto8.title);
            $('#questionList9').append(questionDto9.title);
        }
	  });
}

function getMyInfo(){
    var settings = {
        "url": "http://localhost:8080/users/mypage",
        "method": "GET",
        "timeout": 0,
        "headers": {
          "Authorization": localStorage.getItem('accessToken')
        },
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        $('#myName').empty();
        $('#myName').append(response.username)
        $('#mypoint').empty();
        $('#mypoint').append(response.point)
        $('#myphoneNumber').empty();
        $('#myphoneNumber').append(response.phoneNumber)
        $('#mygrade').empty();
        $('#mygrade').append(response.grade)
        $('#myrating').empty();
        $('#myrating').append(response.rating)
      });
    }

function getUserMe(){
	var settings = {

		"url": "http://localhost:8080/users/mypage",
		"method": "GET",
		"timeout": 0,
		"headers": {
		  "Authorization": 
			localStorage.getItem('accessToken')
		},
	  };
	  
	  $.ajax(settings).done(function (response) {
		console.log(response);
		console.log(status);
		// if(status ===403){
		// 	window.location = "/login.html"
		// }
		$('#loginUser').empty();
		$('#loginUser').append(response.username + '님')
        $('#grade').append(response.grade)
	  });
}