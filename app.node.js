module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactDom = __webpack_require__(29);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _fbjsLibExecutionEnvironment = __webpack_require__(4);

  var _coreLocation = __webpack_require__(3);

  var _coreLocation2 = _interopRequireDefault(_coreLocation);

  var _componentsLayout = __webpack_require__(7);

  var _componentsLayout2 = _interopRequireDefault(_componentsLayout);

  var routes = {
    '/404': function _() {
      return __webpack_require__(10);
    }, '/500': function _() {
      return __webpack_require__(11);
    }, '/about': function about() {
      return __webpack_require__(12);
    }, '/contact': function contact() {
      return __webpack_require__(13);
    }, '/gallery': function gallery() {
      return __webpack_require__(14);
    }, '/': function _() {
      return __webpack_require__(15);
    }, '/theartist': function theartist() {
      return __webpack_require__(16);
    }, '/theman': function theman() {
      return __webpack_require__(17);
    } }; // Auto-generated on build. See tools/lib/routes-loader.js

  var route = function route(path, callback) {
    var handler, component;
    return regeneratorRuntime.async(function route$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          handler = routes[path] || routes['/404'];
          context$1$0.next = 3;
          return regeneratorRuntime.awrap(handler());

        case 3:
          component = context$1$0.sent;
          context$1$0.next = 6;
          return regeneratorRuntime.awrap(callback(_react2['default'].createElement(
            _componentsLayout2['default'],
            null,
            _react2['default'].createElement(component)
          )));

        case 6:
        case 'end':
          return context$1$0.stop();
      }
    }, null, _this);
  };

  function run() {
    var _this2 = this;

    var container = document.getElementById('app');
    _coreLocation2['default'].listen(function (location) {
      route(location.pathname, function callee$2$0(component) {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              return context$3$0.abrupt('return', _reactDom2['default'].render(component, container, function () {
                // Track the page view event via Google Analytics
                window.ga('send', 'pageview');
              }));

            case 1:
            case 'end':
              return context$3$0.stop();
          }
        }, null, _this2);
      });
    });
  }

  if (_fbjsLibExecutionEnvironment.canUseDOM) {
    // Run the application when both DOM is ready and page content is loaded
    if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
      run();
    } else {
      document.addEventListener('DOMContentLoaded', run, false);
    }
  }

  exports['default'] = { route: route, routes: routes };
  module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];

  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};

  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _fbjsLibExecutionEnvironment = __webpack_require__(4);

  var _historyLibCreateBrowserHistory = __webpack_require__(26);

  var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

  var _historyLibCreateMemoryHistory = __webpack_require__(27);

  var _historyLibCreateMemoryHistory2 = _interopRequireDefault(_historyLibCreateMemoryHistory);

  var _historyLibUseQueries = __webpack_require__(28);

  var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

  var location = (0, _historyLibUseQueries2['default'])(_fbjsLibExecutionEnvironment.canUseDOM ? _historyLibCreateBrowserHistory2['default'] : _historyLibCreateMemoryHistory2['default'])();

  exports['default'] = location;
  module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _validate = __webpack_require__(6);

  var _validate2 = _interopRequireDefault(_validate);

  __webpack_require__(18);

  var ContactForm = _react2['default'].createClass({
    displayName: 'ContactForm',

    getInitialState: function getInitialState() {
      return {
        emailToSend: '',
        isEmailValid: false
      };
    },

    handleInputChange: function handleInputChange(value) {
      var isEmailValid = _validate2['default'].email(value);
      this.setState({
        emailToSend: value,
        isEmailValid: isEmailValid
      });
    },

    render: function render() {
      var _this = this;

      return _react2['default'].createElement(
        'div',
        { className: 'bg-contact' },
        _react2['default'].createElement(
          'div',
          { className: 'bg-email-input-container' },
          _react2['default'].createElement(
            'span',
            { className: 'input input--kozakura' },
            _react2['default'].createElement('input', {
              className: 'input__field input__field--kozakura',
              value: this.state.emailToSend,
              onChange: function (event) {
                return _this.handleInputChange(event.target.value);
              }
            }),
            _react2['default'].createElement(
              'label',
              { className: 'input__label input__label--kozakura', htmlFor: 'input-7' },
              _react2['default'].createElement(
                'span',
                { className: 'input__label-content input__label-content--kozakura', 'data-content': 'e-mail' },
                'E-MAIL'
              )
            ),
            _react2['default'].createElement(
              'svg',
              { className: 'graphic graphic--kozakura', width: '300%', height: '100%', viewBox: '0 0 1200 60', preserveAspectRatio: 'none' },
              _react2['default'].createElement('path', { d: 'M1200,9c0,0-305.005,0-401.001,0C733,9,675.327,4.969,598,4.969C514.994,4.969,449.336,9,400.333,9C299.666,9,0,9,0,9v43c0,0,299.666,0,400.333,0c49.002,0,114.66,3.484,197.667,3.484c77.327,0,135-3.484,200.999-3.484C894.995,52,1200,52,1200,52V9z' })
            )
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'bg-form-wrapper' },
          _react2['default'].createElement(
            'form',
            {
              action: '//bardakas.us12.list-manage.com/subscribe/post?u=d0d40509ceb3b4c3971db74cb&id=98f6df5f59',
              method: 'post',
              id: 'mc-embedded-subscribe-form',
              name: 'mc-embedded-subscribe-form',
              className: 'validate',
              target: '_blank',
              noValidate: true
            },
            _react2['default'].createElement(
              'div',
              { id: 'mc_embed_signup_scroll' },
              _react2['default'].createElement('input', {
                style: { visibility: 'hidden', display: 'none' },
                type: 'email',
                value: this.state.emailToSend,
                name: 'EMAIL',
                className: 'email',
                id: 'mce-EMAIL',
                placeholder: 'email address',
                required: true
              }),
              _react2['default'].createElement(
                'div',
                { style: { position: 'absolute', left: '-5000px' } },
                _react2['default'].createElement('input', {
                  type: 'text',
                  name: 'b_d0d40509ceb3b4c3971db74cb_98f6df5f59',
                  tabIndex: '-1',
                  value: ''
                })
              ),
              _react2['default'].createElement(
                'div',
                { className: 'clear' },
                _react2['default'].createElement('input', {
                  className: 'subscribe-input',
                  type: 'submit',
                  value: 'Subscribe',
                  name: 'subscribe',
                  id: 'mc-embedded-subscribe',
                  className: 'button left'
                })
              )
            )
          ),
          _react2['default'].createElement(
            'form',
            {
              action: '//bardakas.us12.list-manage.com/subscribe/post?u=d0d40509ceb3b4c3971db74cb&id=4893502ea0',
              method: 'post',
              id: 'mc-embedded-subscribe-form',
              name: 'mc-embedded-subscribe-form',
              className: 'validate',
              target: '_blank',
              noValidate: true
            },
            _react2['default'].createElement(
              'div',
              { id: 'mc_embed_signup_scroll' },
              _react2['default'].createElement(
                'div',
                { className: 'mc-field-group' },
                _react2['default'].createElement('input', {
                  style: { visibility: 'hidden', display: 'none' },
                  type: 'email',
                  value: this.state.emailToSend,
                  name: 'EMAIL',
                  className: 'required email',
                  id: 'mce-EMAIL'
                })
              ),
              _react2['default'].createElement(
                'div',
                { id: 'mce-responses', className: 'clear' },
                _react2['default'].createElement('div', {
                  className: 'response',
                  id: 'mce-error-response',
                  style: { display: 'none' } }),
                _react2['default'].createElement('div', {
                  className: 'response',
                  id: 'mce-success-response',
                  style: { display: 'none' } })
              ),
              _react2['default'].createElement(
                'div',
                { style: { position: 'absolute', left: '-5000px' }, 'aria-hidden': 'true' },
                _react2['default'].createElement('input', {
                  type: 'text',
                  name: 'b_d0d40509ceb3b4c3971db74cb_4893502ea0',
                  tabIndex: '-1',
                  value: '' })
              ),
              _react2['default'].createElement(
                'div',
                { className: 'clear' },
                _react2['default'].createElement('input', {
                  type: 'submit',
                  value: 'Contact',
                  name: 'subscribe',
                  id: 'mc-embedded-subscribe',
                  className: 'button right' })
              )
            )
          )
        )
      );
    }
  });

  exports['default'] = ContactForm;
  module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = {
    email: function email(_email) {
      var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var isEmailValid = emailRegex.test(_email);
      return isEmailValid;
    }
  };
  module.exports = exports["default"];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(19);

  var _Navigation = __webpack_require__(9);

  var _Navigation2 = _interopRequireDefault(_Navigation);

  function Layout(_ref) {
    var children = _ref.children;

    return _react2['default'].createElement(
      'div',
      { className: 'Layout' },
      _react2['default'].createElement(_Navigation2['default'], null),
      children
    );
  }

  Layout.propTypes = {
    children: _react.PropTypes.element.isRequired
  };

  exports['default'] = Layout;
  module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(20);

  var _coreLocation = __webpack_require__(3);

  var _coreLocation2 = _interopRequireDefault(_coreLocation);

  function isLeftClickEvent(event) {
    return event.button === 0;
  }

  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }

  var Link = (function (_Component) {
    _inherits(Link, _Component);

    function Link() {
      _classCallCheck(this, Link);

      _get(Object.getPrototypeOf(Link.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Link, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var to = _props.to;
        var children = _props.children;

        var props = _objectWithoutProperties(_props, ['to', 'children']);

        return _react2['default'].createElement(
          'a',
          _extends({ onClick: Link.handleClick.bind(this) }, props),
          children
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        to: _react.PropTypes.string.isRequired,
        children: _react.PropTypes.element.isRequired,
        state: _react.PropTypes.object,
        onClick: _react.PropTypes.func
      },
      enumerable: true
    }, {
      key: 'handleClick',
      value: function value(event) {
        var allowTransition = true;
        var clickResult = undefined;

        if (_this.props && _this.props.onClick) {
          clickResult = _this.props.onClick(event);
        }

        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
          return;
        }

        if (clickResult === false || event.defaultPrevented === true) {
          allowTransition = false;
        }

        event.preventDefault();

        if (allowTransition) {
          var link = event.currentTarget;
          _coreLocation2['default'].pushState(_this.props && _this.props.state || null, _this.props && _this.props.to || link.pathname + link.search);
        }
      },
      enumerable: true
    }]);

    return Link;
  })(_react.Component);

  exports['default'] = Link;
  module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(21);

  var _Link = __webpack_require__(8);

  var _Link2 = _interopRequireDefault(_Link);

  var Navigation = _react2['default'].createClass({
    displayName: 'Navigation',

    getInitialState: function getInitialState() {
      return {
        toggle: false
      };
    },

    handleClick: function handleClick() {
      if (this.state.toggle) {
        this.setState({ toggle: false });
      } else if (!this.state.toggle) {
        this.setState({ toggle: true });
      }
    },

    render: function render() {
      var navigationClassnames = this.state.toggle ? ' open' : ' closed';
      var menuToggle = this.state.toggle ? 'X' : 'MENU';

      return _react2['default'].createElement(
        'div',
        { className: 'bg-header' },
        _react2['default'].createElement(
          'div',
          { className: 'bg-header-inner' },
          _react2['default'].createElement(
            'div',
            { className: 'bg-logo' },
            _react2['default'].createElement(
              'a',
              { className: 'bg-logo-link', href: '/', onClick: _Link2['default'].handleClick },
              'Bardakas G'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'bg-navigation-wrapper' },
            _react2['default'].createElement(
              'span',
              { className: 'bg-navigation-toggle', onClick: this.handleClick },
              menuToggle
            ),
            _react2['default'].createElement(
              'ul',
              { className: 'bg-navigation' + ('' + navigationClassnames), role: 'menu' },
              _react2['default'].createElement(
                'li',
                { className: 'bg-navigation-item', onClick: this.handleClick },
                _react2['default'].createElement(
                  'a',
                  { className: 'bg-navigation-link', href: '/gallery', onClick: _Link2['default'].handleClick },
                  'Gallery'
                )
              ),
              _react2['default'].createElement(
                'li',
                { className: 'bg-navigation-item', onClick: this.handleClick },
                _react2['default'].createElement(
                  'a',
                  { className: 'bg-navigation-link', href: '/contact', onClick: _Link2['default'].handleClick },
                  'Contact'
                )
              )
            )
          )
        )
      );
    }
  });

  exports['default'] = Navigation;
  module.exports = exports['default'];
  /*  <li className="bg-navigation-item" onClick={this.handleClick}>
     <a className="bg-navigation-link" href="/theman" onClick={Link.handleClick}>The Man</a>
   </li>
   <li className="bg-navigation-item" onClick={this.handleClick}>
     <a className="bg-navigation-link" href="/theartist" onClick={Link.handleClick}>The Artist</a>
   </li> */

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Not Found'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'The page you\'re looking for was not found.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Error'
          ),
          _react2['default'].createElement(
            'pre',
            null,
            this.props.error ? this.props.error.message + '\n\n' + this.props.error.stack : 'A critical error occurred.'
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        error: _react.PropTypes.instanceOf(Error)
      },
      enumerable: true
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'About Us'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsContactFormContact = __webpack_require__(5);

  var _componentsContactFormContact2 = _interopRequireDefault(_componentsContactFormContact);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'bg-contact-wrapper' },
          _react2['default'].createElement(_componentsContactFormContact2['default'], null)
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactImageGallery = __webpack_require__(30);

  var _reactImageGallery2 = _interopRequireDefault(_reactImageGallery);

  __webpack_require__(22);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        var images = [{
          original: './images/kontralto.jpg',
          originalClass: 'featured-slide',
          description: 'Kontralto'
        }, {
          original: './images/owl1.jpg',
          originalClass: 'featured-slide',
          description: 'TriArt'
        }, {
          original: './images/tri_two.jpg',
          originalClass: 'featured-slide',
          description: 'TriArt'
        }, {
          original: './images/tri_three.jpg',
          originalClass: 'featured-slide',
          description: 'TriArt'
        }, {
          original: './images/three.jpg',
          originalClass: 'featured-slide wide',
          description: 'TriArt'
        }, {
          original: './images/wise.jpg',
          originalClass: 'featured-slide',
          description: 'Owl'
        }, {
          original: './images/family.jpg',
          originalClass: 'featured-slide',
          description: 'Ancestors Offspring'
        }, {
          original: './images/gladiator.jpg',
          originalClass: 'featured-slide',
          description: 'Gladiator'
        }, {
          original: './images/megas.jpg',
          originalClass: 'featured-slide',
          description: 'Voukefalas'
        }, {
          original: './images/prince.jpg',
          originalClass: 'featured-slide',
          description: 'Sad Prince'
        }];

        return _react2['default'].createElement(
          'div',
          { className: 'bg-gallery-wrapper' },
          _react2['default'].createElement(_reactImageGallery2['default'], {
            items: images,
            autoPlay: true,
            lazyLoad: true,
            showThumbnails: false,
            showBullets: false,
            showNav: true,
            showIndex: false,
            autoPlay: true,
            slideInterval: 4000,
            startIndex: 0,
            slideInterval: 6000,
            onSlide: this.handleSlide
          })
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(23);

  var Index = _react2['default'].createClass({
    displayName: 'Index',

    getInitialState: function getInitialState() {
      return {
        height: 500
      };
    },

    componentDidMount: function componentDidMount() {
      var height = 500;
      if (window) {
        height = window.innerHeight;
      }
      this.addResizeListener();
      this.handleHeight(height);
    },

    componentWillUnmount: function componentWillUnmount() {
      this.removeResizeListener();
    },

    handleHeight: function handleHeight(height) {
      this.setState({ height: height - 77 });
    },

    addResizeListener: function addResizeListener() {
      var that = this;
      window.addEventListener('resize', function () {
        that.handleHeight(window.innerHeight);
      });
    },

    removeResizeListener: function removeResizeListener() {
      var that = this;
      window.removeEventListener('resize', function () {
        that.handleHeight(window.innerHeight);
      });
    },

    render: function render() {
      var styles = {
        height: this.state.height
      };
      return _react2['default'].createElement(
        'div',
        { className: 'bg-home', style: styles },
        _react2['default'].createElement(
          'section',
          { className: 'bg-section-intro' },
          _react2['default'].createElement(
            'div',
            { className: 'bg-divider-container' },
            _react2['default'].createElement(
              'div',
              { className: 'bg-divider' },
              _react2['default'].createElement('div', { className: 'bg-divider-left' }),
              _react2['default'].createElement('div', { className: 'bg-divider-right' })
            )
          )
        ),
        _react2['default'].createElement('section', { className: 'bg-section-gallery' }),
        _react2['default'].createElement('section', { className: 'bg-section-gallery' })
      );
    }

  });

  exports['default'] = Index;
  module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'The Artist'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'The Man'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "article, aside, details, figcaption, figure, footer, header, hgroup, main, nav, section, summary{display:block;}audio, canvas, video{display:inline-block;}audio:not([controls]){display:none;height:0;}[hidden]{display:none;}html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;}body{margin:0;}a:focus{outline:thin dotted;}a:active, a:hover{outline:0;}h1{font-size:2em;margin:0.67em 0;}abbr[title]{border-bottom:1px dotted;}b, strong{font-weight:bold;}dfn{font-style:italic;}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;}mark{background:#ff0;color:#000;}code, kbd, pre, samp{font-family:monospace,serif;font-size:1em;}pre{white-space:pre-wrap;}q{quotes:\"\\201C\" \"\\201D\" \"\\2018\" \"\\2019\";}small{font-size:80%;}sub, sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sup{top:-0.5em;}sub{bottom:-0.25em;}img{border:0;}svg:not(:root){overflow:hidden;}figure{margin:0;}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em;}legend{border:0;padding:0;}button, input, select, textarea{font-family:inherit;font-size:100%;margin:0;}button, input{line-height:normal;}button, select{text-transform:none;}button, html input[type=\"button\"], input[type=\"reset\"], input[type=\"submit\"]{-webkit-appearance:button;cursor:pointer;}button[disabled], html input[disabled]{cursor:default;}input[type=\"checkbox\"], input[type=\"radio\"]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0;}input[type=\"search\"]{-webkit-appearance:textfield;-webkit-box-sizing:content-box;box-sizing:content-box;}input[type=\"search\"]::-webkit-search-cancel-button, input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none;}button::-moz-focus-inner, input::-moz-focus-inner{border:0;padding:0;}textarea{overflow:auto;vertical-align:top;}table{border-collapse:collapse;border-spacing:0;}\r\n\r\n.button {\r\n  background-color: transparent;\r\n  border: none;\r\n  color: rgba(255,255,255,0.9);\r\n  font-size: 19px;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.button.right {float: right;}\r\n\r\n.button.left {float: left;}\r\n\r\n.bg-contact-wrapper {\r\n  height: 700px;\r\n  height: 100vh;\r\n  background-color: black;\r\n  background: url(" + __webpack_require__(24) + ") no-repeat center;\r\n  -webkit-background-size: cover;\r\n          background-size: cover;}\r\n\r\n.bg-form-wrapper {\r\n  width: 400px;\r\n  margin: auto\r\n}\r\n\r\n@media screen and (max-width: 700px) {.bg-form-wrapper{width:100%;}\r\n  }\r\n\r\n.bg-contact {\r\n  padding-top: 150px;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.bg-email-container {\r\n  margin: auto;\r\n  width: 400px;\r\n}\r\n\r\n.input {\r\n\tposition: relative;\r\n\tz-index: 1;\r\n\tdisplay: inline-block;\r\n\tmargin: auto;\r\n\tmax-width: 400px;\r\n\twidth: 400px;\r\n\tvertical-align: top\r\n}\r\n\r\n@media screen and (max-width: 700px) {.input{width:100%;max-width:100%;}\r\n  }\r\n\r\n.input__field {\r\n\tposition: relative;\r\n\tdisplay: block;\r\n\tfloat: right;\r\n\tpadding: 0.8em;\r\n\twidth: 60%;\r\n\tborder: none;\r\n\tborder-radius: 0;\r\n\tbackground: #f0f0f0;\r\n\tcolor: #aaa;\r\n\tfont-weight: 400;\r\n\tfont-family: \"Avenir Next\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n\t-webkit-appearance: none; /* for box shadows to show on iOS */\r\n}\r\n\r\n.input__field:focus {\r\n\toutline: none;\r\n}\r\n\r\n.input__label {\r\n\tdisplay: inline-block;\r\n\tfloat: right;\r\n\tpadding: 0 1em;\r\n\twidth: 40%;\r\n\tcolor: #6a7989;\r\n\tfont-weight: bold;\r\n\tfont-size: 70.25%;\r\n\t-webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n\t-webkit-touch-callout: none;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n}\r\n\r\n.input__label-content {\r\n\tposition: relative;\r\n\tdisplay: block;\r\n\tpadding: 1.6em 0;\r\n\twidth: 100%;\r\n}\r\n\r\n.graphic {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tfill: none;\r\n}\r\n\r\n.icon {\r\n\tcolor: #ddd;\r\n\tfont-size: 150%;\r\n}\r\n\r\n\r\n\r\n/* Kozakura */\r\n.input--kozakura {\r\n\toverflow: hidden;\r\n\tpadding-bottom: 1em;\r\n}\r\n\r\n.input__field--kozakura {\r\n  text-align: center;\r\n\tpadding: 0.25em 0.5em;\r\n\tmargin-top: 1.25em;\r\n\twidth: 100%;\r\n\tbackground: transparent;\r\n\tcolor: white;\r\n\tfont-size: 1.55em;\r\n\topacity: 0;\r\n}\r\n\r\n.input__label--kozakura {\r\n\twidth: 100%;\r\n\ttext-align: left;\r\n\tposition: absolute;\r\n\ttop: 1em;\r\n\tpointer-events: none;\r\n\toverflow: hidden;\r\n\tpadding: 0 0.25em;\r\n\t-webkit-transform: translate3d(1em, 2.75em, 0);\r\n\ttransform: translate3d(1em, 2.75em, 0);\r\n\t-webkit-transition: -webkit-transform 0.3s;\r\n\ttransition:-webkit-transform 0.3s;\r\n\t-o-transition:transform 0.3s, -o-transform 0.3s;\r\n\ttransition:transform 0.3s;\r\n\ttransition: transform 0.3s, -webkit-transform 0.3s, -o-transform 0.3s;\r\n}\r\n\r\n.input__label-content--kozakura {\r\n\tcolor: #fff;\r\n\tpadding: 0.25em 0;\r\n\t-webkit-transition: -webkit-transform 0.3s;\r\n\ttransition:-webkit-transform 0.3s;\r\n\t-o-transition:transform 0.3s, -o-transform 0.3s;\r\n\ttransition:transform 0.3s;\r\n\ttransition: transform 0.3s, -webkit-transform 0.3s, -o-transform 0.3s;\r\n}\r\n\r\n.input__label-content--kozakura::after {\r\n\tcontent: attr(data-content);\r\n\tposition: absolute;\r\n\tfont-weight: 800;\r\n\ttop: 100%;\r\n\tleft: 0;\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tcolor: #fff;\r\n\tpadding: 0.25em 0;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1px;\r\n\tfont-size: 0.85em;\r\n}\r\n\r\n.graphic--kozakura {\r\n\tfill: rgba(255,255,255,0.3);\r\n\tpointer-events: none;\r\n\ttop: 1em;\r\n\tbottom: 0px;\r\n\theight: 4.5em;\r\n\tz-index: -1;\r\n\t-webkit-transition: -webkit-transform 0.7s, fill 0.7s;\r\n\t-webkit-transition:fill 0.7s, -webkit-transform 0.7s;\r\n\ttransition:fill 0.7s, -webkit-transform 0.7s;\r\n\t-o-transition:transform 0.7s, fill 0.7s, -o-transform 0.7s;\r\n\ttransition:transform 0.7s, fill 0.7s;\r\n\ttransition: transform 0.7s, fill 0.7s, -webkit-transform 0.7s, -o-transform 0.7s;\r\n\t-webkit-transition-timing-function: cubic-bezier(0, 0.25, 0.5, 1);\r\n\t-o-transition-timing-function: cubic-bezier(0, 0.25, 0.5, 1);\r\n\t   transition-timing-function: cubic-bezier(0, 0.25, 0.5, 1);\r\n}\r\n\r\n.input__field--kozakura:focus, .input--filled .input__field--kozakura {\r\n\t-webkit-transition: opacity 0s 0.35s;\r\n\t-o-transition:opacity 0s 0.35s;\r\n\ttransition: opacity 0s 0.35s;\r\n\topacity: 1;\r\n}\r\n\r\n.input__field--kozakura:focus + .input__label--kozakura, .input--filled .input__label--kozakura {\r\n\t-webkit-transition-delay: 0.15s;\r\n\t-o-transition-delay: 0.15s;\r\n\t   transition-delay: 0.15s;\r\n\t-webkit-transform: translate3d(0, 0, 0);\r\n\ttransform: translate3d(0, 0, 0);\r\n}\r\n\r\n.input__field--kozakura:focus + .input__label--kozakura .input__label-content--kozakura, .input--filled .input__label-content--kozakura {\r\n\t-webkit-transition-delay: 0.15s;\r\n\t-o-transition-delay: 0.15s;\r\n\t   transition-delay: 0.15s;\r\n\t-webkit-transform: translate3d(0, -100%, 0);\r\n\ttransform: translate3d(0, -100%, 0);\r\n}\r\n\r\n.input__field--kozakura:focus ~ .graphic--kozakura, .input--filled .graphic--kozakura {\r\n\tfill: rgba(28,20,13,0.7);\r\n\t-webkit-transform: translate3d(-66.6%, 0, 0);\r\n\ttransform: translate3d(-66.6%, 0, 0);\r\n}\r\n", ""]);

  // exports


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\r\n * React Static Boilerplate\r\n * https://github.com/koistya/react-static-boilerplate\r\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\r\n */\r\n\r\n/*\r\n * Scaffolding\r\n * -------------------------------------------------------------------------- */\r\n\r\n/*\r\n * Typography\r\n * -------------------------------------------------------------------------- */\r\n\r\n/*\r\n * Media queries breakpoints\r\n * -------------------------------------------------------------------------- */\r\n\r\nhtml, body {\r\n  margin: 0;\r\n  padding: 0;\r\n  background-color: #f7f7f7;\r\n  color: #333;\r\n  font-family: 'Roboto','Helvetica',sans-serif;\r\n}\r\n\r\n.Layout {\r\n  margin: 0 auto;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .Layout {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .Layout {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .Layout {\r\n    width: 100%;\r\n  }\r\n}\r\n", ""]);

  // exports


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\r\n * React Static Boilerplate\r\n * https://github.com/koistya/react-static-boilerplate\r\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\r\n */\r\n\r\n.Link {\r\n\r\n}\r\n", ""]);

  // exports


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports
  exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Khand);", ""]);
  exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Rajdhani);", ""]);

  // module
  exports.push([module.id, "\r\n/*\r\n * Scaffolding\r\n * -------------------------------------------------------------------------- */\r\n\r\n/*\r\n * Typography\r\n * -------------------------------------------------------------------------- */\r\n\r\n/*\r\n * Media queries breakpoints\r\n * -------------------------------------------------------------------------- */\r\n\r\na:visited {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\n.bg-header {\r\n  min-height: 77px;\r\n  padding: 0;\r\n  margin: 0;\r\n  background: #f6f8f5;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 3000;\r\n  font-weight: normal;\r\n  -webkit-box-shadow: 3px 3px 5px -2px rgba(0,0,0,0.48);\r\n          box-shadow: 3px 3px 5px -2px rgba(0,0,0,0.48);\r\n}\r\n\r\n.bg-header-inner {\r\n  padding-top: 22px;\r\n  padding-left: 50px;\r\n  padding-right: 50px;\r\n  width: auto\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n\r\n  .bg-header-inner{\r\n    padding-left: 25px;\r\n    padding-right: 25px;\r\n    padding-top: 27px;\r\n  }\r\n  }\r\n\r\n.bg-logo {\r\n  font-family: 'Khand', sans-serif;\r\n  float: left;\r\n  width: auto;\r\n  margin: 0 0 23px 0;\r\n  font-size: 18px;\r\n\r\n  letter-spacing: 14px;\r\n  line-height: 1.7em;\r\n  height: auto;\r\n  padding: 2px 0 0;\r\n}\r\n\r\n.bg-logo a {\r\n  text-align: center;\r\n  padding-top: 0;\r\n  width: 100%;\r\n  text-transform: uppercase;\r\n  text-decoration: none;\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n\r\n  .bg-logo{\r\n    font-size: 12px;\r\n  }\r\n  }\r\n\r\n.bg-navigation-wrapper {\r\n  display: block;\r\n  float: right;\r\n  clear: none;\r\n}\r\n.bg-navigation-toggle {\r\n  cursor: pointer;\r\n  font-family: 'Rajdhani', sans-serif;\r\n  font-size: 14px;\r\n  line-height: 1.7em;\r\n  padding: 0 0 10px;\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n  -webkit-transition: all 0.4s ease;\r\n  -o-transition: all 0.4s ease;\r\n  transition: all 0.4s ease;\r\n  float: right\r\n}\r\n@media screen and (min-width: 768px) {\r\n\r\n  .bg-navigation-toggle{\r\n    display: none;\r\n  }\r\n  }\r\n.bg-navigation {\r\n  padding: 0;\r\n  margin: 0;\r\n  list-style: none;\r\n}\r\n.bg-navigation.open {}\r\n.bg-navigation.closed {}\r\n@media screen and (max-width: 768px) {\r\n\r\n  .bg-navigation.open{\r\n    display: block;\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    opacity: 0.9;\r\n    z-index: 100;\r\n    background-color: white;\r\n    text-align: center;\r\n    margin-top: 77px;\r\n    -webkit-transition: all 0.4s ease;\r\n    -o-transition: all 0.4s ease;\r\n    transition: all 0.4s ease;\r\n  }\r\n\r\n  .bg-navigation.open .bg-navigation-item{\r\n    display: block;\r\n    width: 100%;\r\n    margin-top: 20px;\r\n    margin-left: 0px;\r\n  }\r\n    }\r\n@media screen and (max-width: 768px) {\r\n\r\n  .bg-navigation.closed{\r\n    -webkit-transition: all 0.1s ease;\r\n    -o-transition: all 0.1s ease;\r\n    transition: all 0.1s ease;\r\n    width: 0px;\r\n    opacity: 0;\r\n  }\r\n    }\r\n\r\n.bg-navigation-item {\r\n  margin: 0 0 0 26px;\r\n  float: left;\r\n  display: inline;\r\n}\r\n\r\n.bg-navigation-link {\r\n  font-family: 'Rajdhani', sans-serif;\r\n  font-size: 14px;\r\n  line-height: 1.7em;\r\n  padding: 0 0 10px;\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n  -webkit-transition: all 0.4s ease;\r\n  -o-transition: all 0.4s ease;\r\n  transition: all 0.4s ease;\r\n}\r\n\r\n.bg-navigation-link:hover {\r\n  border-bottom: 2px solid black;\r\n  -webkit-transition: all 0.2s ease;\r\n  -o-transition: all 0.2s ease;\r\n  transition: all 0.2s ease;\r\n}\r\n", ""]);

  // exports


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/*@import \"../node_modules/react-image-gallery/src/ImageGallery.scss\";*/\r\n\r\n.floor {\r\n  position: fixed;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 60px;\r\n  background-color: black;\r\n  z-index: 999;\r\n}\r\n\r\n.floor .prev, .floor .next {\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  cursor: pointer;\r\n  font-size: 50px;\r\n  line-height: 60px;\r\n  display: inline-block;\r\n  margin: 0px 30px 0px 30px;\r\n}\r\n\r\n.floor .prev:hover, .floor .next:hover {\r\n  color: white;\r\n}\r\n\r\n\r\n.bg-gallery-wrapper {\r\n  padding-top: 120px;\r\n  text-align: center;\r\n  position: absolute;\r\n  width: 100%;\r\n  background-color: white;\r\n  height: 100%;\r\n}\r\n\r\n.image-gallery {\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n\r\n}\r\n\r\n.image-gallery-content {\r\n  position: relative;\r\n  height: 100%;\r\n  margin: auto;\r\n  background-color: white;\r\n\r\n}\r\n\r\n.image-gallery-content .image-gallery-left-nav, .image-gallery-content .image-gallery-right-nav {\r\n  color: #fff;\r\n  cursor: pointer;\r\n  font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\r\n  font-size: 6em;\r\n  line-height: 0;\r\n  position: fixed;\r\n  text-shadow: 0 2px 2px #222;\r\n  bottom: 60px;\r\n  -webkit-transition: all .2s ease-out;\r\n  -o-transition: all .2s ease-out;\r\n  transition: all .2s ease-out;\r\n  z-index: 2\r\n}\r\n\r\n.image-gallery-content .image-gallery-left-nav {\r\n  left: 30%;\r\n}\r\n\r\n.image-gallery-content .image-gallery-left-nav:before {\r\n  content: '\\2039';\r\n  padding: 50px 15px;\r\n}\r\n\r\n.image-gallery-content .image-gallery-right-nav {\r\n  right: 30%;\r\n}\r\n\r\n.image-gallery-content .image-gallery-right-nav:before {\r\n  content: '\\203A';\r\n  padding: 50px 15px;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n  .image-gallery-content .image-gallery-left-nav, .image-gallery-content .image-gallery-right-nav {\r\n    font-size: 3.4em;\r\n    bottom: 30px;\r\n  }\r\n    }\r\n\r\n@media (min-width: 768px) {\r\n\r\n  .image-gallery-content .image-gallery-left-nav:hover, .image-gallery-content .image-gallery-right-nav:hover {\r\n    color: gray;\r\n  }\r\n    }\r\n\r\n.image-gallery-slides {\r\n  vertical-align: middle;\r\n\r\n  background-color: white;\r\n  line-height: 0;\r\n  overflow: hidden;\r\n  position: relative;\r\n  white-space: nowrap;\r\n}\r\n\r\n.wide {\r\n}\r\n\r\n@media screen and (max-width: 550px) {\r\n\r\n  .wide img {\r\n    margin-top: 30%;\r\n  }\r\n  }\r\n\r\n.image-gallery-slide {\r\n  height: 420px;\r\n  padding-top: 15px;\r\n  left: 0;\r\n  opacity: 0;\r\n  position: absolute;\r\n  top: 0;\r\n  -webkit-transition: all .45s ease-out;\r\n  -o-transition: all .45s ease-out;\r\n  transition: all .45s ease-out;\r\n  width: 100%;\r\n}\r\n\r\n.image-gallery-slide.left {\r\n  -webkit-transform: translate3d(-100%, 0, 0);\r\n          transform: translate3d(-100%, 0, 0);\r\n}\r\n\r\n.image-gallery-slide.center {\r\n  opacity: 1;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n.image-gallery-slide.right {\r\n  -webkit-transform: translate3d(100%, 0, 0);\r\n          transform: translate3d(100%, 0, 0);\r\n}\r\n\r\n.image-gallery-slide img {\r\n  max-height: 350px;\r\n  border: 10px solid #FFF;\r\n  -webkit-box-shadow: 5px 15px 17px 3px rgba(0,0,0,0.6);\r\n          box-shadow: 5px 15px 17px 3px rgba(0,0,0,0.6);\r\n  outline-color: rgba(0,0,0,0.8);\r\n  outline-style: solid;\r\n  outline-width: 10px;\r\n  max-width: 80%;\r\n}\r\n\r\n.image-gallery-slide span {\r\n  background: rgba(34, 34, 34, .6);\r\n  bottom: 70px;\r\n  color: #fff;\r\n  left: 0;\r\n  line-height: 1;\r\n  padding: 10px 20px;\r\n  position: absolute;\r\n  -webkit-transition: all .45s ease-out;\r\n  -o-transition: all .45s ease-out;\r\n  transition: all .45s ease-out;\r\n  white-space: normal\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n  .image-gallery-slide span {\r\n    bottom: 10%;\r\n    font-size: .8em;\r\n    padding: 8px 15px;\r\n  }\r\n    }\r\n\r\n.image-gallery-bullets {\r\n  bottom: 20px;\r\n  position: absolute;\r\n  text-align: center;\r\n  width: 100%;\r\n  z-index: 2;\r\n}\r\n\r\n.image-gallery-bullets .image-gallery-bullets-container {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.image-gallery-bullets .image-gallery-bullet {\r\n  border: 1px solid #fff;\r\n  border-radius: 50%;\r\n  -webkit-box-shadow: 0 1px 0 #222;\r\n          box-shadow: 0 1px 0 #222;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  margin: 0 5px;\r\n  padding: 5px;\r\n}\r\n\r\n.image-gallery-bullets .image-gallery-bullet.active {\r\n  background: #fff;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n  .image-gallery-bullets .image-gallery-bullet {\r\n    margin: 0 3px;\r\n    padding: 3px;\r\n  }\r\n    }\r\n\r\n.image-gallery-thumbnails {\r\n  background: #fff;\r\n  overflow: hidden;\r\n  padding-top: 10px;\r\n\r\n}\r\n\r\n.image-gallery-thumbnails .image-gallery-thumbnails-container {\r\n  cursor: pointer;\r\n  text-align: center;\r\n  -webkit-transition: all .45s ease-out;\r\n  -o-transition: all .45s ease-out;\r\n  transition: all .45s ease-out;\r\n  white-space: nowrap;\r\n}\r\n\r\n.image-gallery-thumbnail {\r\n  display: inline-block;\r\n  padding-right: 10px;\r\n}\r\n\r\n.image-gallery-thumbnail img {\r\n  border: 4px solid transparent;\r\n  -webkit-transition: border .3s ease-out;\r\n  -o-transition: border .3s ease-out;\r\n  transition: border .3s ease-out;\r\n  vertical-align: middle;\r\n  width: 100px\r\n}\r\n\r\n.image-gallery-thumbnail.active img {\r\n  border: 4px solid #337ab7\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n  .image-gallery-thumbnail img {\r\n    border: 3px solid transparent;\r\n    width: 75px;\r\n  }\r\n    }\r\n\r\n@media (max-width: 768px) {\r\n\r\n  .image-gallery-thumbnail.active img {\r\n    border: 3px solid #337ab7;\r\n  }\r\n      }\r\n\r\n.image-gallery-index {\r\n  background: rgba(34, 34, 34, .6);\r\n  bottom: 0;\r\n  color: #fff;\r\n  line-height: 1;\r\n  padding: 10px 20px;\r\n  position: absolute;\r\n  right: 0;\r\n  z-index: 1;\r\n}\r\n", ""]);

  // exports


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, ".bg-home {\r\n  width: 100%;\r\n  height: 100vh;\r\n  padding-top: 77px;\r\n  background-color: black;\r\n  background: url(" + __webpack_require__(25) + ") no-repeat center;\r\n  -webkit-background-size: cover;\r\n          background-size: cover;\r\n}\r\n\r\n.bg-divider-left {\r\n  width: 100%;\r\n\r\n\r\n}\r\n", ""]);

  // exports


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "63258cb4d2ca56330eaed82b5527472a.jpg";

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "c20151e0612a1a494480c0d874fa5ece.jpg";

/***/ },
/* 26 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 27 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createMemoryHistory");

/***/ },
/* 28 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 29 */
/***/ function(module, exports) {

  module.exports = require("react-dom");

/***/ },
/* 30 */
/***/ function(module, exports) {

  module.exports = require("react-image-gallery");

/***/ }
/******/ ]);