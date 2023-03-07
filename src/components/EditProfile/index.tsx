import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useFormik } from 'formik';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
  FormErrorMessage,
  Select
} from '@chakra-ui/react';
import styles from './EditProfile.module.scss';

export default function CustomerForm() {
  const formik = useFormik({
    initialValues: {
      name: '',
      cpf: '',
      rg: '',
      sexo: '',
      datanascimento: '',
      telefone: '',
      telefoneadicional: '',
      senhaatual: '',
      alterarsenha: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  const inputBackground = { background: 'gray.200' };
  const options = ['Feminino', 'Masculino'];

  return (
    <div>
      <h1 className={styles.h1}>Dados pessoais</h1>

      <Flex className={styles.flexName}>
        <Box className={styles.box}>
          <form onSubmit={formik.handleSubmit}>
            <VStack className={styles.vStack}>
              <FormControl>
                <FormLabel htmlFor="name">Nome Completo</FormLabel>
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
                <FormControl>
                  <FormLabel htmlFor="cpf">Cpf</FormLabel>
                  <Input
                    sx={inputBackground}
                    id="cpf"
                    name="cpf"
                    type="cpf"
                    variant="filled"
                    maxLength={11}
                    onChange={e => {
                      if (e.target.value.length !== 11) {
                        formik.setFieldError(
                          'cpf',
                          'CPF deve ter 11 caracteres'
                        );
                      } else {
                        formik.setFieldError('cpf', undefined);
                      }
                      formik.handleChange(e);
                    }}
                    value={formik.values.cpf}
                    isInvalid={!!(formik.errors.cpf && formik.touched.cpf)}
                    errorBorderColor="red.300"
                  />
                  {formik.errors.cpf && formik.touched.cpf && (
                    <FormErrorMessage>{formik.errors.cpf}</FormErrorMessage>
                  )}
                </FormControl>
                <FormControl>
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
                <FormControl>
                  <FormLabel htmlFor="sexo">Sexo</FormLabel>
                  <Select
                    sx={inputBackground}
                    id="sexo"
                    name="sexo"
                    placeholder="Selecione uma opção"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.sexo}
                  >
                    {options.map(option => (
                      <option key={option} value={option.toLowerCase()}>
                        {option}
                      </option>
                    ))}
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="datanascimento">
                    Data de nascimento
                  </FormLabel>
                  <DatePicker
                    id="datanascimento"
                    name="datanascimento"
                    selected={
                      formik.values.datanascimento
                        ? new Date(formik.values.datanascimento)
                        : null
                    }
                    onChange={(date: Date) =>
                      formik.setFieldValue('datanascimento', date)
                    }
                    dateFormat="dd/MM/yyyy"
                    showYearDropdown
                    yearDropdownItemNumber={100}
                    scrollableYearDropdown
                    showMonthDropdown
                    className={styles.datepicker}
                  />
                </FormControl>
              </Flex>

              <Flex className={styles.flex}>
                <FormControl>
                  <FormLabel htmlFor="telefone">Telefone</FormLabel>
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
                <FormControl>
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
              <Flex className={styles.flex}>
                <FormControl>
                  <FormLabel htmlFor="senhaatual">Senha atual</FormLabel>
                  <Input
                    sx={inputBackground}
                    id="senhaatual"
                    name="senhaatual"
                    type="senhaatual"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.senhaatual}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="alterarsenha">
                    Alterar Senha
                  </FormLabel>
                  <Input
                    sx={inputBackground}
                    id="alterarsenha"
                    name="alterarsenha"
                    type="alterarsenha"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.alterarsenha}
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
