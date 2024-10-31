import { AdMob, RewardAdOptions, AdLoadInfo, RewardAdPluginEvents, AdMobRewardItem } from '@capacitor-community/admob';

export async function rewardVideo(): Promise<boolean | null> {
  return new Promise(async (resolve, reject) => {
    let hasWatchedVideo = false;

    AdMob.addListener(RewardAdPluginEvents.Loaded, (info: AdLoadInfo) => {
      // console.log('Reward video ad loaded');
    });

    AdMob.addListener(RewardAdPluginEvents.Rewarded, (rewardItem: AdMobRewardItem) => {
      hasWatchedVideo = true;
      // console.log('User rewarded:', rewardItem);
    });

    AdMob.addListener(RewardAdPluginEvents.Dismissed, () => {
      if (hasWatchedVideo) {
        // console.log('User watched the video completely and has been rewarded');
        resolve(true);
      } else {
        // console.log('User did not watch the video completely');
        resolve(false);
      }
    });

    const options: RewardAdOptions = {
      adId: 'ca-app-pub-5397928283000872/3895883179',
      isTesting: true,
    };

    try {
      await AdMob.prepareRewardVideoAd(options);
      await AdMob.showRewardVideoAd();
    } catch (error) {
      console.error('Error showing reward video ad:', error);
      resolve(null);  // Indicating no ad was ready
    }
  });
}
