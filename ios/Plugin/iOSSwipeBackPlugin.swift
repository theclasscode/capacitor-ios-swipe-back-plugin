import Foundation
import Capacitor

/**
 * iOSSwipeBackPlugin
 * 
 * enable/disable allowsBackForwardNavigationGestures.
 * Boolean value that indicates whether horizontal swipe gestures trigger backward and forward page navigation.
 * https://developer.apple.com/documentation/webkit/wkwebview/1414995-allowsbackforwardnavigationgestu
 * Update of the outdated `capacitor-plugin-ios-swipe-back`: https://github.com/diiiary/capacitor-plugin-ios-swipe-back#readme
 */
@objc(iOSSwipeBackPlugin)
public class iOSSwipeBackPlugin: CAPPlugin {
     @objc func enable(_ call: CAPPluginCall) {
         self.bridge?.webView?.allowsBackForwardNavigationGestures = true;
        call.resolve()
     }

    @objc func disable(_ call: CAPPluginCall) {
        self.bridge?.webView?.allowsBackForwardNavigationGestures = false;
        call.resolve()
    }
}
