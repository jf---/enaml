/*-----------------------------------------------------------------------------
| Copyright (c) 2014, Nucleic Development Team.
|
| Distributed under the terms of the Modified BSD License.
|
| The full license is in the file COPYING.txt, distributed with this software.
|----------------------------------------------------------------------------*/
module ewt {

    export class Size {

        constructor(width: number = -1, height: number = -1) {
            this._m_width = width;
            this._m_height = height;
        }

        width(): number {
            return this._m_width;
        }

        setWidth(width: number): void {
            this._m_width = width;
        }

        height(): number {
            return this._m_height;
        }

        setHeight(height: number): void {
            this._m_height = height;
        }

        isEmpty(): boolean {
            return this._m_width == 0 || this._m_height == 0;
        }

        isNull(): boolean {
            return this._m_width == 0 && this._m_height == 0;
        }

        isValid(): boolean {
            return this._m_width >= 0 && this._m_height >= 0;
        }

        boundedTo(other: Size): Size {
            var width = Math.min(this._m_width, other._m_width);
            var height = Math.min(this._m_height, other._m_height);
            return new Size(width, height);
        }

        expandedTo(other: Size): Size {
            var width = Math.max(this._m_width, other._m_width);
            var height = Math.max(this._m_height, other._m_height);
            return new Size(width, height);
        }

        transpose(): void {
            var width = this._m_width;
            this._m_width = this._m_height;
            this._m_height = width;
        }

        transposed(): Size {
            return new Size(this._m_height, this._m_width);
        }

        equals(other: Size): boolean {
            return this._m_width == other._m_width && this._m_height == other._m_height;
        }

        add(other: Size): void {
            this._m_width += other._m_width;
            this._m_height += other._m_height;
        }

        added(other: Size): Size {
            var width = this._m_width + other._m_width;
            var height = this._m_height + other._m_height;
            return new Size(width, height);
        }

        subtract(other: Size): void {
            this._m_width -= other._m_width;
            this._m_height -= other._m_height;
        }

        subtracted(other: Size): Size {
            var width = this._m_width - other._m_width;
            var height = this._m_height - other._m_height;
            return new Size(width, height);
        }

        multiply(factor: number): void {
            this._m_width *= factor;
            this._m_height *= factor;
        }

        multiplied(factor: number): Size {
            var width = this._m_width * factor;
            var height = this._m_height * factor;
            return new Size(width, height);
        }

        divide(factor: number): void {
            this._m_width /= factor;
            this._m_height /= factor;
        }

        divided(factor: number): Size {
            var width = this._m_width / factor;
            var height = this._m_height / factor;
            return new Size(width, height);
        }

        private _m_width: number;
        private _m_height: number;
    }

} // module ewt