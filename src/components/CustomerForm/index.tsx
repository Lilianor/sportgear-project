import { useFormik } from 'formik';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack
} from '@chakra-ui/react';
import styles from './CustomerForm.module.scss';

export default function CustomerForm() {
  const formik = useFormik({
    initialValues: {
      name: '',
      cpf: '',
      rg: '',
      sexo: '',
      datanascimento: '',
      telefone: '',
      telefoneadicional: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  const inputBackground = { background: 'gray.200' };

  return (
    <div>
      <h1 className={styles.h1}>Dados pessoais</h1>

      <Flex className={styles.flexName}>
        <Box className={styles.box}>
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4} align="flex-start">
              <FormControl>
                <FormLabel htmlFor="name">Nome Completo*</FormLabel>
                <Input
                  sx={inputBackground}
                  id="name"
                  name="name"
                  type="name"
                  variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
              </FormControl>
              <Flex className={styles.flex}>
                <FormControl className={styles.formControl}>
                  <FormLabel htmlFor="cpf">Cpf*</FormLabel>
                  <Input
                    sx={inputBackground}
                    id="cpf"
                    name="cpf"
                    type="cpf"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.cpf}
                  />
                </FormControl>
                <FormControl className={styles.formControl}>
                  <FormLabel htmlFor="rg">Rg</FormLabel>
                  <Input
                    sx={inputBackground}
                    id="rg"
                    name="rg"
                    type="rg"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.rg}
                  />
                </FormControl>
              </Flex>
              <Flex className={styles.flex}>
                <FormControl className={styles.formControl}>
                  <FormLabel htmlFor="sexo">Sexo*</FormLabel>
                  <Input
                    sx={inputBackground}
                    id="sexo"
                    name="sexo"
                    type="sexo"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.sexo}
                  />
                </FormControl>
                <FormControl className={styles.formControl}>
                  <FormLabel htmlFor="datanascimento">
                    Data de nascimento
                  </FormLabel>
                  <Input
                    sx={inputBackground}
                    id="datanascimento"
                    name="datanascimento"
                    type="datanascimento"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.datanascimento}
                  />
                </FormControl>
              </Flex>

              <Flex className={styles.flex}>
                <FormControl className={styles.formControl}>
                  <FormLabel htmlFor="telefone">Telefone*</FormLabel>
                  <Input
                    sx={inputBackground}
                    id="telefone"
                    name="telefone"
                    type="telefone"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.telefone}
                  />
                </FormControl>
                <FormControl className={styles.formControl}>
                  <FormLabel htmlFor="telefoneadicional">
                    Telefone Adicional
                  </FormLabel>
                  <Input
                    sx={inputBackground}
                    id="telefoneadicional"
                    name="telefoneadicional"
                    type="telefoneadicional"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.telefoneadicional}
                  />
                </FormControl>
              </Flex>
              <button className={styles.button} type="submit">
                Salvar Alterações
              </button>
            </VStack>
          </form>
        </Box>
      </Flex>
    </div>
  );
}
