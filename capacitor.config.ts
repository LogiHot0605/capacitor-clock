import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.CapacitorClock.app',
  appName: 'Capacitor Clock',
  webDir: "dist",
  android: {
    buildOptions: {
      signingType: "apksigner",
    },
  },
};

export default config;
