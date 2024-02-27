import { createStandaloneToast } from "@chakra-ui/react";

const toast = createStandaloneToast();

interface IToastProps {
  title: string;
  message?: string;
}

export const ToastService = {
  showSuccessTaost: ({ title, message }: IToastProps) => {
    toast.toast({
      title: title,
      description: message,
      variant: "solid",
      duration: 3000,
      position: "top-right",
      isClosable: true,
      status: "success",
    });
  },
  showErrorToast: ({ title, message }: IToastProps) => {
    toast.toast({
      title: title,
      description: message,
      variant: "solid",
      duration: 3000,
      position: "top-right",
      status: "error",
      isClosable: true,
    });
  },
  showLoadingToast: ({ title, message }: IToastProps) => {
    toast.toast({
      title: title,
      description: message,
      duration: 3000,
      position: "top-right",
      variant: "solid",
      status: "loading",
    });
  },
  closeAllToast: () => {
    toast.toast.closeAll();
  },
  showInfoToast: ({ title, message }: IToastProps) => {
    toast.toast({
      title: title,
      description: message,
      duration: 3000,
      position: "top-right",
      variant: "subtle",
      status: "info",
    });
  },
};
