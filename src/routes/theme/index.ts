import type {RequestHandler} from "@sveltejs/kit";

export const PUT: RequestHandler = async ({request}) => {
    const theme = await request.text();
    return {
        headers: {
            'Set-Cookie': `theme=${theme}; SameSite=Strict; HttpOnly; Path=/;`
        }
    }
}