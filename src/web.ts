import { WebPlugin } from '@capacitor/core';

import type { iOSSwipeBackPlugin } from './definitions';

export class iOSSwipeBackWeb extends WebPlugin implements iOSSwipeBackPlugin {
  async enable(): Promise<void> {
    return undefined;
  }

  async disable(): Promise<void> {
    return undefined;
  }
}
