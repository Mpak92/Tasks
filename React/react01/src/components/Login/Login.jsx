import { useForm } from "react-hook-form";

const Login = () => {
    return (
        <div>
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
                    placeholder="login" />
                    {errors.login && <span>This field is required</span>}
            </div>
            <div>
                <input {...register('password')} type="text" placeholder="password" />
            </div>
            <div>
                <input {...register('remember me')} type="checkbox" /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export default Login;