"use client";
import { createClient } from "@/utils/supabase/client";
import { Chat } from "@prisma/client";
import { useEffect, useRef } from "react";
import { RealtimeChannel } from "@supabase/supabase-js";
interface SupabaseListenerProps {
    onPayload?: (payload: Chat) => void;
    onError?: (error: Error) => void;
    children: React.ReactNode;
}

export default function SupabaseListener({
    onPayload,
    children,
}: SupabaseListenerProps) {
    const supabase = createClient();
    const channelRef = useRef<RealtimeChannel | null>(null);

    useEffect(() => {
        if (channelRef.current) {
            channelRef.current.unsubscribe();
        }

        channelRef.current = supabase
            .channel("custom-insert-channel")
            .on(
                "postgres_changes",
                { event: "*", schema: "public", table: "Chat" },
                (payload) => {
                    // console.log("payload", payload.new);
                    onPayload?.(payload.new as Chat);
                }
            )
            .subscribe();

        return () => {
            channelRef.current?.unsubscribe();
            channelRef.current = null;
        };
    }, [onPayload]);

    return children;
}
