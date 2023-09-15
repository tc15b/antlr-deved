import SrtBaseListener from "./ts/SrtBaseListener";
import { Any_numberContext, FileContext, StatementContext, TimestampContext, } from "./ts/SrtParser.js";
import { timepointToNumber, } from "../src/timepoint";

export interface SrtListenResult {
	id: number,
	from: number,
	to: number,
	contents: readonly string[],
};

export default class extends SrtBaseListener {

	public get foundLines() : ReadonlyArray<SrtListenResult> {
		return this.lines;
	}

	private lines: SrtListenResult[] = [];

	override enterFile(ctx: FileContext): void {
		this.lines = [];
	}

	override exitStatement(ctx: StatementContext): void {
		this.lines.push({
			id: this.getNumber(ctx._id),
			from: this.timestampToNumber(ctx._tr._from_),
			to: this.timestampToNumber(ctx._tr._to),
			contents: ctx.line_list().map((line) => line.getText()),
		});
	}

	private timestampToNumber(ctx: TimestampContext) : number {
		return timepointToNumber([
			this.getNumber(ctx._hour),
			parseInt(ctx._minute.text, 10),
			parseInt(ctx._seconds.text, 10),
			this.getNumber(ctx._miliseconds),
		]);
	}

	private getNumber(ctx: Any_numberContext): any {
		const n = parseInt(ctx?.getText(), 10);
		return (isNaN(n) ? 0 : n) ?? 0;
	}
}
