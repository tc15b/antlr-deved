import { Any_numberContext, FileContext, LineContext, StatementContext, TimerangeContext, TimestampContext, } from "./ts/SrtParser.js";
import SrtVisitor from "../Srt/ts/SrtBaseVisitor";
import { timepointToNumber, } from "../src/timepoint";

export interface SrtVisitResult {
	id: number,
	from: number,
	to: number,
	contents: readonly string[],
};

export default class extends SrtVisitor<SrtVisitResult[], SrtVisitResult[]> {

	visitFile = (ctx: FileContext) => {
		return this.visitChildren(ctx);
	}

	visitStatement = (ctx: StatementContext): any => {
		return [{
			id: this.visitAny_number(ctx._id),
			...this.visitTimerange(ctx._tr),
			contents: ctx.line_list().map((l) => this.visitLine(l)),
		}];
	}

	visitTimerange = (ctx: TimerangeContext): any => {
		return {
			from: this.visitTimestamp(ctx._from_),
			to: this.visitTimestamp(ctx._to),
		};
	}

	visitTimestamp = (ctx: TimestampContext): any => {
		return timepointToNumber([
			this.visitAny_number(ctx._hour),
			parseInt(ctx._minute.text, 10),
			parseInt(ctx._seconds.text, 10),
			this.visitAny_number(ctx._miliseconds),
		]);
	}

	visitLine = (ctx: LineContext): any => {
		return ctx.getText();
	}

	visitAny_number = (ctx: Any_numberContext): any => {
		const n = parseInt(ctx?.getText(), 10);
		return (isNaN(n) ? 0 : n) ?? 0;
	}

	protected override defaultResult(): SrtVisitResult[] {
		return [];
	}

	protected override aggregateResult(aggregate: SrtVisitResult[], nextResult: SrtVisitResult[]): SrtVisitResult[] {
		return [
			...aggregate ?? [],
			...nextResult ?? [],
		];
	}
}

export class StringVisitor extends SrtVisitor<string> {

	visitFile = (ctx: FileContext) => {
		return `[${this.visitChildren(ctx)}]`;
	}

	visitStatement = (ctx: StatementContext) => {
		return JSON.stringify({
			id: parseInt(this.visitAny_number(ctx._id), 10),
			...JSON.parse(this.visitTimerange(ctx._tr)),
			contents: ctx.line_list().map((l) => this.visitLine(l)),
		});
	}

	visitTimerange = (ctx: TimerangeContext) => {
		return JSON.stringify({
			from: parseInt(this.visitTimestamp(ctx._from_)),
			to: parseInt(this.visitTimestamp(ctx._to)),
		});
	}

	visitTimestamp = (ctx: TimestampContext) => {
		return timepointToNumber([
			parseInt(this.visitAny_number(ctx._hour), 10),
			parseInt(ctx._minute.text, 10),
			parseInt(ctx._seconds.text, 10),
			parseInt(this.visitAny_number(ctx._miliseconds), 10),
		]).toString();
	}

	visitLine = (ctx: LineContext) => {
		return ctx.getText();
	}

	visitAny_number = (ctx: Any_numberContext) => {
		const n = parseInt(ctx?.getText(), 10);
		return ((isNaN(n) ? 0 : n) ?? 0).toString();
	}
}
