// [AIV]  Build version: 0.0.2 - Wednesday, February 21st, 2018, 10:19:56 AM  
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
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getThemeBackgroundColor = exports.getThemeColor = exports.getPadding = exports.getMargin = exports.getLineHeight = exports.getFontFamily = exports.getFontSize = exports.getSize = exports.getColor = undefined;

var _constants = __webpack_require__(24);

var baseTheme = {
  fontFamily: _constants.FONT_FAMILIES.gotham,
  fontSize: _constants.FONT_SIZES.sm
};

var getColor = exports.getColor = function getColor(color) {
  return _constants.COLORS[color];
};
var getSize = exports.getSize = function getSize(size) {
  return _constants.SIZES[size];
};
var getFontSize = exports.getFontSize = function getFontSize(size) {
  return _constants.FONT_SIZES[size];
};
var getFontFamily = exports.getFontFamily = function getFontFamily(fontFamily) {
  return _constants.FONT_FAMILIES[fontFamily];
};
var getLineHeight = exports.getLineHeight = function getLineHeight(lineHeight) {
  return _constants.LINE_HEIGHT[lineHeight];
};
var getMargin = exports.getMargin = function getMargin(margin) {
  return _constants.MARGIN[margin];
};
var getPadding = exports.getPadding = function getPadding(padding) {
  return _constants.PADDING[padding];
};
var getThemeColor = exports.getThemeColor = function getThemeColor(_ref) {
  var theme = _ref.theme;
  return theme.color;
};
var getThemeBackgroundColor = exports.getThemeBackgroundColor = function getThemeBackgroundColor(_ref2) {
  var theme = _ref2.theme;
  return theme.backgroundColor;
};

exports.default = baseTheme;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHide = exports.setBackground = exports.setMinHeight = exports.setHeight = exports.setWidth = exports.setColor = exports.setTextAlign = exports.setVerticalAlign = exports.noPadding = exports.noMargin = exports.setPadding = exports.setMargin = exports.mediaQuery = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _capitalize = __webpack_require__(25);

var _capitalize2 = _interopRequireDefault(_capitalize);

var _base = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mediaQuery = exports.mediaQuery = function mediaQuery(size, items) {
  return '\n@media (max-width: ' + (0, _base.getSize)(size) + 'px) {\n  ' + items + '\n}\n';
};

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

var setVerticalAlign = exports.setVerticalAlign = function setVerticalAlign(_ref) {
  var verticalAlign = _ref.verticalAlign;

  if (!verticalAlign) {
    return '';
  }

  return '\n  text-align: center;\n\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  ';
};

var setTextAlign = exports.setTextAlign = function setTextAlign(_ref2) {
  var textAlign = _ref2.textAlign;

  if (!textAlign) {
    return '';
  }

  return 'text-align: ' + textAlign + ';';
};

var setColor = exports.setColor = function setColor(_ref3) {
  var theme = _ref3.theme,
      noThemeColor = _ref3.noThemeColor;

  if (noThemeColor || !theme.color || !theme.color) {
    return '';
  }

  return 'color: ' + theme.color + ';';
};

var setWidth = exports.setWidth = function setWidth(_ref4) {
  var width = _ref4.width;

  if (!width) {
    return '';
  }

  return 'width: ' + width + ';';
};

var setHeight = exports.setHeight = function setHeight(_ref5) {
  var height = _ref5.height;

  if (!height) {
    return '';
  }

  return 'height: ' + height + ';';
};

var setMinHeight = exports.setMinHeight = function setMinHeight(_ref6) {
  var minHeight = _ref6.minHeight;

  if (!minHeight) {
    return '';
  }

  return 'min-height: ' + minHeight + ';';
};

var setBackground = exports.setBackground = function setBackground(_ref7) {
  var noBackground = _ref7.noBackground,
      theme = _ref7.theme,
      background = _ref7.background;

  if (noBackground || !background && !theme.backgroundColor) {
    return '';
  }

  if (!background && theme.backgroundColor) {
    return 'background: ' + theme.backgroundColor + ';';
  }

  return 'background: ' + background + ';';
};

var hideWithSize = function hideWithSize(size) {
  return mediaQuery(size, 'display: none;');
};

var setHide = exports.setHide = function setHide(_ref8) {
  var hide = _ref8.hide;

  switch (hide) {
    case true:
      return 'display: none';
    case 'xs':
    case 'sm':
    case 'md':
    case 'lg':
      return hideWithSize(hide);
    default:
      return '';
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(0);

var _base = __webpack_require__(1);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var themeColor = function themeColor(color) {
  switch (color) {
    case 'blue':
      return {
        backgroundColor: (0, _base.getColor)('persianBlue'),
        color: (0, _base.getColor)('white')
      };

    case 'red':
      return {
        backgroundColor: (0, _base.getColor)('carnation'),
        color: (0, _base.getColor)('white')
      };

    case 'green':
      return {
        backgroundColor: (0, _base.getColor)('mountainMeadow'),
        color: (0, _base.getColor)('white')
      };

    case 'yellow':
      return {
        backgroundColor: (0, _base.getColor)('seaBuckthorn'),
        color: (0, _base.getColor)('white')
      };

    case 'black':
      return {
        backgroundColor: (0, _base.getColor)('black'),
        color: (0, _base.getColor)('white')
      };

    case 'white':
      return {
        backgroundColor: (0, _base.getColor)('white'),
        color: (0, _base.getColor)('black')
      };

    default:
      return {};
  }
};

var ThemeProvider = function ThemeProvider(_ref) {
  var children = _ref.children,
      color = _ref.color;
  return _react2.default.createElement(
    _styledComponents.ThemeProvider,
    {
      theme: _extends({}, _base2.default, themeColor(color))
    },
    _react.Children.only(children)
  );
};

ThemeProvider.defaultProps = {
  color: ''
};

ThemeProvider.propTypes = {
  children: _propTypes2.default.element.isRequired,
  color: _propTypes2.default.string
};

exports.default = ThemeProvider;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-family: ', ';\n  position: relative;\n  ', ';\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  font-family: ', ';\n  position: relative;\n  ', ';\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = __webpack_require__(3);

var _base = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var margin = function margin(props) {
  if (props.margin) {
    return (0, _utils.setMargin)(props);
  }

  return 'margin: 0 ' + (0, _base.getMargin)('md') + 'px;';
};

var setZIndex = function setZIndex(props) {
  if (!props.zIndex) {
    return '';
  }

  return 'z-index: ' + props.zIndex + ';';
};

var Container = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.fontFamily;
}, setZIndex, margin, _utils.setPadding, _utils.setVerticalAlign, _utils.setTextAlign, _utils.noMargin, _utils.noPadding, _utils.setColor, _utils.setWidth, _utils.setHeight, _utils.setMinHeight, _utils.setBackground, _utils.setHide);

exports.default = Container;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("lodash/map");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n\n  ', '\n  ', ';\n'], ['\n  display: flex;\n\n  ', '\n  ', ';\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var mediaBreakPoint = function mediaBreakPoint(size) {
  return '\n  ' + (0, _utils.mediaQuery)(size, '\n    flex-wrap: wrap;\n\n    > div {\n      width: 100% !important;\n    }\n  ') + '\n';
};

var wrap = function wrap(_ref) {
  var size = _ref.size,
      noWrap = _ref.noWrap;

  if (noWrap) {
    return '';
  }

  switch (size) {
    case 'xs':
      return mediaBreakPoint('xs');
    case 'sm':
      return mediaBreakPoint('sm');
    case 'md':
      return mediaBreakPoint('md');
    case 'lg':
      return mediaBreakPoint('lg');
    case 'xl':
      return mediaBreakPoint('xl');
    default:
      return mediaBreakPoint('md');
  }
};

var setGapBetweenChildren = function setGapBetweenChildren(_ref2) {
  var gap = _ref2.gap,
      size = _ref2.size;

  if (!gap) {
    return '';
  }

  return '\n    > *:first-child {\n      margin: 0 ' + gap + ' 0 0;\n\n      ' + (0, _utils.mediaQuery)(size, '\n        margin: 0 0 ' + gap + ' 0;\n      ') + '\n    }\n\n    > *:last-child {\n      margin: 0 0 0 ' + gap + ';\n\n      ' + (0, _utils.mediaQuery)(size, '\n        margin: ' + gap + ' 0 0 0;\n      ') + '\n    }\n\n    > * {\n      margin: 0 ' + gap + ';\n      /* Horrible, horrible hack, but i\'m tired and I don\'t want to make an abstraction, sue me. */\n      z-index: 1;\n\n      ' + (0, _utils.mediaQuery)(size, '\n        margin: ' + gap + ' 0;\n      ') + '\n    }\n  ';
};

var Row = _styledComponents2.default.div(_templateObject, function (props) {
  return wrap(props);
}, setGapBetweenChildren);

exports.default = Row;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  right: ', 'px;\n'], ['\n  ', '\n  right: ', 'px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n  left: ', 'px;\n'], ['\n  ', '\n  left: ', 'px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: relative;\n  width: 1.5em;\n  height: 1.2em;\n  cursor: pointer;\n\n  &:before {\n    content: "";\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 1.5em;\n    height: 0.25em;\n    background: ', ';\n    box-shadow:\n      0 0.45em 0 0 ', ',\n      0 0.9em 0 0 ', ';\n  }\n'], ['\n  position: relative;\n  width: 1.5em;\n  height: 1.2em;\n  cursor: pointer;\n\n  &:before {\n    content: "";\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 1.5em;\n    height: 0.25em;\n    background: ', ';\n    box-shadow:\n      0 0.45em 0 0 ', ',\n      0 0.9em 0 0 ', ';\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  position: relative;\n  padding-top: calc(', 'px + 2em);\n'], ['\n  position: relative;\n  padding-top: calc(', 'px + 2em);\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  font-family: ', ';\n  font-size: ', 'em;\n\n  display: flex;\n  ', '\n\n  ', '\n'], ['\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  font-family: ', ';\n  font-size: ', 'em;\n\n  display: flex;\n  ', '\n\n  ', '\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  margin: 0 ', 'px;\n\n  ', '\n\n  a {\n    display: block;\n    text-decoration: none;\n    color: ', ';\n    padding: ', 'px;\n    border: 1px solid ', ';\n    border-radius: 3px;\n    transition-property: border;\n    transition-duration: 150ms;\n    transition-timing-function: ease-out;\n\n    &:hover {\n      border: 1px solid ', ';\n    }\n  }\n'], ['\n  margin: 0 ', 'px;\n\n  ', '\n\n  a {\n    display: block;\n    text-decoration: none;\n    color: ', ';\n    padding: ', 'px;\n    border: 1px solid ', ';\n    border-radius: 3px;\n    transition-property: border;\n    transition-duration: 150ms;\n    transition-timing-function: ease-out;\n\n    &:hover {\n      border: 1px solid ', ';\n    }\n  }\n']);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRouter = __webpack_require__(9);

var _reactRouterDom = __webpack_require__(19);

var _map = __webpack_require__(7);

var _map2 = _interopRequireDefault(_map);

var _base = __webpack_require__(1);

var _utils = __webpack_require__(3);

var _Provider = __webpack_require__(5);

var _Provider2 = _interopRequireDefault(_Provider);

var _main = __webpack_require__(14);

var _html = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint react/no-did-mount-set-state: 0 */

var sharedStyles = '\n  position: absolute;\n  z-index: 1;\n  top: ' + (0, _base.getMargin)('md') + 'px;\n';

var Nav = _styledComponents2.default.nav(_templateObject, sharedStyles, (0, _base.getMargin)('md'));

var MobileNavWrapper = _styledComponents2.default.div(_templateObject2, sharedStyles, (0, _base.getMargin)('md'));

var MobileNav = _styledComponents2.default.nav(_templateObject3, _base.getThemeColor, _base.getThemeColor, _base.getThemeColor);

var MobileWrapper = _styledComponents2.default.div(_templateObject4, (0, _base.getMargin)('md'));

var Ul = _styledComponents2.default.ul(_templateObject5, (0, _base.getFontFamily)('sourceSansPro'), (0, _base.getFontSize)('md'), _utils.setColor, (0, _utils.mediaQuery)('sm', '\n    display: block;\n  '));

var isActive = function isActive(_ref) {
  var url = _ref.url,
      location = _ref.location;
  return url === location.pathname;
};

var getBorderColor = function getBorderColor() {
  var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return function (props) {
    if (force || isActive(props)) {
      return (0, _base.getThemeColor)(props);
    }

    return 'transparent';
  };
};

var Li = _styledComponents2.default.li(_templateObject6, (0, _base.getMargin)('sm'), (0, _utils.mediaQuery)('sm', '\n    margin: ' + (0, _base.getMargin)('sm') + 'px;\n  '), _base.getThemeColor, (0, _base.getPadding)('xs'), getBorderColor(), getBorderColor(true));

var mapItems = function mapItems(props, items) {
  return (0, _map2.default)(items, function (item) {
    return _react2.default.createElement(
      Li,
      _extends({ key: item.url }, props, item),
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: item.url },
        item.label
      )
    );
  });
};

var Menu = function (_Component) {
  _inherits(Menu, _Component);

  function Menu(props) {
    _classCallCheck(this, Menu);

    var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

    _this.state = {
      isMobileMenuVisible: false,
      isMobile: false
    };

    _this.onResizeScreen = _this.onResizeScreen.bind(_this);
    _this.onToggleMobileMenu = _this.onToggleMobileMenu.bind(_this);
    return _this;
  }

  _createClass(Menu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.onResizeScreen);
      this.onResizeScreen();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.onResizeScreen);
    }
  }, {
    key: 'onToggleMobileMenu',
    value: function onToggleMobileMenu(e) {
      e.preventDefault();
      this.setState(function (_ref2) {
        var isMobileMenuVisible = _ref2.isMobileMenuVisible;
        return {
          isMobileMenuVisible: !isMobileMenuVisible
        };
      });
    }
  }, {
    key: 'onResizeScreen',
    value: function onResizeScreen() {
      if ((0, _html.getScreenSize)() <= (0, _base.getSize)('sm')) {
        this.setState({
          isMobile: true
        });
        return;
      }

      this.setState({
        isMobile: false
      });
    }
  }, {
    key: 'renderMobile',
    value: function renderMobile() {
      var isMobileMenuVisible = this.state.isMobileMenuVisible;


      var items = isMobileMenuVisible ? _react2.default.createElement(
        Ul,
        null,
        mapItems(this.props, _main.routes)
      ) : null;

      return _react2.default.createElement(
        _Provider2.default,
        { color: 'white' },
        _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            MobileNavWrapper,
            null,
            _react2.default.createElement(MobileNav, {
              role: 'navigation',
              onClick: this.onToggleMobileMenu,
              onTouchEnd: this.onToggleMobileMenu
            })
          ),
          _react2.default.createElement(
            MobileWrapper,
            null,
            items
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var isMobile = this.state.isMobile;


      if (isMobile) {
        return this.renderMobile();
      }

      return _react2.default.createElement(
        Nav,
        { role: 'navigation' },
        _react2.default.createElement(
          Ul,
          null,
          mapItems(this.props, _main.routes)
        )
      );
    }
  }]);

  return Menu;
}(_react.Component);

exports.default = (0, _reactRouter.withRouter)(Menu);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHelmet = __webpack_require__(30);

