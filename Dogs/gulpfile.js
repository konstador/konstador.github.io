var gulp       = require('gulp'), // Подключаем Gulp
    sass         = require('gulp-sass'), //Подключаем Sass пакет,
    browserSync  = require('browser-sync'), // Подключаем Browser Sync
    sourcemaps   = require('gulp-sourcemaps'),
    concat       = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
    uglify       = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
    cssnano      = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
    rename       = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
    del          = require('del'), // Подключаем библиотеку для удаления файлов и папок
    imagemin     = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
    pngquant     = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
    cache        = require('gulp-cache'), // Подключаем библиотеку кеширования
    autoprefixer = require('gulp-autoprefixer'),// Подключаем библиотеку для автоматического добавления префиксов
    smartgrid    = require('smart-grid');
    gcmq         = require('gulp-group-css-media-queries');

gulp.task ('grid', function() { // Создаем таск Smar-grid
    var smartgrid = require('smart-grid')});
 
/* It's principal settings in smart grid project */
var settings = {
    outputStyle: 'scss', /* less || scss || sass || styl */
    columns: 12, /* number of smagrid columns */
    offset: '25px', /* gutter width px || % || rem */
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1020px', /* max-width оn very large screen */
        fields: '0px' /* side fields */
    },
    breakPoints: {
        xl: {
            width: '2400px', /* -> @media (max-width: 1100px) */
        },

        lg:{
            width: '1200px;',
        },

        md: {
            width: '992px',
            //fields: '20px'
        },
        sm: {
            width: '768px',
             /* set fields only if you want to change container.fields */
        },
        xs: {
            width: '576px'
        },
        

        /* 
        We can create any quantity of break points.
 
        some_name: {
            width: 'Npx',
            fields: 'N(px|%|rem)',
            offset: 'N(px|%|rem)'
        }
        */
    }
};
 
smartgrid('app/sass', settings);

gulp.task('sass', function() { // Создаем таск Sass
    return gulp.src('app/sass/**/*.scss') // Берем источник
        .pipe(sourcemaps.init()) //для sourcemap
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
        .pipe(sourcemaps.write(''))
        //.pipe(gcmq())
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('scripts', function() {
    return gulp.src( // Берем все необходимые библиотеки
        'app/js/**/*' // Берем js
        )
        .pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
        .pipe(uglify()) // Сжимаем JS файл
        //.pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
        .pipe(gulp.dest('app/js')); // Выгружаем в папку app/js
});

gulp.task('code', function() {
    return gulp.src('app/*.html')
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('css-libs', function() {
    return gulp.src('app/css/**/*.css') // Выбираем файл для минификации
        //.pipe(gcmq())
        .pipe(cssnano()) // Сжимаем
        //.pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
        .pipe(gulp.dest('dist/css')); // Выгружаем в папку app/css
});

gulp.task('clean', async function() {
    return del.sync('dist'); // Удаляем папку dist перед сборкой
});

gulp.task('img', function() {
    return gulp.src('app/images/**/*') // Берем все изображения из app
        .pipe(cache(imagemin({ // С кешированием
        // .pipe(imagemin({ // Сжимаем изображения без кеширования
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))/**/)
        .pipe(gulp.dest('dist/images')); // Выгружаем на продакшен
});

gulp.task('prebuild', async function() {

    // var buildCss = gulp.src([ // Переносим библиотеки в продакшен
    // //     'app/css/main.css',
    // //     //'app/css/libs.min.css'
    // //     ])
    // // .pipe(gulp.dest('dist/css'))

    var buildFonts = gulp.src('app/fonts/**/*') // Переносим шрифты в продакшен
    .pipe(gulp.dest('dist/fonts'))

    var buildJs = gulp.src('app/js/**/*.min.js') // Переносим скрипты в продакшен
    .pipe(gulp.dest('dist/js'))

    var buildHtml = gulp.src('app/*.html') // Переносим HTML в продакшен
    .pipe(gulp.dest('dist'));

});

gulp.task('clear', function (callback) {
    return cache.clearAll();
})

gulp.task('watch', function() {
    gulp.watch('app/sass/**/*.scss', gulp.parallel('sass')); // Наблюдение за sass файлами
    gulp.watch('app/*.html', gulp.parallel('code')); // Наблюдение за HTML файлами в корне проекта
    gulp.watch(['app/js/common.js', 'app/libs/**/*.js'], gulp.parallel('scripts')); // Наблюдение за главным JS файлом и за библиотеками
});
gulp.task('default', gulp.parallel(//'css-libs',
 'sass', 'scripts', 'browser-sync', 'watch'));
gulp.task('build', gulp.parallel('prebuild', 'clean', 'img', 'sass', 'scripts','css-libs'));