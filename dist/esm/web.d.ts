import { WebPlugin } from '@capacitor/core';
import type { iOSSwipeBackPlugin } from './definitions';
export declare class iOSSwipeBackWeb extends WebPlugin implements iOSSwipeBackPlugin {
    enable(): Promise<void>;
    disable(): Promise<void>;
}
