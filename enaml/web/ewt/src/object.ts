/*-----------------------------------------------------------------------------
| Copyright (c) 2014, Nucleic Development Team.
|
| Distributed under the terms of the Modified BSD License.
|
| The full license is in the file COPYING.txt, distributed with this software.
|----------------------------------------------------------------------------*/
module ewt {
    
    export class Object {

        constructor(parent: Object = null) {
            this.setParent(parent);
        }

        parent(): Object {
            return this._m_parent;
        }

        setParent(parent: Object): void {
            if (this._m_parent === parent) {
                return;
            }
            this._m_parent = parent;
        }

        children(): Object[] {
            if (this._m_children !== null) {
                return this._m_children.slice();
            }
            return [];
        }

        private _m_parent: Object = null;
        private _m_children: Object[] = null;
    }

} // module ewt