"use client";

import { useState, useRef, KeyboardEvent, ClipboardEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const CODE_LENGTH = 6;

export default function VerifyEmailPage() {
  const router = useRouter();
  const [code, setCode] = useState<string[]>(Array(CODE_LENGTH).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const digit = value.slice(-1);
    const newCode = [...code];
    newCode[index] = digit;
    setCode(newCode);
    if (digit && index < CODE_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, CODE_LENGTH);
    if (!pasted) return;
    const newCode = [...code];
    pasted.split("").forEach((char, i) => {
      if (i < CODE_LENGTH) newCode[i] = char;
    });
    setCode(newCode);
    const nextEmptyIndex = newCode.findIndex((c) => !c);
    const focusTarget =
      nextEmptyIndex === -1 ? CODE_LENGTH - 1 : nextEmptyIndex;
    inputRefs.current[focusTarget]?.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to home or dashboard after verification
    router.push("/");
  };

  const handleResend = () => {
    setCode(Array(CODE_LENGTH).fill(""));
    inputRefs.current[0]?.focus();
  };

  return (
    <div className="flex min-h-screen bg-black text-white font-sans">
      {/* Left Panel */}
      <div className="relative hidden lg:flex lg:w-[45%] flex-col items-center justify-center p-16 bg-black overflow-hidden text-center">
        <div className="absolute right-0 top-0 bottom-0 w-px bg-primary/60" />
        <div className="absolute inset-0 circuit-grid opacity-30 pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <h1 className="text-6xl font-bold text-primary leading-tight mb-6">
            The Circuit
          </h1>
          <p className="text-white/60 text-sm max-w-xs leading-relaxed">
            Connecting engineering students with experienced MEP professionals
            for guidance and support.
          </p>
        </motion.div>
      </div>

      {/* Right Panel */}
      <div className="flex flex-1 flex-col items-center justify-center px-8 py-16 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="w-full max-w-sm"
        >
          {/* Mobile logo */}
          <div className="lg:hidden mb-8 text-center">
            <h2 className="text-3xl font-bold text-primary">The Circuit</h2>
          </div>

          {/* Card */}
          <div className="rounded-2xl border border-primary/40 bg-black/30 backdrop-blur-sm p-8">
            <h2 className="text-xl font-bold text-primary text-center mb-8">
              Verify Your Email Address
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* OTP Inputs */}
              <div className="flex items-center justify-center gap-2">
                {Array.from({ length: CODE_LENGTH }).map((_, i) => (
                  <input
                    key={i}
                    id={`otp-digit-${i}`}
                    ref={(el) => {
                      inputRefs.current[i] = el;
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={code[i]}
                    onChange={(e) => handleChange(i, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(i, e)}
                    onPaste={handlePaste}
                    className="w-10 h-11 rounded-md border border-primary/50 bg-transparent text-center text-sm font-bold text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all caret-primary"
                    aria-label={`Digit ${i + 1}`}
                  />
                ))}
              </div>

              {/* Helper text */}
              <p className="text-white/40 text-xs text-center leading-relaxed">
                Didn&apos;t receive the OTP? Please check your email inbox or{" "}
                <br className="hidden sm:block" />
                spam folder.
              </p>

              {/* Resend */}
              <div className="text-center">
                <button
                  type="button"
                  onClick={handleResend}
                  className="text-primary text-sm font-medium hover:underline"
                >
                  Resend
                </button>
              </div>

              {/* Verify button */}
              <button
                id="verify-code-submit"
                type="submit"
                disabled={code.some((d) => !d)}
                className="w-full h-11 rounded-md bg-primary text-black font-bold text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-100"
              >
                Verify code
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
