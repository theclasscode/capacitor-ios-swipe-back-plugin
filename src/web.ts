import { WebPlugin } from '@capacitor/core';

import type { iOSSwipeBackPlugin } from './definitions';

export class iOSSwipeBackWeb extends WebPlugin implements iOSSwipeBackPlugin {
  async enable(): Promise<void> {
    console.log('ENABLE');
    return undefined;
  }

  async disable(): Promise<void> {
    console.log('DISABLE');
    return undefined;
  }
}
