import "./LoginForm.css";
import { Button } from "../Button/Button";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../modules/user";
import { useForm, Controller } from "react-hook-form";
import messages from "../../modules/errors";

function LoginForm(props) {
  const { handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const navigate = useNavigate()

  const onSubmit = async data => {
    await props.auth(data);
    if (props.isLoggedIn) {
      navigate("/");
    }
  }

  return (
    <Box>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__wrapper">
          <div className="form__header">
            <h2>Войти</h2>
          </div>
          <div className="form__content">
            <div className="error-block">
              {props.userError && <p className="error-message">{props.userError}</p>}
            </div>
            <Controller
              name="email"
              control={control}
              rules={{ 
                required: {value: true, message: messages.required },
                pattern: {
                  value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: messages.wrong
              } }}
              render={({ field }) => <TextField {...field} label="Email" variant="standard" sx={{ width: "100%", mb: "35px"}} />}
            />
              {errors.email && <p className="error-message">{errors.email.message}</p>}

            <Controller
              name="password"
              control={control}
              rules={{ required: {value: true, message: messages.required }, }}
              render={({ field }) => <TextField {...field} label="Пароль" variant="standard" sx={{ width: "100%", mb: "30px"}} type="password" autoComplete="current-password"/>}
            />
              {errors.password && <p className="error-message">{errors.password.message}</p>}

            <div className="forgot">
              <span>Забыли пароль</span>
            </div>
            <Button type="submit" caption="Войти" disabled={props.loading} isLoading={props.loading} />
            <div className="form__footer">
              Новый пользователь?
              <Link to="/register">Регистрация</Link>
            </div>
          </div>
        </div>
      </form>
    </Box>
  )
}

export default connect(
  (state) => ({isLoggedIn: state.user.isLoggedIn, loading: state.user.loading, userError: state.user.error}),
  { auth }
)(LoginForm);