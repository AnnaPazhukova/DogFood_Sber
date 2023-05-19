import { useForm } from 'react-hook-form';
import FormInput from '../form-input';
import Form from '../form';
import FormButton from '../form-button';

function Register({onSubmit, onNavigateLogin}) {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onBlur" })

    const emailRegister = register('email', {
        required: {
            value: true,
            message: 'Обязательное поле'
        },
        pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Email не соотвествует формату электронной почты"
        }
    })

    const passwordRegister = register('password', {
        required: {
            value: true,
            message: 'Обязательное поле'
        },
        pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            message: "Пароль должен содержать минимум восемь символов, одну букву латинского алфавита и одну цифру"
        }
    })

    return (
        <>
            <Form title='Регистрация' handleFormSubmit={handleSubmit(onSubmit)}>
                <FormInput
                    {...emailRegister} 
                    id='email'
                    type='text'
                    placeholder='Email'
                />
                {errors?.email && <p className='errorMessage'>{errors?.password?.message}</p>}
                <FormInput
                    {...passwordRegister} 
                    id='password'
                    type='password'
                    placeholder='Пароль'
                />
                {errors?.password && <p className='errorMessage'>{errors?.password?.message}</p>}
                <p className="infoText">регистрируясь на сайте вы ....</p>
                <FormButton  type='submit' color='primary'>Зарегистрироваться</FormButton>
                <FormButton  type='button' color='secondary' onClick={onNavigateLogin}>Войти</FormButton>
            </Form>
        </>    
    );
}

export default Register;