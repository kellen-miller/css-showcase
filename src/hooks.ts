import type {GetSession} from '@sveltejs/kit'
import * as cookie from 'cookie';
import type {Theme} from "./lib/stores/theme";

export const getSession: GetSession = ({request, locals}) => {
    const cookies = cookie.parse(request.headers.get('cookie') || '');
    const theme = cookies['theme'] as Theme || null;
    return {theme}
}