var _main = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Helmet = function Helmet(_ref) {
  var title = _ref.title,
      pathname = _ref.pathname,
      description = _ref.description,
      src = _ref.src;
  return _react2.default.createElement(
    _reactHelmet.Helmet,
    null,
    _react2.default.createElement(
      'title',
      null,
      'ctmex' + (title ? ' - ' + title : '')
    ),
    _react2.default.createElement('meta', { property: 'og:site_name', content: 'ctmex' }),
    _react2.default.createElement('meta', { property: 'og:title', content: 'Colegio de tenis mexicano' }),
    _react2.default.createElement('meta', { property: 'og:description', content: description }),
    _react2.default.createElement('meta', { property: 'og:url', content: 'http://colegiodetenis.mx' + (pathname ? '' + pathname : '') }),
    _react2.default.createElement('meta', { property: 'og:type', content: 'website' }),
    _react2.default.createElement('meta', { property: 'og:locale', content: 'es_MX' }),
    _react2.default.createElement('meta', { property: 'og:image', content: src }),
    _react2.default.createElement('meta', { property: 'twitter:card', content: 'summary_large_image' }),
    _react2.default.createElement('meta', { property: 'twitter:site', content: '@colegiotenismx' }),
    _react2.default.createElement('meta', { name: 'description', content: description }),
    _react2.default.createElement('meta', {
      name: 'keywords',
      content: _main.KEYWORDS
    })
  );
};

Helmet.defaultProps = {
  title: null,
  pathname: null,
  src: null
};

Helmet.propTypes = {
  title: _propTypes2.default.string,
  pathname: _propTypes2.default.string,
  description: _propTypes2.default.string.isRequired,
  src: _propTypes2.default.string
};

exports.default = Helmet;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  location: _propTypes2.default.shape({
    pathname: _propTypes2.default.string
  }).isRequired
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  width: ', ';\n\n  ', '\n'], ['\n  position: relative;\n  width: ', ';\n\n  ', '\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Column = _styledComponents2.default.div(_templateObject, function (props) {
  return (props.size || 1) * 100 + '%';
}, _utils.setVerticalAlign);

Column.propTypes = {
  size: _propTypes2.default.number
};

Column.defaltProps = {
  size: 1
};

exports.default = Column;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint import/prefer-default-export: 0 */

var routes = exports.routes = [{
  label: 'Inicio',
  url: '/',
  changefreq: 'monthly',
  priority: 1.0
}, {
  label: 'Método',
  url: '/method',
  changefreq: 'monthly',
  priority: 0.7
}, {
  label: 'Inscripciones',
  url: '/registration',
  changefreq: 'monthly',
  priority: 0.5
}, {
  label: 'Preguntas frecuentes',
  url: '/faq',
  changefreq: 'monthly',
  priority: 0.3
}, {
  label: 'Contacto',
  url: '/contact',
  changefreq: 'monthly',
  priority: 0.2
}];

var KEYWORDS = exports.KEYWORDS = '\ntenis, tennis, colegio, mexicano, M\xE9xico, Qu\xE9retaro, escuela, clases, tenis mexicano,\ncolegio de tenis, escuela de tenis, clases de tenis, tenis en mexico,\ntennis in mexico, tennis en mexico, tenis queretaro, escuela de tenis en queretaro,\ncolegio de tenis en queretaro\n';

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  height: ', ';\n  width: ', ';\n  position: ', ';\n  z-index: ', ';\n\n  background-image: ', ';\n  background-position: ', ';\n  background-size: cover;\n  ', ';\n  ', ';\n\n  @media (max-width: ', 'px) {\n    background-position: 75%;\n  }\n'], ['\n  height: ', ';\n  width: ', ';\n  position: ', ';\n  z-index: ', ';\n\n  background-image: ', ';\n  background-position: ', ';\n  background-size: cover;\n  ', ';\n  ', ';\n\n  @media (max-width: ', 'px) {\n    background-position: 75%;\n  }\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _base = __webpack_require__(1);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var setMinHeight = function setMinHeight(_ref) {
  var minHeight = _ref.minHeight;

  if (!minHeight) {
    return '';
  }

  return 'min-height: ' + minHeight + ';';
};

var Background = _styledComponents2.default.div(_templateObject, function (props) {
  return props.height || '';
}, function (props) {
  return props.width || '100%';
}, function (props) {
  return props.position || 'relative';
}, function (props) {
  return props.zIndex || '';
}, function (props) {
  return 'url(' + props.src + ')' || '';
}, function (props) {
  return props.backgroundPosition || 'center';
}, setMinHeight, _utils.setHide, (0, _base.getSize)('sm'));

exports.default = Background;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  transform: translate3d(', 'px, -', 'px, 0);\n'], ['\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  transform: translate3d(', 'px, -', 'px, 0);\n']);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _base = __webpack_require__(1);

var _ctmex = __webpack_require__(56);

var _ctmex2 = _interopRequireDefault(_ctmex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Img = _styledComponents2.default.img(_templateObject, (0, _base.getMargin)('md'), (0, _base.getMargin)('md'));

var Logo = function Logo(props) {
  return _react2.default.createElement(Img, _extends({ src: _ctmex2.default, alt: 'ctmex logo', width: '150' }, props));
};

exports.default = Logo;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-family: ', ';\n  font-size: ', 'em;\n  font-weight: bold;\n\n  ', '\n  ', '\n'], ['\n  font-family: ', ';\n  font-size: ', 'em;\n  font-weight: bold;\n\n  ', '\n  ', '\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _base = __webpack_require__(1);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var H1 = _styledComponents2.default.h1(_templateObject, (0, _base.getFontFamily)('sourceSansPro'), (0, _base.getFontSize)('xxl'), _utils.noMargin, _utils.setColor);

exports.default = H1;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-family: ', ';\n  font-size: ', 'em;\n  font-weight: lighter;\n\n  ', '\n  ', '\n'], ['\n  font-family: ', ';\n  font-size: ', 'em;\n  font-weight: lighter;\n\n  ', '\n  ', '\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _base = __webpack_require__(1);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var H2 = _styledComponents2.default.h2(_templateObject, (0, _base.getFontFamily)('sourceSansPro'), (0, _base.getFontSize)('xl'), _utils.noMargin, _utils.setColor);

exports.default = H2;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-size: ', ';\n  font-weight: 300;\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  font-size: ', ';\n  font-weight: 300;\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _base = __webpack_require__(1);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var fontSize = function fontSize(props) {
  if (props.lead) {
    return '1.2em';
  }

  return (0, _base.getFontSize)('md') + 'em';
};

var P = _styledComponents2.default.p(_templateObject, fontSize, _utils.setTextAlign, _utils.setPadding, _utils.setMargin, _utils.noMargin, _utils.noPadding, _utils.setColor);

exports.default = P;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var TITLE = exports.TITLE = 'Método';
var DESCRIPTION = exports.DESCRIPTION = '6 a\xF1os de colegio, 3 fases. A trav\xE9s de estas etapas se crean una serie\nde pasos de desarrollo, a fin de que los jugadores progresen de acuerdo con su edad, su\nhabilidad y confianza.';

var INTRO_TITLE = exports.INTRO_TITLE = 'El método ctmex';
var INTRODUCTION = exports.INTRODUCTION = {
  part_1: 'Est\xE1 basado en una forma de ense\xF1anza donde los\n  jugadores aprenden jugando de una manera b\xE1sica y simplificando las instrucciones; de esta manera\n  el aprendizaje fluye de una manera natural. A diferencia de los sistemas tradicionales donde se\n  les repite incontables veces muchas instrucciones, lo cual logra confusi\xF3n y frustraci\xF3n. Gran\n  parte de nuestra metodolog\xEDa est\xE1 basada en un manejo psicol\xF3gico adecuado, que cuida la forma de\n  desarrollarse del ni\xF1o o ni\xF1a. Espec\xEDficamente se maneja un sistema de medici\xF3n y evaluaci\xF3n, el\n  cual detecta fortalezas y \xE1reas de oportunidad en los jugadores.',
  part_2: 'Al t\xE9rmino de cada unidad se le entrega a los padres y madres de familia una boleta de\n  resultados, donde se explica lo aprendido, as\xED como su calificaci\xF3n por unidad. Como en todo\n  colegio se necesita cierto promedio para continuar al siguiente a\xF1o escolar.'
};

var SIX_YEARS_TITLE = exports.SIX_YEARS_TITLE = '6 años de colegio, 3 fases';
var SIX_YEARS = exports.SIX_YEARS = {
  part_1: 'A trav\xE9s de estas etapas se crean una serie de pasos de desarrollo,\n  a fin de que los jugadores progresen de acuerdo con su edad, su habilidad y confianza.',
  part_2: 'Durante el proceso, el tama\xF1o de la cancha, longitud de la raqueta,\n  velocidad de la pelota y duraci\xF3n de las clases, se incrementa hasta que el jugador est\xE9 listo\n  para pasar a la cancha completa y usar las pelotas amarillas.'
};

var TABLE_HEADERS = exports.TABLE_HEADERS = {
  phases: 'Étapas',
  age: 'Edad',
  ball: 'Pelota',
  courtSize: 'Tamaño de cancha',
  net: 'Red',
  racketSize: 'Tamaño de raqueta'
};

var PHASES = exports.PHASES = 'Étapas';

var PHASE_1_TITLE = exports.PHASE_1_TITLE = 'De 4 - 7 años';
var PHASE_1_BALL = exports.PHASE_1_BALL = 'Velocidad y bote reducido';
var PHASE_1_PICTURE = exports.PHASE_1_PICTURE = 'Cancha de tenis, fase 1';
var PHASE_1_COURT_SIZE = exports.PHASE_1_COURT_SIZE = {
  only: '11m x 5.5m',
  empty: ''
};
var PHASE_1_NET = exports.PHASE_1_NET = '0.8m';
var PHASE_1_RACKET_SIZE = exports.PHASE_1_RACKET_SIZE = '17" a 21"';

var PHASE_2_TITLE = exports.PHASE_2_TITLE = 'De 7 - 9 años';
var PHASE_2_BALL = exports.PHASE_2_BALL = 'Velocidad y bote reducido';
var PHASE_2_PICTURE = exports.PHASE_2_PICTURE = 'Cancha de tenis, fase 2';
var PHASE_2_COURT_SIZE = exports.PHASE_2_COURT_SIZE = {
  singles: '18.2m x 6.4m (singles)',
  doubles: '18.2m x 8.2m (dobles)'
};
var PHASE_2_NET = exports.PHASE_2_NET = '0.9m al centro, 1m en postes';
var PHASE_2_RACKET_SIZE = exports.PHASE_2_RACKET_SIZE = '21" a 25"';

var PHASE_3_TITLE = exports.PHASE_3_TITLE = 'De 9 - 11 años';
var PHASE_3_BALL = exports.PHASE_3_BALL = 'Velocidad y bote ligeramente reducido';
var PHASE_3_PICTURE = exports.PHASE_3_PICTURE = 'Cancha de tenis, fase 3';
var PHASE_3_COURT_SIZE = exports.PHASE_3_COURT_SIZE = {
  singles: '23.7m x 8.2m (singles)',
  doubles: '23.7m x 11m (dobles)'
};
var PHASE_3_NET = exports.PHASE_3_NET = '0.9m al centro, 1m en postes';
var PHASE_3_RACKET_SIZE = exports.PHASE_3_RACKET_SIZE = '25" en adelante';

var CLASSES_TITLE = exports.CLASSES_TITLE = 'Clases en ctmex';
var CLASSES = exports.CLASSES = {
  part_1: 'Las clases son de una hora y media por d\xEDa y se divide en dos partes; la clase de tenis,\n  aqu\xED vemos pura t\xE9cnica y se va perfeccionando d\xEDa con d\xEDa, se les ense\xF1a peque\xF1os movimientos\n  que sean f\xE1ciles de captar y utilizamos equipo did\xE1ctico para hacer las clases m\xE1s divertidas\n  y como los ejercicios se aprenden a base de muchas repeticiones tambi\xE9n buscamos hacer\n  din\xE1micas diferentes para que los ni\xF1os no lo sientan como siempre lo mismo.',
  part_2: 'La segunda parte es de desarrollo f\xEDsico y le damos la misma prioridad en cuanto al\n  tiempo que el tenis porque queremos hacer una cultura en los ni\xF1os de que se me debe dar la\n  misma importancia el perfeccionar la t\xE9cnica como lo es desarrollarse f\xEDsicamente.'
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _App = __webpack_require__(47);

var _App2 = _interopRequireDefault(_App);

var _HomePage = __webpack_require__(55);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _ContactPage = __webpack_require__(63);

var _ContactPage2 = _interopRequireDefault(_ContactPage);

var _MethodPage = __webpack_require__(67);

var _MethodPage2 = _interopRequireDefault(_MethodPage);

var _RegistrationPage = __webpack_require__(76);

var _RegistrationPage2 = _interopRequireDefault(_RegistrationPage);

var _FaqPage = __webpack_require__(79);

var _FaqPage2 = _interopRequireDefault(_FaqPage);

var _NotFoundPage = __webpack_require__(85);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
  routes: [_extends({}, _HomePage2.default, {
    path: '/',
    exact: true
  }), _extends({}, _MethodPage2.default, {
    path: '/method'
  }), _extends({}, _ContactPage2.default, {
    path: '/contact'
  }), _extends({}, _FaqPage2.default, {
    path: '/faq'
  }), _extends({}, _RegistrationPage2.default, {
    path: '/registration'
  }), _extends({}, _NotFoundPage2.default)]
})];

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SIZES = exports.SIZES = {
  xs: 480,
  sm: 736,
  md: 980,
  lg: 1280,
  xl: 1690
};

var PADDING = exports.PADDING = {
  xs: 5,
  sm: 8,
  md: 13,
  lg: 21,
  xl: 34
};

var MARGIN = exports.MARGIN = {
  xs: 5,
  sm: 8,
  md: 13,
  lg: 21,
  xl: 34
};

var FONT_SIZES = exports.FONT_SIZES = {
  sm: 0.8,
  md: 1,
  lg: 1.5,
  xl: 2,
  xxl: 3
};

var LINE_HEIGHT = exports.LINE_HEIGHT = {
  lg: 1.5
};

var FONT_FAMILIES = exports.FONT_FAMILIES = {
  gotham: '\'Gotham\', sans-serif',
  sourceSansPro: '\'SourceSansPro\', sans-serif'
};

var COLORS = exports.COLORS = {
  white: '#ffffff',
  black: '#333333',
  gray: '#cccccc',
  // red
  carnation: '#f45a56',
  // orange
  yellowOrange: '#ffbd48',
  seaBuckthorn: '#fab531',
  // green
  shamrock: '#50dd90',
  mountainMeadow: '#26c870',
  jewel: '#19844a',
  // blue
  persianBlue: '#1946ba',
  madison: '#0f2a70'
};

