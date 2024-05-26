/**
 * @fileoverview This file contains the Svelte store definitions for messages and isConnected.
 * @module stores/store
 */

import { writable } from 'svelte/store';

/**
 * A writable Svelte store that holds an array of messages.
 * @type {import('svelte/store').Writable<Array<any>>}
 */
export const messages = writable([]);

/**
 * A writable Svelte store that holds the connection status.
 * @type {import('svelte/store').Writable<boolean>}
 */
export const isConnected = writable(false);
// varaible for tracking if current mode is keys or not (false would mean that it's in joystick mode)
export const isKeymode = writable(false);

// A dummy variable that triggers a re-render of the joystick component so it can scale with the screeen size automaticly

export const dummyRefresher = writable(0);