import { useForm } from 'react-hook-form';
import { z as zodValidation } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const validateSchema = zodValidation.object({
  name: zodValidation.string().nonempty('O nome é obrigatório.'),
  email: zodValidation.string().nonempty('O e-mail é obrigatório.').email('Informe um e-mail válido.'),
  password: zodValidation.string().nonempty('A senha é obrigatória.').min(8, 'A senha deve ter pelo menos 8 dígitos.'),
});

type FormData = zodValidation.infer<typeof validateSchema>

export function useRegisterController() {
  const { handleSubmit: hookFormHandleSubmit, register, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(validateSchema)
  });

  const handleSubmit = hookFormHandleSubmit((data) => {
    console.log(data);
  });

  return {
    handleSubmit,
    register,
    errors
  };
}