var BASE_THEME = exports.BASE_THEME = {
  colors: COLORS
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("lodash/capitalize");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var TITLE = exports.TITLE = 'Contacto';
var DESCRIPTION = exports.DESCRIPTION = '\xBFTienes alguna pregunta? Cont\xE1ctanos por correo, tel\xE9fono o usa\nnuestro formulario de contacto. Adem\xE1s puedes revisar nuestra ubicaci\xF3n en el mapa.';

var CONTACT_US = exports.CONTACT_US = 'Contáctanos';
var PHONE = exports.PHONE = 'Teléfono';
var ADDRESS = exports.ADDRESS = 'Dirección';
var EMAIL = exports.EMAIL = 'Correo electrónico';

var FORM_NAME = exports.FORM_NAME = 'Nombre';
var FORM_PHONE = exports.FORM_PHONE = 'Teléfono';
var FORM_EMAIL = exports.FORM_EMAIL = 'Correo electrónico';
var FORM_TITLE = exports.FORM_TITLE = 'Título';
var FORM_BODY = exports.FORM_BODY = 'Mensaje';
var FORM_SEND = exports.FORM_SEND = 'Enviar';

var SUCCESS_EMAIL_TITLE = exports.SUCCESS_EMAIL_TITLE = '¡Se ha enviado tu mensaje!';
var SUCCESS_EMAIL_MESSAGE = exports.SUCCESS_EMAIL_MESSAGE = '\nLo estaremos revisando pronto, te enviaremos un mensaje tan pronto como podamos \xA1Gracias!\n';

var FAILED_EMAIL_TITLE = exports.FAILED_EMAIL_TITLE = 'Ups, No se ha podido enviar el mensaje';
var FAILED_EMAIL_MESSAGE = exports.FAILED_EMAIL_MESSAGE = '\n  Intenta nuevamente m\xE1s tarde, lamentamos no poder ayudarte en \xE9ste momento.\n';

var ACTUAL_ADDRESS = exports.ACTUAL_ADDRESS = 'Anillo vial fray junipero Serra 19875 Querétaro, Qro. Mex.';

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint import/prefer-default-export: 0 */

var scriptParams = function scriptParams() {
  return {
    async: false,
    defer: false
  };
};

var injectScript = exports.injectScript = function injectScript(src) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scriptParams();

  var isCreated = document.querySelector('script[src="' + src + '"]');

  if (isCreated) {
    return;
  }

  var script = document.createElement('script');
  script.src = src;
  script.async = params.async;
  script.defer = params.defer;
  document.body.appendChild(script);
};

var getScreenSize = exports.getScreenSize = function getScreenSize() {
  return document.documentElement.clientWidth;
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  z-index: -1;\n  ', '\n'], ['\n  z-index: -1;\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  background-color: ', ';\n  width: 100%;\n  height: 100%;\n'], ['\n  background-color: ', ';\n  width: 100%;\n  height: 100%;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  background-image: url(', ');\n  background-color: ', ';\n  background-blend-mode: soft-light;\n  opacity: 0.2;\n  ', '\n'], ['\n  background-image: url(', ');\n  background-color: ', ';\n  background-blend-mode: soft-light;\n  opacity: 0.2;\n  ', '\n']);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var repeatedStyles = '\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n';

var Wrapper = _styledComponents2.default.div(_templateObject, repeatedStyles);

var Background = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.theme.backgroundColor;
});

var Doodle = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.src;
}, function (props) {
  return props.theme.backgroundColor;
}, repeatedStyles);

var DoodleBackground = function DoodleBackground(props) {
  return _react2.default.createElement(
    Wrapper,
    null,
    _react2.default.createElement(Background, props),
    _react2.default.createElement(Doodle, props)
  );
};

exports.default = DoodleBackground;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  text-align: left;\n  line-height: ', ';\n  width: ', ';\n  margin: 0 auto;\n  ', '\n\n  ', '\n'], ['\n  text-align: left;\n  line-height: ', ';\n  width: ', ';\n  margin: 0 auto;\n  ', '\n\n  ', '\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _base = __webpack_require__(1);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var InfoContainer = _styledComponents2.default.div(_templateObject, (0, _base.getLineHeight)('lg'), function (props) {
  return props.width;
}, _utils.setColor, (0, _utils.mediaQuery)('xs', '\n    padding: 0 ' + (0, _base.getMargin)('xs') + 'px;\n  '));

exports.default = InfoContainer;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ctmex_cover.jpg";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ctmex_ball_backpack.svg";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ctmex_raquet_trophy.svg";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-family: ', ';\n  font-size: ', 'em;\n  font-weight: lighter;\n\n  ', '\n  ', '\n\n  small {\n    font-family: ', ';\n    color: ', '95;\n  }\n'], ['\n  font-family: ', ';\n  font-size: ', 'em;\n  font-weight: lighter;\n\n  ', '\n  ', '\n\n  small {\n    font-family: ', ';\n    color: ', '95;\n  }\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _base = __webpack_require__(1);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var H2 = _styledComponents2.default.h2(_templateObject, (0, _base.getFontFamily)('sourceSansPro'), (0, _base.getFontSize)('lg'), _utils.noMargin, _utils.setColor, (0, _base.getFontFamily)('gotham'), _base.getThemeColor);

exports.default = H2;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/tennis_phase_1.svg";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/tennis_phase_2.svg";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/tennis_phase_3.svg";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint import/prefer-default-export: 0 */

var NOT_FOUND = exports.NOT_FOUND = 'notFound';

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(42);

var _express = __webpack_require__(43);

var _express2 = _interopRequireDefault(_express);

var _bodyParser = __webpack_require__(44);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _dotenv = __webpack_require__(45);

var _dotenv2 = _interopRequireDefault(_dotenv);

var _sitemap = __webpack_require__(46);

var _sitemap2 = _interopRequireDefault(_sitemap);

var _reactRouterConfig = __webpack_require__(18);

var _map = __webpack_require__(7);

var _map2 = _interopRequireDefault(_map);

var _Routes = __webpack_require__(23);

var _Routes2 = _interopRequireDefault(_Routes);

var _server = __webpack_require__(86);

var _server2 = _interopRequireDefault(_server);

var _context = __webpack_require__(88);

var _context2 = _interopRequireDefault(_context);

var _constants = __webpack_require__(39);

var _email = __webpack_require__(89);

var _email2 = _interopRequireDefault(_email);

var _main = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

_dotenv2.default.config();
var app = (0, _express2.default)();
var PORT = process.env.PORT || 3000;

app.use(_bodyParser2.default.json());
app.use(_express2.default.static('public'));

(0, _email2.default)(app);

var sitemap = _sitemap2.default.createSitemap({
  hostname: process.env.WEB_DOMAIN,
  cacheTime: 24 * 60 * 1000,
  urls: (0, _map2.default)(_main.routes, function (_ref) {
    var url = _ref.url,
        route = _objectWithoutProperties(_ref, ['url']);

    return _extends({}, route, {
      url: url === '/' ? '/' : url + '/'
    });
  })
});

app.get('/sitemap.xml', function (req, res) {
  sitemap.toXML(function (err, xml) {
    if (err) {
      res.status(500).end();
      return;
    }

    res.header('Content-Type', 'application/xml');
    res.send(xml);
  });
});

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
/* 42 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("sitemap");

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  @font-face {\n    font-family: \'Gotham\';\n    font-weight: normal;\n    font-style: normal;\n    src: url(', ') format(\'woff\');\n  }\n\n  @font-face {\n    font-family: \'SourceSansPro\';\n    font-weight: bold;\n    font-style: normal;\n    src: url(', ') format(\'truetype\');\n  }\n'], ['\n  @font-face {\n    font-family: \'Gotham\';\n    font-weight: normal;\n    font-style: normal;\n    src: url(', ') format(\'woff\');\n  }\n\n  @font-face {\n    font-family: \'SourceSansPro\';\n    font-weight: bold;\n    font-style: normal;\n    src: url(', ') format(\'truetype\');\n  }\n']);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(0);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterConfig = __webpack_require__(18);

var _Provider = __webpack_require__(5);

var _Provider2 = _interopRequireDefault(_Provider);

var _Container = __webpack_require__(6);

var _Container2 = _interopRequireDefault(_Container);

var _Footer = __webpack_require__(48);

var _Footer2 = _interopRequireDefault(_Footer);

var _GothamLight = __webpack_require__(53);

var _GothamLight2 = _interopRequireDefault(_GothamLight);

var _SourceSansProBlack = __webpack_require__(54);

var _SourceSansProBlack2 = _interopRequireDefault(_SourceSansProBlack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* eslint no-unused-expressions: 0 */
(0, _styledComponents.injectGlobal)(_templateObject, _GothamLight2.default, _SourceSansProBlack2.default);

