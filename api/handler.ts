import { VercelRequest, VercelResponse } from '@vercel/node';

export default (request: VercelRequest, response: VercelResponse) => {
	response.status(200).json(request.headers);
};
