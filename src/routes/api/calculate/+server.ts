import type { RequestHandler } from './$types';
import { OpenAI } from 'openai';
import { OPENAI_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';

const openai = new OpenAI({ apiKey: OPENAI_KEY });

export const POST: RequestHandler = async ({ request }) => {
	const response: { equation: string } = await request.json();
	const text = response.equation.replaceAll(/[^\d.+\-x/]/g, '');

	const answer = await openai.chat.completions.create({
		messages: [
			{
				role: 'system',
				content:
					"You are a calculator. You get in a mathematical equation and ONLY answers the solution to the equation. You do not under any circumstances answer anything that isn't the answer to the equation and do not explain your solution. Add at max four digits when doing floating points"
			},
			{ role: 'user', content: `Solve the following equation: ${text}` }
		],
		model: 'gpt-3.5-turbo'
	});

	return json({ answer: answer.choices[0].message.content });
};
