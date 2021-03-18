const skill = class {
    constructor(id, title, value, top, left, direction, enable)
    {
        this.id = id;
        this.title = title;
        this.value = value;
        this.top = top;
        this.left = left;
        this.direction = direction;
        this.enable = enable;
        this.selector = '#' + this.id;
        this.width = this.value + "0%";
        this.icon = 'Assets/Icon/skill/' + this.id + '.png';
    }
}

let skills = [];
skills.push(new skill("php", "PHP", "6", 10, 10, "top", true));                        // 10, 10 
skills.push(new skill("html", "HTML", "7", 158, 10, "right", true));                   // 158, 10 
skills.push(new skill("css", "CSS", "4", 296, 10, "right", true));                     // 296, 10 
skills.push(new skill("mysql", "MySQL", "5", 454, 10, "right", true));                 // 454, 10 
skills.push(new skill("symfony4", "Symfony 4", "5", 10, 168, "top", true));             // 10, 168
skills.push(new skill("bootstrap4", "Bootstrap 4", "6", 158, 168, "right", true));      // 158, 168
skills.push(new skill("git", "Git", "7", 296, 168, "right", true));                     // 296, 168
skills.push(new skill("cs", "C#", "7", 10, 326, "top", true));                           // 10, 326
skills.push(new skill("asp", "ASP.NET", "5", 158, 326, "right", true));                  // 158, 326
skills.push(new skill("js", "Javascript", "6", 10, 484, "top", true));                  // 10, 484
skills.push(new skill("jq", "JQuery", "6", 158, 484, "right", true));                   // 158, 484
skills.push(new skill("python", "Python", "4", 10, 642, "top", true));                  // 10, 642
skills.push(new skill("jsAll", "Javascript: Vanilla JS, JQuery", "6", 0, 0, "top", false));
skills.push(new skill("fram", "Framework Web: Symfony 4, Bootstrap 4", "6", 0, 0, "top", false));

$(window).ready(function () {
    skills.forEach(skill => {
        if (skill.enable) {
            $('#skill').append("<img style='display: block; position: absolute; top: " +
                (skill.direction == "top" ? "-300" : skill.top) + "px; left: " +
                (skill.direction == "left" ? "-1500": (skill.direction == "right" ? "2500" : skill.left)) + "px;' id='" +
                skill.id + "' src='" + skill.icon + "' alt='" + skill.title + "' width='128'> <br>");
        }
    });

    skills.sort(() => Math.random() - 0.5);

    let ite = 0
    skills.forEach(skill => {
        if (skill.enable) {
            //console.log(ite + " : " + skill.title)
            setTimeout(function () {
            if (skill.direction == "top")
                $(skill.selector).animate({ top: skill.top }, 500);
            else if (skill.direction == "left" || skill.direction == "right")
                $(skill.selector).animate({ left: skill.left }, 500);
            }, ite * 250);
            ite++;
        }
    });
})

