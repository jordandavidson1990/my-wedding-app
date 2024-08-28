import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const useHome = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const {
    register,
    formState: { errors },
  } = useForm();

  const handleSubmit = () => {
    if (!code) setError("Please enter a code");
    console.log({ code });
  };

  const validateCode = (data) => {
    console.log(data);
    return true;
  };

  return { code, setCode, handleSubmit, errors, register, validateCode };
};
