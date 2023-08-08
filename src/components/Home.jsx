import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function randomID(len) {
    let result = '';
    if (result) return result;
    var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
        maxPos = chars.length,
        i;
    len = len || 5;
    for (i = 0; i < len; i++) {
        result += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return result;
}

export function getUrlParams(
    url = window.location.href
) {
    let urlStr = url.split('?')[1];
    return new URLSearchParams(urlStr);
}


export default function Home() {
    const roomID = getUrlParams().get('roomID') || randomID(5);
    let myMeeting = async (element) => {
   
        const appID = parseInt(import.meta.env.VITE_APP_ID);
        const serverSecret = import.meta.env.VITE_SERVER_SECRET;
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, randomID(5), randomID(5));
  
     
        const zp = ZegoUIKitPrebuilt.create(kitToken);
    
        zp.joinRoom({
          container: element,
          sharedLinks: [
            {
              name: 'Personal link',
              url:
               window.location.protocol + '//' + 
               window.location.host + window.location.pathname +
                '?roomID=' +
                roomID,
            },
          ],
          scenario: {
            mode: ZegoUIKitPrebuilt.GroupCall,
          },
        });
    };

    return (
        <div
        className="myCallContainer"
        ref={myMeeting}
        style={{ width: '100vw', height: '100vh' }}
      ></div>
    )
}

