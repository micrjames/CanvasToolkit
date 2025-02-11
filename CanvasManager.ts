export class CanvasManager {
	private canvas: HTMLCanvasElement;
	private _ctx: CanvasRenderingContext2D | null;
	private _boundsRect: DOMRect | null;
	private canvasWidth: number | null;
	private canvasHeight: number | null;

	constructor(container: Element | null, width?: number, height?: number) {
	    this.canvas = document.createElement("canvas");
	    this._ctx = this.canvas.getContext("2d");
	    this.canvas.id = "myCanvas";
	    if(container)
		    container.appendChild(this.canvas);

		this.canvasWidth = null;
		this.canvasHeight = null;
		this.dim = { width, height };
		this._boundsRect = null;
	}
    set dim(dims: {width: number | undefined; height: number | undefined}) {
	    if(dims.width && dims.height) {
		   this.canvasWidth = dims.width;
		   this.canvasHeight = dims.height;
	    } else {
		   this.canvasWidth = window.innerWidth/2;
		   this.canvasHeight = window.innerHeight/2;
	    }
	    this.canvas.width = this.canvasWidth;
		this.canvas.height = this.canvasHeight;
    }

    get ctx(): CanvasRenderingContext2D | null {
	    return this._ctx;
    }
	get boundsRect(): DOMRect | null{
	   this._boundsRect = this.canvas.getBoundingClientRect();
	   return this._boundsRect;
	}
}
