/*-----------------------------------------------------------------------------
| Copyright (c) 2014, Nucleic Development Team.
|
| Distributed under the terms of the Modified BSD License.
|
| The full license is in the file COPYING.txt, distributed with this software.
|----------------------------------------------------------------------------*/
var ewt;
(function (ewt) {
    var Size = (function () {
        function Size(width, height) {
            if (typeof width === "undefined") { width = -1; }
            if (typeof height === "undefined") { height = -1; }
            this._m_width = width;
            this._m_height = height;
        }
        Size.prototype.width = function () {
            return this._m_width;
        };

        Size.prototype.setWidth = function (width) {
            this._m_width = width;
        };

        Size.prototype.height = function () {
            return this._m_height;
        };

        Size.prototype.setHeight = function (height) {
            this._m_height = height;
        };

        Size.prototype.isEmpty = function () {
            return this._m_width == 0 || this._m_height == 0;
        };

        Size.prototype.isNull = function () {
            return this._m_width == 0 && this._m_height == 0;
        };

        Size.prototype.isValid = function () {
            return this._m_width >= 0 && this._m_height >= 0;
        };

        Size.prototype.boundedTo = function (other) {
            var width = Math.min(this._m_width, other._m_width);
            var height = Math.min(this._m_height, other._m_height);
            return new Size(width, height);
        };

        Size.prototype.expandedTo = function (other) {
            var width = Math.max(this._m_width, other._m_width);
            var height = Math.max(this._m_height, other._m_height);
            return new Size(width, height);
        };

        Size.prototype.transpose = function () {
            var width = this._m_width;
            this._m_width = this._m_height;
            this._m_height = width;
        };

        Size.prototype.transposed = function () {
            return new Size(this._m_height, this._m_width);
        };

        Size.prototype.equals = function (other) {
            return this._m_width == other._m_width && this._m_height == other._m_height;
        };

        Size.prototype.add = function (other) {
            this._m_width += other._m_width;
            this._m_height += other._m_height;
        };

        Size.prototype.added = function (other) {
            var width = this._m_width + other._m_width;
            var height = this._m_height + other._m_height;
            return new Size(width, height);
        };

        Size.prototype.subtract = function (other) {
            this._m_width -= other._m_width;
            this._m_height -= other._m_height;
        };

        Size.prototype.subtracted = function (other) {
            var width = this._m_width - other._m_width;
            var height = this._m_height - other._m_height;
            return new Size(width, height);
        };

        Size.prototype.multiply = function (factor) {
            this._m_width *= factor;
            this._m_height *= factor;
        };

        Size.prototype.multiplied = function (factor) {
            var width = this._m_width * factor;
            var height = this._m_height * factor;
            return new Size(width, height);
        };

        Size.prototype.divide = function (factor) {
            this._m_width /= factor;
            this._m_height /= factor;
        };

        Size.prototype.divided = function (factor) {
            var width = this._m_width / factor;
            var height = this._m_height / factor;
            return new Size(width, height);
        };
        return Size;
    })();
    ewt.Size = Size;
})(ewt || (ewt = {})); // module ewt
//# sourceMappingURL=size.js.map