var App = function App(_ref) {
  var route = _ref.route;
  return _react2.default.createElement(
    _Provider2.default,
    null,
    _react2.default.createElement(
      _react.Fragment,
      null,
      _react2.default.createElement(
        _Container2.default,
        {
          noPadding: true,
          noMargin: true
        },
        (0, _reactRouterConfig.renderRoutes)(route.routes)
      ),
      _react2.default.createElement(_Footer2.default, null)
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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  list-style: none;\n  padding: 0;\n  margin: 0;\n'], ['\n  list-style: none;\n  padding: 0;\n  margin: 0;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-size: ', 'em;\n  margin: ', 'px 0;\n\n  a {\n    color: ', ';\n    text-decoration: none;\n  }\n\n  a:hover {\n    text-decoration: underline;\n  }\n'], ['\n  font-size: ', 'em;\n  margin: ', 'px 0;\n\n  a {\n    color: ', ';\n    text-decoration: none;\n  }\n\n  a:hover {\n    text-decoration: underline;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  margin-left: ', 'px;\n  margin-top: ', 'px;\n'], ['\n  margin-left: ', 'px;\n  margin-top: ', 'px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  margin-top: ', 'px;\n'], ['\n  margin-top: ', 'px;\n']);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _map = __webpack_require__(7);

var _map2 = _interopRequireDefault(_map);

var _reactRouterDom = __webpack_require__(19);

var _Provider = __webpack_require__(5);

var _Provider2 = _interopRequireDefault(_Provider);

var _base = __webpack_require__(1);

var _Row = __webpack_require__(8);

var _Row2 = _interopRequireDefault(_Row);

var _Column = __webpack_require__(13);

var _Column2 = _interopRequireDefault(_Column);

var _Container = __webpack_require__(6);

var _Container2 = _interopRequireDefault(_Container);

var _ctmex_white = __webpack_require__(49);

var _ctmex_white2 = _interopRequireDefault(_ctmex_white);

var _facebook = __webpack_require__(50);

var _facebook2 = _interopRequireDefault(_facebook);

var _instagram = __webpack_require__(51);

var _instagram2 = _interopRequireDefault(_instagram);

var _twitter = __webpack_require__(52);

var _twitter2 = _interopRequireDefault(_twitter);

var _main = __webpack_require__(14);

var _contact = __webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Ul = _styledComponents2.default.ul(_templateObject);

var Li = _styledComponents2.default.li(_templateObject2, (0, _base.getFontSize)('md'), (0, _base.getMargin)('md'), _base.getThemeColor);

var buildRoutes = function buildRoutes(items) {
  return _react2.default.createElement(
    Ul,
    null,
    (0, _map2.default)(items, function (_ref) {
      var url = _ref.url,
          label = _ref.label;
      return _react2.default.createElement(
        Li,
        { key: url },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: url },
          label
        )
      );
    })
  );
};

var buildSocialMedia = function buildSocialMedia() {
  return _react2.default.createElement(
    _Container2.default,
    {
      noBackground: true,
      textAlign: 'center',
      margin: {
        top: (0, _base.getMargin)('xl'),
        right: 0,
        left: 0,
        bottom: 0
      }
    },
    _react2.default.createElement(
      _Row2.default,
      { noWrap: true },
      _react2.default.createElement(
        _Column2.default,
        { size: 1 / 3 },
        _react2.default.createElement(
          'a',
          { href: 'https://www.facebook.com/ctmex' },
          _react2.default.createElement('img', { src: _facebook2.default, width: '40', alt: 'facebook @ctmex' })
        )
      ),
      _react2.default.createElement(
        _Column2.default,
        { size: 1 / 3 },
        _react2.default.createElement(
          'a',
          { href: 'https://twitter.com/colegiotenismx' },
          _react2.default.createElement('img', { src: _twitter2.default, width: '40', alt: 'twitter @colegiotenismx' })
        )
      ),
      _react2.default.createElement(
        _Column2.default,
        { size: 1 / 3 },
        _react2.default.createElement(
          'a',
          { href: 'https://www.instagram.com/ctmex' },
          _react2.default.createElement('img', { src: _instagram2.default, width: '40', alt: 'instagram @ctmex' })
        )
      )
    )
  );
};

var Img = _styledComponents2.default.img(_templateObject3, (0, _base.getMargin)('xl'), (0, _base.getMargin)('xl'));

var Address = _styledComponents2.default.address(_templateObject4, (0, _base.getMargin)('xl'));

var Footer = function Footer() {
  return _react2.default.createElement(
    'footer',
    null,
    _react2.default.createElement(
      _Provider2.default,
      { color: 'black' },
      _react2.default.createElement(
        _Container2.default,
        { minHeight: '30vh', noMargin: true, padding: (0, _base.getPadding)('lg') },
        _react2.default.createElement(
          _Row2.default,
          { size: 'sm' },
          _react2.default.createElement(
            _Column2.default,
            { size: 1 / 3 },
            _react2.default.createElement(Img, { src: _ctmex_white2.default, alt: 'colegio de tenix mexicano', height: '100' })
          ),
          _react2.default.createElement(
            _Column2.default,
            { size: 1 / 3 },
            buildRoutes(_main.routes)
          ),
          _react2.default.createElement(
            _Column2.default,
            { size: 1 / 3 },
            buildSocialMedia(),
            _react2.default.createElement(
              Address,
              null,
              _contact.ACTUAL_ADDRESS
            )
          )
        )
      )
    )
  );
};

exports.default = Footer;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ctmex_white.svg";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/facebook.svg";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/instagram.svg";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/twitter.svg";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Gotham-Light.woff";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Source-sans-pro-black.ttf";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n    width: 100%;\n    min-height: 500px;\n    ', '\n'], ['\n    width: 100%;\n    min-height: 500px;\n    ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(9);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Provider = __webpack_require__(5);

var _Provider2 = _interopRequireDefault(_Provider);

var _utils = __webpack_require__(3);

var _base = __webpack_require__(1);

var _Menu = __webpack_require__(10);

var _Menu2 = _interopRequireDefault(_Menu);

var _Container = __webpack_require__(6);

var _Container2 = _interopRequireDefault(_Container);

var _Row = __webpack_require__(8);

var _Row2 = _interopRequireDefault(_Row);

var _Column = __webpack_require__(13);

var _Column2 = _interopRequireDefault(_Column);

var _Background = __webpack_require__(15);

var _Background2 = _interopRequireDefault(_Background);

var _H = __webpack_require__(20);

var _H2 = _interopRequireDefault(_H);

var _P = __webpack_require__(21);

var _P2 = _interopRequireDefault(_P);

var _Logo = __webpack_require__(16);

var _Logo2 = _interopRequireDefault(_Logo);

var _InformationBox = __webpack_require__(57);

var _InformationBox2 = _interopRequireDefault(_InformationBox);

var _InfoContainer = __webpack_require__(29);

var _InfoContainer2 = _interopRequireDefault(_InfoContainer);

var _Helmet = __webpack_require__(11);

var _Helmet2 = _interopRequireDefault(_Helmet);

var _home = __webpack_require__(59);

var _withRouter = __webpack_require__(12);

var _withRouter2 = _interopRequireDefault(_withRouter);

var _ctmex_imagotipo = __webpack_require__(60);

var _ctmex_imagotipo2 = _interopRequireDefault(_ctmex_imagotipo);

var _ctmex_cover = __webpack_require__(31);

var _ctmex_cover2 = _interopRequireDefault(_ctmex_cover);

var _home_running = __webpack_require__(61);

var _home_running2 = _interopRequireDefault(_home_running);

var _home_kid_racket = __webpack_require__(62);

var _home_kid_racket2 = _interopRequireDefault(_home_kid_racket);

var _ctmex_ball_backpack = __webpack_require__(32);

var _ctmex_ball_backpack2 = _interopRequireDefault(_ctmex_ball_backpack);

var _ctmex_raquet_trophy = __webpack_require__(33);

var _ctmex_raquet_trophy2 = _interopRequireDefault(_ctmex_raquet_trophy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Gap = _styledComponents2.default.div(_templateObject, _utils.setVerticalAlign);

var LogoImg = _styledComponents2.default.img(_templateObject2, (0, _utils.mediaQuery)('xs', '\n    margin-bottom: ' + (0, _base.getMargin)('xl') + 'px;\n  '));

var HomePage = function HomePage(_ref) {
  var location = _ref.location;
  return _react2.default.createElement(
    'section',
    null,
    _react2.default.createElement(_Helmet2.default, {
      pathname: location.pathname,
      description: _home.DESCRIPTION,
      src: _ctmex_cover2.default
    }),
    _react2.default.createElement(
      _Provider2.default,
      { color: 'white' },
      _react2.default.createElement(_Menu2.default, null)
    ),
    _react2.default.createElement(
      _Background2.default,
      {
        src: _ctmex_cover2.default,
        height: '60vh',
        backgroundPosition: '0 15%'
      },
      _react2.default.createElement(_Logo2.default, null)
    ),
    _react2.default.createElement(
      _react.Fragment,
      null,
      _react2.default.createElement(
        _InformationBox2.default,
        {
          color: 'red',
          textPosition: 'left',
          src: _home_running2.default,
          alt: _home.PICTURE_KIDS_RUNNING,
          doodleSrc: _ctmex_ball_backpack2.default
        },
        _react2.default.createElement(
          _InfoContainer2.default,
          { width: '70%' },
          _react2.default.createElement(
            'article',
            { id: 'what-is' },
            _react2.default.createElement(
              _H2.default,
              null,
              _home.WHAT_IS_TITLE
            ),
            _react2.default.createElement(
              _P2.default,
              { lead: true },
              _home.WHAT_IS
            )
          )
        )
      ),
      _react2.default.createElement(
        _InformationBox2.default,
        {
          color: 'blue',
          textPosition: 'right',
          src: _home_kid_racket2.default,
          alt: _home.PICTURE_KIDS_RACKET,
          doodleSrc: _ctmex_raquet_trophy2.default
        },
        _react2.default.createElement(
          _InfoContainer2.default,
          { width: '70%' },
          _react2.default.createElement(
            'article',
            { id: 'origins' },
            _react2.default.createElement(
              _H2.default,
              null,
              _home.ORIGINS_TITLE
            ),
            _react2.default.createElement(
              _P2.default,
              { lead: true },
              _home.ORIGINS
            )
          )
        )
      ),
      _react2.default.createElement(
        _Provider2.default,
        { color: 'white' },
        _react2.default.createElement(
          Gap,
          { verticalAlign: true },
          _react2.default.createElement(
            _Row2.default,
            { size: 'sm' },
            _react2.default.createElement(
              _Column2.default,
              { size: 3 / 4 },
              _react2.default.createElement(
                _InfoContainer2.default,
                { width: '90%' },
                _react2.default.createElement(
                  _H2.default,
                  null,
                  _home.WHY_TITLE
                ),
                _react2.default.createElement(
                  _P2.default,
                  { lead: true },
                  _home.WHY
                )
              )
            ),
            _react2.default.createElement(
              _Column2.default,
              { size: 1 / 4, verticalAlign: true },
              _react2.default.createElement(
                _Container2.default,
                null,
                _react2.default.createElement(LogoImg, {
                  width: '100%',
                  src: _ctmex_imagotipo2.default,
                  alt: _home.CTMEX_PICTURE
                })
              )
            )
          )
        )
      )
    )
  );
};

HomePage.propTypes = _extends({}, _withRouter2.default);

exports.default = {
  component: (0, _reactRouter.withRouter)(HomePage)
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ctmex.svg";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  background: ', ';\n  text-align: center;\n'], ['\n  background: ', ';\n  text-align: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  object-fit: cover;\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n\n  ', '\n'], ['\n  object-fit: cover;\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n\n  ', '\n']);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _base = __webpack_require__(1);

var _utils = __webpack_require__(3);

var _Provider = __webpack_require__(5);

var _Provider2 = _interopRequireDefault(_Provider);

var _Container = __webpack_require__(6);

var _Container2 = _interopRequireDefault(_Container);

var _Row = __webpack_require__(8);

var _Row2 = _interopRequireDefault(_Row);

var _Column = __webpack_require__(13);

var _Column2 = _interopRequireDefault(_Column);

var _DoodleBackground = __webpack_require__(28);

var _DoodleBackground2 = _interopRequireDefault(_DoodleBackground);

var _Box = __webpack_require__(58);

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.div(_templateObject, (0, _base.getColor)('white'));

var Img = _styledComponents2.default.img(_templateObject2, (0, _utils.mediaQuery)('xs', '\n    position: relative;\n    max-height: 40vh;\n  '));

var InformationBox = function (_Component) {
  _inherits(InformationBox, _Component);

  function InformationBox() {
    _classCallCheck(this, InformationBox);

    return _possibleConstructorReturn(this, (InformationBox.__proto__ || Object.getPrototypeOf(InformationBox)).apply(this, arguments));
  }

  _createClass(InformationBox, [{
    key: 'renderWrapper',
    value: function renderWrapper(element) {
      var _props = this.props,
          color = _props.color,
          doodleSrc = _props.doodleSrc;


      return _react2.default.createElement(
        Wrapper,
        null,
        _react2.default.createElement(
          _Box2.default,
          null,
          _react2.default.createElement(
            _Provider2.default,
            { color: color },
            _react2.default.createElement(
              _Container2.default,
              {
                noMargin: true,
                background: 'transparent',
                zIndex: 1
              },
              _react2.default.createElement(_DoodleBackground2.default, { src: doodleSrc }),
              element
            )
          )
        )
      );
    }
  }, {
    key: 'renderRight',
    value: function renderRight() {
      var _props2 = this.props,
          src = _props2.src,
          alt = _props2.alt,
          children = _props2.children,
          leftSize = _props2.leftSize,
          rightSize = _props2.rightSize;


      return this.renderWrapper(_react2.default.createElement(
        _Row2.default,
        { size: 'xs' },
        _react2.default.createElement(
          _Column2.default,
          { size: leftSize || 1 / 3 },
          _react2.default.createElement(Img, { src: src, alt: alt })
        ),
        _react2.default.createElement(
          _Column2.default,
          { size: rightSize || 2 / 3 },
          children
        )
      ));
    }
  }, {
    key: 'renderLeft',
    value: function renderLeft() {
      var _props3 = this.props,
          src = _props3.src,
          alt = _props3.alt,
          children = _props3.children,
          leftSize = _props3.leftSize,
          rightSize = _props3.rightSize;


      return this.renderWrapper(_react2.default.createElement(
        _Row2.default,
        { size: 'xs' },
        _react2.default.createElement(
          _Column2.default,
          { size: leftSize || 2 / 3 },
          children
        ),
        _react2.default.createElement(
          _Column2.default,
          { size: rightSize || 1 / 3 },
          _react2.default.createElement(Img, { src: src, alt: alt })
        )
      ));
    }
  }, {
    key: 'render',
    value: function render() {
      var textPosition = this.props.textPosition;


      switch (textPosition) {
        case 'right':
          return this.renderRight();
        case 'left':
          return this.renderLeft();
        default:
          return null;
      }
    }
  }]);

  return InformationBox;
}(_react.Component);

InformationBox.defaultProps = {
  textPosition: 'right',
  color: 'blue',
  src: null,
  alt: '',
  doodleSrc: null,
  leftSize: 0,
  rightSize: 0
};

InformationBox.propTypes = {
  textPosition: _propTypes2.default.string,
  color: _propTypes2.default.string,
  src: _propTypes2.default.string,
  alt: _propTypes2.default.string,
  doodleSrc: _propTypes2.default.string,
  children: _propTypes2.default.element.isRequired,
  leftSize: _propTypes2.default.number,
  rightSize: _propTypes2.default.number
};

exports.default = InformationBox;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  margin-top: ', 'px;\n  margin-left: ', 'px;\n  width: calc(100% - ', 'px);\n'], ['\n  margin-top: ', 'px;\n  margin-left: ', 'px;\n  width: calc(100% - ', 'px);\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _base = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Box = _styledComponents2.default.div(_templateObject, (0, _base.getMargin)('md'), (0, _base.getMargin)('md'), (0, _base.getMargin)('md') * 2);

exports.default = Box;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var KEYWORDS = exports.KEYWORDS = '\ntenis, tennis, colegio, mexicano, M\xE9xico, Qu\xE9retaro, escuela, clases, tenis mexicano,\ncolegio de tenis, escuela de tenis, clases de tenis, tenis en mexico,\ntennis in mexico, tennis en mexico, tenis queretaro, escuela de tenis en queretaro,\ncolegio de tenis en queretaro\n';

var DESCRIPTION = exports.DESCRIPTION = 'El primer colegio de tenis en M\xE9xico basado en un m\xE9todo de ense\xF1anza\ninnovador, con el cual el ni\xF1o o ni\xF1a aprende de acuerdo a su edad, tama\xF1o y fuerza.\n\xA1Si aprendemos de mejor manera, jugaremos mejor!';

var WHAT_IS_TITLE = exports.WHAT_IS_TITLE = '¿Qué es?';
var WHAT_IS = exports.WHAT_IS = 'Es un nuevo me\u0301todo educativo aplicado al tenis, donde los jugadores\naprendera\u0301n y comprendera\u0301n ma\u0301s fa\u0301cil este deporte. Para hacer su desarrollo\nma\u0301s dida\u0301ctico sin perder el enfoque de profesionalismo que maneja el colegio.';

var WHY_TITLE = exports.WHY_TITLE = '¿Porqué?';
var WHY = exports.WHY = 'Colegio de Tenis Mexicano nace de una necesidad que crece cada d\xEDa en M\xE9xico,\nla necesidad de mejorar el nivel de tenis y la forma de ense\xF1arse en nuestro pa\xEDs.\nHace m\xE1s de 30 a\xF1os nuestro pa\xEDs pas\xF3 de ser un referente en el tenis a nivel mundial,\na un pa\xEDs con jugadores j\xF3venes con potencial que se quedaban a medio camino, esto debido a que\nel tenis y la forma de ense\xF1arlo, han evolucionado y M\xE9xico se ha quedado atr\xE1s.\nEn nuestra metodolog\xEDa creemos que un jugador profesional no nace, se hace! Y para esto\nel aspecto profesional debe de estar en cada etapa (iniciaci\xF3n, Junior, juvenil, amateur\ny profesional), tanto en cada instrucci\xF3n del entrenador, como en cada acci\xF3n del jugador.\nTambi\xE9n creemos que el tenis debe de llegar a muchas m\xE1s personas para que as\xED pueda florecer,\ny esto solamente se lograr\xE1 haci\xE9ndolo accesible.';

var ORIGINS_TITLE = exports.ORIGINS_TITLE = '¿Dónde nace?';
var ORIGINS = exports.ORIGINS = 'El proyecto Colegio de Tenis Mexicano nace en Europa y surge a trav\xE9s\nde viajes de investigaci\xF3n y certificaciones.';

var PICTURE_KIDS_RUNNING = exports.PICTURE_KIDS_RUNNING = 'Niños corriendo';
var PICTURE_KIDS_RACKET = exports.PICTURE_KIDS_RACKET = 'Niños practicando con raquetas';
var PICTURE_WILSON = exports.PICTURE_WILSON = 'Cancha y equipo de ctmex';
var CTMEX_PICTURE = exports.CTMEX_PICTURE = 'Imagotipo de ctmex';

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ctmex_imagotipo.svg";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/home_running.jpg";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/home_kid_racket.jpg";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  text-align: right;\n  border-right: 1px solid ', '40;\n  margin-right: 3em;\n  padding-right: 3em;\n\n  ', '\n\n  .label {\n    display: block;\n    text-align: right;\n    margin-top: ', 'px;\n    margin-bottom: ', 'px;\n\n    ', '\n\n    span {\n      vertical-align: top;\n      margin-right: ', 'px;\n\n      ', '\n    }\n  }\n\n  input[type="text"],\n  input[type="email"],\n  input[type="number"] {\n    border: 1px solid ', ';\n    border-radius: 4px;\n    padding: ', 'px ', ';\n    outline: none;\n\n    ', '\n  }\n\n  textarea {\n    border: 1px solid ', ';\n    border-radius: 4px;\n  }\n\n  .button {\n    background-color: ', ';\n    color: ', ';\n    padding: ', 'px;\n    border-radius: 4px;\n    min-width: 125px;\n    cursor: pointer;\n    border: none;\n    outline: none;\n\n    transition-property: background-color:\n    transition-duration: 150ms;\n    transition-timing-function: ease-in-out;\n\n    &:disabled {\n      opacity: 0.5;\n      cursor: not-allowed;\n    }\n\n    &:hover {\n      background-color: ', ';\n    }\n\n    &:active {\n      background-color: ', ';\n    }\n  }\n'], ['\n  text-align: right;\n  border-right: 1px solid ', '40;\n  margin-right: 3em;\n  padding-right: 3em;\n\n  ', '\n\n  .label {\n    display: block;\n    text-align: right;\n    margin-top: ', 'px;\n    margin-bottom: ', 'px;\n\n    ', '\n\n    span {\n      vertical-align: top;\n      margin-right: ', 'px;\n\n      ', '\n    }\n  }\n\n  input[type="text"],\n  input[type="email"],\n  input[type="number"] {\n    border: 1px solid ', ';\n    border-radius: 4px;\n    padding: ', 'px ', ';\n    outline: none;\n\n    ', '\n  }\n\n  textarea {\n    border: 1px solid ', ';\n    border-radius: 4px;\n  }\n\n  .button {\n    background-color: ', ';\n    color: ', ';\n    padding: ', 'px;\n    border-radius: 4px;\n    min-width: 125px;\n    cursor: pointer;\n    border: none;\n    outline: none;\n\n    transition-property: background-color:\n    transition-duration: 150ms;\n    transition-timing-function: ease-in-out;\n\n    &:disabled {\n      opacity: 0.5;\n      cursor: not-allowed;\n    }\n\n    &:hover {\n      background-color: ', ';\n    }\n\n    &:active {\n      background-color: ', ';\n    }\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  color: ', ';\n'], ['\n  color: ', ';\n']);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(9);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Provider = __webpack_require__(5);

var _Provider2 = _interopRequireDefault(_Provider);

var _Menu = __webpack_require__(10);

var _Menu2 = _interopRequireDefault(_Menu);

var _A = __webpack_require__(64);

var _A2 = _interopRequireDefault(_A);

var _H = __webpack_require__(17);

var _H2 = _interopRequireDefault(_H);

var _H3 = __webpack_require__(34);

var _H4 = _interopRequireDefault(_H3);

var _Container = __webpack_require__(6);

var _Container2 = _interopRequireDefault(_Container);

var _Row = __webpack_require__(8);

var _Row2 = _interopRequireDefault(_Row);

var _Column = __webpack_require__(13);

var _Column2 = _interopRequireDefault(_Column);

var _Map = __webpack_require__(65);

var _Map2 = _interopRequireDefault(_Map);

var _Helmet = __webpack_require__(11);

var _Helmet2 = _interopRequireDefault(_Helmet);

var _ajax = __webpack_require__(66);

var _ajax2 = _interopRequireDefault(_ajax);

var _base = __webpack_require__(1);

var _utils = __webpack_require__(3);

var _contact = __webpack_require__(26);

var _withRouter = __webpack_require__(12);

var _withRouter2 = _interopRequireDefault(_withRouter);

var _ctmex_cover = __webpack_require__(31);

var _ctmex_cover2 = _interopRequireDefault(_ctmex_cover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CONTACT_EMAIL = 'colegiodetenismexicano@gmail.com';

var Form = _styledComponents2.default.form(_templateObject, _base.getThemeColor, (0, _utils.mediaQuery)('sm', '\n    text-align: center;\n    border: none;\n    margin: 0;\n  '), (0, _base.getMargin)('sm'), (0, _base.getMargin)('sm'), (0, _utils.mediaQuery)('sm', '\n      text-align: center;\n    '), (0, _base.getMargin)('md'), (0, _utils.mediaQuery)('sm', '\n        display: block;\n        width: 100%;\n        margin-right: 0;\n        margin-bottom: ' + (0, _base.getMargin)('xs') + 'px;\n        font-size: ' + (0, _base.getFontSize)('lg') + 'em;\n      '), (0, _base.getColor)('gray'), (0, _base.getPadding)('xs'), (0, _base.getPadding)('sm'), (0, _utils.mediaQuery)('sm', '\n      width: 80%;\n    '), (0, _base.getColor)('gray'), (0, _base.getColor)('shamrock'), (0, _base.getColor)('white'), (0, _base.getPadding)('sm'), (0, _base.getColor)('mountainMeadow'), (0, _base.getColor)('jewel'));

var getResponseColor = function getResponseColor(props) {
  if (props.success) {
    return (0, _base.getColor)('mountainMeadow');
  }

  return (0, _base.getColor)('carnation');
};

var ResponseMessage = _styledComponents2.default.div(_templateObject2, getResponseColor);

var resetForm = function resetForm() {
  return {
    title: '',
    message: '',
    name: '',
    phone: '',
    email: ''
  };
};

var ContactPage = function (_Component) {
  _inherits(ContactPage, _Component);

  function ContactPage(props) {
    _classCallCheck(this, ContactPage);

    var _this = _possibleConstructorReturn(this, (ContactPage.__proto__ || Object.getPrototypeOf(ContactPage)).call(this, props));

    _this.state = {
      data: resetForm(),
      isFetching: false,
      isSent: false,
      isFailed: false
    };

    _this.onSubmit = _this.onSubmit.bind(_this);
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(ContactPage, [{
    key: 'onChange',
    value: function onChange(keyName) {
      var _this2 = this;

      return function (e) {
        return _this2.setState({
          data: _extends({}, _this2.state.data, _defineProperty({}, keyName, e.target.value))
        });
      };
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit(e) {
      var _this3 = this;

      e.preventDefault();

      var _state = this.state,
          data = _state.data,
          isFetching = _state.isFetching;


      if (isFetching) {
        return;
      }

      this.setState({
        isFetching: true
      });

      _ajax2.default.post('/email', data).then(function () {
        _this3.setState({
          data: resetForm(),
          isSent: true,
          isFetching: false
        });
      }).catch(function () {
        _this3.setState({
          isFailed: true,
          isFetching: false
        });
      });
    }
  }, {
    key: 'renderForm',
    value: function renderForm() {
      var isFetching = this.state.isFetching;
      var _state$data = this.state.data,
          title = _state$data.title,
          message = _state$data.message,
          name = _state$data.name,
          phone = _state$data.phone,
          email = _state$data.email;


      return _react2.default.createElement(
        Form,
        { onSubmit: this.onSubmit },
        _react2.default.createElement(
          'label',
          { className: 'label', htmlFor: _contact.FORM_NAME },
          _react2.default.createElement(
            'span',
            null,
            _contact.FORM_NAME
          ),
          _react2.default.createElement('input', {
            type: 'text',
            name: 'name',
            id: 'name',
            value: name,
            onChange: this.onChange('name'),
            required: true
          })
        ),
        _react2.default.createElement(
          'label',
          { className: 'label', htmlFor: _contact.FORM_PHONE },
          _react2.default.createElement(
            'span',
            null,
            _contact.FORM_PHONE
          ),
          _react2.default.createElement('input', {
            type: 'number',
            name: 'phone',
            id: 'phone',
            value: phone,
            onChange: this.onChange('phone'),
            required: true
          })
        ),
        _react2.default.createElement(
          'label',
          { className: 'label', htmlFor: _contact.FORM_EMAIL },
          _react2.default.createElement(
            'span',
            null,
            _contact.FORM_EMAIL
          ),
          _react2.default.createElement('input', {
            type: 'email',
            name: 'email',
            id: 'email',
            value: email,
            onChange: this.onChange('email'),
            required: true
          })
        ),
        _react2.default.createElement(
          'label',
          { className: 'label', htmlFor: _contact.FORM_TITLE },
          _react2.default.createElement(
            'span',
            null,
            _contact.FORM_TITLE
          ),
          _react2.default.createElement('input', {
            type: 'text',
            name: 'title',
            id: 'title',
            value: title,
            onChange: this.onChange('title'),
            required: true
          })
        ),
        _react2.default.createElement(
          'label',
          { className: 'label', htmlFor: _contact.FORM_BODY },
          _react2.default.createElement(
            'span',
            null,
            _contact.FORM_BODY
          ),
          _react2.default.createElement('textarea', {
            cols: '30',
            rows: '4',
            id: 'message',
            name: 'message',
            value: message,
            onChange: this.onChange('message'),
            required: true
          })
        ),
        _react2.default.createElement('input', {
          className: 'button',
          type: 'submit',
          value: _contact.FORM_SEND,
          disabled: isFetching
        })
      );
    }
  }, {
    key: 'renderResponses',
    value: function renderResponses() {
      var _state2 = this.state,
          isSent = _state2.isSent,
          isFailed = _state2.isFailed;


      if (isSent) {
        return _react2.default.createElement(
          ResponseMessage,
          { success: true },
          _react2.default.createElement(
            'h3',
            null,
            _contact.SUCCESS_EMAIL_TITLE
          ),
          _react2.default.createElement(
            'p',
            null,
            _contact.SUCCESS_EMAIL_MESSAGE
          )
        );
      }

      if (isFailed) {
        return _react2.default.createElement(
          ResponseMessage,
          null,
          _react2.default.createElement(
            'h3',
            null,
            _contact.FAILED_EMAIL_TITLE
          ),
          _react2.default.createElement(
            'p',
            null,
            _contact.FAILED_EMAIL_MESSAGE
          )
        );
      }

      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var location = this.props.location;


      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_Helmet2.default, {
          title: _contact.TITLE,
          description: _contact.DESCRIPTION,
          pathname: location.pathname,
          src: _ctmex_cover2.default
        }),
        _react2.default.createElement(
          _Provider2.default,
          { color: 'white' },
          _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(_Menu2.default, null),
            _react2.default.createElement(
              _Container2.default,
              { height: '30vh', verticalAlign: true },
              _react2.default.createElement(
                _H2.default,
                null,
                _contact.CONTACT_US
              )
            ),
            _react2.default.createElement(
              _Container2.default,
              { height: '50vh', noMargin: true },
              _react2.default.createElement(_Map2.default, null)
            ),
            _react2.default.createElement(
              _Container2.default,
              { margin: (0, _base.getMargin)('lg') },
              _react2.default.createElement(
                _Row2.default,
                { size: 'sm' },
                _react2.default.createElement(
                  _Column2.default,
                  { size: 2 / 3 },
                  this.renderForm()
                ),
                _react2.default.createElement(
                  _Column2.default,
                  { size: 1 / 3 },
                  _react2.default.createElement(
                    _H4.default,
                    null,
                    _contact.PHONE,
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                      'small',
                      null,
                      '442 721 8230'
                    )
                  ),
                  _react2.default.createElement(
                    _H4.default,
                    null,
                    _contact.ADDRESS,
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                      'small',
                      null,
                      _contact.ACTUAL_ADDRESS
                    )
                  ),
                  _react2.default.createElement(
                    _H4.default,
                    null,
                    _contact.EMAIL,
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                      'small',
                      null,
                      _react2.default.createElement(
                        _A2.default,
                        { href: 'mailto:' + CONTACT_EMAIL },
                        CONTACT_EMAIL
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              _Container2.default,
              null,
              this.renderResponses()
            )
          )
        )
      );
    }
  }]);

  return ContactPage;
}(_react.Component);

ContactPage.propTypes = _extends({}, _withRouter2.default);

exports.default = {
  component: (0, _reactRouter.withRouter)(ContactPage)
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  color: ', ';\n  text-decoration: none;\n\n  &:hover {\n    text-decoration: underline;\n  }\n'], ['\n  color: ', ';\n  text-decoration: none;\n\n  &:hover {\n    text-decoration: underline;\n  }\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _base = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var A = _styledComponents2.default.a(_templateObject, (0, _base.getColor)('persianBlue'));

exports.default = A;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 100%;\n  background-color: ', ',\n'], ['\n  width: 100%;\n  height: 100%;\n  background-color: ', ',\n']);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _html = __webpack_require__(27);

var _base = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint no-new: 0 */

var MapWrapper = _styledComponents2.default.div(_templateObject, (0, _base.getColor)('gray'));

var initMap = function initMap() {
  var position = { lat: 20.674, lng: -100.414 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: position
  });

  new google.maps.Marker({
    position: position,
    map: map
  });
};

var Map = function (_Component) {
  _inherits(Map, _Component);

  function Map() {
    _classCallCheck(this, Map);

    return _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).apply(this, arguments));
  }

  _createClass(Map, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (window.google) {
        initMap();
        return;
      }

      window.initMap = initMap;
      (0, _html.injectScript)('https://maps.googleapis.com/maps/api/js?key=' + "AIzaSyBZuHiHVOmoebltVL2YPHHF2H9LV4YJ-iI" + '&callback=initMap&language=es-MX');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(MapWrapper, { id: 'map' });
    }
  }]);

  return Map;
}(_react.Component);

exports.default = Map;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(35);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = _axios2.default.create({
  baseUrl: ''
});

exports.default = instance;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  background-image: url(', ');\n  background-color: ', ';\n  background-size: auto 100%;\n  background-repeat: no-repeat;\n\n  position: absolute;\n  width: 100%;\n  height: 100%;\n'], ['\n  background-image: url(', ');\n  background-color: ', ';\n  background-size: auto 100%;\n  background-repeat: no-repeat;\n\n  position: absolute;\n  width: 100%;\n  height: 100%;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  background-image: url(', ');\n  background-color: ', ';\n  background-size: auto 100%;\n  background-repeat: no-repeat;\n  transform: scaleX(-1);\n  filter: FlipH;\n\n  position: absolute;\n  width: 100%;\n  height: 100%;\n'], ['\n  background-image: url(', ');\n  background-color: ', ';\n  background-size: auto 100%;\n  background-repeat: no-repeat;\n  transform: scaleX(-1);\n  filter: FlipH;\n\n  position: absolute;\n  width: 100%;\n  height: 100%;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  margin-top: ', 'px;\n  margin-bottom: ', 'px;\n'], ['\n  margin-top: ', 'px;\n  margin-bottom: ', 'px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  margin-bottom: ', 'px;\n'], ['\n  margin-bottom: ', 'px;\n']);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouter = __webpack_require__(9);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _map = __webpack_require__(7);

var _map2 = _interopRequireDefault(_map);

var _compose = __webpack_require__(68);

var _compose2 = _interopRequireDefault(_compose);

var _Provider = __webpack_require__(5);

var _Provider2 = _interopRequireDefault(_Provider);

var _base = __webpack_require__(1);

var _Menu = __webpack_require__(10);

var _Menu2 = _interopRequireDefault(_Menu);

var _Container = __webpack_require__(6);

var _Container2 = _interopRequireDefault(_Container);

var _Row = __webpack_require__(8);

var _Row2 = _interopRequireDefault(_Row);

var _Column = __webpack_require__(13);

var _Column2 = _interopRequireDefault(_Column);

var _Background = __webpack_require__(15);

var _Background2 = _interopRequireDefault(_Background);

var _H = __webpack_require__(17);

var _H2 = _interopRequireDefault(_H);

var _H3 = __webpack_require__(20);

var _H4 = _interopRequireDefault(_H3);

var _P = __webpack_require__(21);

var _P2 = _interopRequireDefault(_P);

var _Logo = __webpack_require__(16);

var _Logo2 = _interopRequireDefault(_Logo);

var _InfoContainer = __webpack_require__(29);

var _InfoContainer2 = _interopRequireDefault(_InfoContainer);

var _MethodMobileTable = __webpack_require__(69);

var _MethodMobileTable2 = _interopRequireDefault(_MethodMobileTable);

var _MethodTable = __webpack_require__(70);

var _MethodTable2 = _interopRequireDefault(_MethodTable);

var _Helmet = __webpack_require__(11);

var _Helmet2 = _interopRequireDefault(_Helmet);

var _onResize = __webpack_require__(71);

var _onResize2 = _interopRequireDefault(_onResize);

var _method_cover = __webpack_require__(73);

var _method_cover2 = _interopRequireDefault(_method_cover);

var _yellow_tennis = __webpack_require__(74);

var _yellow_tennis2 = _interopRequireDefault(_yellow_tennis);

var _blue_tennis = __webpack_require__(75);

var _blue_tennis2 = _interopRequireDefault(_blue_tennis);

var _method = __webpack_require__(22);

var _withRouter = __webpack_require__(12);

var _withRouter2 = _interopRequireDefault(_withRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var YellowTennisDoodle = _styledComponents2.default.div(_templateObject, _yellow_tennis2.default, (0, _base.getColor)('seaBuckthorn'));

var BlueTennisDoodle = _styledComponents2.default.div(_templateObject2, _blue_tennis2.default, (0, _base.getColor)('persianBlue'));

var Box = _styledComponents2.default.div(_templateObject3, (0, _base.getMargin)('md'), (0, _base.getMargin)('md'));

var SixyearsArticle = _styledComponents2.default.article(_templateObject4, (0, _base.getMargin)('xl'));

var MethodPage = function MethodPage(_ref) {
  var isSm = _ref.isSm,
      location = _ref.location;
  return _react2.default.createElement(
    'section',
    null,
    _react2.default.createElement(_Helmet2.default, {
      title: _method.TITLE,
      pathname: location.pathname,
      description: _method.DESCRIPTION,
      src: _method_cover2.default
    }),
    _react2.default.createElement(
      _Provider2.default,
      { color: 'white' },
      _react2.default.createElement(_Menu2.default, null)
    ),
    _react2.default.createElement(
      _Background2.default,
      {
        src: _method_cover2.default,
        height: '60vh',
        backgroundPosition: '0 65%'
      },
      _react2.default.createElement(_Logo2.default, null)
    ),
    _react2.default.createElement(
      _Provider2.default,
      { color: 'yellow' },
      _react2.default.createElement(
        Box,
        null,
        _react2.default.createElement(
          _Container2.default,
          { noMargin: true, noPadding: true },
          _react2.default.createElement(
            _Row2.default,
            null,
            _react2.default.createElement(
              _Column2.default,
              { size: 2 / 5 },
              _react2.default.createElement(YellowTennisDoodle, null)
            ),
            _react2.default.createElement(
              _Column2.default,
              { size: 3 / 5 },
              _react2.default.createElement(
                _InfoContainer2.default,
                { width: '80%' },
                _react2.default.createElement(
                  'article',
                  { id: 'intro' },
                  _react2.default.createElement(
                    _H4.default,
                    null,
                    _method.INTRO_TITLE
                  ),
                  (0, _map2.default)(_method.INTRODUCTION, function (value, key) {
                    return _react2.default.createElement(
                      _P2.default,
                      { lead: true, key: key },
                      value
                    );
                  })
                )
              )
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      _Provider2.default,
      { color: 'white' },
      _react2.default.createElement(
        Box,
        null,
        _react2.default.createElement(
          _InfoContainer2.default,
          { width: '80%' },
          _react2.default.createElement(
            SixyearsArticle,
            { id: 'six-years' },
            _react2.default.createElement(
              _H2.default,
              null,
              _method.SIX_YEARS_TITLE
            ),
            (0, _map2.default)(_method.SIX_YEARS, function (value, key) {
              return _react2.default.createElement(
                _P2.default,
                { lead: true, key: key },
                value
              );
            })
          )
        ),
        _react2.default.createElement(
          _Container2.default,
          null,
          _react2.default.createElement(
            'section',
            { id: 'phases' },
            isSm ? _react2.default.createElement(_MethodMobileTable2.default, null) : _react2.default.createElement(_MethodTable2.default, null)
          )
        )
      )
    ),
    _react2.default.createElement(
      _Provider2.default,
      { color: 'blue' },
      _react2.default.createElement(
        Box,
        null,
        _react2.default.createElement(
          _Container2.default,
          { noMargin: true, noPadding: true },
          _react2.default.createElement(
            _Row2.default,
            null,
            _react2.default.createElement(
              _Column2.default,
              { size: 3 / 4 },
              _react2.default.createElement(
                _InfoContainer2.default,
                { width: '80%' },
                _react2.default.createElement(
                  'article',
                  { id: 'intro' },
                  _react2.default.createElement(
                    _H4.default,
                    null,
                    _method.CLASSES_TITLE
                  ),
                  (0, _map2.default)(_method.CLASSES, function (value, key) {
                    return _react2.default.createElement(
                      _P2.default,
                      { lead: true, key: key },
                      value
                    );
                  })
                )
              )
            ),
            _react2.default.createElement(
              _Column2.default,
              { size: 1 / 4 },
              _react2.default.createElement(BlueTennisDoodle, null)
            )
          )
        )
      )
    )
  );
};

MethodPage.propTypes = _extends({
  isSm: _propTypes2.default.bool.isRequired
}, _withRouter2.default);

exports.default = {
  component: (0, _compose2.default)(_onResize2.default, _reactRouter.withRouter)(MethodPage)
};

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("lodash/fp/compose");

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  color: ', ';\n  text-align: center;\n  font-size: 1.1em;\n\n  td,th {\n    padding: ', 'px;\n  }\n\n  th {\n    background-color: ', ';\n  }\n\n  tr:nth-child(1) {\n    background-color: ', ';\n  }\n  tr:nth-child(2) {\n    background-color: ', ';\n  }\n  tr:nth-child(3) {\n    background-color: ', ';\n  }\n\n  h2 {\n    color: ', ';\n    margin: 0;\n  }\n\n  ', '\n'], ['\n  color: ', ';\n  text-align: center;\n  font-size: 1.1em;\n\n  td,th {\n    padding: ', 'px;\n  }\n\n  th {\n    background-color: ', ';\n  }\n\n  tr:nth-child(1) {\n    background-color: ', ';\n  }\n  tr:nth-child(2) {\n    background-color: ', ';\n  }\n  tr:nth-child(3) {\n    background-color: ', ';\n  }\n\n  h2 {\n    color: ', ';\n    margin: 0;\n  }\n\n  ', '\n']);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _map = __webpack_require__(7);

var _map2 = _interopRequireDefault(_map);

var _method = __webpack_require__(22);

var _base = __webpack_require__(1);

var _utils = __webpack_require__(3);

var _tennis_phase_ = __webpack_require__(36);

var _tennis_phase_2 = _interopRequireDefault(_tennis_phase_);

var _tennis_phase_3 = __webpack_require__(37);

var _tennis_phase_4 = _interopRequireDefault(_tennis_phase_3);

var _tennis_phase_5 = __webpack_require__(38);

var _tennis_phase_6 = _interopRequireDefault(_tennis_phase_5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var notATable = '\ntable, thead, tbody, th, tr, td {\n  display: block;\n}\n\ntbody {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n/* Hide table headers (but not display: none;, for accessibility) */\nthead tr {\n  display: none;\n}\n\ntr {\n  width: 100%;\n  border: 1px solid ' + (0, _base.getColor)('white') + ';\n}\n\ntd {\n  /* Behave  like a "row" */\n  border: none;\n  border-bottom: 1px solid ' + (0, _base.getColor)('white') + ';\n  position: relative;\n  padding-left: 40%;\n}\n\ntd:before {\n  display: block;\n  position: absolute;\n  width: 40%;\n  left: 0;\n}\n\n/*\nLabel the data\n*/\n\ntd:nth-of-type(1):before { content: "\xC9tapa"; }\ntd:nth-of-type(2):before { content: "Pelota"; }\ntd:nth-of-type(3):before { content: "Tama\xF1o de cancha"; }\ntd:nth-of-type(4):before { content: "Red"; }\ntd:nth-of-type(5):before { content: "Tama\xF1o de raqueta"; }\n';

var Table = _styledComponents2.default.table(_templateObject, (0, _base.getColor)('white'), (0, _base.getPadding)('lg'), (0, _base.getColor)('persianBlue'), (0, _base.getColor)('carnation'), (0, _base.getColor)('seaBuckthorn'), (0, _base.getColor)('mountainMeadow'), (0, _base.getColor)('white'), (0, _utils.mediaQuery)('sm', notATable));

var MethodMobileTable = function MethodMobileTable() {
  return _react2.default.createElement(
    Table,
    null,
    _react2.default.createElement(
      'thead',
      null,
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'th',
          null,
          _react2.default.createElement(
            'h2',
            null,
            _method.TABLE_HEADERS.phases
          )
        ),
        _react2.default.createElement(
          'th',
          null,
          _react2.default.createElement(
            'h2',
            null,
            _method.TABLE_HEADERS.ball
          )
        ),
        _react2.default.createElement(
          'th',
          null,
          _react2.default.createElement(
            'h2',
            null,
            _method.TABLE_HEADERS.courtSize
          )
        ),
        _react2.default.createElement(
          'th',
          null,
          _react2.default.createElement(
            'h2',
            null,
            _method.TABLE_HEADERS.net
          )
        ),
        _react2.default.createElement(
          'th',
          null,
          _react2.default.createElement(
            'h2',
            null,
            _method.TABLE_HEADERS.racketSize
          )
        )
      )
    ),
    _react2.default.createElement(
      'tbody',
      null,
      _react2.default.createElement(
        'tr',
        { id: 'phase-1' },
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(
            'h2',
            null,
            _method.PHASE_1_TITLE
          )
        ),
        _react2.default.createElement(
          'td',
          null,
          _method.PHASE_1_BALL
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement('img', { src: _tennis_phase_2.default, alt: _method.PHASE_1_PICTURE, height: '250' }),
          (0, _map2.default)(_method.PHASE_1_COURT_SIZE, function (value, key) {
            return _react2.default.createElement(
              'p',
              { key: key },
              value
            );
          })
        ),
        _react2.default.createElement(
          'td',
          null,
          _method.PHASE_1_NET
        ),
        _react2.default.createElement(
          'td',
          null,
          _method.PHASE_1_RACKET_SIZE
        )
      ),
      _react2.default.createElement(
        'tr',
        { id: 'phase-2' },
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(
            'h2',
            null,
            _method.PHASE_2_TITLE
          )
        ),
        _react2.default.createElement(
          'td',
          null,
          _method.PHASE_2_BALL
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement('img', { src: _tennis_phase_4.default, alt: _method.PHASE_2_PICTURE, height: '250' }),
          (0, _map2.default)(_method.PHASE_2_COURT_SIZE, function (value, key) {
            return _react2.default.createElement(
              'p',
              { key: key },
              value
            );
          })
        ),
        _react2.default.createElement(
          'td',
          null,
          _method.PHASE_2_NET
        ),
        _react2.default.createElement(
          'td',
          null,
          _method.PHASE_2_RACKET_SIZE
        )
      ),
      _react2.default.createElement(
        'tr',
        { id: 'phase-3' },
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(
            'h2',
            null,
            _method.PHASE_3_TITLE
          )
        ),
        _react2.default.createElement(
          'td',
          null,
          _method.PHASE_3_BALL
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement('img', { src: _tennis_phase_6.default, alt: _method.PHASE_3_PICTURE, height: '250' }),
          (0, _map2.default)(_method.PHASE_3_COURT_SIZE, function (value, key) {
            return _react2.default.createElement(
              'p',
              { key: key },
              value
            );
          })
        ),
        _react2.default.createElement(
          'td',
          null,
          _method.PHASE_3_NET
        ),
        _react2.default.createElement(
          'td',
          null,
          _method.PHASE_3_RACKET_SIZE
        )
      )
    )
  );
};

exports.default = MethodMobileTable;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background-color: ', ';\n  color: ', ';\n'], ['\n  background-color: ', ';\n  color: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  margin: 0 auto;\n  color: ', ';\n  text-align: center;\n  font-size: 1.1em;\n\n  td,th {\n    padding: ', 'px;\n  }\n\n  h2 {\n    color: ', ';\n    margin: 0;\n  }\n'], ['\n  margin: 0 auto;\n  color: ', ';\n  text-align: center;\n  font-size: 1.1em;\n\n  td,th {\n    padding: ', 'px;\n  }\n\n  h2 {\n    color: ', ';\n    margin: 0;\n  }\n']);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _map = __webpack_require__(7);

var _map2 = _interopRequireDefault(_map);

var _method = __webpack_require__(22);

var _base = __webpack_require__(1);

var _tennis_phase_ = __webpack_require__(36);

var _tennis_phase_2 = _interopRequireDefault(_tennis_phase_);

var _tennis_phase_3 = __webpack_require__(37);

var _tennis_phase_4 = _interopRequireDefault(_tennis_phase_3);

var _tennis_phase_5 = __webpack_require__(38);

var _tennis_phase_6 = _interopRequireDefault(_tennis_phase_5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ColBlue = _styledComponents2.default.col(_templateObject, (0, _base.getColor)('persianBlue'), (0, _base.getColor)('white'));

var ColRed = _styledComponents2.default.col(_templateObject, (0, _base.getColor)('carnation'), (0, _base.getColor)('white'));

var ColYellow = _styledComponents2.default.col(_templateObject, (0, _base.getColor)('seaBuckthorn'), (0, _base.getColor)('white'));

var ColGreen = _styledComponents2.default.col(_templateObject, (0, _base.getColor)('mountainMeadow'), (0, _base.getColor)('white'));

var Table = _styledComponents2.default.table(_templateObject2, (0, _base.getColor)('white'), (0, _base.getPadding)('lg'), (0, _base.getColor)('white'));

var MethodTable = function MethodTable() {
  return _react2.default.createElement(
    Table,
    null,
    _react2.default.createElement(
      'colgroup',
      null,
      _react2.default.createElement(ColBlue, null),
      _react2.default.createElement(ColRed, null),
      _react2.default.createElement(ColYellow, null),
      _react2.default.createElement(ColGreen, null)
    ),
    _react2.default.createElement(
      'thead',
      null,
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'th',
          null,
          _method.TABLE_HEADERS.phases
        ),
        _react2.default.createElement(
          'th',
          null,
          _react2.default.createElement(
            'h2',
            null,
            _method.PHASE_1_TITLE
          )
        ),
        _react2.default.createElement(
          'th',
          null,
          _react2.default.createElement(
            'h2',
            null,
            _method.PHASE_2_TITLE
          )
        ),
        _react2.default.createElement(
          'th',
          null,
          _react2.default.createElement(
            'h2',
            null,
            _method.PHASE_3_TITLE
          )
        )
      )
    ),
    _react2.default.createElement(
      'tbody',
      null,
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          _method.TABLE_HEADERS.ball
        ),
        _react2.default.createElement(
          'td',
          null,
          _method.PHASE_1_BALL
        ),
        _react2.default.createElement(
          'td',
          null,
          _method.PHASE_2_BALL
        ),
        _react2.default.createElement(
          'td',
          null,
          _method.PHASE_3_BALL
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          _method.TABLE_HEADERS.courtSize
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement('img', { src: _tennis_phase_2.default, alt: _method.PHASE_1_PICTURE, height: '250' }),
          (0, _map2.default)(_method.PHASE_1_COURT_SIZE, function (value, key) {
            return _react2.default.createElement(
              'p',
              { key: key },
              value
            );
          })
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement('img', { src: _tennis_phase_4.default, alt: _method.PHASE_2_PICTURE, height: '250' }),
          (0, _map2.default)(_method.PHASE_2_COURT_SIZE, function (value, key) {
            return _react2.default.createElement(
              'p',
              { key: key },
              value
            );
          })
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement('img', { src: _tennis_phase_6.default, alt: _method.PHASE_3_PICTURE, height: '250' }),
          (0, _map2.default)(_method.PHASE_3_COURT_SIZE, function (value, key) {
            return _react2.default.createElement(
              'p',
              { key: key },
              value
            );
          })
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          _method.TABLE_HEADERS.net
        ),
        _react2.default.createElement(
          'td',
          null,
          _method.PHASE_1_NET
        ),
        _react2.default.createElement(
          'td',
          null,
          _method.PHASE_2_NET
        ),
        _react2.default.createElement(
          'td',
          null,
          _method.PHASE_3_NET
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          _method.TABLE_HEADERS.racketSize
        ),
        _react2.default.createElement(
          'td',
          null,
          _method.PHASE_1_RACKET_SIZE
        ),
        _react2.default.createElement(
          'td',
          null,
          _method.PHASE_2_RACKET_SIZE
        ),
        _react2.default.createElement(
          'td',
          null,
          _method.PHASE_3_RACKET_SIZE
        )
      )
    )
  );
};

