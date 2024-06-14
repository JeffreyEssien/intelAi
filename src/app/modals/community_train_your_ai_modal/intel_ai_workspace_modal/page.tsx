"use client"

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export type { ModalProps };

export default function IntelAiWorkspaceModal({ isOpen, onClose }: ModalProps) {

    if (!isOpen) return null;

    return(
        <div>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative bg-[#1a1a1a] rounded-2xl p-8 w-96 flex flex-col">
                    <h2 className="text-white text-xl mb-4 text-center">Customize your Ai</h2>
                    <p className="text-center mb-2">Train your Ai in three steps:</p>
                    <div className="text-[#6A6A6A] mb-4">
                        <li className="text-center mb-1 text-[14px]">Provide the necessary details</li>
                        <li className="text-center mb-1 text-[14px]">Let your AI review and offer you feedback</li>
                        <li className="text-center mb-1 text-[14px]">Customize the Ai to suit your community needs</li>
                    </div>
                    <button
                        className="bg-[#FFFFFF] text-black rounded-full px-4 py-2 w-2/3 mx-auto text-[12px]"
                        onClick={onClose}
                    >
                        Get Started with AI Training
                    </button>
                </div>
            </div>
        </div>
    )
}