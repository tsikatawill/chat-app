export const SUPABASE_URL = assertValue(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    "Missing NEXT_PUBLIC_SUPABASE_URL"
);

export const SUPABASE_ANON_KEY = assertValue(
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    "Missing NEXT_PUBLIC_SUPABASE_ANON_KEY"
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
    if (v === undefined) {
        throw new Error(errorMessage);
    }

    return v;
}