exports.default = MethodTable;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reduce = __webpack_require__(72);

var _reduce2 = _interopRequireDefault(_reduce);

var _capitalize = __webpack_require__(25);

var _capitalize2 = _interopRequireDefault(_capitalize);

var _constants = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var onResize = function onResize(WrappedComponent) {
  return function (_Component) {
    _inherits(OnResize, _Component);

    function OnResize(props) {
      _classCallCheck(this, OnResize);

      var _this = _possibleConstructorReturn(this, (OnResize.__proto__ || Object.getPrototypeOf(OnResize)).call(this, props));

      _this.state = (0, _reduce2.default)(_constants.SIZES, function (prev, size, key) {
        return _extends({}, prev, _defineProperty({}, 'is' + (0, _capitalize2.default)(key), false));
      }, {});

      _this.onResize = _this.onResize.bind(_this);
      return _this;
    }

    _createClass(OnResize, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.onResize();
        window.addEventListener('resize', this.onResize);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
      }
    }, {
      key: 'onResize',
      value: function onResize() {
        var width = window.innerWidth;

        var isSize = (0, _reduce2.default)(_constants.SIZES, function (prev, size, key) {
          return _extends({}, prev, _defineProperty({}, 'is' + (0, _capitalize2.default)(key), width <= size));
        }, {});

        this.setState(_extends({}, isSize));
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(WrappedComponent, _extends({}, this.props, this.state));
      }
    }]);

    return OnResize;
  }(_react.Component);
};

