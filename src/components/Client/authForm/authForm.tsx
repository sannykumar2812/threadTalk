"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
import { Icons } from "@/components/ui/Icons/Icons";
import { cn } from "@/lib/utils";
import { FC } from "react";
import { signIn } from "next-auth/react";
import { ToastService } from "@/Services/toast.service";
interface IAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}
const AuthForm: FC<IAuthFormProps> = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  // const { toast } = useToast();
  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signIn("google");
    } catch (error) {
      ToastService.showErrorToast({
        title: "Error",
        message: "There was an error logging in with Google",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex justify-center", className)} {...props}>
      <Button
        isLoading={isLoading}
        type="button"
        size="sm"
        className="w-full"
        onClick={loginWithGoogle}
        disabled={isLoading}
      >
        {isLoading ? null : <Icons.google className="h-4 w-4 mr-2" />}
        Google
      </Button>
    </div>
  );
};

export default AuthForm;
