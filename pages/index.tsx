import { useHome } from "../hooks";
import { Home } from "../templates/components/home";

export default function Index() {
  const { handleSubmit, errors, register, validateCode, onSubmit } = useHome();

  return (
    <Home
      handleSubmit={handleSubmit}
      errors={errors}
      register={register}
      validateCode={validateCode}
      onSubmit={onSubmit}
    />
  );
}