exports.default = onResize;

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("lodash/reduce");

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/method_cover.jpg";

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/yellow_tennis.svg";

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/blue_tennis.svg";

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  width: ', '%;\n  padding: ', 'px;\n  min-height: 200px;\n  ', ';\n  ', ';\n'], ['\n  position: relative;\n  width: ', '%;\n  padding: ', 'px;\n  min-height: 200px;\n  ', ';\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  margin: ', 'px 0;\n'], ['\n  margin: ', 'px 0;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  z-index: 1;\n'], ['\n  z-index: 1;\n']);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(9);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _map = __webpack_require__(7);

var _map2 = _interopRequireDefault(_map);

var _Provider = __webpack_require__(5);

var _Provider2 = _interopRequireDefault(_Provider);

var _base = __webpack_require__(1);

var _utils = __webpack_require__(3);

var _Menu = __webpack_require__(10);

var _Menu2 = _interopRequireDefault(_Menu);

var _Background = __webpack_require__(15);

var _Background2 = _interopRequireDefault(_Background);

var _Logo = __webpack_require__(16);

var _Logo2 = _interopRequireDefault(_Logo);

var _Helmet = __webpack_require__(11);

var _Helmet2 = _interopRequireDefault(_Helmet);

var _Container = __webpack_require__(6);

