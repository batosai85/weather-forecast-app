var gulp = require("gulp");
var $ = require("gulp-load-plugins")();
var browserSync = require("browser-sync").create();

gulp.task("html-min",function(){
    
    var src = "./src/views/*.html"
    var dest = "./public/views";
    return gulp.src(src)
        .pipe($.htmlmin({collapseWhitespace : true}))
        .pipe(gulp.dest(dest))
        .pipe(browserSync.reload({stream:true}));
    
});

gulp.task("css-min",function(){
    
    var src="./build/css/styles.css";
    var dest = "./build/css/";
    return gulp.src(src) 
        .pipe($.cssmin())
        .pipe(gulp.dest(dest))
        .pipe(browserSync.reload({stream:true}));
    
});

gulp.task('ng-min', function () {
    
    var src = "./build/js/bundle.js";
    var dest = "./build/js/";
    return gulp.src(src)
        .pipe($.ngmin())
        .pipe($.uglify())
        .pipe(gulp.dest(dest))
        .pipe(browserSync.reload({stream:true}));
    
});
gulp.task('image-min', function () {
          
    var src = ["./src/img/*.png","./src/img/*.jpg"];
    var dest = "./build/img";
    return  gulp.src(src)
        .pipe($.imagemin())
        .pipe(gulp.dest(dest));

});

gulp.task("nodemon", function(){
    return $.nodemon({
        script : "server.js"
    });
});

gulp.task("watch-all", ["nodemon"], function () {
    
    browserSync.init({
        proxy: "localhost:3000"
        , port: 5000
        , notify: true
        , open: false
    });     
    gulp.watch("./views/*.html",["html-min"]);
    gulp.watch("./src/css/*.css",["css-min"]);
    gulp.watch("./src/js/*.js",["ng-min"]);
     
});