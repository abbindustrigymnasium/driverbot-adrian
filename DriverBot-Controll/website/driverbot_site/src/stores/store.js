/**
 * @fileoverview This file contains the Svelte store definitions for messages and isConnected.
 * @module stores/store
 */

import { browser } from '$app/environment';
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

// Store which tracks if car should be moving or not which is used for stats
export const isMoving = writable(false);
//checks if accessing stores from a browser
const isBrowser = typeof window !== "undefined";
/**
 * @param {string} storeKey
 * @param {any} startValue
 * A functions which connects a store to a local storage key
 * if available and sets a initial value for that store
 */
function createInitialStoreValue(storeKey, startValue)
{   
   if(isBrowser)
    {
        const localStoreValue = localStorage.getItem(storeKey);
        const storeInitValue = localStoreValue !== null ? parseInt(localStoreValue, 10): startValue;
    
        const store = writable(storeInitValue);
        store.subscribe(value => {
            localStorage.setItem(storeKey, value);
        })
        return store;
    }
}
//Tracks distance car has driven
export const DriveDistance = createInitialStoreValue("DriveDistance", 0.0);
//Tracks total time car has been moving
export const DriveTime = createInitialStoreValue("DriveTime", 0);
//Tracks successful connections to a mqtt broker
export const timesConnected = createInitialStoreValue("timesConnected", 0);