var _Container2 = _interopRequireDefault(_Container);

var _H = __webpack_require__(17);

var _H2 = _interopRequireDefault(_H);

var _H3 = __webpack_require__(20);

var _H4 = _interopRequireDefault(_H3);

var _H5 = __webpack_require__(34);

var _H6 = _interopRequireDefault(_H5);

var _P = __webpack_require__(21);

var _P2 = _interopRequireDefault(_P);

var _Row = __webpack_require__(8);

var _Row2 = _interopRequireDefault(_Row);

var _DoodleBackground = __webpack_require__(28);

var _DoodleBackground2 = _interopRequireDefault(_DoodleBackground);

var _ctmex_registration = __webpack_require__(77);

var _ctmex_registration2 = _interopRequireDefault(_ctmex_registration);

var _ctmex_ball_backpack = __webpack_require__(32);

var _ctmex_ball_backpack2 = _interopRequireDefault(_ctmex_ball_backpack);

var _ctmex_raquet_trophy = __webpack_require__(33);

var _ctmex_raquet_trophy2 = _interopRequireDefault(_ctmex_raquet_trophy);

var _registration = __webpack_require__(78);

var _withRouter = __webpack_require__(12);

var _withRouter2 = _interopRequireDefault(_withRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Column = _styledComponents2.default.div(_templateObject, 100 / 3, (0, _base.getPadding)('md'), _utils.setColor, _utils.setBackground);

var Box = _styledComponents2.default.div(_templateObject2, (0, _base.getMargin)('md'));

var Text = _styledComponents2.default.article(_templateObject3);

var renderParagraphs = function renderParagraphs(texts) {
  return (0, _map2.default)(texts, function (text) {
    return _react2.default.createElement(
      _P2.default,
      {
        lead: true,
        noMargin: true,
        noThemeColor: true
      },
      text
    );
  });
};

var RegistrationPage = function RegistrationPage(_ref) {
  var location = _ref.location;
  return _react2.default.createElement(
    'section',
    null,
    _react2.default.createElement(_Helmet2.default, {
      title: _registration.TITLE,
      pathname: location.pathname,
      description: _registration.DESCRIPTION,
      src: _ctmex_registration2.default
    }),
    _react2.default.createElement(
      _Provider2.default,
      { color: 'white' },
      _react2.default.createElement(_Menu2.default, null)
    ),
    _react2.default.createElement(
      _Background2.default,
      {
        src: _ctmex_registration2.default,
        height: '60vh',
        backgroundPosition: '0 65%'
      },
      _react2.default.createElement(_Logo2.default, null)
    ),
    _react2.default.createElement(
      _Provider2.default,
      { color: 'white' },
      _react2.default.createElement(
        Box,
        null,
        _react2.default.createElement(
          _Container2.default,
          null,
          _react2.default.createElement(
            _H2.default,
            null,
            _registration.INTRO
          ),
          _react2.default.createElement(
            _H4.default,
            null,
            _registration.SCHEDULE
          ),
          _react2.default.createElement(
            _Row2.default,
            { size: 'sm', gap: (0, _base.getMargin)('md') + 'px' },
            _react2.default.createElement(
              _Provider2.default,
              { color: 'red' },
              _react2.default.createElement(
                Column,
                null,
                _react2.default.createElement(_DoodleBackground2.default, {
                  src: _ctmex_ball_backpack2.default
                }),
                _react2.default.createElement(
                  Text,
                  null,
                  _react2.default.createElement(
                    _H6.default,
                    { noThemeColor: true },
                    _registration.FIVE_DAYS_TITLE
                  ),
                  renderParagraphs(_registration.FIVE_DAYS)
                )
              )
            ),
            _react2.default.createElement(
              _Provider2.default,
              { color: 'yellow' },
              _react2.default.createElement(
                Column,
                null,
                _react2.default.createElement(_DoodleBackground2.default, {
                  src: _ctmex_raquet_trophy2.default
                }),
                _react2.default.createElement(
                  _H6.default,
                  { noThemeColor: true },
                  _registration.THREE_DAYS_TITLE
                ),
                renderParagraphs(_registration.THREE_DAYS)
              )
            ),
            _react2.default.createElement(
              _Provider2.default,
              { color: 'green' },
              _react2.default.createElement(
                Column,
                null,
                _react2.default.createElement(_DoodleBackground2.default, {
                  src: _ctmex_ball_backpack2.default
                }),
                _react2.default.createElement(
                  _H6.default,
                  { noThemeColor: true },
                  _registration.TWO_DAYS_TITLE
                ),
                renderParagraphs(_registration.TWO_DAYS)
              )
            )
          )
        )
      )
    )
  );
};

RegistrationPage.propTypes = _extends({}, _withRouter2.default);

exports.default = {
  component: (0, _reactRouter.withRouter)(RegistrationPage)
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ctmex_registration.jpg";

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var TITLE = exports.TITLE = 'Inscripciones';
var DESCRIPTION = exports.DESCRIPTION = 'Ingreso de 4 a 10 a\xF1os, con horatios desde las 4pm. De lunes a viernes,\no 3 d\xEDas a la semana.';

var INTRO = exports.INTRO = 'Ingreso de 4 a 10 años';
var SCHEDULE = exports.SCHEDULE = 'Horarios desde las 4pm';

var FIVE_DAYS_TITLE = exports.FIVE_DAYS_TITLE = 'PAQUETE ELITE ';
var FIVE_DAYS = exports.FIVE_DAYS = ['De lunes a viernes', '45 minutos de tenis', '45 minutos de desarrollo físico', 'En total, 30 horas al mes'];

var THREE_DAYS_TITLE = exports.THREE_DAYS_TITLE = 'PAQUETE PRO';
var THREE_DAYS = exports.THREE_DAYS = ['Tres días a la semana, únicamente lunes, miércoles y viernes.', '45 minutos de tenis', '45 minutos de desarrollo físico', 'En total, 18 horas al mes'];

var TWO_DAYS_TITLE = exports.TWO_DAYS_TITLE = 'PAQUETE ESTÁNDAR';
var TWO_DAYS = exports.TWO_DAYS = ['Dos días a la semana, únicamente martes y jueves.', '45 minutos de tenis', '45 minutos de de desarrollo fisico', 'En total 12 horas al mes'];

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  margin-top: ', ';\n  margin-bottom: ', ';\n'], ['\n  margin-top: ', ';\n  margin-bottom: ', ';\n']);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(9);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Provider = __webpack_require__(5);

var _Provider2 = _interopRequireDefault(_Provider);

var _base = __webpack_require__(1);

var _Menu = __webpack_require__(10);

var _Menu2 = _interopRequireDefault(_Menu);

var _Background = __webpack_require__(15);

var _Background2 = _interopRequireDefault(_Background);

var _Logo = __webpack_require__(16);

var _Logo2 = _interopRequireDefault(_Logo);

var _Helmet = __webpack_require__(11);

var _Helmet2 = _interopRequireDefault(_Helmet);

var _H = __webpack_require__(17);

var _H2 = _interopRequireDefault(_H);

var _Container = __webpack_require__(6);

var _Container2 = _interopRequireDefault(_Container);

var _Accordion = __webpack_require__(80);

var _Accordion2 = _interopRequireDefault(_Accordion);

var _faq_cover = __webpack_require__(83);

var _faq_cover2 = _interopRequireDefault(_faq_cover);

var _faq = __webpack_require__(84);

var _withRouter = __webpack_require__(12);

var _withRouter2 = _interopRequireDefault(_withRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Box = _styledComponents2.default.div(_templateObject, (0, _base.getMargin)('md'), (0, _base.getMargin)('md'));

var FaqPage = function FaqPage(_ref) {
  var location = _ref.location;
  return _react2.default.createElement(
    'section',
    null,
    _react2.default.createElement(_Helmet2.default, {
      title: _faq.TITLE,
      pathname: location.pathname,
      description: _faq.DESCRIPTION,
      src: _faq_cover2.default
    }),
    _react2.default.createElement(
      _Provider2.default,
      { color: 'white' },
      _react2.default.createElement(_Menu2.default, null)
    ),
    _react2.default.createElement(
      _Background2.default,
      {
        src: _faq_cover2.default,
        height: '60vh',
        backgroundPosition: '0 25%'
      },
      _react2.default.createElement(_Logo2.default, null)
    ),
    _react2.default.createElement(
      _Provider2.default,
      { color: 'white' },
      _react2.default.createElement(
        _Container2.default,
        null,
        _react2.default.createElement(
          _H2.default,
          null,
          _faq.TITLE
        ),
        _react2.default.createElement(
          Box,
          null,
          _react2.default.createElement(_Accordion2.default, {
            elements: [{
              title: _faq.WHAT_IS_CTMEX_TITLE,
              description: _faq.WHAT_IS_CTMEX
            }, {
              title: _faq.HOW_IS_IT_TITLE,
              description: _faq.HOW_IS_IT
            }, {
              title: _faq.WHO_IS_IT_AIMED_AT_TITLE,
              description: _faq.WHO_IS_IT_AIMED_AT
            }, {
              title: _faq.HOW_IS_THE_PROGRAM_TITLE,
              description: _faq.HOW_IS_THE_PROGRAM
            }, {
              title: _faq.HOW_ARE_THE_LEVELS_TITLE,
              description: _faq.HOW_ARE_THE_LEVELS
            }, {
              title: _faq.HOW_IS_EACH_PHASE_TITLE,
              description: _faq.HOW_IS_EACH_PHASE
            }, {
              title: _faq.COST_TITLE,
              description: _faq.COST
            }, {
              title: _faq.REGISTRATION_INCLUDES_TITLE,
              description: _faq.REGISTRATION_INCLUDES
            }, {
              title: _faq.SCHEDULE_TITLE,
              description: _faq.SCHEDULE
            }, {
              title: _faq.WHY_CHOOSE_CTMEX_TITLE,
              description: _faq.WHY_CHOOSE_CTMEX
            }]
          })
        )
      )
    )
  );
};

FaqPage.propTypes = _extends({}, _withRouter2.default);

exports.default = {
  component: (0, _reactRouter.withRouter)(FaqPage)
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  color: ', ';\n  width: 100%;\n  cursor: pointer;\n  padding: ', 'px;\n  text-align: left;\n  border: none;\n  transition-property: background-color;\n  transition-duration: 400ms;\n  transition-timing-function: ease-in-out;\n  margin: 0;\n  background-color: ', ';\n\n  h3 {\n    margin: 0;\n  }\n\n  &:hover {\n    background-color: #persianBlue;\n  }\n}\n'], ['\n  color: ', ';\n  width: 100%;\n  cursor: pointer;\n  padding: ', 'px;\n  text-align: left;\n  border: none;\n  transition-property: background-color;\n  transition-duration: 400ms;\n  transition-timing-function: ease-in-out;\n  margin: 0;\n  background-color: ', ';\n\n  h3 {\n    margin: 0;\n  }\n\n  &:hover {\n    background-color: #persianBlue;\n  }\n}\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n  display: ', ';\n'], ['\n  ', '\n  display: ', ';\n']);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _map = __webpack_require__(7);

var _map2 = _interopRequireDefault(_map);

var _indexOf = __webpack_require__(81);

var _indexOf2 = _interopRequireDefault(_indexOf);

var _findIndex = __webpack_require__(82);

var _findIndex2 = _interopRequireDefault(_findIndex);

var _base = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getBackgroundColor = function getBackgroundColor(_ref) {
  var isActive = _ref.isActive;

  if (!isActive) {
    return (0, _base.getColor)('persianBlue');
  }

  return (0, _base.getColor)('madison');
};

var Title = _styledComponents2.default.button(_templateObject, (0, _base.getColor)('white'), (0, _base.getPadding)('lg'), getBackgroundColor);

var getDisplay = function getDisplay(_ref2) {
  var isActive = _ref2.isActive;

  if (!isActive) {
    return 'none';
  }

  return 'block';
};

var contentStyle = '\n  padding: 0 18px;\n  background-color: white;\n  overflow: hidden;\n  margin: ' + (0, _base.getMargin)('lg') + 'px 0;\n  font-size: 1.2em;\n  line-height: 1.5em;\n';

var P = _styledComponents2.default.p(_templateObject2, contentStyle, getDisplay);

var Ul = _styledComponents2.default.ul(_templateObject2, contentStyle, getDisplay);

var isSectionOpened = function isSectionOpened(section, openedSections) {
  return (0, _indexOf2.default)(openedSections, section) >= 0;
};

var Accordion = function (_Component) {
  _inherits(Accordion, _Component);

  function Accordion(props) {
    _classCallCheck(this, Accordion);

    var _this = _possibleConstructorReturn(this, (Accordion.__proto__ || Object.getPrototypeOf(Accordion)).call(this, props));

    _this.state = {
      openedSections: []
    };

    _this.onSectionClick = _this.onSectionClick.bind(_this);
    _this.isActive = _this.isActive.bind(_this);
    return _this;
  }

  _createClass(Accordion, [{
    key: 'onSectionClick',
    value: function onSectionClick(section) {
      var _this2 = this;

      return function () {
        _this2.setState(function (_ref3) {
          var openedSections = _ref3.openedSections;

          if (!isSectionOpened(section, openedSections)) {
            return {
              openedSections: [].concat(_toConsumableArray(openedSections), [section])
            };
          }

          var index = (0, _findIndex2.default)(openedSections, function (openedSection) {
            return openedSection === section;
          });

          return {
            openedSections: [].concat(_toConsumableArray(openedSections.slice(0, index)), _toConsumableArray(openedSections.slice(index + 1, openedSections.length)))
          };
        });
      };
    }
  }, {
    key: 'isActive',
    value: function isActive(section) {
      var openedSections = this.state.openedSections;


      return isSectionOpened(section, openedSections);
    }
  }, {
    key: 'renderDescription',
    value: function renderDescription(section, description) {
      if (typeof description === 'string') {
        return _react2.default.createElement(
          P,
          { isActive: this.isActive(section) },
          description
        );
      }

      return _react2.default.createElement(
        Ul,
        { isActive: this.isActive(section) },
        (0, _map2.default)(description, function (desc, index) {
          return _react2.default.createElement(
            'li',
            { key: index },
            desc
          );
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var elements = this.props.elements;


      return _react2.default.createElement(
        'div',
        null,
        (0, _map2.default)(elements, function (_ref4, index) {
          var title = _ref4.title,
              description = _ref4.description;
          return _react2.default.createElement(
            'article',
            { key: index },
            _react2.default.createElement(
              Title,
              {
                isActive: _this3.isActive(title),
                onClick: _this3.onSectionClick(title)
              },
              _react2.default.createElement(
                'h3',
                null,
                title
              )
            ),
            _this3.renderDescription(title, description)
          );
        })
      );
    }
  }]);

  return Accordion;
}(_react.Component);

Accordion.propTypes = {
  elements: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    title: _propTypes2.default.string,
    description: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)])
  })).isRequired
};

exports.default = Accordion;

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("lodash/indexOf");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("lodash/findIndex");

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/faq_cover.jpg";

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var TITLE = exports.TITLE = 'Preguntas frecuentes';
var DESCRIPTION = exports.DESCRIPTION = '\xBFTienes dudas? Aqu\xED tenemos las respuestas a las preguntas m\xE1s\nfrecuentes, sobre el colegio de tenis mexicano';

var WHAT_IS_CTMEX_TITLE = exports.WHAT_IS_CTMEX_TITLE = '¿Qué es ctmex?';
var WHAT_IS_CTMEX = exports.WHAT_IS_CTMEX = 'Colegio de tenis mexicano es un nuevo sistema educativo deportivo\naplicado al tenis, donde el alumno aprende de forma divertida, did\xE1ctica y profesional.';

var HOW_IS_IT_TITLE = exports.HOW_IS_IT_TITLE = '¿Cómo funciona?';
var HOW_IS_IT = exports.HOW_IS_IT = 'Funciona por medio de objetivos sencillos a corto plazo y tambi\xE9n por\nevaluaciones cada determinado tiempo. As\xED teniendo un sistema de medici\xF3n para conocer el\ndesarrollo del alumno y descubrir sus fortalezas y debilidades.';

var WHO_IS_IT_AIMED_AT_TITLE = exports.WHO_IS_IT_AIMED_AT_TITLE = '¿A quién va dirigido?';
var WHO_IS_IT_AIMED_AT = exports.WHO_IS_IT_AIMED_AT = 'El colegio inicia con ni\xF1os y ni\xF1as a partir de 4 a 10 a\xF1os de\nedad, esto pensado en el mejor desarrollo f\xEDsico, mental, social y ten\xEDstico para el alumno.';

var HOW_IS_THE_PROGRAM_TITLE = exports.HOW_IS_THE_PROGRAM_TITLE = '¿En qué consta el programa?';
var HOW_IS_THE_PROGRAM = exports.HOW_IS_THE_PROGRAM = 'Consta en que el alumno aprenda y comprenda\npeque\xF1as dosis de instrucciones t\xE9cnicas as\xED el o ella podr\xE1 ir entendiendo y empezando jugar\neste deporte sin limitantes.';

var HOW_ARE_THE_LEVELS_TITLE = exports.HOW_ARE_THE_LEVELS_TITLE = '¿Cómo son sus niveles o años escolares?';
var HOW_ARE_THE_LEVELS = exports.HOW_ARE_THE_LEVELS = 'Se conforma de 3 etapas, 2 a\xF1os cada etapa.\nAl ir cambiando de etapa, la bola, la cancha y la raqueta cambian o crecen conforme el alumno\ntambi\xE9n lo hace, esto pensado y estudiado para que el alumno le facilite el aprendizaje y\ndesarrollo del mismo.';

var HOW_IS_EACH_PHASE_TITLE = exports.HOW_IS_EACH_PHASE_TITLE = '¿Cómo es cada etapa del ciclo escolar?';
var HOW_IS_EACH_PHASE = exports.HOW_IS_EACH_PHASE = 'Estas 3 etapas se distinguen por su diferencia de tama\xF1o de\ncancha, tama\xF1o y peso de raqueta, tama\xF1o, peso y velocidad de pelota. Conforme el alumno pasa\nde etapa a etapa, aumenta el tama\xF1o, peso y velocidad de pelota, cancha y raqueta al igual que\nsu desarrollo f\xEDsico, mental, social y ten\xEDstico.\nEn pocas palabras... \u201Clos alumnos no crecen con el tenis, el tenis crece con los alumnos\u201D';

var COST_TITLE = exports.COST_TITLE = '¿Cuáles son los costos y qué incluye?';
var COST = exports.COST = 'El precio de la colegiatura mensual y de inscripci\xF3n no est\xE1 autorizado en\ndecirlo, con una previa cita a las instalaciones se les podr\xE1 brindar una mejor informaci\xF3n y\naclaraci\xF3n de cualquier tipo de dudas que puedan tener.';

var REGISTRATION_INCLUDES_TITLE = exports.REGISTRATION_INCLUDES_TITLE = 'La inscripción incluye.';
var REGISTRATION_INCLUDES = exports.REGISTRATION_INCLUDES = ['Seguro en caso de algún accidente dentro de las instalaciones.', 'Las clases son de lunes a viernes con duraci\xF3n de 90 minutos conformados de las siguiente\nmanera: 45 minutos de entrenamiento de tenis: 45 minutos de desarrollo f\xEDsico.', 'Tambi\xE9n se cuenta con un \xE1rea de espera did\xE1ctica para los alumnos y un espacio especial para\nlos padres que gusten esperar a sus hijos.'];

var SCHEDULE_TITLE = exports.SCHEDULE_TITLE = 'Horarios.';
var SCHEDULE = exports.SCHEDULE = '4:00 a 5:30 pm 5:00 a 6:30 pm 6:00 a 7:30 pm 7:00 a 8:30 pm';

var WHY_CHOOSE_CTMEX_TITLE = exports.WHY_CHOOSE_CTMEX_TITLE = '¿Porqué elegir ctmex?';
var WHY_CHOOSE_CTMEX = exports.WHY_CHOOSE_CTMEX = ['Clases de lunes a viernes', 'No suspendemos clases por aire o lluvia (canchas techadas)', 'No es necesaria una acción o membresía como en un club privado', 'Canchas especializadas para la edad y tamaño del alumno', 'Pelotas especiales para la edad y tamaño del alumno', 'Área de espera didáctica', 'Desarrollo físico desde los 4 años', 'Sistema de medición para saber el progreso del alumno', 'Atención enfocada en pequeños de 4 a 10 años'];

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(39);

var _Provider = __webpack_require__(5);

var _Provider2 = _interopRequireDefault(_Provider);

var _Menu = __webpack_require__(10);

var _Menu2 = _interopRequireDefault(_Menu);

var _Container = __webpack_require__(6);

var _Container2 = _interopRequireDefault(_Container);

var _Helmet = __webpack_require__(11);

var _Helmet2 = _interopRequireDefault(_Helmet);

var _withRouter = __webpack_require__(12);

var _withRouter2 = _interopRequireDefault(_withRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundPage = function NotFoundPage(_ref) {
  var staticContext = _ref.staticContext;

  staticContext.set(_constants.NOT_FOUND, true);

  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(_Helmet2.default, {
      title: '404',
      pathname: '404',
      description: 'Ups, p\xE1gina no encontrada.'
    }),
    _react2.default.createElement(
      _Provider2.default,
      { color: 'white' },
      _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_Menu2.default, null),
        _react2.default.createElement(
          _Container2.default,
          { height: '65vh', verticalAlign: true },
          _react2.default.createElement(
            'h1',
            null,
            'Ups, p\xE1gina no encontrada.'
          )
        )
      )
    )
  );
};

