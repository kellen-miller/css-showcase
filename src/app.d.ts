// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
import {Theme} from "$lib/stores/theme";

declare global {
    namespace App {
        interface Locals {
            theme: Theme | null;
        }

        // interface Locals {}
        // interface Platform {}
        // interface PrivateEnv {}
        // interface PublicEnv {}
        interface Session {
            theme: Theme | null;
        }

        // interface Stuff {}
    }
}
