'use client'

import { DeviceSettings, useCall, VideoPreview } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'
import { Input } from './input'
import { Button } from './button'

const MeetingSetup = ({setisSetupComplete }: {
    setisSetupComplete: (value: boolean) => void}) => {
    const [isMicCamToggledOn, setIsMicCamToggledOn] = useState(false)

    const call = useCall(); // Call the hook correctly

    if(!call) {
        throw new Error('usecall must be used within StreamCall component')
    }

    useEffect(() => {
        if (call) {
            if (isMicCamToggledOn) {
                call.camera?.disable();
                call.microphone?.disable();
            } else {
                call.camera?.enable();
                call.microphone?.enable();
            }
        }
    }, [isMicCamToggledOn, call?.camera, call?.microphone]); // Depend on call directly

    return (
        <div className='flex h-screen w-full flex-col items-center
            justify-center gap-3 text-white'>
            <h1 className='text-2xl font-bold'>Setup</h1>
            <VideoPreview />
            <div className='flex h-16 items-center justify-center gap-3'>
                <label className='flex items-center justify-center gap-2 font-medium'>
                    <Input 
                        type='checkbox'
                        checked={isMicCamToggledOn}
                        onChange={(e) => setIsMicCamToggledOn(e.target.checked)}
                    />
                    Join with visuals off
                </label>
                <DeviceSettings />
            </div>
            <Button className='rounded-md bg-green-500 px-4 py-2.5' onClick={() => {
                call.join();

                setisSetupComplete(true);
            }}>
                Join Class
            </Button>
        </div>
    )
}

export default MeetingSetup