NotFoundPage.defaultProps = {
  staticContext: {
    set: function set() {}
  }
};

NotFoundPage.propTypes = _extends({
  staticContext: _propTypes2.default.shape({
    set: _propTypes2.default.func.isRequired
  })
}, _withRouter2.default);

exports.default = {
  component: NotFoundPage
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(40);

var _reactRouterDom = __webpack_require__(19);

var _reactRouterConfig = __webpack_require__(18);

var _styledComponents = __webpack_require__(0);

var _reactHelmet = __webpack_require__(30);

var _Routes = __webpack_require__(23);

var _Routes2 = _interopRequireDefault(_Routes);

var _favicon = __webpack_require__(87);

var _favicon2 = _interopRequireDefault(_favicon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var version =  true ? '0.0.2' : 'development';
var bundle =  true ? 'bundle.js' : 'bundle.dev.js';

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

  return '<html lang="es-MX">\n  <head>\n    ' + helmet.title.toString() + '\n    ' + helmet.meta.toString() + '\n    <link rel="shortcut icon" href="' + _favicon2.default + '" type="image/x-icon" />\n    <meta charset="utf-8" />\n    <meta http-equiv="content-language" content="es-MX" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <meta name="google-site-verification" content="QXzJc8AVGIK88EaltTJ_GqfB8OMe7rtPV9pXrmjhmIA" />\n    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css" />\n    ' + styleTags + '\n  </head>\n  <body>\n    <div id="root">' + content + '</div>\n    <script src="' + bundle + '?' + version + '"></script>\n    <script>window.__VERSION__=\'' + version + '\';</script>\n    <!-- Global site tag (gtag.js) - Google Analytics -->\n    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-114051003-1"></script>\n    <script>\n      window.dataLayer = window.dataLayer || [];\n      function gtag(){dataLayer.push(arguments);}\n      gtag(\'js\', new Date());\n\n      gtag(\'config\', \'UA-114051003-1\');\n    </script>\n\n  </body>\n</html>';
};

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAARhSURBVFiFxZdbbFRVFIa/tU/n0jJ0piCUVii3loBEIogaDSKGXmhTQqKpEWJiNEQxwoNBfQMhPitPEOTJgJcIxAeq9iYCgQAlJSiFwINIubVDpy2UYtsZZs7yocy001PaAQtdT2f/e+31/2utnb33ER7Csgrr/OnGXmpjFgmaL0hAsdMU04noFYFzonq4ubbkWqoxJRWnnJLqV1HZKEiZgiuFoPW2sjMYuL2HfW/FHllATmHdPLF0qyoVqQgdwi6qsjlYV7zvoQXkFtWuVWE74H5E8oE033siaWubDr/eO7KAir3WlE7/NkE2/H/iJKZjaqJvBKvKQgNhM9jvsZADKEvETqvJXVmZ8UABuSV17z0W8n4RCzXs3g2aqHziY0pJ9Xyj5szgXW55bMbP7sY9IYqihG+66bqcgUaTu+dyxVgw7xpTn+5ABG62ZvLX+Ty6e4bYQsJHLTXFO5ME5BbXVSpaHh8bt83U8hDZr3Vg3Jq0PtZtaK6eRMvBiRiUNW+e4N23jzLel7zHesMu9le+wK7dywiHk/IKha1ofkdV2R0ByCmuWQpyJD7rfSrCnI+vkj4l8uByAt2XvazLOcriZ5qG9Wu6OolPNq2hORgYUATd2lxbssUAqMjG+ITlsSlYd31EcoCMmb3UZ+UR0+HPsxl5IbZ9+QO+cf0VUmRDfulvHmvGskMB27J3ARbAtFWtTHiua0TyuLVHfWS5epjmuTWsX8DfjRE4dWZWHEqPYJ20MuasKVLkHejLfvb7zRhXcs/b6gNc3Z9Ne4Mf17gY3snJ1WmL+liS+Q8nG/L5ansplbULMUYpmHUzyW/W9BD7DrxENGoBIEIoDXg+7jAur4e09OSju60+wKVvcxPjzgs+Fnz+N97p/SKCkUyOn8/ns02ridl97Wj4cyYApcvPJvzG+3qZW9DMmcbpfYDKIqPI7LiDZ/I9R+lajwaSxmqD65Kz59UN8xPkcfv518UOv6m5/a0SNN8IkmAYnD1A9F/LgXnFKbQ76nFgXV1eB5bp60l8KwSMok6GJ2QCaUaU1Lf8KJvCHYPIlbESADQZFW0cK3YRGo2oHh4rATZyyNx/QJ4aA/6IFZVf++4CdMcTp1d+unGwsN0ABP2d3wHndMhLxYmp7cRsdUDYQ8S7j0VsNVuSomcX15R7/bHKwLN3+4miQtspP2onB/H5w7yy+uKA5crxH+dytzP5MLKMsmL5WVyu/gPu2Mk5tN3yfd1SU7zRkV5Ocd03oB84cxlVu9Bry8u3fi/qhEFvwpb2rPXAkSGXjY51xCxrZZzcIYDTi++pFa0ATo86tdBmjClvrVp+aSDseJYHq8pCnohrCcqe0eOm0VZ98UZ14Ykh5h5kKjkldR+ibAGyH5E7DLLjnrf7i7YDq4a8c0b8OZ207JDP5Y58qsh6YGLKxMpetWKbg9WlTcM5pvR3DDC/Yq+7/U5WkaBFqCwCuwDED7gQbqNcEThni/yRRuyX6zUrOlKJ+x82iZk0eZqcngAAAABJRU5ErkJggg=="

/***/ }),
/* 88 */
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
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(35);

var _axios2 = _interopRequireDefault(_axios);

var _sendEmail = __webpack_require__(90);

var _sendEmail2 = _interopRequireDefault(_sendEmail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emailAPI = function emailAPI(app) {
  var axiosInstance = _axios2.default.create({
    baseURL: process.env.MAILGUN_API,
    auth: {
      username: 'api',
      password: process.env.MAILGUN_API_KEY
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });

  app.post('/email', function (req, res) {
    (0, _sendEmail2.default)(axiosInstance, req.body).then(function () {
      res.status(200);
      res.send({ sucess: true });
    }).catch(function (e) {
      console.log('error', e);
      res.status(500);
    });
  });
};

exports.default = emailAPI;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xss = __webpack_require__(91);

var _xss2 = _interopRequireDefault(_xss);

var _querystring = __webpack_require__(92);

var _querystring2 = _interopRequireDefault(_querystring);

var _email = __webpack_require__(93);

var _email2 = _interopRequireDefault(_email);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SEND_EMAIL_PATH = '/messages';

var sendEmail = function sendEmail(emailAxios, _ref) {
  var name = _ref.name,
      email = _ref.email,
      phone = _ref.phone,
      title = _ref.title,
      message = _ref.message;
  return new Promise(function (resolve, reject) {
    return emailAxios.post(SEND_EMAIL_PATH, _querystring2.default.stringify({
      from: process.env.CTMEX_EMAIL_WEBSITE,
      to: process.env.CTMEX_EMAIL_CONTACT,
      subject: (0, _xss2.default)(title),
      html: (0, _email2.default)({
        name: (0, _xss2.default)(name),
        email: (0, _xss2.default)(email),
        phone: (0, _xss2.default)(phone),
        title: (0, _xss2.default)(title),
        message: (0, _xss2.default)(message)
      }),
      'h:Reply-To': email
    })).then(resolve).catch(reject);
  });
};

exports.default = sendEmail;

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("xss");

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _server = __webpack_require__(40);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Email = function Email(_ref) {
  var title = _ref.title,
      message = _ref.message,
      name = _ref.name,
      phone = _ref.phone,
      email = _ref.email;
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      'h1',
      null,
      'Nuevo contacto desde ',
      process.env.WEB_DOMAIN
    ),
    _react2.default.createElement(
      'h2',
      null,
      title
    ),
    _react2.default.createElement(
      'p',
      null,
      message
    ),
    _react2.default.createElement(
      'p',
      null,
      'Enviado por:'
    ),
    _react2.default.createElement(
      'address',
      null,
      _react2.default.createElement(
        'b',
        null,
        'Nombre:'
      ),
      ' ',
      name,
      ' ',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'b',
        null,
        'Tel\xE9fono:'
      ),
      ' ',
      phone,
      ' ',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'b',
        null,
        'e-mail:'
      ),
      ' ',
      email,
      ' ',
      _react2.default.createElement('br', null)
    )
  );
};

Email.defaultProps = {
  title: '',
  message: '',
  name: '',
  phone: '',
  email: ''
};

Email.propTypes = {
  title: _propTypes2.default.string,
  message: _propTypes2.default.string,
  name: _propTypes2.default.string,
  phone: _propTypes2.default.string,
  email: _propTypes2.default.string
};

var renderBody = function renderBody(data) {
  return (0, _server.renderToString)(_react2.default.createElement(Email, data));
};

var emailTemplate = function emailTemplate(data) {
  return '\n<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n<html xmlns="http://www.w3.org/1999/xhtml">\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\n<title>Contacto desde ' + process.env.WEB_DOMAIN + '</title>\n<meta name="viewport" content="width=device-width, initial-scale=1.0"/>\n</head>\n<body>\n  ' + renderBody(data) + '\n</body>\n</html>\n';
};

exports.default = emailTemplate;

/***/ })
/******/ ]); 