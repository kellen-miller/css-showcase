import type {RequestHandler} from "@sveltejs/kit";

export const PUT: RequestHandler = async ({request}) => {
    const theme = await request.text();
    return new Response('', {
        headers: {
            'Set-Cookie': `theme=${theme}; SameSite=Strict; HttpOnly; Path=/;`
        }
    });
}