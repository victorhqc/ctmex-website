/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPadding = exports.getMargin = exports.getFontSize = exports.getSize = exports.getColor = exports.getProperty = undefined;

var _constants = __webpack_require__(15);

var baseTheme = {
  fontFamily: _constants.FONT_FAMILIES.roboto,
  fontSize: _constants.FONT_SIZES.sm,

  SIZES: _constants.SIZES,
  PADDING: _constants.PADDING,
  MARGIN: _constants.MARGIN,
  FONT_SIZES: _constants.FONT_SIZES,
  FONT_FAMILIES: _constants.FONT_FAMILIES,
  COLORS: _constants.COLORS
};

var getProperty = exports.getProperty = function getProperty(property, key) {
  return baseTheme[property][key];
};

var getColor = exports.getColor = function getColor(color) {
  return getProperty('COLORS', color);
};
var getSize = exports.getSize = function getSize(size) {
  return getProperty('SIZES', size);
};
var getFontSize = exports.getFontSize = function getFontSize(size) {
  return getProperty('FONT_SIZES', size);
};
var getMargin = exports.getMargin = function getMargin(margin) {
  return getProperty('MARGIN', margin);
};
var getPadding = exports.getPadding = function getPadding(padding) {
  return getProperty('PADDING', padding);
};

exports.default = baseTheme;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTextAlign = exports.setVerticalAlign = exports.noPadding = exports.noMargin = exports.setPadding = exports.setMargin = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _capitalize = __webpack_require__(16);

var _capitalize2 = _interopRequireDefault(_capitalize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setSpacing = function setSpacing(props, keyName) {
  if (!props[keyName]) {
    return '';
  }

  var defaultProps = typeof props[keyName] === 'number' ? {
    top: props[keyName],
    bottom: props[keyName],
    right: props[keyName],
    left: props[keyName]
  } : props[keyName];

  var base = _extends({
    top: 0,
    bottom: 0,
    right: 0,
    left: 0
  }, defaultProps);

  return '\n  ' + keyName + ': ' + base.top + 'px ' + base.right + 'px ' + base.bottom + 'px ' + base.left + 'px;\n  ';
};

var setMargin = exports.setMargin = function setMargin(props) {
  return setSpacing(props, 'margin');
};

var setPadding = exports.setPadding = function setPadding(props) {
  return setSpacing(props, 'padding');
};

var noSpacing = function noSpacing(props, keyName) {
  if (props['no' + (0, _capitalize2.default)(keyName)]) {
    return keyName + ': 0;';
  }

  return '';
};

var noMargin = exports.noMargin = function noMargin(props) {
  return noSpacing(props, 'margin');
};

var noPadding = exports.noPadding = function noPadding(props) {
  return noSpacing(props, 'padding');
};

var setVerticalAlign = exports.setVerticalAlign = function setVerticalAlign(props) {
  if (!props.verticalAlign) {
    return '';
  }

  return '\n  height: 100vh;\n  text-align: center;\n\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  ';
};

var setTextAlign = exports.setTextAlign = function setTextAlign(props) {
  if (!props.textAlign) {
    return '';
  }

  return 'text-align: ' + props.textAlign + ';';
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _App = __webpack_require__(13);

var _App2 = _interopRequireDefault(_App);

var _HomePage = __webpack_require__(17);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _NotFoundPage = __webpack_require__(21);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
  routes: [_extends({}, _HomePage2.default, {
    path: '/',
    exact: true
  }), _extends({}, _NotFoundPage2.default)]
})];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-family: ', ';\n  color: ', ';\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  font-family: ', ';\n  color: ', ';\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.fontFamily;
}, function (props) {
  return props.theme.color;
}, _utils.setMargin, _utils.setPadding, _utils.setVerticalAlign, _utils.setTextAlign, _utils.noMargin, _utils.noPadding);

exports.default = Container;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint import/prefer-default-export: 0 */

var NOT_FOUND = exports.NOT_FOUND = 'notFound';

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(11);

var _express = __webpack_require__(12);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(4);

var _Routes = __webpack_require__(6);

var _Routes2 = _interopRequireDefault(_Routes);

var _server = __webpack_require__(22);

