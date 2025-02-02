'use client'
import Loader from '@/components/ui/Loader';
import MeetingRoom from '@/components/ui/MeetingRoom';
import MeetingSetup from '@/components/ui/MeetingSetup';
import { useGetCallByid } from '@/hooks/useGetCallByid';
import { useUser } from '@clerk/nextjs';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import { useState } from 'react';

const Meeting = ({ params: { id } }: { params: { id: string } }) => {
  const { isLoaded } = useUser(); // Removed 'user' since it's unused
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const { call, isCallLoading } = useGetCallByid(id);

  if (!isLoaded || isCallLoading) return <Loader />;

  return (
    <main className='h-screen w-full'>
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup setisSetupComplete={setIsSetupComplete} />
          ) : (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default Meeting;
