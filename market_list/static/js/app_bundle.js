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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/jsx/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/jsx/app.js":
/*!************************!*\
  !*** ./src/jsx/app.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nwindow.ee = new EventEmitter();\nvar my_news = [{\n  author: 'Саша Печкин',\n  text: 'В четчерг, четвертого числа...',\n  bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили xёрными чернилами чертёж.'\n}, {\n  author: 'Просто Вася',\n  text: 'Считаю, что $ должен стоить 35 рублей!',\n  bigText: 'А евро 42!'\n}, {\n  author: 'Гость',\n  text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',\n  bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'\n}, {\n  author: 'Дюбель',\n  text: 'Бум бум бум',\n  bigText: 'мазафака бум!'\n}, {\n  author: 'Барракуда',\n  text: 'Съем всех человеков',\n  bigText: 'оставлю только самых тощих'\n}];\n\nvar Comments =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Comments, _React$Component);\n\n  function Comments() {\n    _classCallCheck(this, Comments);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Comments).apply(this, arguments));\n  }\n\n  _createClass(Comments, [{\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", {\n        className: \"comments\"\n      }, \"\\u041D\\u0435\\u0442 \\u043D\\u043E\\u0432\\u043E\\u0441\\u0442\\u0435\\u0439 - \\u043A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C \\u043D\\u0435\\u0447\\u0435\\u0433\\u043E\");\n    }\n  }]);\n\n  return Comments;\n}(React.Component);\n\nvar Article =\n/*#__PURE__*/\nfunction (_React$Component2) {\n  _inherits(Article, _React$Component2);\n\n  _createClass(Article, null, [{\n    key: \"propTypes\",\n    value: function propTypes() {\n      data: React.propTypes.shape({\n        author: React.propTypes.string.isRequired,\n        text: React.propTypes.string.isRequired,\n        bigText: React.propTypes.string.isRequired\n      });\n    }\n  }]);\n\n  function Article(props) {\n    var _this;\n\n    _classCallCheck(this, Article);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Article).call(this, props));\n    _this.state = {\n      visible: false\n    };\n    _this.readmoreClick = _this.readmoreClick.bind(_assertThisInitialized(_this));\n    _this.closeClick = _this.closeClick.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(Article, [{\n    key: \"render\",\n    value: function render() {\n      var item = this.props.data;\n      var visible = this.state.visible; // console.log('render', this);\n\n      return React.createElement(\"div\", {\n        className: \"article\"\n      }, React.createElement(\"p\", {\n        className: \"news__author\"\n      }, item.author, \":\"), React.createElement(\"p\", {\n        className: \"news__text\"\n      }, item.text), React.createElement(\"a\", {\n        href: \"#\",\n        className: 'news__readmore ' + (visible ? 'none' : ''),\n        onClick: this.readmoreClick\n      }, \"\\u041F\\u043E\\u0434\\u0440\\u043E\\u0431\\u043D\\u0435\\u0435\"), React.createElement(\"p\", {\n        className: 'news__big-text ' + (visible ? '' : 'none')\n      }, item.bigText), React.createElement(\"a\", {\n        href: \"#\",\n        onClick: this.closeClick,\n        className: 'news__close ' + (visible ? '' : 'none')\n      }, \"x\"));\n    }\n  }, {\n    key: \"readmoreClick\",\n    value: function readmoreClick(e) {\n      e.preventDefault();\n      this.setState({\n        visible: true\n      });\n    }\n  }, {\n    key: \"closeClick\",\n    value: function closeClick(e) {\n      e.preventDefault();\n      this.setState({\n        visible: false\n      });\n    }\n  }]);\n\n  return Article;\n}(React.Component);\n\nvar News =\n/*#__PURE__*/\nfunction (_React$Component3) {\n  _inherits(News, _React$Component3);\n\n  function News() {\n    _classCallCheck(this, News);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(News).apply(this, arguments));\n  }\n\n  _createClass(News, [{\n    key: \"render\",\n    value: function render() {\n      var data = this.props.data;\n      var newsTemplate;\n\n      if (data.length > 0) {\n        newsTemplate = data.map(function (item, index) {\n          return React.createElement(\"div\", {\n            className: \"news__item\",\n            key: index\n          }, React.createElement(Article, {\n            data: item\n          }));\n        });\n      } else {\n        newsTemplate = React.createElement(\"p\", null, \"\\u041A \\u0441\\u043E\\u0436\\u0430\\u043B\\u0435\\u043D\\u0438\\u044E \\u043D\\u043E\\u0432\\u043E\\u0441\\u0442\\u0435\\u0439 \\u043D\\u0435\\u0442\");\n      }\n\n      return React.createElement(\"div\", {\n        className: \"news\"\n      }, newsTemplate, React.createElement(\"strong\", {\n        className: data.length > 0 ? 'news__count' : 'none'\n      }, \"\\u0412\\u0441\\u0435\\u0433\\u043E \\u043D\\u043E\\u0432\\u043E\\u0441\\u0442\\u0435\\u0439: \", data.length));\n    }\n  }], [{\n    key: \"propTypes\",\n    value: function propTypes() {\n      data: React.propTypes.array.isRequired;\n    }\n  }]);\n\n  return News;\n}(React.Component);\n\nvar Add =\n/*#__PURE__*/\nfunction (_React$Component4) {\n  _inherits(Add, _React$Component4);\n\n  function Add(props) {\n    var _this2;\n\n    _classCallCheck(this, Add);\n\n    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Add).call(this, props));\n    _this2.state = {\n      agreeNotChecked: true,\n      authorIsEmpty: true,\n      textIsEmpty: true\n    };\n    _this2.changeValue = _this2.changeValue.bind(_assertThisInitialized(_this2));\n    _this2.onBtnClick = _this2.onBtnClick.bind(_assertThisInitialized(_this2));\n    _this2.changeCheckbox = _this2.changeCheckbox.bind(_assertThisInitialized(_this2));\n    _this2.changeAuthor = _this2.changeAuthor.bind(_assertThisInitialized(_this2));\n    _this2.changeText = _this2.changeText.bind(_assertThisInitialized(_this2));\n    return _this2;\n  }\n\n  _createClass(Add, [{\n    key: \"changeValue\",\n    value: function changeValue(e) {\n      this.setState({\n        value: e.target.value\n      });\n    }\n  }, {\n    key: \"onBtnClick\",\n    value: function onBtnClick(e) {\n      e.preventDefault();\n      var author = ReactDOM.findDOMNode(this.refs.author).value;\n      var text = ReactDOM.findDOMNode(this.refs.text).value; // alert(author + '\\n' + text);\n\n      var item = [{\n        author: author,\n        text: text,\n        bigText: '...'\n      }];\n      window.ee.emit('News.add', item); // console.log('generate event')\n    }\n  }, {\n    key: \"changeCheckbox\",\n    value: function changeCheckbox(e) {\n      this.setState({\n        agreeNotChecked: !this.state.agreeNotChecked\n      });\n    }\n  }, {\n    key: \"changeText\",\n    value: function changeText(e) {\n      var text = e.target.value.trim();\n\n      if (text) {\n        this.setState({\n          textIsEmpty: false\n        });\n      } else {\n        this.setState({\n          textIsEmpty: true\n        });\n      }\n    }\n  }, {\n    key: \"changeAuthor\",\n    value: function changeAuthor(e) {\n      var text = e.target.value.trim();\n\n      if (text) {\n        this.setState({\n          authorIsEmpty: false\n        });\n      } else {\n        this.setState({\n          authorIsEmpty: true\n        });\n      }\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      ReactDOM.findDOMNode(this.refs.author).focus();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var agreeNotChecked = this.state.agreeNotChecked,\n          authorIsEmpty = this.state.authorIsEmpty,\n          textIsEmpty = this.state.textIsEmpty;\n      return React.createElement(\"p\", null, React.createElement(\"input\", {\n        className: \"test-input\",\n        ref: \"author\",\n        defaultValue: \"\",\n        onChange: this.changeAuthor,\n        placeholder: \"\\u0430\\u0432\\u0442\\u043E\\u0440 \\u043D\\u043E\\u0432\\u043E\\u0441\\u0442\\u0438\"\n      }), \" \", React.createElement(\"br\", null), React.createElement(\"textarea\", {\n        onChange: this.changeText,\n        ref: \"text\",\n        cols: \"30\",\n        rows: \"10\",\n        placeholder: \"\\u0442\\u0435\\u043A\\u0441\\u0442 \\u043D\\u043E\\u0432\\u043E\\u0441\\u0442\\u0438\",\n        defaultValue: \"\"\n      }), React.createElement(\"br\", null), React.createElement(\"label\", null, React.createElement(\"input\", {\n        type: \"checkbox\",\n        onChange: this.changeCheckbox,\n        defaultChecked: false,\n        name: \"\",\n        id: \"\",\n        ref: \"checkrule\"\n      }), \" \\u042F \\u0441\\u043E\\u0433\\u043B\\u0430\\u0441\\u0435\\u043D \\u0441 \\u043F\\u0440\\u0430\\u0432\\u0438\\u043B\\u0430\\u043C\\u0438 \"), React.createElement(\"button\", {\n        onClick: this.onBtnClick,\n        ref: \"alert_button\",\n        disabled: agreeNotChecked || authorIsEmpty || textIsEmpty\n      }, \"\\u043E\\u043A\\u0435\\u0439 \"));\n    }\n  }]);\n\n  return Add;\n}(React.Component);\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component5) {\n  _inherits(App, _React$Component5);\n\n  function App(props) {\n    var _this3;\n\n    _classCallCheck(this, App);\n\n    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this3.state = {\n      counter: 0,\n      news: my_news\n    };\n    _this3.counterPlus = _this3.counterPlus.bind(_assertThisInitialized(_this3));\n    return _this3;\n  }\n\n  _createClass(App, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var self = this;\n      window.ee.addListener('News.add', function (item) {\n        var nextNews = item.concat(self.state.news);\n        self.setState({\n          news: nextNews\n        });\n      });\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      window.ee.removeListener('News.add');\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", {\n        className: \"app\"\n      }, React.createElement(Add, null), React.createElement(\"h3\", null, \"\\u041D\\u043E\\u0432\\u043E\\u0441\\u0442\\u0438\"), React.createElement(News, {\n        data: this.state.news\n      }));\n    }\n  }, {\n    key: \"counterPlus\",\n    value: function counterPlus(e) {\n      e.preventDefault();\n      this.setState({\n        counter: ++this.state.counter\n      });\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\nReactDOM.render(React.createElement(App, null), document.getElementById('root'));\n\n//# sourceURL=webpack:///./src/jsx/app.js?");

/***/ })

/******/ });