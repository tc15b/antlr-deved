export function numberToTimepoint(duration: number) {
	const normalizeTime = (time: number) => `${time}`.padStart(2, '0');
	const normalizeMs = (time: number) => `${time * 1000}`.padStart(4, '0').slice(0, 3);
	const milliseconds = ((duration % 1000) / 100);
	const seconds = Math.floor((duration / 1000) % 60);
	const minutes = Math.floor((duration / (1000 * 60)) % 60);
	const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
	
	return `${normalizeTime(hours)}:${normalizeTime(minutes)}:${normalizeTime(seconds)},${normalizeMs(milliseconds)}`;
}

export function timepointToNumber<Type extends (number | string)>([hours, minutes, seconds, miliseconds]: [Type, Type, Type,] | [Type, Type, Type, Type]) {
	let output = typeof miliseconds === 'number' ? miliseconds : parseInt(miliseconds ?? '0', 10) ?? 0;
	output += (seconds as number) * 1000;
	output += (minutes as number) * 60 * 1000;
	output += (hours as number) * 60 * 60 * 1000;
	return output;
}
