/*-----------------------------------------------------------------------------
| Copyright (c) 2014, Nucleic Development Team.
|
| Distributed under the terms of the Modified BSD License.
|
| The full license is in the file COPYING.txt, distributed with this software.
|----------------------------------------------------------------------------*/
var ewt;
(function (ewt) {
    var Object = (function () {
        function Object(parent) {
            if (typeof parent === "undefined") { parent = null; }
            this._m_parent = null;
            this._m_children = null;
            this.setParent(parent);
        }
        Object.prototype.parent = function () {
            return this._m_parent;
        };

        Object.prototype.setParent = function (parent) {
            if (this._m_parent === parent) {
                return;
            }
            this._m_parent = parent;
        };

        Object.prototype.children = function () {
            if (this._m_children !== null) {
                return this._m_children.slice();
            }
            return [];
        };
        return Object;
    })();
    ewt.Object = Object;
})(ewt || (ewt = {})); // module ewt
//# sourceMappingURL=object.js.map
