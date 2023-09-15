import { FileContext, Ping_commandContext, Random_commandContext, Reverse_commandContext, Roll_commandContext, } from "../ChatBot/ts/ChatBotParser";
import ChatBotParserBaseVisitor from "../ChatBot/ts/ChatBotParserBaseVisitor";

function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default class extends ChatBotParserBaseVisitor<string, string> {
	override visitFile = (ctx: FileContext) => {
		return (ctx.children ?? [])
			.slice(0, -1)
			.map((node) => this.visit(node))
			.reduce((acc, val) => acc + "," + val);
	};

	override visitPing_command = (ctx: Ping_commandContext) => 'PONG';

	override visitRandom_command = (ctx: Random_commandContext) => {
		const from = parseInt(ctx._from_?.text, 10) || 0;
		const to = parseInt(ctx._to.text, 10) || 0;

		return randomIntFromInterval(from, to).toString();
	};

	override visitRoll_command = (ctx: Roll_commandContext) => {

		const rolls = ctx.roll_die_list()
			.map((node) => {
				const dieCount = parseInt(node._die_count?.text ?? "1", 10);
				const sides = parseInt(node._sides.text, 10);
		
				const rolledValues = Array(dieCount)
					.fill(0)
					.map(() => randomIntFromInterval(1, sides));

				const rollValue = rolledValues.reduce((acc, val) => acc + val);
		
				return {
					label: `${rolledValues.join(" + ")} = ${rollValue}`,
					rollValue,
				};
			});

		if (!rolls.length) {
			return 'no die rolled :(';
		}

		if (rolls.length === 1) {
			return rolls[0].label;
		}

		return `(${rolls.map(({ label, }) => label).join(") + (")}) = ${rolls.reduce((acc, val) => val.rollValue + acc, 0)}`;
	};

	override visitReverse_command = (ctx: Reverse_commandContext) => {
		return [...ctx.REVERSE_TEXT_list()].reverse().join('');
	};

	override defaultResult = () => '';
}
