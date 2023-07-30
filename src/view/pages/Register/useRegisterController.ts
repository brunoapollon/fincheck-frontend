import { useForm } from 'react-hook-form';
import { z as zodValidation } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { authService } from '../../../app/services/authService';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useAuth } from '../../../app/hooks/useAuth';

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

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: authService.signup,

  });

  const { signin } = useAuth();

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);
      signin(accessToken);
    } catch {
      toast.error('Ocorreu um erro ao criar a sua conta!');
    }

  });

  return {
    handleSubmit,
    register,
    errors,
    isLoading
  };
}
