"use strict";
// classes: public, protected private
exports.__esModule = true;
var Lesson = /** @class */ (function () {
    function Lesson(type, lenght, title, description) {
        this.type = type;
        this.lenght = lenght;
        this.title = title;
        this.description = description;
    }
    return Lesson;
}());
var lesson = new Lesson('VideoCourse', 3, 'Intro', '');
lesson.description = 'This is my course desc';
/* console.log(lesson); */ 