var _server2 = _interopRequireDefault(_server);

var _context = __webpack_require__(25);

var _context2 = _interopRequireDefault(_context);

var _constants = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = process.env.port || 3000;

app.use(_express2.default.static('public'));

app.get('*', function (req, res) {
  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path);

  Promise.all(promises).then(function () {
    var context = new _context2.default();
    var content = (0, _server2.default)({ req: req, context: context });

    if (context.get(_constants.NOT_FOUND)) {
      res.status(404);
    }

    res.send(content);
  });
});

app.listen(PORT, function () {
  console.log('Listening on port ' + PORT + '...');
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterConfig = __webpack_require__(4);

var _Main = __webpack_require__(14);

var _Main2 = _interopRequireDefault(_Main);

var _Container = __webpack_require__(7);

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var route = _ref.route;
  return _react2.default.createElement(
    _Main2.default,
    null,
    _react2.default.createElement(
      _Container2.default,
      {
        noPadding: true,
        noMargin: true
      },
      (0, _reactRouterConfig.renderRoutes)(route.routes)
    )
  );
};

App.propTypes = {
  route: _propTypes2.default.shape({
    routes: _propTypes2.default.array
  }).isRequired
};

exports.default = {
  component: App
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _base = __webpack_require__(3);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var theme = _extends({}, _base2.default);

var MainTheme = function MainTheme(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    _styledComponents.ThemeProvider,
    { theme: theme },
    _react.Children.only(children)
  );
};

MainTheme.defaultProps = {
  children: null
};

MainTheme.propTypes = {
  children: _propTypes2.default.element
};

exports.default = MainTheme;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SIZES = exports.SIZES = {
  xs: 320,
  sm: 768,
  md: 1024,
  lg: 1224
};

var PADDING = exports.PADDING = {
  xs: 6,
  sm: 12,
  md: 24,
  lg: 36
};

var MARGIN = exports.MARGIN = {
  xs: 6,
  sm: 12,
  md: 24,
  lg: 36
};

var FONT_SIZES = exports.FONT_SIZES = {
  sm: 0.8,
  md: 1,
  lg: 2,
  xl: 3
};

var FONT_FAMILIES = exports.FONT_FAMILIES = {
  roboto: '\'Roboto\', sans-serif'
};

var COLORS = exports.COLORS = {
  white: '#fff',
  black: '#333',
  steelBlue: '#348AA7',
  independence: '#525174'
};

var BASE_THEME = exports.BASE_THEME = {
  colors: COLORS
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("lodash/capitalize");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(8);

var _Dark = __webpack_require__(26);

var _Dark2 = _interopRequireDefault(_Dark);

var _Container = __webpack_require__(7);

var _Container2 = _interopRequireDefault(_Container);

var _H = __webpack_require__(19);

var _H2 = _interopRequireDefault(_H);

var _H3 = __webpack_require__(20);

var _H4 = _interopRequireDefault(_H3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomePage = function HomePage() {
  return _react2.default.createElement(
    _Dark2.default,
    null,
    _react2.default.createElement(
      _react.Fragment,
      null,
      _react2.default.createElement(
        _reactHelmet.Helmet,
        null,
        _react2.default.createElement(
          'title',
          null,
          'Colegio de tenis mexicano'
        ),
        _react2.default.createElement('meta', { property: 'og:site_name', content: 'ctmex' }),
        _react2.default.createElement('meta', {
          property: 'og:title',
          content: 'Colegio de tenis mexicano'
        }),
        _react2.default.createElement('meta', { property: 'og:url', content: 'http://victorhqc.com' }),
        _react2.default.createElement('meta', { property: 'og:type', content: 'website' }),
        _react2.default.createElement('meta', { property: 'og:author', content: 'https://github.com/victorhqc' }),
        _react2.default.createElement('meta', {
          name: 'description',
          content: ''
        }),
        _react2.default.createElement('meta', {
          name: 'keywords',
          content: 'tenis, colegio, mexicano, escuela, clases'
        })
      ),
      _react2.default.createElement(
        _Container2.default,
        { verticalAlign: true },
        _react2.default.createElement(
          _H2.default,
          null,
          'CTMEX'
        ),
        _react2.default.createElement(
          _H4.default,
          null,
          'Colegio de tenis mexicano'
        )
      )
    )
  );
};

exports.default = {
  component: HomePage
};

/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-size: ', 'em;\n  font-weight: lighter;\n\n  ', '\n'], ['\n  font-size: ', 'em;\n  font-weight: lighter;\n\n  ', '\n']);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _base = __webpack_require__(3);

var _utils = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var H1 = _styledComponents2.default.h1(_templateObject, (0, _base.getFontSize)('xl'), _utils.noMargin);

exports.default = H1;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-size: ', 'em;\n  font-weight: lighter;\n\n  ', '\n'], ['\n  font-size: ', 'em;\n  font-weight: lighter;\n\n  ', '\n']);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _base = __webpack_require__(3);

var _utils = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var H2 = _styledComponents2.default.h2(_templateObject, (0, _base.getFontSize)('lg'), _utils.noMargin);

exports.default = H2;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundPage = function NotFoundPage(_ref) {
  var staticContext = _ref.staticContext;

  staticContext.set(_constants.NOT_FOUND, true);

  return _react2.default.createElement(
    'h1',
    null,
    'Oops, route not found.'
  );
};

NotFoundPage.defaultProps = {
  staticContext: {
    set: function set() {}
  }
};

NotFoundPage.propTypes = {
  staticContext: _propTypes2.default.shape({
    set: _propTypes2.default.func.isRequired
  })
};

exports.default = {
  component: NotFoundPage
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(23);

var _reactRouterDom = __webpack_require__(24);

var _reactRouterConfig = __webpack_require__(4);

var _styledComponents = __webpack_require__(1);

var _reactHelmet = __webpack_require__(8);

var _Routes = __webpack_require__(6);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var version =  false ? '[AIV]{version}[/AIV]' : 'development';
var bundle =  false ? 'bundle.js' : 'bundle.dev.js';

exports.default = function (_ref) {
  var req = _ref.req,
      context = _ref.context;

  var sheet = new _styledComponents.ServerStyleSheet();

  var content = (0, _server.renderToString)(_react2.default.createElement(
    _styledComponents.StyleSheetManager,
    { sheet: sheet.instance },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: context },
      _react2.default.createElement(
        _react.Fragment,
        null,
        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
      )
    )
  ));
  var styleTags = sheet.getStyleTags();

  var helmet = _reactHelmet.Helmet.renderStatic();

  return '<html>\n  <head>\n    ' + helmet.title.toString() + '\n    ' + helmet.meta.toString() + '\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400">\n    <!--\n      Font Face imported from https://fonts.google.com\n      Typography selected is \'Roboto\'\n    -->\n    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css" />\n    ' + styleTags + '\n  </head>\n  <body>\n    <div id="root">' + content + '</div>\n    <script src="' + bundle + '?' + version + '"></script>\n    <script>window.__VERSION__=\'' + version + '\';</script>\n    <!-- Global site tag (gtag.js) - Google Analytics -->\n    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-77111108-1"></script>\n    <script>\n      window.dataLayer = window.dataLayer || [];\n      function gtag(){dataLayer.push(arguments);}\n      gtag(\'js\', new Date());\n\n      gtag(\'config\', \'UA-77111108-1\');\n    </script>\n\n  </body>\n</html>';
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ContextManager = function () {
  function ContextManager() {
    _classCallCheck(this, ContextManager);

    this.context = {};
  }

  _createClass(ContextManager, [{
    key: "set",
    value: function set(key, value) {
      this.context[key] = value;
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.context[key];
    }
  }]);

  return ContextManager;
}();

exports.default = ContextManager;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _base = __webpack_require__(3);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var theme = _extends({}, _base2.default, {
  color: _base2.default.COLORS.black
});

var LightTheme = function LightTheme(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    _styledComponents.ThemeProvider,
    { theme: theme },
    _react.Children.only(children)
  );
};

LightTheme.defaultProps = {
  children: null
};

LightTheme.propTypes = {
  children: _propTypes2.default.element
};

exports.default = LightTheme;

/***/ })
/******/ ]);