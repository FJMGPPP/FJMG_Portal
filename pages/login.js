import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
} from '@mantine/core';

 export default function Login() {
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Email Invalido'),
      password: (val) => (val.length <= 6 ? 'La password no es valida' : null),
    },
  });

  return (
    <Paper radius="md" p="xl" withBorder>
      <Text size="lg" weight={500}>
        Bienvenido al portal web de Francisco developer
      </Text>

      <Group grow mb="md" mt="md">
        <Button radius="xl">Google</Button>
        <Button radius="xl">Twitter</Button>
      </Group>

      <Divider label="o continua con email" labelPosition="center" my="lg" />

      <form onSubmit={form.onSubmit(() => {})}>
            
          

          <TextInput
            required
            type="email"
            label="Email"
            placeholder="fjmg@developer.dev"
            value={form.values.email}
            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
            error={form.errors.email && 'email invalido'}
          />

          <PasswordInput
            required
            type="password"
            label="Contraseña"
            placeholder="Tu contraseña"
            value={form.values.password}
            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
            error={form.errors.password && 'La Contraseña debe contener al menos 6 letras'}
          />



        <Group position="apart" mt="xl">
          <Anchor
            component="button"
            type="button"
            color="dimmed"
            onClick={() => toggle()}
            size="xs"
          >
            No tienes una cuenta, Registrate!
          </Anchor>
          <Button type="submit">{'Enviar'}</Button>
        </Group>
      </form>
    </Paper>
  );
}