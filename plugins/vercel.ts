import { inject, type BeforeSendEvent } from '@vercel/analytics';

export default defineNuxtPlugin(() => {
  inject({
    beforeSend: (event: BeforeSendEvent) => {
      const params = new URLSearchParams(window.location.search);
      if (params.get('noTrack')) {
        return null;
      }
      return event
    }
  });
});
