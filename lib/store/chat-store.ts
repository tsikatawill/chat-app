import { Chat } from "@prisma/client";
import { create } from "zustand";

interface ChatStore {
    pendingChats: Chat[];
    addPendingChat: (message: string) => void;
    clearPendingChats: () => void;
}

const useChatStore = create<ChatStore>((set) => ({
    pendingChats: [],
    addPendingChat: (message: string) =>
        set((state) => ({
            pendingChats: [
                ...state.pendingChats,
                {
                    id: crypto.randomUUID(),
                    message,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
        })),
    clearPendingChats: () => set({ pendingChats: [] }),
}));

export default useChatStore;
