/*-----------------------------------------------------------------------------
| Copyright (c) 2014, Nucleic Development Team.
|
| Distributed under the terms of the Modified BSD License.
|
| The full license is in the file COPYING.txt, distributed with this software.
|----------------------------------------------------------------------------*/
module ewt {

    export class Point {

        constructor(x: number = 0, y: number = 0) {
            this._m_x = x;
            this._m_y = y;
        }

        x(): number {
            return this._m_x;
        }

        setX(x: number): void {
            this._m_x = x;
        }

        y(): number {
            return this._m_y;
        }

        setY(y: number): void {
            this._m_y = y;
        }

        isNull(): boolean {
            return this._m_x == 0 && this._m_y == 0;
        }

        manhattanLength(): number {
            return Math.abs(this._m_x) + Math.abs(this._m_y);
        }

        equals(other: Point): boolean {
            return this._m_x == other._m_x && this._m_y == other._m_y;
        }

        add(other: Point): void {
            this._m_x += other._m_x;
            this._m_y += other._m_y;
        }

        added(other: Point): Point {
            var x = this._m_x + other._m_x;
            var y = this._m_y + other._m_y;
            return new Point(x, y);
        }

        subtract(other: Point): void {
            this._m_x -= other._m_x;
            this._m_y -= other._m_y;
        }

        subtracted(other: Point): Point {
            var x = this._m_x - other._m_x;
            var y = this._m_y - other._m_y;
            return new Point(x, y);
        }

        multiply(factor: number): void {
            this._m_x *= factor;
            this._m_y *= factor;
        }

        multiplied(factor: number): Point {
            var x = this._m_x * factor;
            var y = this._m_y * factor;
            return new Point(x, y);
        }

        divide(factor: number): void {
            this._m_x /= factor;
            this._m_y /= factor;
        }

        divided(factor: number): Point {
            var x = this._m_x / factor;
            var y = this._m_y / factor;
            return new Point(x, y);
        }

        private _m_x: number;
        private _m_y: number;
    }

} // module ewt