$(function () {
    $.scrollify({
        section: ".row",
        scrollSpeed: 500,
        after: function () {
            switch ($.scrollify.current()[0].id) {
                case "CV":
                    skills.forEach(skill => {
                        //$(skill.selector).animate({ width: skill.width }, 500);
                    });
                    break;
                case "CV2":
                    setTimeout("$('#CV2 #études').animate({opacity: 1, top: 0}, 500)", 0);
                    setTimeout("$('#CV2 #stage').animate({opacity: 1, top: 0}, 500)", 250);
                    setTimeout("$('#CV2 #emploi').animate({opacity: 1, top: 0}, 500)", 500);
                    break;
                case "all":
                    setTimeout(() => {
                        $('#mapCard').addClass('bounceInDown');
                        $('#mapCard').animate({ opacity: 1 }, 1000, function () {
                            $('#mapCardTitle').animate({ opacity: 1 }, 500);
                        });
                    }, 0);
                    setTimeout(() => {
                        $('#planingCard').addClass('bounceInDown');
                        $('#planingCard').animate({ opacity: 1 }, 1000, function () {
                            $('#planingCardTitle').animate({ opacity: 1 }, 500);
                        });
                    }, 250);
                    setTimeout(() => {
                        $('#dungeonCard').addClass('bounceInDown');
                        $('#dungeonCard').animate({ opacity: 1 }, 1000, function () {
                            $('#dungeonCardTitle').animate({ opacity: 1 }, 500);
                        });
                    }, 500);
                    setTimeout(() => {
                        $('#albionCard').addClass('bounceInDown');
                        $('#albionCard').animate({ opacity: 1 }, 1000, function () {
                            $('#albionCardTitle').animate({ opacity: 1 }, 500);
                        });
                    }, 750);
                    setTimeout(() => {
                        $('#bestiaireCard').addClass('bounceInDown');
                        $('#bestiaireCard').animate({ opacity: 1 }, 1000, function () {
                            $('#bestiaireCardTitle').animate({ opacity: 1 }, 500);
                        });
                    }, 1000);
                    setTimeout(() => {
                        $('#cardmakerCard').addClass('bounceInDown');
                        $('#cardmakerCard').animate({ opacity: 1 }, 1000, function () {
                            $('#cardmakerCardTitle').animate({ opacity: 1 }, 500);
                        });
                    }, 1250);
                    setTimeout(() => {
                        $('#worldgenCard').addClass('bounceInDown');
                        $('#worldgenCard').animate({ opacity: 1 }, 1000, function () {
                            $('#worldgenCardTitle').animate({ opacity: 1 }, 500);
                        });
                    }, 1500);
                    setTimeout(() => {
                        $('#fnyCard').addClass('bounceInDown');
                        $('#fnyCard').animate({ opacity: 1 }, 1000, function () {
                            $('#fnyCardTitle').animate({ opacity: 1 }, 500);
                        });
                    }, 1750);
                    break;
            }
        },
        before: function () {
            switch (true) {
                case $.scrollify.current()[0].id != "CV":
                    skills.forEach(skill => {
                        //$(skill.selector).animate({ width: '0%' }, 0);
                    });
                    break;
                case $.scrollify.current()[0].id != "CV2":
                    $("#CV2 #études").animate({ opacity: 0, top: 100 }, 250);
                    $("#CV2 #stages").animate({ opacity: 0, top: 100 }, 250);
                    $("#CV2 #emploi").animate({ opacity: 0, top: 100 }, 250);
                    break;
            }
            if ($.scrollify.current()[0].id != "all") {
                $('#mapCard').animate({ opacity: 0 }, 10, function () {
                    $('#mapCardTitle').animate({ opacity: 0 }, 10);
                });
                $('#mapCard').removeClass("bounceInDown");

                $('#planingCard').animate({ opacity: 0 }, 10, function () {
                    $('#planingCardTitle').animate({ opacity: 0 }, 10);
                });
                $('#planingCard').removeClass("bounceInDown");

                $('#dungeonCard').animate({ opacity: 0 }, 10, function () {
                    $('#dungeonCardTitle').animate({ opacity: 0 }, 10);
                });
                $('#dungeonCard').removeClass("bounceInDown");

                $('#albionCard').animate({ opacity: 0 }, 10, function () {
                    $('#albionCardTitle').animate({ opacity: 0 }, 10);
                });
                $('#albionCard').removeClass("bounceInDown");

                $('#bestiaireCard').animate({ opacity: 0 }, 10, function () {
                    $('#bestiaireCardTitle').animate({ opacity: 0 }, 10);
                });
                $('#bestiaireCard').removeClass("bounceInDown");

                $('#cardmakerCard').animate({ opacity: 0 }, 10, function () {
                    $('#cardmakerCardTitle').animate({ opacity: 0 }, 10);
                });
                $('#cardmakerCard').removeClass("bounceInDown");

                $('#worldgenCard').animate({ opacity: 0 }, 10, function () {
                    $('#worldgenCardTitle').animate({ opacity: 0 }, 10);
                });
                $('#worldgenCard').removeClass("bounceInDown");

                $('#fnyCard').animate({ opacity: 0 }, 10, function () {
                    $('#fnyCardTitle').animate({ opacity: 0 }, 10);
                });
                $('#fnyCard').removeClass("bounceInDown");
            }
        }
    });
});