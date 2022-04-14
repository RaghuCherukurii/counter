// if (typeof jQuery !== 'undefined') {
//     (function ($) {
//         var pluginName = "clickCount",
//             defaults = {
//                 value: 0
//             };

//         function Plugin(element, options) {
//             this.element = element;
//             this.settings = $.extend({}, defaults, options);
//             this._defaults = defaults;
//             this._name = pluginName;
//             this.init();
//         }

//         $.extend(Plugin.prototype, {
//             init: function () {
//                 this.component = React.render(
//                     <Counter value={this.settings.value} />,
//                     this.element
//                 );
//                 return this;
//             },

//             val: function (val) {
//                 if (!arguments.length) {
//                     return this.component.state.counter;
//                 }else{
//                     this.settings.value = val;
//                     this.init();
//                 }
//             }
//         });
//     })(jQuery);

// }

// const React = require('react'),
//     Counter = require('./Counter');

// function RenderCounter(selector) {
//     React.render(
//         <Counter />,
//         document.querySelectorAll(selector)[0]
//     );
// }

// module.exports = RenderCounter;
// window.RenderCounter = RenderCounter;

console.log(jQuery, 'jQuery')

alert("OK")
if (typeof jQuery !== 'undefined') {
    (function ($) {
        var pluginName = "clickCount",
            defaults = {
                value: 0
            };

        function Plugin(element, options) {
            this.element = element;
            this.settings = $.extend({}, defaults, options);
            this._defaults = defaults;
            this._name = pluginName;
            this.init();
        }
     
        $.extend(Plugin.prototype, {
            init: function () {
                this.component = React.render(
                    <Counter value={this.settings.value} />,
                    this.element
                );
                return this;
            },
     
            val: function (val) {
                if (!arguments.length) {
                    return this.component.state.counter;
                }else{
                    this.settings.value = val;
                    this.init();
                }
            }
        });
    })(jQuery);

}