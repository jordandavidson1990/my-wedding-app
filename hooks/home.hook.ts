import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export const useHome = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { push } = useRouter();

  const onSubmit = () => {
    push("/main");
  };

  const validateCode = (data: string) => data.toUpperCase() === "JORGINA";

  return {
    handleSubmit,
    errors,
    register,
    validateCode,
    onSubmit,
  };
};
