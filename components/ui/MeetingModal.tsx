import React, { ReactNode } from 'react';
import {
    Dialog,
    DialogContent
} from "@/components/ui/dialog";
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from './button';

interface MeetingModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    className?: string;
    children?: ReactNode;
    handleClick?: () => void;
    buttonText?: string;
    image?: string;
    buttonIcon?: string;
}

const MeetingModal = ({ 
    isOpen, 
    onClose, 
    title, 
    className, 
    children, 
    handleClick, 
    buttonText, 
    image, 
    buttonIcon
}: MeetingModalProps ) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}> 
        <DialogContent className="flex w-full max-w-[530px] flex-col gap-6 border-none bg-dark-1 px-6 py-9 text-white">
            <div className="flex flex-col items-center gap-4">
                {image && (
                    <Image 
                        src={image}
                        alt="image"
                        width={72}
                        height={72}
                    />
                )}
                <h1 className={cn('text-3xl font-bold leading-[42px]', className)}>
                    {title}
                </h1>

                {children}

                <Button 
                    className="bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0 flex items-center gap-2"
                    onClick={handleClick}
                >
                    {buttonIcon && (
                        <Image 
                            src={buttonIcon}
                            alt="button icon"
                            width={13}
                            height={13}
                        />
                    )}
                    {buttonText || 'Schedule Class'}
                </Button>
            </div>
        </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;
