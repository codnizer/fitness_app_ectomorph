import { AdMob, BannerAdOptions, BannerAdSize, BannerAdPosition, BannerAdPluginEvents, AdMobBannerSize } from '@capacitor-community/admob';

export async function banner(): Promise<void> {
    AdMob.addListener(BannerAdPluginEvents.Loaded, () => {
      // Subscribe Banner Event Listener
    });

    AdMob.addListener(BannerAdPluginEvents.SizeChanged, (size: AdMobBannerSize) => {
      // Subscribe Change Banner Size
    });

    const options: BannerAdOptions = {
      adId: 'ca-app-pub-5397928283000872/8763402405',
      // adSize: BannerAdSize.FULL_BANNER,
      adSize: BannerAdSize.ADAPTIVE_BANNER,
      
      position: BannerAdPosition.BOTTOM_CENTER,
      margin: 0,
    // isTesting: true
      // npa: true
    };
    AdMob.showBanner(options);
}

export async function hideBanner():Promise<void> {
    AdMob.hideBanner();
}


export async function resumeBanner():Promise<void> {
    AdMob.resumeBanner();
}