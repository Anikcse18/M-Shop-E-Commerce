import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FormHeader from "./formheader";
import { Input } from "../ui/input";
import FormButton from "../form/formbutton";
import { DialogPortal } from "@radix-ui/react-dialog";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Link from "next/link";

const AuthModal = ({ isOpen, onOpenChange, modaltype }) => {
  const [otpValue, setOtpValue] = useState("");

  //
  return (
    <div>
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogPortal>
          <DialogTitle></DialogTitle>
          <DialogContent className="w-[300px] sm:w-[350px] md:w-[400px] lg:w-[550px] xl:w-[600px] rounded-md">
            <div className=" flex justify-center items-center">
              <div>
                <FormHeader
                  headding="Verify Your Email Address"
                  details="Please enter the one-time password that is sent to your Email."
                />

                <section>
                  <form className="flex flex-col justify-center items-center gap-6 mt-8">
                    <div className="public-sans font-semibold">
                      <InputOTP
                        maxLength={4}
                        pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                        onChange={(value) => {
                          setOtpValue(value); // Update OTP value
                        }}
                      >
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                        </InputOTPGroup>
                      </InputOTP>
                    </div>

                    <div className="text-center text-sm">
                      Did not receive the code?{" "}
                      <Link href={"/"}>
                        <h1 className="text-button-active font-semibold">
                          Re-Send
                        </h1>
                      </Link>
                    </div>
                    <FormButton
                      btnName="Verify Me"
                      disabled={otpValue === "" && true}
                    />
                  </form>
                </section>
              </div>
            </div>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </div>
  );
};

export default AuthModal;
