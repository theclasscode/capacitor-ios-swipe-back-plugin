export interface iOSSwipeBackPlugin {
  /**
   * Enable swipe back gestures.
   */
  enable(): Promise<void>;

  /**
   * Disable swipe back gestures.
   */
  disable(): Promise<void>;
}
