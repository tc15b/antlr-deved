import { FileContext, Ping_commandContext, Random_commandContext, } from "../ChatBot/ts/ChatBotParser";
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

	override defaultResult = () => '';
}
