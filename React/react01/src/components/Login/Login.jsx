import { useForm } from "react-hook-form";
import log from './Login.module.css';

const Login = () => {
    return (
        <div className={log.container}>
            <h1>login</h1>
            <LoginForm />
        </div>
    )
}

const LoginForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input {...register('login',
                    {
                        required: true
                    })}
                    type="text"
                    placeholder="login"
                    className={log.login + ' ' + (errors.login ? log.error : '')} />
                {errors.login && <div className={log.erMes}>This field is required</div>}
            </div>
            <div>
                <input {...register('password',
                    {
                        required: true
                    })}
                    type="text"
                    placeholder="password"
                    className={log.pass + ' ' + (errors.password ? log.error : '')} />
                {errors.password && <div className={log.erMes}>This field is required</div>}
            </div>
            <div className={log.remember}>
                <input {...register('remember me')}
                    type="checkbox"
                     /> <span>Remember me</span>
            </div>
            <div className={log.submit}>
                <button>Login</button>
            </div>
        </form>
    )
}

export default Login;