import {App, IonicApp, Platform, ActionSheet} from 'ionic/ionic';
import {Page, Config, Events} from 'ionic/ionic';
import {ActionSheetPage} from './actionSheet/actionSheet';
import * as helpers from './helpers';


@App({
  template: '<ion-nav id="nav" [root]="rootPage"></ion-nav><ion-overlay></ion-overlay>',
  directives: [helpers.AndroidAttribute],
})
class DemoApp {

  rootPage: any;

  constructor(app: IonicApp, platform: Platform) {
    this.app = app;
    this.platform = platform;

    this.platform.ready().then( () => {
      window.addEventListener('message', (e) => {
        zone.run(() => {
          if (e.data) {
            var data = JSON.parse(e.data);
            if (data.hash) {
              this.nextPage = helpers.getPageFor(data.hash.replace('#', ''));
            } else {
              this.nextPage = ActionSheetPage;
            }
            let nav = this.app.getComponent('nav');
            helpers.debounce(nav.setRoot(this.nextPage), 500, true);
          }
        });
      });
      window.parent.postMessage(this.platform.is('ios')? "ios":"android", "*");
    });

  }
}