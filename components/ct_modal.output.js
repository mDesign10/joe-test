"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {

  /**
   * ShadowModal component
   * @container
   * @attribute {string=default|alternative} style - the style
   */
  var ShadowModal = function (_HTMLElement) {
    _inherits(ShadowModal, _HTMLElement);

    function ShadowModal(self) {
      var _this, _ret;

      _classCallCheck(this, ShadowModal);

      self = (_this = _possibleConstructorReturn(this, (ShadowModal.__proto__ || Object.getPrototypeOf(ShadowModal)).call(this, self)), _this);
      self.isOpen = false;
      return _ret = self, _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ShadowModal, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        this._render();
      }
    }, {
      key: "_render",
      value: function _render() {

        var css = this.getAttribute("style") === "alternative" ? "background-color: #fff; padding: 0;" : "border: 1px solid #ccc; background-color: #fff; padding: 20px 30px;";

        var html = "\n        <style>\n          .modal-bg { display: none; justify-content: center; align-items: center; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); z-index: 9999; }\n          .modal-bg.open { display: flex; }\n          .modal-box { " + css + " }\n        </style>\n        <div class=\"modal-bg\">\n          <div class=\"modal-box\">\n            <slot></slot>\n          </div>\n        </div>\n\t  ";

        this.$root = this.attachShadow({ mode: 'open' });
        this.$root.innerHTML = html;
      }

      /**
       * Open the modal
       */

    }, {
      key: "open",
      value: function open() {
        var modalBg = this.$root.querySelector('.modal-bg');
        modalBg.classList.add('open');
        this.isOpen = true;
      }

      /**
       * Close the modal
       */

    }, {
      key: "close",
      value: function close() {
        var modalBg = this.$root.querySelector('.modal-bg');
        modalBg.classList.remove('open');
        this.isOpen = false;
      }

      /**
       * Toggle the modal
       */

    }, {
      key: "toggle",
      value: function toggle() {
        if (this.isOpen) this.close();else this.open();
      }
    }]);

    return ShadowModal;
  }(HTMLElement);

  customElements.define('shadow-modal', ShadowModal);
})();