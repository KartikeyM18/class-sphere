"use client"
import {
    CallControls,
    CallingState,
    SpeakerLayout,
    StreamCall,
    StreamTheme,
    StreamVideo,
    StreamVideoClient,
    useCallStateHooks,
    User,
} from '@stream-io/video-react-sdk';

import '@stream-io/video-react-sdk/dist/css/styles.css';
import { redirect } from 'next/navigation';
import Loader from './Loader';

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY as string;
const token = process.env.NEXT_PUBLIC_STREAM_TOKEN as string;
const userId = process.env.NEXT_PUBLIC_STREAM_USER_ID as string;
const callId = process.env.NEXT_PUBLIC_STREAM_CALL_ID as string;

const user: User = {
    id: userId,
    name: 'User',
};

const client = new StreamVideoClient({ apiKey, user, token });
const call = client.call('default', callId);
call.join({ create: true });

export default function App() {
    return (
        <StreamVideo client={client}>
            <StreamCall call={call}>
                <MyUILayout />
            </StreamCall>
        </StreamVideo>
    );
}

export const MyUILayout = () => {
    const { useCallCallingState } = useCallStateHooks();
    const callingState = useCallCallingState();

    if (callingState !== CallingState.JOINED) {
        return <Loader />;
    }

    return (
        <StreamTheme>
            <SpeakerLayout participantsBarPosition='bottom' />
            <CallControls onLeave={() => redirect('/')} />
        </StreamTheme>
    );
};