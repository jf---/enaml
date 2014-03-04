/*-----------------------------------------------------------------------------
| Copyright (c) 2014, Nucleic Development Team.
|
| Distributed under the terms of the Modified BSD License.
|
| The full license is in the file COPYING.txt, distributed with this software.
|----------------------------------------------------------------------------*/
var ewt;
(function (ewt) {
    var Point = (function () {
        function Point(x, y) {
            if (typeof x === "undefined") { x = 0; }
            if (typeof y === "undefined") { y = 0; }
            this._m_x = x;
            this._m_y = y;
        }
        Point.prototype.x = function () {
            return this._m_x;
        };

        Point.prototype.setX = function (x) {
            this._m_x = x;
        };

        Point.prototype.y = function () {
            return this._m_y;
        };

        Point.prototype.setY = function (y) {
            this._m_y = y;
        };

        Point.prototype.isNull = function () {
            return this._m_x == 0 && this._m_y == 0;
        };

        Point.prototype.manhattanLength = function () {
            return Math.abs(this._m_x) + Math.abs(this._m_y);
        };

        Point.prototype.equals = function (other) {
            return this._m_x == other._m_x && this._m_y == other._m_y;
        };

        Point.prototype.add = function (other) {
            this._m_x += other._m_x;
            this._m_y += other._m_y;
        };

        Point.prototype.added = function (other) {
            var x = this._m_x + other._m_x;
            var y = this._m_y + other._m_y;
            return new Point(x, y);
        };

        Point.prototype.subtract = function (other) {
            this._m_x -= other._m_x;
            this._m_y -= other._m_y;
        };

        Point.prototype.subtracted = function (other) {
            var x = this._m_x - other._m_x;
            var y = this._m_y - other._m_y;
            return new Point(x, y);
        };

        Point.prototype.multiply = function (factor) {
            this._m_x *= factor;
            this._m_y *= factor;
        };

        Point.prototype.multiplied = function (factor) {
            var x = this._m_x * factor;
            var y = this._m_y * factor;
            return new Point(x, y);
        };

        Point.prototype.divide = function (factor) {
            this._m_x /= factor;
            this._m_y /= factor;
        };

        Point.prototype.divided = function (factor) {
            var x = this._m_x / factor;
            var y = this._m_y / factor;
            return new Point(x, y);
        };
        return Point;
    })();
    ewt.Point = Point;
})(ewt || (ewt = {})); // module ewt
//# sourceMappingURL=point.js.map
