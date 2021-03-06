# React Boilerplate

## Features

* [x] [Express](http://expressjs.com/) compressed (GZIP) static server
* [x] [Environment-configuration](http://12factor.net/config)-ready
  with [dotenv](https://github.com/motdotla/dotenv)
* [x] Assets generation powered by [Gulp](http://gulpjs.com/)
* [x] [Jade](http://jade-lang.com/) template engine
* [x] [Sass](http://sass-lang.com/) as CSS preprocessing language
* [x] [LiveReload](http://livereload.com/) all assets

## Getting Started

### Installation

```shell
npm install
```

### Watching Source Files

```shell
gulp
```

### Running Server

```shell
npm start
```

### Building for Production

```shell
gulp build
```

## Sass Tools

1. Install dependencies with [Bower](http://bower.io/):

  ```shell
  bower install -S bourbon
  ```

2. Link resources in `config/gulp.json` near:

  ```json
  {
    "sass": {
      "includePaths": [
        "bower_components/bourbon/app/assets/stylesheets"
      ]
    }
  }
  ```

3. Import your libraries into `main.sass`:

  ```sass
  @import "bourbon"
  ```
