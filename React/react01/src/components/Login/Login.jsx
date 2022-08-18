import { useForm } from "react-hook-form";
import log from './Login.module.css';
import { connect } from 'react-redux';
import { login } from './../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';

const Login = (props) => {
    if (props.isAuth) {
        return <Navigate to="/profile" />
    }

    return (
        <div className={log.container}>
            <h1>login</h1>
            <LoginForm login={props.login} logout={props.logout} />
        </div>
    )
}

const LoginForm = (props) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        props.login(data.login, data.password, data.rememberMe);
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
                <input {...register('rememberMe')}
                    type="checkbox"
                     /> <span>Remember me</span>
            </div>
            <div className={log.submit}>
                <button>Login</button>
            </div>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

export default connect(mapStateToProps, { login })(Login);