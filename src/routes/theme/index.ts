import type {RequestHandler} from "@sveltejs/kit";

export const PUT: RequestHandler = async ({request}) => {
    const theme = await request.text();
    console.log(theme);
    return {
        headers: {
            'Set-Cookie': `theme=${theme}; SameSite=Strict; HttpOnly; Path=/;`
        }
    }
}